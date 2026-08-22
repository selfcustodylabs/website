#!/usr/bin/env python3
"""Design tokens and band artwork for the Open Graph cards.

The right-hand band of every card carries "evidence" for the page. Pages with a
real photograph in static/img use it (see PHOTO_* in generate-og-images.py);
everything else gets a motif from this module.

A motif is a small diagram of the mechanism the page explains: a fee histogram
for the fees page, a 2-of-3 quorum for multisig, an HD tree for xpub. It is not
generic ornament, and dice appear only where the subject really is entropy.

Every motif is driven by Rnd, a deterministic byte stream keyed on the page URL,
so sibling pages using the same motif differ from each other while any single
card renders byte-identically on every run.
"""
import hashlib
import math
from functools import lru_cache

from PIL import Image, ImageDraw, ImageFont

# Render at 2x and downsample for clean curves and rounded corners.
SCALE = 2
WIDTH, HEIGHT = 1200, 630

# Palette. Dark-mode only, matching the site's amber brand tokens.
BG = (8, 9, 11)
BAND_BG = (12, 14, 18)
HAIRLINE = (28, 32, 40)
DIE_EDGE = (19, 22, 28)
DIE_WARM = (74, 56, 24)
AMBER = (245, 158, 11)
AMBER_LIT = (252, 211, 77)
EMBER = (198, 106, 32)
WHITE = (255, 255, 255)
MUTED = (118, 124, 138)
MUTED_BRIGHT = (168, 174, 187)

# Motif strata: quiet structure, mid-tone, then the one lit element.
DIM = (32, 38, 48)
DIM2 = (46, 54, 67)
MID = (96, 76, 42)

FONT_DIRS = [
    "/usr/share/fonts/opentype/inter",
    "/usr/share/fonts/truetype/jetbrains-mono",
    "/usr/share/fonts/truetype/noto",
]

# (preferred, fallback) basenames searched across FONT_DIRS.
DISPLAY_BOLD = ("InterDisplay-Bold.otf", "NotoSans-Bold.ttf")
MONO_BOLD = ("JetBrainsMono-Bold.ttf", "NotoMono-Regular.ttf")
MONO_MED = ("JetBrainsMono-Medium.ttf", "NotoMono-Regular.ttf")

# Card geometry, in 1x logical pixels.
PAD = 68
BAND_W = 452
BAND_X = WIDTH - BAND_W
TEXT_MAX_W = BAND_X - PAD - 56

# Mean luminance every band photo is normalised to before tinting.
PHOTO_TARGET_LUMA = 96.0

# Drawing box inside the band that motifs lay out against.
IX = BAND_X + 62
IW = BAND_W - 124
IY = 104
IH = 422
CX = IX + IW // 2
CY = IY + IH // 2


@lru_cache(maxsize=None)
def find_font(names):
    from pathlib import Path

    for name in names:
        for d in FONT_DIRS:
            p = Path(d) / name
            if p.exists():
                return str(p)
    raise SystemExit(f"none of {names} found in {FONT_DIRS}")


@lru_cache(maxsize=None)
def font(names, size):
    return ImageFont.truetype(find_font(names), size * SCALE)


def entropy_bytes(seed: str, n: int) -> bytes:
    """Deterministic byte stream keyed on a string."""
    out = b""
    block = seed.encode()
    while len(out) < n:
        block = hashlib.sha256(block).digest()
        out += block
    return out[:n]


class Rnd:
    """Cursor over a deterministic byte stream."""

    def __init__(self, seed, n=512):
        self.buf = entropy_bytes(seed, n)
        self.i = 0

    def byte(self):
        b = self.buf[self.i % len(self.buf)]
        self.i += 1
        return b

    def rng(self, lo, hi):
        return lo + self.byte() * (hi - lo) // 255

    def pick(self, seq):
        return seq[self.byte() % len(seq)]

    def shuffled(self, seq):
        out = list(seq)
        for i in range(len(out) - 1, 0, -1):
            j = self.byte() % (i + 1)
            out[i], out[j] = out[j], out[i]
        return out


class Pen:
    """Scale-aware drawing primitives, so motifs are written in logical pixels."""

    def __init__(self, draw: ImageDraw.ImageDraw):
        self.d = draw

    def _s(self, pts):
        return [(x * SCALE, y * SCALE) for x, y in pts]

    def line(self, pts, color, w=2):
        self.d.line(self._s(pts), fill=color, width=max(1, int(w * SCALE)), joint="curve")

    def dashed(self, p0, p1, color, w=2, dash=9, gap=7):
        (x0, y0), (x1, y1) = p0, p1
        span = math.hypot(x1 - x0, y1 - y0)
        if span == 0:
            return
        ux, uy = (x1 - x0) / span, (y1 - y0) / span
        t = 0.0
        while t < span:
            e = min(t + dash, span)
            self.line([(x0 + ux * t, y0 + uy * t), (x0 + ux * e, y0 + uy * e)], color, w)
            t = e + gap

    def rrect(self, box, r=8, outline=None, fill=None, w=2):
        (x0, y0, x1, y1) = box
        self.d.rounded_rectangle(
            [(x0 * SCALE, y0 * SCALE), (x1 * SCALE, y1 * SCALE)],
            radius=r * SCALE, outline=outline, fill=fill,
            width=max(1, int(w * SCALE)),
        )

    def circle(self, cx, cy, r, outline=None, fill=None, w=2):
        self.d.ellipse(
            [((cx - r) * SCALE, (cy - r) * SCALE), ((cx + r) * SCALE, (cy + r) * SCALE)],
            outline=outline, fill=fill, width=max(1, int(w * SCALE)),
        )

    def arc(self, cx, cy, r, start, end, color, w=2):
        self.d.arc(
            [((cx - r) * SCALE, (cy - r) * SCALE), ((cx + r) * SCALE, (cy + r) * SCALE)],
            start, end, fill=color, width=max(1, int(w * SCALE)),
        )

    def arrow(self, p0, p1, color, w=2, head=7):
        self.line([p0, p1], color, w)
        ang = math.atan2(p1[1] - p0[1], p1[0] - p0[0])
        for s in (2.6, -2.6):
            self.line(
                [p1, (p1[0] + head * math.cos(ang + s), p1[1] + head * math.sin(ang + s))],
                color, w,
            )

    def text(self, x, y, s, fnt, color, tracking=0.0, anchor="la"):
        if tracking == 0:
            self.d.text((x * SCALE, y * SCALE), s, font=fnt, fill=color, anchor=anchor)
            return
        cx = x * SCALE
        if anchor[0] in "mr":
            total = self.textw(s, fnt, tracking)
            cx -= total * SCALE / (2 if anchor[0] == "m" else 1)
        for ch in s:
            self.d.text((cx, y * SCALE), ch, font=fnt, fill=color, anchor="l" + anchor[1])
            cx += self.d.textlength(ch, font=fnt) + tracking * SCALE

    def textw(self, s, fnt, tracking=0.0):
        if not s:
            return 0.0
        w = sum(self.d.textlength(c, font=fnt) for c in s) + tracking * SCALE * (len(s) - 1)
        return w / SCALE

    def curve(self, p0, p1, color, w=2, steps=30):
        """Horizontal S-curve between two points, eased on x."""
        (x0, y0), (x1, y1) = p0, p1
        pts = []
        for i in range(steps + 1):
            t = i / steps
            e = t * t * (3 - 2 * t)
            pts.append((x0 + (x1 - x0) * t, y0 + (y1 - y0) * e))
        self.line(pts, color, w)


def _tone(lit):
    return (AMBER, 3) if lit else (DIM2, 2)


# ---------------------------------------------------------------------------
# Motifs. Each takes (pen, rnd) and draws inside the IX/IY/IW/IH box.
# ---------------------------------------------------------------------------


def m_chain(pen, rnd):
    """Blocks linked into a chain, each holding a few transactions."""
    n, bh, gap, bw = 4, 78, 34, 196
    lit = rnd.rng(0, 3)
    y = IY + 6
    for i in range(n):
        jitter = rnd.rng(-12, 12)
        x0 = CX - bw // 2 + jitter
        on = i == lit
        pen.rrect((x0, y, x0 + bw, y + bh), r=9,
                  outline=AMBER if on else DIM2, w=3 if on else 2)
        for r in range(3):
            ry = y + 20 + r * 18
            rw = rnd.rng(60, bw - 44)
            pen.line([(x0 + 20, ry), (x0 + 20 + rw, ry)], MID if on else DIM, 3)
        if i < n - 1:
            pen.line([(CX, y + bh), (CX, y + bh + gap)], DIM2, 2)
            pen.rrect((CX - 6, y + bh + gap // 2 - 6, CX + 6, y + bh + gap // 2 + 6),
                      r=2, outline=AMBER if on else DIM2, w=2)
        y += bh + gap


def m_utxo(pen, rnd):
    """Unspent inputs fanning into a smaller set of outputs."""
    ins, outs = 4, 2
    ix, ox = IX + 26, IX + IW - 26
    iys = [IY + 40 + i * (IH - 80) // (ins - 1) for i in range(ins)]
    oys = [IY + 130 + i * (IH - 260) // (outs - 1) for i in range(outs)]
    lit_in = rnd.rng(0, ins - 1)
    lit_out = rnd.rng(0, outs - 1)
    for i, y in enumerate(iys):
        tgt = lit_out if i == lit_in else rnd.rng(0, outs - 1)
        on = i == lit_in
        pen.curve((ix + 30, y), (ox - 34, oys[tgt]), AMBER if on else DIM, 3 if on else 2)
    for i, y in enumerate(iys):
        on = i == lit_in
        c, w = _tone(on)
        pen.rrect((ix - 26, y - 15, ix + 30, y + 15), r=6, outline=c, w=w)
        pen.circle(ix + 2, y, 5, fill=AMBER if on else DIM2)
    for i, y in enumerate(oys):
        on = i == lit_out
        c, w = _tone(on)
        pen.rrect((ox - 34, y - 22, ox + 26, y + 22), r=6, outline=c, w=w)
        pen.circle(ox - 4, y, 6, fill=AMBER_LIT if on else DIM2)


def m_fees(pen, rnd):
    """Mempool fee histogram with the confirming band lit."""
    n, bw, gap = 24, 8, 6
    base = IY + IH - 30
    x = CX - (n * (bw + gap) - gap) // 2
    heights = [rnd.rng(18, 300) for _ in range(n)]
    heights = [int(h * (1.0 - 0.45 * i / n)) + 22 for i, h in enumerate(heights)]
    band = rnd.rng(0, n - 4)
    for i, h in enumerate(heights):
        on = band <= i < band + 3
        pen.rrect((x, base - h, x + bw, base), r=2,
                  fill=AMBER if on else (MID if i < band else DIM))
        x += bw + gap
    pen.line([(IX, base), (IX + IW, base)], DIM2, 2)
    cut = base - heights[band] - 16
    pen.dashed((IX, cut), (IX + IW, cut), MID, 2)
    f = font(MONO_BOLD, 13)
    pen.text(IX + IW, cut - 20, "sat/vB", f, AMBER, tracking=1.6, anchor="ra")


def m_sign(pen, rnd):
    """A key and a digest producing a signature."""
    ky = IY + 34
    pen.circle(CX - 58, ky, 24, outline=AMBER, w=3)
    pen.circle(CX - 58, ky, 9, fill=AMBER)
    pen.line([(CX - 34, ky), (CX + 64, ky)], AMBER, 3)
    pen.line([(CX + 38, ky), (CX + 38, ky + 20)], AMBER, 3)
    pen.line([(CX + 64, ky), (CX + 64, ky + 28)], AMBER, 3)

    pen.arrow((CX, ky + 54), (CX, ky + 96), DIM2, 2)

    dy = ky + 114
    cols, rows, cell = 8, 3, 28
    gx = CX - (cols * cell) // 2
    for r in range(rows):
        for c in range(cols):
            v = rnd.byte()
            pen.rrect((gx + c * cell + 2, dy + r * cell + 2,
                       gx + c * cell + cell - 4, dy + r * cell + cell - 4),
                      r=3, fill=MID if v > 168 else DIM)
    f = font(MONO_BOLD, 12)
    pen.text(CX, dy + rows * cell + 12, "SIGHASH", f, MUTED, tracking=2.4, anchor="ma")

    sy = dy + rows * cell + 62
    pen.arrow((CX, sy - 14), (CX, sy + 14), DIM2, 2)
    box = (IX + 4, sy + 26, IX + IW - 4, sy + 128)
    pen.rrect(box, r=8, outline=AMBER, w=3)
    pts, x = [], box[0] + 18
    while x < box[2] - 18:
        pts.append((x, sy + 77 + (rnd.rng(-30, 30))))
        x += 14
    pen.line(pts, AMBER_LIT, 3)


def m_broadcast(pen, rnd):
    """One node propagating a transaction outward to its peers."""
    oy = IY + 96
    for i, r in enumerate((72, 122, 172, 222)):
        pen.circle(CX, oy, r, outline=(DIM2 if i == 0 else DIM), w=2)
    for _ in range(9):
        r = rnd.pick((72, 122, 172, 222))
        a = math.radians(rnd.rng(0, 359))
        px, py = CX + r * math.cos(a), oy + r * math.sin(a)
        if not (IX - 40 < px < IX + IW + 40 and IY < py < IY + IH):
            continue
        pen.circle(px, py, 7, fill=MID)
    pen.circle(CX, oy, 12, fill=AMBER)
    pen.circle(CX, oy, 22, outline=AMBER_LIT, w=3)
    f = font(MONO_BOLD, 13)
    pen.text(CX, IY + IH - 22, "RELAYED", f, AMBER, tracking=3.0, anchor="ma")


def m_network(pen, rnd):
    """A peer mesh with your own node lit."""
    cols, rows = 3, 4
    cw, ch = IW // cols, IH // rows
    pts = []
    for r in range(rows):
        for c in range(cols):
            pts.append((IX + c * cw + cw // 2 + rnd.rng(-30, 30),
                        IY + r * ch + ch // 2 + rnd.rng(-26, 26)))
    drop = rnd.rng(0, len(pts) - 1)
    pts = [q for i, q in enumerate(pts) if i != drop]
    mine = rnd.rng(3, len(pts) - 4)
    for i, a in enumerate(pts):
        for b in pts[i + 1:]:
            if math.hypot(a[0] - b[0], a[1] - b[1]) < cw + 46:
                touches = i == mine or b == pts[mine]
                pen.line([a, b], MID if touches else DIM, 2)
    for i, (x, y) in enumerate(pts):
        if i == mine:
            continue
        pen.circle(x, y, 10, outline=DIM2, fill=BAND_BG, w=2)
    mx, my = pts[mine]
    pen.circle(mx, my, 28, outline=AMBER, w=3)
    pen.circle(mx, my, 13, fill=AMBER_LIT)
    f = font(MONO_BOLD, 13)
    ly = my - 48 if my > CY else my + 40
    pen.text(mx, ly, "YOURS", f, AMBER, tracking=2.6, anchor="ma")


def m_onion(pen, rnd):
    """Layered routing: a circuit threading inward through relays."""
    radii = (196, 154, 112, 70)
    for i, r in enumerate(radii):
        pen.circle(CX, CY, r, outline=DIM2 if i else DIM, w=2)
    a = math.radians(rnd.rng(200, 340))
    pts = [(CX + 236 * math.cos(a), CY + 236 * math.sin(a))]
    for r in radii:
        a += math.radians(rnd.rng(52, 104))
        pts.append((CX + r * math.cos(a), CY + r * math.sin(a)))
    pts.append((CX, CY))
    pen.line(pts, AMBER, 3)
    for x, y in pts[1:-1]:
        pen.circle(x, y, 8, outline=AMBER_LIT, fill=BAND_BG, w=3)
    pen.circle(CX, CY, 13, fill=AMBER_LIT)


def m_derivation(pen, rnd):
    """A hierarchical deterministic tree: one seed, many keys."""
    ry = IY + 24
    l1y, l2y = IY + 172, IY + 336
    l1 = [CX - 96, CX + 96]
    l2 = [CX - 144, CX - 48, CX + 48, CX + 144]
    hot1 = rnd.rng(0, 1)
    hot2 = hot1 * 2 + rnd.rng(0, 1)

    def elbow(x0, y0, x1, y1, on):
        c, w = (AMBER, 3) if on else (DIM2, 2)
        mid = (y0 + y1) // 2
        pen.line([(x0, y0), (x0, mid), (x1, mid), (x1, y1)], c, w)

    for i, x in enumerate(l1):
        elbow(CX, ry + 18, x, l1y - 18, i == hot1)
    for i, x in enumerate(l2):
        elbow(l1[i // 2], l1y + 18, x, l2y - 16, i == hot2)
    pen.circle(CX, ry, 18, outline=AMBER, fill=BAND_BG, w=3)
    pen.circle(CX, ry, 7, fill=AMBER)
    for i, x in enumerate(l1):
        on = i == hot1
        pen.circle(x, l1y, 15, outline=AMBER if on else DIM2, fill=BAND_BG, w=3 if on else 2)
    for i, x in enumerate(l2):
        on = i == hot2
        c, w = _tone(on)
        pen.rrect((x - 15, l2y - 15, x + 15, l2y + 15), r=4, outline=c, fill=BAND_BG, w=w)
        if on:
            pen.circle(x, l2y, 5, fill=AMBER_LIT)
    f = font(MONO_BOLD, 14)
    pen.text(CX, l2y + 62, "m / 84' / 0' / 0'", f, MUTED, tracking=1.4, anchor="ma")


def m_quorum(pen, rnd):
    """An m-of-n signing policy: only a quorum unlocks the output."""
    need, total = 2, 3
    tw, th = 106, 88
    y = IY + 18
    xs = [CX - (tw + 14), CX, CX + (tw + 14)]
    cold = rnd.rng(0, total - 1)
    oy = y + 292
    for i, x in enumerate(xs):
        on = i != cold
        c, w = (AMBER, 3) if on else (DIM2, 2)
        pen.rrect((x - tw // 2, y, x + tw // 2, y + th), r=8, outline=c, w=w)
        pen.circle(x, y + 30, 13, outline=c, w=w)
        pen.line([(x, y + 43), (x, y + 66)], c, w)
        pen.line([(x + 1, y + 59), (x + 13, y + 59)], c, w)
        pen.line([(x, y + th + 10), (x, oy - 52)], AMBER if on else DIM, 3 if on else 2)
    pen.rrect((CX - 108, oy - 46, CX + 108, oy + 46), r=12, outline=AMBER_LIT, w=3)
    f = font(MONO_BOLD, 30)
    pen.text(CX, oy - 16, f"{need} OF {total}", f, AMBER_LIT, tracking=3.0, anchor="ma")


def m_airgap(pen, rnd):
    """Two machines that never touch, bridged only by a scannable code."""
    dw, dh = 236, 136
    ty, by = IY - 6, IY + IH - dh + 6
    for y, lit in ((ty, False), (by, False)):
        pen.rrect((CX - dw // 2, y, CX + dw // 2, y + dh), r=10, outline=DIM2, w=2)
        pen.rrect((CX - dw // 2 + 18, y + 16, CX + dw // 2 - 18, y + dh - 30), r=4,
                  outline=DIM, fill=(14, 17, 22), w=2)
        pen.circle(CX, y + dh - 15, 6, outline=DIM2, w=2)

    gy = (ty + dh + by) // 2
    pen.dashed((IX - 10, gy - 66), (IX + IW + 10, gy - 66), DIM2, 2)
    pen.dashed((IX - 10, gy + 66), (IX + IW + 10, gy + 66), DIM2, 2)

    q, cell = 7, 16
    gx, gy0 = CX - (q * cell) // 2, gy - (q * cell) // 2
    pen.rrect((gx - 12, gy0 - 12, gx + q * cell + 12, gy0 + q * cell + 12), r=8,
              outline=AMBER, fill=BAND_BG, w=3)
    for r in range(q):
        for c in range(q):
            corner = (r < 3 and c < 3) or (r < 3 and c > q - 4) or (r > q - 4 and c < 3)
            on = corner or rnd.byte() > 118
            if on:
                pen.rrect((gx + c * cell, gy0 + r * cell,
                           gx + c * cell + cell - 3, gy0 + r * cell + cell - 3),
                          r=1, fill=AMBER_LIT)
    f = font(MONO_BOLD, 12)
    pen.text(IX, gy - 66 - 20, "AIR GAP", f, MUTED, tracking=2.6)


def m_mix(pen, rnd):
    """Unequal inputs going in, uniform outputs coming out."""
    n = 5
    top, bot = IY + 30, IY + IH - 30
    xs = [IX + 20 + i * (IW - 40) // (n - 1) for i in range(n)]
    perm = rnd.shuffled(range(n))
    lit = {rnd.rng(0, n - 1), rnd.rng(0, n - 1)}
    for i, j in enumerate(perm):
        on = i in lit
        pen.curve((xs[i], top + 30), (xs[j], bot - 30), AMBER if on else DIM, 3 if on else 2)
    for i, x in enumerate(xs):
        on = i in lit
        w = rnd.rng(16, 34)
        c, lw = _tone(on)
        pen.rrect((x - w // 2, top - 12, x + w // 2, top + 14), r=4, outline=c, w=lw)
    for i, x in enumerate(xs):
        on = perm.index(i) in lit if i in perm else False
        c, lw = _tone(on)
        pen.rrect((x - 15, bot - 14, x + 15, bot + 12), r=4, outline=c, w=lw)
    f = font(MONO_BOLD, 12)
    pen.text(IX, bot + 30, "EQUAL OUTPUTS", f, MUTED, tracking=2.4)


def m_trace(pen, rnd):
    """Clustered addresses with one heuristic trail linked across them."""
    centres = [(IX + 62, IY + 70), (IX + IW - 58, IY + 190), (IX + 96, IY + IH - 74)]
    clusters = []
    for cx, cy in centres:
        pts = [(cx + rnd.rng(-64, 64), cy + rnd.rng(-58, 58)) for _ in range(5)]
        clusters.append(pts)
        for i, a in enumerate(pts):
            for b in pts[i + 1:]:
                pen.line([a, b], DIM, 2)
        for x, y in pts:
            pen.circle(x, y, 9, outline=DIM2, fill=BAND_BG, w=2)
    trail = [clusters[0][rnd.rng(0, 4)], clusters[1][rnd.rng(0, 4)],
             clusters[2][rnd.rng(0, 4)]]
    for a, b in zip(trail, trail[1:]):
        pen.arrow(a, b, AMBER, 3, head=10)
    for x, y in trail:
        pen.circle(x, y, 10, outline=AMBER_LIT, fill=BAND_BG, w=3)
    f = font(MONO_BOLD, 12)
    pen.text(IX, IY + IH + 4, "LINKED", f, AMBER, tracking=2.6)


def m_shield(pen, rnd):
    """Defence in depth: an attack stopped at one of the outer layers."""
    radii = (208, 160, 112, 64)
    for i, r in enumerate(radii):
        c, w = ((DIM, 2), (DIM2, 2), (MID, 3), (AMBER, 3))[i]
        pen.circle(CX, CY, r, outline=c, w=w)
    pen.circle(CX, CY, 22, fill=AMBER_LIT)

    stop = rnd.rng(0, 1)
    ang = math.radians(rnd.rng(196, 344))
    r_hit = radii[stop]
    p0 = (CX + 268 * math.cos(ang), CY + 268 * math.sin(ang))
    p1 = (CX + (r_hit + 16) * math.cos(ang), CY + (r_hit + 16) * math.sin(ang))
    pen.arrow(p0, p1, AMBER_LIT, 3, head=13)
    hit = (CX + r_hit * math.cos(ang), CY + r_hit * math.sin(ang))
    pen.circle(hit[0], hit[1], 15, outline=AMBER_LIT, w=3)
    for k in range(4):
        a = ang + math.pi + math.radians(-40 + k * 27)
        pen.line([(hit[0] + 18 * math.cos(a), hit[1] + 18 * math.sin(a)),
                  (hit[0] + 32 * math.cos(a), hit[1] + 32 * math.sin(a))], AMBER, 2)
    f = font(MONO_BOLD, 13)
    pen.text(CX, CY + radii[0] + 20, "DEFENCE IN DEPTH", f, MUTED, tracking=2.6, anchor="ma")


def m_device(pen, rnd):
    """Signing devices, one of them the recommended pick."""
    dw, dh = 116, 176
    xs = (CX - dw - 22, CX, CX + dw + 22)
    lit = rnd.rng(0, 2)
    for i, x in enumerate(xs):
        y = CY - dh // 2 + rnd.rng(-30, 30)
        on = i == lit
        c, w = (AMBER, 3) if on else (DIM2, 2)
        pen.rrect((x - dw // 2, y, x + dw // 2, y + dh), r=12, outline=c, w=w)
        pen.rrect((x - dw // 2 + 14, y + 16, x + dw // 2 - 14, y + 96), r=5,
                  outline=DIM, fill=(14, 17, 22), w=2)
        for r in range(3):
            pen.line([(x - dw // 2 + 26, y + 34 + r * 18),
                      (x - dw // 2 + 26 + rnd.rng(26, 58), y + 34 + r * 18)],
                     AMBER_LIT if on else DIM2, 3)
        for b in (-1, 1):
            pen.circle(x + b * 26, y + dh - 42, 11, outline=c, w=w)


def m_bits(pen, rnd):
    """The same value written three ways."""
    head = font(MONO_BOLD, 14)
    body = font(MONO_MED, 19)
    cols = ("BIN", "DEC", "HEX")
    xs = (IX + 6, IX + 178, IX + 274)
    for x, label in zip(xs, cols):
        pen.text(x, IY, label, head, AMBER, tracking=2.4)
    pen.line([(IX, IY + 28), (IX + IW, IY + 28)], DIM2, 2)
    lit = rnd.rng(0, 7)
    for r in range(8):
        v = rnd.rng(0, 255)
        y = IY + 48 + r * 44
        on = r == lit
        c = AMBER_LIT if on else DIM2
        pen.text(xs[0], y, format(v, "08b"), body, c)
        pen.text(xs[1], y, f"{v:>3}", body, MID if not on else AMBER_LIT)
        pen.text(xs[2], y, format(v, "02X"), body, MID if not on else AMBER_LIT)


def m_address(pen, rnd):
    """The four address formats, by their prefixes."""
    rows = (("P2PKH", "1"), ("P2SH", "3"), ("P2WPKH", "bc1q"), ("P2TR", "bc1p"))
    lab = font(MONO_BOLD, 13)
    chip = font(MONO_BOLD, 17)
    body = font(MONO_MED, 17)
    lit = rnd.rng(0, 3)
    alphabet = "023456789acdefghjklmnpqrstuvwxyz"
    for i, (name, prefix) in enumerate(rows):
        y = IY + 22 + i * 104
        on = i == lit
        c = AMBER if on else DIM2
        pen.text(IX, y, name, lab, AMBER if on else MUTED, tracking=2.2)
        cw = pen.textw(prefix, chip) + 22
        pen.rrect((IX, y + 24, IX + cw, y + 58), r=6, outline=c, w=3 if on else 2)
        pen.text(IX + 11, y + 32, prefix, chip, AMBER_LIT if on else MUTED_BRIGHT)
        tail = "".join(alphabet[rnd.byte() % len(alphabet)] for _ in range(13))
        pen.text(IX + cw + 12, y + 32, tail + "...", body, MID if on else DIM2)


def m_checklist(pen, rnd):
    """Steps done and steps still open."""
    done = rnd.rng(2, 4)
    for i in range(6):
        y = IY + 16 + i * 68
        on = i < done
        c, w = (AMBER, 3) if on else (DIM2, 2)
        pen.rrect((IX, y, IX + 30, y + 30), r=6, outline=c, w=w)
        if on:
            pen.line([(IX + 8, y + 16), (IX + 14, y + 22), (IX + 23, y + 8)], AMBER_LIT, 4)
        pen.line([(IX + 48, y + 16), (IX + 48 + rnd.rng(140, IW - 60), y + 16)],
                 MID if on else DIM, 3)


def m_fork(pen, rnd):
    """A spine of decisions, with one route actually taken."""
    spine = IX + 34
    tw = 196
    ys = [IY + 60, IY + 200, IY + 340]
    taken = rnd.rng(0, 2)
    pen.line([(spine, IY + 10), (spine, ys[0])], AMBER, 3)
    for i, y in enumerate(ys):
        live = i <= taken
        chosen = i == taken
        c, w = (AMBER, 3) if chosen else ((MID, 3) if live else (DIM2, 2))
        pen.line([(spine, y), (spine + 44, y)], c, w)
        pen.rrect((spine + 44, y - 32, spine + 44 + tw, y + 32), r=8,
                  outline=AMBER if chosen else DIM2, w=3 if chosen else 2)
        for r in range(2):
            pen.line([(spine + 66, y - 10 + r * 20),
                      (spine + 66 + rnd.rng(60, tw - 46), y - 10 + r * 20)],
                     MID if chosen else DIM, 3)
        if chosen:
            pen.circle(spine, y, 11, outline=AMBER, fill=BAND_BG, w=3)
            pen.circle(spine, y, 4, fill=AMBER_LIT)
        else:
            pen.circle(spine, y, 8, outline=c, fill=BAND_BG, w=w)
        if i < len(ys) - 1:
            seg = (AMBER, 3) if i < taken else (DIM2, 2)
            pen.line([(spine, y), (spine, ys[i + 1])], seg[0], seg[1])
    f = font(MONO_BOLD, 13)
    pen.text(spine - 4, ys[-1] + 52, "ONE PATH", f, AMBER, tracking=2.6)


def m_legacy(pen, rnd):
    """A key handed on: holder, sealed instructions, heir."""
    top, bot = IY + 30, IY + IH - 30
    mid = (top + bot) // 2
    pen.line([(CX, top), (CX, mid - 66)], AMBER, 3)
    pen.dashed((CX, mid + 66), (CX, bot), DIM2, 3, dash=11, gap=9)
    pen.circle(CX, top, 26, outline=AMBER, fill=BAND_BG, w=3)
    pen.circle(CX, top, 10, fill=AMBER)
    pen.rrect((CX - 68, mid - 62, CX + 68, mid + 62), r=12, outline=AMBER_LIT, w=3)
    pen.arc(CX, mid - 10, 27, 180, 360, AMBER_LIT, 4)
    pen.rrect((CX - 29, mid - 10, CX + 29, mid + 36), r=6, fill=AMBER_LIT)
    pen.circle(CX, bot, 26, outline=DIM2, fill=BAND_BG, w=3)
    pen.circle(CX, bot, 10, fill=DIM2)
    f = font(MONO_BOLD, 13)
    pen.text(CX + 40, top - 8, "HOLDER", f, AMBER, tracking=2.2)
    pen.text(CX + 84, mid - 8, "SEALED", f, MUTED, tracking=2.2)
    pen.text(CX + 40, bot - 8, "HEIR", f, MUTED, tracking=2.2)


def m_index(pen, rnd):
    """A reference shelf of terms."""
    terms = ["BIP39", "UTXO", "PSBT", "XPUB", "P2TR", "SEED", "NLOCK", "SEGWIT",
             "MULTISIG", "DERIV", "COINJOIN", "RBF", "TAPROOT", "DUST", "XPRV",
             "NODE", "MEMPOOL", "SIGHASH", "AIRGAP", "CHECKSUM", "ENTROPY"]
    f = font(MONO_BOLD, 15)
    picks = rnd.shuffled(terms)
    lit = {rnd.rng(0, 20), rnd.rng(0, 20)}
    for i, t in enumerate(picks):
        r, c = i // 3, i % 3
        if r > 6:
            break
        x, y = IX + c * (IW // 3), IY + 8 + r * 58
        on = i in lit
        pen.text(x, y, t, f, AMBER_LIT if on else DIM2, tracking=1.2)
        pen.line([(x, y + 26), (x + IW // 3 - 22, y + 26)], MID if on else DIM, 2)


def m_alert(pen, rnd):
    """Lookalikes, with the impostor struck out."""
    bad = rnd.rng(0, 4)
    for i in range(5):
        y = IY + 18 + i * 80
        on = i == bad
        c, w = (AMBER, 3) if on else (DIM2, 2)
        pen.rrect((IX + 42, y, IX + IW, y + 56), r=8, outline=c, w=w)
        pen.line([(IX + 60, y + 20), (IX + 60 + rnd.rng(90, 180), y + 20)],
                 MID if on else DIM, 3)
        pen.line([(IX + 60, y + 38), (IX + 60 + rnd.rng(60, 130), y + 38)], DIM, 3)
        if on:
            pen.line([(IX + 4, y + 14), (IX + 30, y + 42)], AMBER_LIT, 4)
            pen.line([(IX + 30, y + 14), (IX + 4, y + 42)], AMBER_LIT, 4)
            pen.line([(IX + 52, y + 28), (IX + IW - 10, y + 28)], AMBER, 3)


def m_custody(pen, rnd):
    """Your key inside your boundary, or someone else's."""
    pw, ph = IW, 150
    ty, by = IY + 22, IY + IH - ph - 22
    f = font(MONO_BOLD, 13)

    pen.rrect((IX, ty, IX + pw, ty + ph), r=12, outline=AMBER, w=3)
    pen.circle(IX + 66, ty + ph // 2, 20, outline=AMBER, w=3)
    pen.circle(IX + 66, ty + ph // 2, 8, fill=AMBER)
    pen.line([(IX + 90, ty + ph // 2), (IX + pw - 74, ty + ph // 2)], AMBER, 3)
    pen.rrect((IX + pw - 74, ty + ph // 2 - 20, IX + pw - 26, ty + ph // 2 + 20), r=6,
              outline=AMBER_LIT, w=3)
    pen.text(IX + 14, ty + 12, "YOU HOLD IT", f, AMBER, tracking=2.2)

    pen.rrect((IX, by, IX + pw, by + ph), r=12, outline=DIM2, w=2)
    pen.circle(IX + 66, by + ph // 2, 20, outline=DIM2, w=2)
    pen.circle(IX + 66, by + ph // 2, 8, fill=DIM2)
    pen.line([(IX + 90, by + ph // 2), (IX + 150, by + ph // 2)], DIM2, 2)
    pen.line([(IX + 168, by + ph // 2 - 14), (IX + 190, by + ph // 2 + 14)], MID, 3)
    pen.line([(IX + 190, by + ph // 2 - 14), (IX + 168, by + ph // 2 + 14)], MID, 3)
    pen.line([(IX + 208, by + ph // 2), (IX + pw - 74, by + ph // 2)], DIM, 2)
    pen.rrect((IX + pw - 74, by + ph // 2 - 20, IX + pw - 26, by + ph // 2 + 20), r=6,
              outline=DIM2, w=2)
    pen.text(IX + 14, by + 12, "THEY HOLD IT", f, MUTED, tracking=2.2)


def m_vault(pen, rnd):
    """Nested physical enclosures around one thing worth stealing."""
    for i, inset in enumerate((0, 46, 92)):
        c, w = ((DIM, 2), (DIM2, 2), (AMBER, 3))[i]
        pen.rrect((IX - 18 + inset, IY - 6 + inset,
                   IX + IW + 18 - inset, IY + IH + 6 - inset), r=14 - i * 3, outline=c, w=w)
    dy = CY + 6
    pen.circle(CX, dy, 62, outline=AMBER, w=3)
    pen.circle(CX, dy, 42, outline=MID, w=3)
    pen.circle(CX, dy, 12, fill=AMBER_LIT)
    for k in range(8):
        a = math.radians(k * 45 + rnd.rng(0, 20))
        pen.line([(CX + 66 * math.cos(a), dy + 66 * math.sin(a)),
                  (CX + 84 * math.cos(a), dy + 84 * math.sin(a))], AMBER, 3)
    for sx in (-1, 1):
        for sy in (-1, 1):
            pen.rrect((CX + sx * 150 - 9, dy + sy * 150 - 9,
                       CX + sx * 150 + 9, dy + sy * 150 + 9), r=3, fill=DIM2)
    f = font(MONO_BOLD, 13)
    pen.text(CX, IY + IH - 34, "LAYERED", f, MUTED, tracking=2.8, anchor="ma")


def m_redact(pen, rnd):
    """What you leak, and what you keep back."""
    y = IY + 8
    for row in range(9):
        x = IX
        segs = rnd.rng(2, 4)
        for _ in range(segs):
            w = rnd.rng(38, 104)
            if x + w > IX + IW:
                break
            if rnd.byte() > 150:
                pen.rrect((x, y - 2, x + w, y + 22), r=4,
                          fill=AMBER if rnd.byte() > 128 else MID)
            else:
                pen.line([(x, y + 10), (x + w, y + 10)], DIM2, 4)
            x += w + 16
        y += 46
    f = font(MONO_BOLD, 13)
    pen.text(IX, y + 8, "WHAT YOU REVEAL", f, AMBER, tracking=2.6)


def draw_die(pen, x, y, size, value, tone):
    """One die face. tone: 'dark' | 'warm' | 'lit'."""
    if tone == "lit":
        outline, pip, w = AMBER, AMBER_LIT, 3
    elif tone == "warm":
        outline, pip, w = DIE_WARM, EMBER, 2
    else:
        outline, pip, w = DIE_EDGE, DIE_EDGE, 2
    pen.rrect((x, y, x + size, y + size), r=int(size * 0.22), outline=outline, w=w)
    lo, mid, hi = 0.27, 0.5, 0.73
    layouts = {
        1: [(mid, mid)],
        2: [(lo, lo), (hi, hi)],
        3: [(lo, lo), (mid, mid), (hi, hi)],
        4: [(lo, lo), (hi, lo), (lo, hi), (hi, hi)],
        5: [(lo, lo), (hi, lo), (mid, mid), (lo, hi), (hi, hi)],
        6: [(lo, lo), (hi, lo), (lo, mid), (hi, mid), (lo, hi), (hi, hi)],
    }
    for px, py in layouts[value]:
        pen.circle(x + px * size, y + py * size, size * 0.072, fill=pip)


def dice_field(pen, seed, stuck=False):
    """A roll of dice. With stuck=True every face lands the same, which is the
    entire point of the Coldcard entropy story."""
    rnd = Rnd(seed, 256)
    die, gap, cols, rows = 60, 24, 5, 9
    grid_w = cols * die + (cols - 1) * gap
    x0 = BAND_X + (BAND_W - grid_w) // 2
    y0 = -26
    fixed = rnd.rng(1, 6)
    for i in range(cols * rows):
        v = fixed if stuck else rnd.rng(1, 6)
        roll = rnd.byte()
        if stuck:
            tone = "lit" if i % cols == 2 else "warm"
        else:
            tone = "lit" if roll < 34 else ("warm" if roll < 80 else "dark")
        c, r = i % cols, i // cols
        draw_die(pen, x0 + c * (die + gap), y0 + r * (die + gap), die, v, tone)


def m_dice(pen, rnd):
    dice_field(pen, rnd.seed_name)


def m_stuck_dice(pen, rnd):
    dice_field(pen, rnd.seed_name, stuck=True)


MOTIFS = {
    "chain": m_chain, "utxo": m_utxo, "fees": m_fees, "sign": m_sign,
    "broadcast": m_broadcast, "network": m_network, "onion": m_onion,
    "derivation": m_derivation, "quorum": m_quorum, "airgap": m_airgap,
    "mix": m_mix, "trace": m_trace, "shield": m_shield, "device": m_device,
    "bits": m_bits, "address": m_address, "checklist": m_checklist,
    "fork": m_fork, "legacy": m_legacy, "index": m_index, "alert": m_alert,
    "custody": m_custody, "vault": m_vault, "redact": m_redact,
    "dice": m_dice, "stuck-dice": m_stuck_dice,
}

# Every page without a photograph, mapped to the motif that draws its subject.
MOTIF_BY_URL = {
    "/docs/": "chain",
    "/docs/learn/": "custody",
    "/docs/learn/fundamentals/": "fork",
    "/docs/learn/fundamentals/what-is-bitcoin/": "chain",
    "/docs/learn/fundamentals/what-is-self-custody/": "custody",
    "/docs/learn/fundamentals/holding-bitcoin/": "custody",
    "/docs/learn/fundamentals/threat-models/": "shield",
    "/docs/learn/fundamentals/choosing-your-path/": "fork",
    "/docs/learn/keys/intro/": "derivation",
    "/docs/learn/keys/number-systems/": "bits",
    "/docs/learn/keys/xprv/": "sign",
    "/docs/learn/keys/xpub/": "derivation",
    "/docs/learn/nodes/": "network",
    "/docs/learn/nodes/what-is-node/": "network",
    "/docs/learn/nodes/why-run-node/": "network",
    "/docs/learn/privacy/": "trace",
    "/docs/learn/privacy/chain-analysis/": "trace",
    "/docs/learn/privacy/why-privacy-matters/": "redact",
    "/docs/learn/privacy/protecting-privacy/": "shield",
    "/docs/learn/privacy/coinjoin/": "mix",
    "/docs/learn/privacy/coinjoin-tutorial/": "mix",
    "/docs/learn/privacy/payjoin/": "mix",
    "/docs/learn/privacy/utxo-management/": "utxo",
    "/docs/learn/transactions/": "chain",
    "/docs/learn/transactions/understanding/": "chain",
    "/docs/learn/transactions/create/": "utxo",
    "/docs/learn/transactions/utxos/": "utxo",
    "/docs/learn/transactions/types/": "address",
    "/docs/learn/transactions/sign/": "sign",
    "/docs/learn/transactions/broadcast/": "broadcast",
    "/docs/learn/transactions/fees/": "fees",
    "/docs/learn/wallets/": "device",
    "/docs/learn/wallets/hardware-wallets/": "device",
    "/docs/learn/wallets/software-wallets/": "device",
    "/docs/learn/wallets/air-gapped-wallets/": "airgap",
    "/docs/learn/wallets/coldcard-entropy-incident/": "stuck-dice",
    "/docs/learn/wallets/multisig/": "quorum",
    "/docs/learn/wallets/multisig/hardware-setup/": "quorum",
    "/docs/learn/wallets/multisig/sparrow-setup/": "quorum",
    "/docs/learn/wallets/multisig/backup-recovery/": "quorum",
    "/docs/bitcoin-node/": "network",
    "/docs/bitcoin-node/node-software-options/": "network",
    "/docs/bitcoin-node/parmanode-setup/": "network",
    "/docs/bitcoin-node/electrum-server/": "network",
    "/docs/bitcoin-node/connect-sparrow-wallet/": "network",
    "/docs/bitcoin-node/tor/": "onion",
    "/docs/advanced/": "quorum",
    "/docs/advanced/inheritance-planning/": "legacy",
    "/docs/wallet-setup/": "checklist",
    "/docs/wallet-setup/before-you-deposit/": "checklist",
    "/docs/wallet-setup/hardware-wallet/": "device",
    "/docs/security/operational-security/": "redact",
    "/docs/security/physical-security/": "vault",
    "/docs/reference/": "index",
    "/docs/reference/glossary/": "index",
    "/docs/reference/address-types/": "address",
    "/docs/reference/hardware-wallet-comparison/": "device",
    "/docs/reference/faq/": "checklist",
    "/docs/reference/faq/recovery-scams/": "alert",
    "/docs/reference/faq/recovery-troubleshooting/": "checklist",
}


# Motifs that intentionally run off the top and bottom edges.
BLEED_MOTIFS = {"dice", "stuck-dice"}

# Cap on the fit-to-band upscale, so hairlines and small type stay crisp.
MOTIF_MAX_SCALE = 1.5


def draw_motif(img: Image.Image, url: str, name: str):
    """Draw a motif onto its own layer, fit it to the band, then composite.

    Motifs are written at whatever size reads naturally while drawing them; this
    step is what makes the set consistent, scaling each one to fill the same box
    and centring it. Fitting happens at 2x, so the card's final downsample still
    leaves the artwork supersampled.
    """
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    rnd = Rnd(url)
    rnd.seed_name = url
    MOTIFS[name](Pen(ImageDraw.Draw(layer)), rnd)

    if name in BLEED_MOTIFS:
        img.paste(layer, (0, 0), layer)
        return

    bbox = layer.getbbox()
    if not bbox:
        return
    art = layer.crop(bbox)
    tw, th = (BAND_W - 88) * SCALE, (HEIGHT - 116) * SCALE
    k = min(tw / art.width, th / art.height, MOTIF_MAX_SCALE)
    if abs(k - 1.0) > 0.02:
        art = art.resize((max(1, round(art.width * k)), max(1, round(art.height * k))),
                         Image.LANCZOS)
    img.paste(art, (int((BAND_X + BAND_W / 2) * SCALE) - art.width // 2,
                    int(HEIGHT / 2 * SCALE) - art.height // 2), art)
