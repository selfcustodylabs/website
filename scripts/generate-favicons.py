#!/usr/bin/env python3
"""Generate the site favicon set from the committed logo mark.

Writes every icon to static/ so the build serves them from the domain root,
which is the location Google treats as stable and the one browsers probe by
default:

    static/favicon.ico            16, 32, 48, 64, 128, 256
    static/favicon-96x96.png
    static/favicon-192x192.png
    static/apple-touch-icon.png   180x180, opaque

Why root and why the extra sizes
--------------------------------
Google's favicon guidance has two rules this set exists to satisfy: the URL
must be stable, and the icon should be "larger than 48x48px so that it looks
good on various surfaces". The old icon was declared as
img/favicon.ico?v=2 and topped out at exactly 48px, so it sat on the floor of
the second rule while the ?v= cache-buster invited breaking the first one
every time the logo changed. Root paths never need a cache-buster: regenerate
in place and the URL stays put.

static/img/favicon.ico is deliberately left alone so the previously declared
URL keeps returning 200 rather than becoming a dead link.

Source is scripts/assets/logo-mark.png, the same committed 618px trim of
static/img/logo.svg that the OG card generator uses. See CLAUDE.md for how to
re-render it if the logo ever changes.
"""
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LOGO_MARK = Path(__file__).resolve().parent / "assets" / "logo-mark.png"
STATIC = ROOT / "static"

# Brand base background, matching --ifm-background-color in src/css/base.css.
# Only used for apple-touch-icon, which must be opaque: iOS composites the
# icon onto its own surface and applies the rounded corners itself, so a
# transparent PNG picks up whatever is behind it.
BG = (11, 11, 12, 255)

ICO_SIZES = [16, 32, 48, 64, 128, 256]
PNG_SIZES = [96, 192]
APPLE_SIZE = 180
APPLE_INSET = 0.92  # mark occupies 92% of the square, leaving a little air


def load_mark():
    """Return the logo mark as a square RGBA image, trimmed to its alpha bbox."""
    im = Image.open(LOGO_MARK).convert("RGBA")
    bbox = im.getchannel("A").getbbox()
    if bbox:
        im = im.crop(bbox)
    if im.width != im.height:
        side = max(im.width, im.height)
        square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        square.paste(im, ((side - im.width) // 2, (side - im.height) // 2), im)
        im = square
    return im


def main():
    if not LOGO_MARK.exists():
        sys.exit(f"missing source mark: {LOGO_MARK}")

    mark = load_mark()
    print(f"source {LOGO_MARK.relative_to(ROOT)} {mark.width}x{mark.height}")

    # Multi-size ICO. Pillow stores each size as its own entry, so browsers and
    # crawlers pick whichever resolution they need from the one URL.
    ico = STATIC / "favicon.ico"
    mark.save(ico, format="ICO", sizes=[(s, s) for s in ICO_SIZES])
    print(f"  {ico.relative_to(ROOT)}  {ICO_SIZES}  {ico.stat().st_size:,} bytes")

    for size in PNG_SIZES:
        out = STATIC / f"favicon-{size}x{size}.png"
        mark.resize((size, size), Image.LANCZOS).save(out, format="PNG", optimize=True)
        print(f"  {out.relative_to(ROOT)}  {out.stat().st_size:,} bytes")

    # Apple touch icon: opaque square, mark inset and centred.
    inner = int(APPLE_SIZE * APPLE_INSET)
    canvas = Image.new("RGBA", (APPLE_SIZE, APPLE_SIZE), BG)
    scaled = mark.resize((inner, inner), Image.LANCZOS)
    offset = (APPLE_SIZE - inner) // 2
    canvas.paste(scaled, (offset, offset), scaled)
    apple = STATIC / "apple-touch-icon.png"
    canvas.convert("RGB").save(apple, format="PNG", optimize=True)
    print(f"  {apple.relative_to(ROOT)}  {APPLE_SIZE}x{APPLE_SIZE} opaque  "
          f"{apple.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
