#!/usr/bin/env python3
"""Generate per-page Open Graph images for all docs.

Walks docs/**/*.md, parses the frontmatter title, and renders a 1200x630 PNG
to static/img/og/ following the URL slug structure. Writes a manifest file
at src/data/ogManifest.json mapping doc URL paths to image paths.

Design system
-------------
Left column carries the words: brand rule, section breadcrumb, title.
Right band carries the evidence: either a section photograph, or a field of
dice whose faces are derived from SHA-256 of the page URL. The roll is
deterministic, so regenerating produces byte-identical output and git stays
quiet. The first three hash bytes are printed as a plate mark.

Fonts: Inter Display for titles, JetBrains Mono for every utility string.
Falls back to Noto Sans / Noto Mono when those are not installed.
"""
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageStat

sys.path.insert(0, str(Path(__file__).resolve().parent))
from og_theme import (  # noqa: E402
    AMBER, BAND_BG, BAND_X, BAND_W, BG, DISPLAY_BOLD, HAIRLINE, HEIGHT, MONO_BOLD,
    MONO_MED, MUTED, MUTED_BRIGHT, MOTIF_BY_URL, PAD, PHOTO_TARGET_LUMA, SCALE,
    TEXT_MAX_W, WHITE, WIDTH, dice_field, draw_motif, entropy_bytes, font, Pen,
)

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
IMG_DIR = ROOT / "static" / "img"
OG_DIR = IMG_DIR / "og"
MANIFEST = ROOT / "src" / "data" / "ogManifest.json"
BRAND_CARD = IMG_DIR / "social-card.png"

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
TITLE_RE = re.compile(r'^title:\s*"?(.*?)"?\s*$', re.MULTILINE)
SLUG_RE = re.compile(r'^slug:\s*"?(.*?)"?\s*$', re.MULTILINE)

# Section label shown in the breadcrumb eyebrow, keyed by top-level docs dir.
SECTION_LABELS = {
    "advanced": "Advanced",
    "bitcoin-node": "Bitcoin Node",
    "coreboot": "Coreboot",
    "learn": "Learn",
    "libreboot": "Libreboot",
    "nostr-signing-device": "Nostr Signing Device",
    "reference": "Reference",
    "security": "Security",
    "seedsigner": "SeedSigner",
    "wallet-setup": "Wallet Setup",
}

# Photographs used in the right band. Exact URL matches win over prefixes.
# Only real photographs qualify: UI screenshots and printed diagrams turn to
# unreadable mush once cropped to the band. Dice covers every page about rolling
# your own entropy, which is what the seed-generation and passphrase guides are.
PHOTO_EXACT = {
    "/docs/learn/keys/": "seed/dice.webp",
    "/docs/learn/keys/seed/": "seed/dice.webp",
    "/docs/learn/keys/random/": "seed/dice.webp",
    "/docs/learn/keys/passphrase/": "seed/dice.webp",
    "/docs/security/": "seed/dice.webp",
    "/docs/wallet-setup/backup-verification/": "seed/metalseed.webp",
    "/docs/reference/faq/lost-seed/": "seed/metalseed.webp",
    "/docs/advanced/bitcoin-computer/": "libreboot/plug.webp",
    "/docs/advanced/bitcoin-computer/choice/": "coreboot/t430s.webp",
    "/docs/advanced/bitcoin-computer/setup/": "libreboot/floating-setup.webp",
    "/docs/libreboot/build/": "libreboot/floating-setup.webp",
    "/docs/libreboot/build-flashprog/": "libreboot/plug.webp",
    "/docs/libreboot/flashing-bios/": "libreboot/soic8.webp",
    "/docs/libreboot/requirements/": "libreboot/dual-chip.webp",
    "/docs/libreboot/update-bios/": "libreboot/floating-clip.webp",
    "/docs/libreboot/raspberry-pico/": "libreboot/pico.webp",
    "/docs/libreboot/raspberry-pico/build-serprog/": "libreboot/connection.webp",
    "/docs/coreboot/build/": "coreboot/connection.webp",
    "/docs/coreboot/internal/flashing-bios/": "coreboot/connection.webp",
}

PHOTO_PREFIX = {
    "/docs/libreboot/": "libreboot/t480s.webp",
    "/docs/coreboot/": "coreboot/t430s.webp",
    "/docs/nostr-signing-device/": "nsd/nsd.webp",
    "/docs/seedsigner/": "seed/rpizero.webp",
}


def parse_frontmatter(text):
    m = FRONTMATTER_RE.match(text)
    if not m:
        return None, None
    fm = m.group(1)
    title = TITLE_RE.search(fm)
    slug = SLUG_RE.search(fm)
    return (title.group(1).strip() if title else None,
            slug.group(1).strip() if slug else None)


def doc_path_to_url(md_path: Path):
    """Compute the public URL slug for a doc file (e.g. /docs/learn/keys/seed/).

    README.md and index.md collapse to the parent directory URL.
    Frontmatter slug fields are ignored: file path always matches the canonical URL.
    """
    rel = md_path.relative_to(DOCS).with_suffix("")
    parts = list(rel.parts)
    if parts and parts[-1].lower() in ("index", "readme"):
        parts.pop()
    return "/docs/" + "/".join(parts) + ("/" if parts else "")


def url_to_image_name(url: str) -> str:
    """Convert /docs/learn/keys/seed/ -> learn-keys-seed.png (and /docs/ -> docs-index.png)."""
    s = url.strip("/").removeprefix("docs").strip("/")
    if not s:
        return "docs-index.png"
    return s.replace("/", "-") + ".png"


def breadcrumb(url: str) -> str:
    """Section trail for the eyebrow: /docs/learn/keys/seed/ -> LEARN / KEYS."""
    parts = [p for p in url.strip("/").split("/") if p][1:]
    if not parts:
        return "GUIDES"
    trail = [SECTION_LABELS.get(parts[0], parts[0].replace("-", " "))]
    if len(parts) > 2:
        trail.append(parts[1].replace("-", " "))
    return " / ".join(t.upper() for t in trail)


def motif_for(url: str) -> str:
    """Motif for a page with no photograph. Missing entries are a hard error so a
    new doc can never silently fall back to unrelated artwork."""
    try:
        return MOTIF_BY_URL[url]
    except KeyError:
        raise SystemExit(
            f"no motif mapped for {url}; add it to MOTIF_BY_URL in scripts/og_theme.py"
        )


def photo_for(url: str):
    rel = PHOTO_EXACT.get(url)
    if rel is None:
        for prefix, candidate in PHOTO_PREFIX.items():
            if url.startswith(prefix):
                rel = candidate
                break
    if rel is None:
        return None
    p = IMG_DIR / rel
    return p if p.exists() else None


def _unused_entropy(url: str, n: int) -> bytes:
    """Deterministic byte stream keyed on the page URL."""
    out = b""
    block = url.encode()
    while len(out) < n:
        block = hashlib.sha256(block).digest()
        out += block
    return out[:n]


def tracked_text(draw, xy, text, fnt, fill, tracking=0.0):
    """Draw text with letter-spacing; Pillow has no native tracking."""
    x, y = xy
    step = tracking * SCALE
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + step
    return x - step - xy[0]


def tracked_width(draw, text, fnt, tracking=0.0):
    if not text:
        return 0
    step = tracking * SCALE
    return sum(draw.textlength(c, font=fnt) for c in text) + step * (len(text) - 1)


def wrap_text(draw, text, fnt, max_width):
    words = text.split()
    lines, cur = [], []
    for w in words:
        trial = " ".join(cur + [w])
        if draw.textlength(trial, font=fnt) <= max_width or not cur:
            cur.append(w)
        else:
            lines.append(" ".join(cur))
            cur = [w]
    if cur:
        lines.append(" ".join(cur))
    return lines


def fit_title(draw, title, max_width, max_height, max_lines=4):
    """Largest display size where the title fits both the line count and the body height."""
    for size in (64, 59, 54, 50, 46, 42, 38):
        fnt = font(DISPLAY_BOLD, size)
        lines = wrap_text(draw, title, fnt, max_width)
        if len(lines) <= max_lines and len(lines) * int(size * 1.09) * SCALE <= max_height:
            return fnt, lines, size
    fnt = font(DISPLAY_BOLD, 38)
    return fnt, wrap_text(draw, title, fnt, max_width)[:max_lines], 38


def draw_photo_band(img, photo_path, url):
    """Cover-crop the photo into the band, cooled and darkened, fading in at the left.

    The crop window is offset deterministically by URL, so the handful of pages
    that share a photograph (the dice, the ThinkPads, the NSD board) are framed
    differently instead of rendering as duplicates."""
    band_w, band_h = BAND_W * SCALE, HEIGHT * SCALE
    src = Image.open(photo_path).convert("RGB")
    ratio = max(band_w / src.width, band_h / src.height)
    src = src.resize(
        (max(band_w, int(src.width * ratio)), max(band_h, int(src.height * ratio))),
        Image.LANCZOS,
    )
    slack_x, slack_y = src.width - band_w, src.height - band_h
    shift = entropy_bytes(url + "#crop", 2)
    left = int(slack_x * (0.18 + 0.64 * shift[0] / 255))
    top = int(slack_y * (0.18 + 0.64 * shift[1] / 255))
    crop = src.crop((left, top, left + band_w, top + band_h))

    # Normalise exposure first. The source photos range from a white-background
    # product shot to a near-black laptop screen; without this the dark ones
    # disappear into the band once the scrim goes on.
    mean = ImageStat.Stat(crop.convert("L")).mean[0]
    gain = min(2.8, max(0.70, PHOTO_TARGET_LUMA / max(mean, 1.0)))
    if abs(gain - 1.0) > 0.02:
        crop = crop.point(lambda v: min(255, int(v * gain)))

    # Pull most of the colour out, then push the remaining light amber so the
    # photo sits in the same temperature as the rest of the set.
    grey = crop.convert("L")
    tinted = Image.merge(
        "RGB",
        [
            grey.point(lambda p: min(255, int(p * 1.02 + 6))),
            grey.point(lambda p: int(p * 0.86)),
            grey.point(lambda p: int(p * 0.62)),
        ],
    )
    crop = Image.blend(crop, tinted, 0.88)
    crop = Image.blend(Image.new("RGB", crop.size, BG), crop, 0.62)

    # Vertical scrim: sink the top and bottom edges so the band has no hard seam
    # against the card and the photo reads as lit from the middle.
    scrim = Image.new("L", (band_w, band_h), 255)
    sdraw = ImageDraw.Draw(scrim)
    top_fade, bot_fade = int(band_h * 0.34), int(band_h * 0.40)
    for i in range(top_fade):
        sdraw.line([(0, i), (band_w, i)], fill=int(255 * (i / top_fade) ** 0.85))
    for i in range(bot_fade):
        y = band_h - 1 - i
        sdraw.line([(0, y), (band_w, y)], fill=int(255 * (i / bot_fade) ** 0.85))
    crop = Image.composite(crop, Image.new("RGB", crop.size, BG), scrim)

    # Horizontal fade so the band dissolves into the page instead of butting against it.
    fade = 190 * SCALE
    mask = Image.new("L", (band_w, band_h), 255)
    mdraw = ImageDraw.Draw(mask)
    for i in range(fade):
        mdraw.line([(i, 0), (i, band_h)], fill=int(255 * (i / fade) ** 1.7))
    img.paste(crop, (BAND_X * SCALE, 0), mask)


def render_card(title, url, out_path):
    img = Image.new("RGB", (WIDTH * SCALE, HEIGHT * SCALE), BG)
    draw = ImageDraw.Draw(img)

    # Right band
    draw.rectangle([(BAND_X * SCALE, 0), (WIDTH * SCALE, HEIGHT * SCALE)], fill=BAND_BG)
    photo = photo_for(url)
    if photo:
        draw_photo_band(img, photo, url)
    else:
        draw_motif(img, url, motif_for(url))
    draw.line(
        [(BAND_X * SCALE, 0), (BAND_X * SCALE, HEIGHT * SCALE)], fill=HAIRLINE, width=SCALE
    )

    # Brand row: amber tally bar + wordmark
    brand_f = font(MONO_BOLD, 20)
    by = PAD * SCALE
    draw.rectangle(
        [(PAD * SCALE, by), (PAD * SCALE + 4 * SCALE, by + 24 * SCALE)], fill=AMBER
    )
    tracked_text(
        draw, (PAD * SCALE + 18 * SCALE, by + 1 * SCALE),
        "SELF CUSTODY LABS", brand_f, WHITE, tracking=2.6,
    )

    # Body: eyebrow and title travel together, optically centred between the
    # brand row and the footer, so short and four-line titles both sit right.
    body_top, body_bottom = 154 * SCALE, (HEIGHT - PAD - 88) * SCALE
    eyebrow_f = font(MONO_BOLD, 18)
    eyebrow_block = 46 * SCALE
    title_f, lines, size = fit_title(
        draw, title, TEXT_MAX_W * SCALE, body_bottom - body_top - eyebrow_block
    )
    line_h = int(size * 1.09) * SCALE
    block_h = eyebrow_block + len(lines) * line_h
    gy = body_top + (body_bottom - body_top - block_h) // 2

    tracked_text(draw, (PAD * SCALE, gy), breadcrumb(url), eyebrow_f, AMBER, tracking=3.4)
    ty = gy + eyebrow_block
    for i, line in enumerate(lines):
        draw.text((PAD * SCALE, ty + i * line_h), line, font=title_f, fill=WHITE)

    # Footer: hairline, domain, and the plate mark for this page's roll. The
    # plate stays in the left column so a photo band never swallows it.
    fy = (HEIGHT - PAD - 26) * SCALE
    draw.line(
        [(PAD * SCALE, fy - 26 * SCALE), (PAD * SCALE + 56 * SCALE, fy - 26 * SCALE)],
        fill=AMBER, width=2 * SCALE,
    )
    foot_f = font(MONO_MED, 19)
    tracked_text(draw, (PAD * SCALE, fy), "selfcustodylabs.com", foot_f, MUTED_BRIGHT, tracking=0.8)

    plate_f = font(MONO_MED, 16)
    plate = entropy_bytes(url, 3).hex()
    pw = tracked_width(draw, plate, plate_f, tracking=2.2)
    tracked_text(
        draw, ((BAND_X - 56) * SCALE - pw, (HEIGHT - PAD - 22) * SCALE),
        plate, plate_f, MUTED, tracking=2.2,
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.resize((WIDTH, HEIGHT), Image.LANCZOS).save(out_path, "PNG", optimize=True)


def render_brand_card(out_path):
    """The site-wide fallback card used for non-doc routes."""
    img = Image.new("RGB", (WIDTH * SCALE, HEIGHT * SCALE), BG)
    draw = ImageDraw.Draw(img)
    draw.rectangle([(BAND_X * SCALE, 0), (WIDTH * SCALE, HEIGHT * SCALE)], fill=BAND_BG)
    dice_field(Pen(draw), "https://selfcustodylabs.com/")
    draw.line(
        [(BAND_X * SCALE, 0), (BAND_X * SCALE, HEIGHT * SCALE)], fill=HAIRLINE, width=SCALE
    )

    brand_f = font(MONO_BOLD, 20)
    by = PAD * SCALE
    draw.rectangle(
        [(PAD * SCALE, by), (PAD * SCALE + 4 * SCALE, by + 24 * SCALE)], fill=AMBER
    )
    tracked_text(
        draw, (PAD * SCALE + 18 * SCALE, by + 1 * SCALE),
        "SELF CUSTODY LABS", brand_f, WHITE, tracking=2.6,
    )

    title_f = font(DISPLAY_BOLD, 68)
    for i, line in enumerate(["Hold your own", "Bitcoin keys."]):
        draw.text((PAD * SCALE, (244 + i * 74) * SCALE), line, font=title_f, fill=WHITE)

    sub_f = font(MONO_MED, 19)
    tracked_text(
        draw, (PAD * SCALE, 434 * SCALE),
        "Self-custody guides, start to signed.", sub_f, MUTED_BRIGHT, tracking=0.8,
    )

    fy = (HEIGHT - PAD - 26) * SCALE
    draw.line(
        [(PAD * SCALE, fy - 26 * SCALE), (PAD * SCALE + 56 * SCALE, fy - 26 * SCALE)],
        fill=AMBER, width=2 * SCALE,
    )
    foot_f = font(MONO_MED, 19)
    tracked_text(draw, (PAD * SCALE, fy), "selfcustodylabs.com", foot_f, MUTED_BRIGHT, tracking=0.8)

    img.resize((WIDTH, HEIGHT), Image.LANCZOS).save(out_path, "PNG", optimize=True)


def main():
    OG_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {}
    count = 0
    for md in sorted(DOCS.rglob("*.md")):
        text = md.read_text(encoding="utf-8")
        title, _slug = parse_frontmatter(text)
        if not title:
            continue
        url = doc_path_to_url(md)
        image_name = url_to_image_name(url)
        render_card(title, url, OG_DIR / image_name)
        manifest[url] = f"/img/og/{image_name}"
        count += 1
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    render_brand_card(BRAND_CARD)
    print(f"Generated {count} OG images + social-card.png, manifest at {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
