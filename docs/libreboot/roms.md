---
sidebar_position: 4
title: "Build Libreboot ROM Images"
description: "Generate Libreboot ROM images for your specific laptop model. Compile custom BIOS firmware using the lbmk build system, ready to flash."
keywords: ["libreboot ROM", "build ROM", "lbmk", "BIOS image", "coreboot"]
tags: ["libreboot", "ROM", "build", "firmware"]
---
# Build ROMs

A Libreboot ROM is the firmware image written to the laptop's flash chip. Build it with `./mk -b coreboot` followed by your laptop's target name, then pick the right image from `bin/<target>/`: as of Libreboot 26.10 the recommended one starts with `uefi_edk2_grub_seabios_`, which boots like a normal UEFI computer and still offers GRUB and SeaBIOS.

## Step 1: Find your laptop's target

List every board lbmk can build:

```bash
./mk -b coreboot list
```

The ThinkPads in this guide are `lenovo_thinkpad_x230_12mb`, `lenovo_thinkpad_t420_8mb`, `lenovo_thinkpad_t430_12mb`, `lenovo_thinkpad_t440p_12mb`, `lenovo_thinkpad_t480s_16mb`, `lenovo_thinkpad_t530_12mb` and `lenovo_thinkpad_w530_12mb`. The number at the end is the total flash size. Where a model is listed with two sizes (the X230 has `_12mb` and `_16mb` targets), check which chip your board has; on a running Linux system this shows the ROM size the firmware reports:

```bash
sudo dmidecode | grep ROM
```

## Step 2: Build the ROM

This takes a while the first time, because lbmk downloads and compiles coreboot and its toolchain:

```bash
./mk -b coreboot lenovo_thinkpad_t480s_16mb
```

Replace the target with yours.

## Step 3: Choose the image

The images are in `bin/` under your target's name:

```bash
ls bin/lenovo_thinkpad_t480s_16mb/
```

| Image name starts with | What it boots | Use it if |
|---|---|---|
| `uefi_edk2_grub_seabios_` | EDK2 (UEFI) by default, with GRUB and SeaBIOS in its menu | You want the default; current Linux installers boot from it normally |
| `bios_seabios_` | SeaBIOS, a legacy BIOS | You want the old BIOS-style boot |
| `bios_seagrub_` | SeaBIOS with GRUB first | You want GRUB first; it comes in one file per keyboard layout, so pick yours |

The rest of the name records the graphics set-up (for example `libgfxinit_corebootfb`). Copy the image you chose somewhere easy to reach:

```bash
cp bin/lenovo_thinkpad_t480s_16mb/uefi_edk2_grub_seabios_lenovo_thinkpad_t480s_16mb_*.rom ~/libreboot.rom
```

If more than one file matches, copy the one you want by its full name. The [flashing page](/docs/libreboot/flashing-bios/) calls this file `libreboot.rom`.
