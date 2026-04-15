#!/usr/bin/env python3
"""Generate per-page Open Graph images for all docs.

Walks docs/**/*.md, parses the frontmatter title, and renders a 1200x630 PNG
to static/img/og/ following the URL slug structure. Writes a manifest file
at src/data/ogManifest.json mapping doc URL paths to image paths.
"""
import json
import os
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
OG_DIR = ROOT / "static" / "img" / "og"
MANIFEST = ROOT / "src" / "data" / "ogManifest.json"
LOGO_SVG = ROOT / "static" / "img" / "logo.svg"

WIDTH, HEIGHT = 1200, 630
BG = (10, 10, 10)
ACCENT = (245, 158, 11)  # amber-500 #f59e0b
ACCENT_DIM = (252, 211, 77)  # amber-300
TEXT = (255, 255, 255)
MUTED = (160, 160, 170)

FONT_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
TITLE_RE = re.compile(r'^title:\s*"?(.*?)"?\s*$', re.MULTILINE)
SLUG_RE = re.compile(r'^slug:\s*"?(.*?)"?\s*$', re.MULTILINE)


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
    """Convert /docs/learn/keys/seed/ → learn-keys-seed.png (and /docs/ → docs-index.png)."""
    s = url.strip("/").removeprefix("docs").strip("/")
    if not s:
        return "docs-index.png"
    return s.replace("/", "-") + ".png"


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    cur = []
    for w in words:
        trial = " ".join(cur + [w])
        bbox = draw.textbbox((0, 0), trial, font=font)
        if bbox[2] - bbox[0] <= max_width or not cur:
            cur.append(w)
        else:
            lines.append(" ".join(cur))
            cur = [w]
    if cur:
        lines.append(" ".join(cur))
    return lines


def fit_title(draw, title, max_width, max_lines=4):
    """Find the largest font size where title fits in max_lines."""
    for size in (76, 70, 64, 58, 52, 48, 44, 40):
        font = ImageFont.truetype(FONT_BOLD, size)
        lines = wrap_text(draw, title, font, max_width)
        if len(lines) <= max_lines:
            return font, lines
    font = ImageFont.truetype(FONT_BOLD, 40)
    return font, wrap_text(draw, title, font, max_width)


def render_card(title: str, out_path: Path):
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Top accent bar (amber gradient feel via two stripes)
    draw.rectangle([(0, 0), (WIDTH, 6)], fill=ACCENT)
    draw.rectangle([(0, 6), (WIDTH, 9)], fill=ACCENT_DIM)

    # Inner border for the card
    pad = 60
    draw.rectangle(
        [(pad - 20, pad - 20), (WIDTH - pad + 20, HEIGHT - pad + 20)],
        outline=(40, 40, 40),
        width=2,
    )

    # Brand row: small amber square + brand name
    brand_font = ImageFont.truetype(FONT_BOLD, 26)
    draw.rectangle([(pad, pad), (pad + 18, pad + 18)], fill=ACCENT)
    draw.text((pad + 30, pad - 4), "SELF CUSTODY LABS", font=brand_font, fill=TEXT)

    # Title (centered vertically in the body area)
    body_top = pad + 80
    body_bottom = HEIGHT - pad - 80
    max_text_width = WIDTH - (pad * 2)
    title_font, lines = fit_title(draw, title, max_text_width, max_lines=4)
    line_height = title_font.size + 12
    block_height = line_height * len(lines)
    start_y = body_top + ((body_bottom - body_top) - block_height) // 2
    for i, line in enumerate(lines):
        draw.text((pad, start_y + i * line_height), line, font=title_font, fill=TEXT)

    # Footer row
    foot_font = ImageFont.truetype(FONT_REG, 24)
    draw.text((pad, HEIGHT - pad - 28), "selfcustodylabs.com", font=foot_font, fill=ACCENT)
    tag = "Bitcoin self-custody guides"
    bbox = draw.textbbox((0, 0), tag, font=foot_font)
    draw.text(
        (WIDTH - pad - (bbox[2] - bbox[0]), HEIGHT - pad - 28),
        tag,
        font=foot_font,
        fill=MUTED,
    )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)


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
        out = OG_DIR / image_name
        render_card(title, out)
        manifest[url] = f"/img/og/{image_name}"
        count += 1
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"Generated {count} OG images, manifest at {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
