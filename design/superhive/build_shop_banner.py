"""Ludopant shop banner for Superhive (top of the shop page): 2400x660, the 1200x330 the
page asks for, doubled for sharp screens. Logo, tagline and site address, in the dark and
orange theme of ludopant.com. No product named: it stays valid as the catalog changes.

    python3 design/superhive/build_shop_banner.py   ->  design/superhive/shop-banner.jpg
"""
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
LOGO = HERE.parents[1] / "docs" / "logo" / "ludopant.svg"
W, H = 2400, 660
BG, GRID, ACCENT, TEXT, MUTED = (20, 20, 22), (28, 28, 31), (245, 160, 74), (236, 236, 239), (162, 162, 171)
FONTS = Path("/usr/share/fonts/truetype")
BOLD = FONTS / "space-grotesk" / "SpaceGrotesk-Bold.ttf"
MEDIUM = FONTS / "ibm-plex" / "IBMPlexSans-Medium.ttf"
MONO = FONTS / "ibm-plex" / "IBMPlexMono-Medium.ttf"


def font(path, size):
    return ImageFont.truetype(str(path if path.exists() else MEDIUM), size)


def logo(height):
    """The logo (black on transparent) in the banner's text color."""
    with tempfile.TemporaryDirectory() as tmp:
        png = Path(tmp) / "logo.png"
        subprocess.run(["inkscape", str(LOGO), "--export-type=png", f"--export-height={height}",
                        f"--export-filename={png}"], check=True, capture_output=True)
        alpha = Image.open(png).convert("RGBA").getchannel("A")
    out = Image.new("RGBA", alpha.size, TEXT + (255,))
    out.putalpha(alpha)
    return out


def main():
    im = Image.new("RGBA", (W, H), BG + (255,))
    d = ImageDraw.Draw(im)
    for x in range(0, W, 60):  # a viewport floor, barely there
        d.line([(x, 0), (x, H)], fill=GRID)
    for y in range(0, H, 60):
        d.line([(0, y), (W, y)], fill=GRID)
    mark = logo(468)
    im.alpha_composite(mark, (150, (H - mark.height) // 2))
    x = 150 + mark.width + 110
    d.rectangle([x, 170, x + 8, 490], fill=ACCENT)
    x += 60
    d.text((x, 150), "BLENDER ADD-ON PUBLISHER", font=font(MONO, 30), fill=ACCENT)
    d.text((x, 205), "Tools to work faster", font=font(BOLD, 104), fill=TEXT)
    d.text((x, 320), "in Blender.", font=font(BOLD, 104), fill=TEXT)
    d.text((x, 460), "ludopant.com", font=font(MEDIUM, 34), fill=MUTED)
    out = HERE / "shop-banner.jpg"
    im.convert("RGB").save(out, quality=92)
    print(f"{out}: {im.size}, {out.stat().st_size / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
