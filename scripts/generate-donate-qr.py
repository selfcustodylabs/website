#!/usr/bin/env python3
"""Render the /donate/ QR code from src/data/donation.json.

Writes static/img/donate-qr.svg: black modules on white with a four-module
quiet zone, so it scans the same on screen and on paper. The payload is a
BIP21 URI and is recorded in a comment at the top of the file, which
scripts/check-content.mjs compares against the address in donation.json.

The output is committed, like the OG cards: the build never generates the
code that tells a reader where to send money. Scan it with a wallet before
committing a new one.

Usage: npm run donate-qr   (needs python3-qrcode)
"""

import json
from pathlib import Path

import qrcode

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "donation.json"
OUT = ROOT / "static" / "img" / "donate-qr.svg"
BORDER = 4


def main():
    address = json.loads(DATA.read_text())["address"]
    payload = f"bitcoin:{address}"

    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0)
    qr.add_data(payload)
    qr.make(fit=True)
    matrix = qr.get_matrix()
    size = len(matrix) + 2 * BORDER

    # One path, one horizontal run of dark modules per segment.
    runs = []
    for y, row in enumerate(matrix):
        x = 0
        while x < len(row):
            if row[x]:
                start = x
                while x < len(row) and row[x]:
                    x += 1
                n = x - start
                runs.append(f"M{start + BORDER} {y + BORDER}h{n}v1h-{n}z")
            else:
                x += 1

    svg = (
        f"<!-- payload: {payload} -->\n"
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
        f'width="{size * 6}" height="{size * 6}" shape-rendering="crispEdges">\n'
        f'<rect width="{size}" height="{size}" fill="#fff"/>\n'
        f'<path fill="#000" d="{"".join(runs)}"/>\n'
        "</svg>\n"
    )
    OUT.write_text(svg)
    print(f"{OUT.relative_to(ROOT)}: {payload}, version {qr.version}, {size}x{size} modules")


if __name__ == "__main__":
    main()
