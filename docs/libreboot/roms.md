---
sidebar_position: 4
title: "Build Libreboot ROM Images"
description: "Generate Libreboot ROM images for your specific laptop model. Compile custom BIOS firmware using the lbmk build system, ready to flash."
keywords: ["libreboot ROM", "build ROM", "lbmk", "BIOS image", "coreboot"]
tags: ["libreboot", "ROM", "build", "firmware"]
date: "2025-03-29"
---
# Build ROMs

A Libreboot ROM is the firmware image written to the laptop's flash chip. `./mk -b coreboot` followed by your laptop's target name builds every image for that laptop and packs them into one `.tar.xz` archive in lbmk's `bin/` folder. Unpack the archive and pick one image: as of Libreboot 26.10rev16 (4 November 2026) the recommended one starts with `uefi_edk2_grub_` and boots like a normal UEFI computer. If your laptop's firmware sits on two flash chips, the last step splits that image into one file for each chip.

## Step 1: Find your laptop's target

Step 1 finds the lbmk target name for your laptop, which also tells you whether its firmware is on one flash chip or two. List the ThinkPads lbmk can build, from the `lbmk` directory:

```bash
./mk -b coreboot list | grep thinkpad
```

As of 26.10rev16 that prints:

```text
legacy_lenovo_thinkpad_t440pmrc_12mb
legacy_lenovo_thinkpad_w541mrc_12mb
lenovo_thinkpad_r400_16mb
lenovo_thinkpad_r400_4mb
lenovo_thinkpad_r400_8mb
lenovo_thinkpad_r500_4mb
lenovo_thinkpad_t400_16mb
lenovo_thinkpad_t400_4mb
lenovo_thinkpad_t400_8mb
lenovo_thinkpad_t420_8mb
lenovo_thinkpad_t420s_8mb
lenovo_thinkpad_t430_12mb
lenovo_thinkpad_t440p_12mb
lenovo_thinkpad_t480_16mb
lenovo_thinkpad_t480s_16mb
lenovo_thinkpad_t500_16mb
lenovo_thinkpad_t500_4mb
lenovo_thinkpad_t500_8mb
lenovo_thinkpad_t520_8mb
lenovo_thinkpad_t530_12mb
lenovo_thinkpad_t580_16mb
lenovo_thinkpad_t60_gpu_intel_16mb
lenovo_thinkpad_t60_gpu_intel_2mb
lenovo_thinkpad_w500_16mb
lenovo_thinkpad_w500_4mb
lenovo_thinkpad_w500_8mb
lenovo_thinkpad_w530_12mb
lenovo_thinkpad_w541_12mb
lenovo_thinkpad_x200_16mb
lenovo_thinkpad_x200_4mb
lenovo_thinkpad_x200_8mb
lenovo_thinkpad_x220_8mb
lenovo_thinkpad_x230_12mb
lenovo_thinkpad_x230_16mb
lenovo_thinkpad_x230t_12mb
lenovo_thinkpad_x230t_16mb
lenovo_thinkpad_x270_16mb
lenovo_thinkpad_x280_16mb
lenovo_thinkpad_x301_16mb
lenovo_thinkpad_x301_4mb
lenovo_thinkpad_x301_8mb
lenovo_thinkpad_x60_16mb
lenovo_thinkpad_x60_2mb
```

Without `| grep thinkpad` the list also includes every other board Libreboot supports. The number at the end of each name is the total flash size, and it decides which steps you follow from here on:

| Target ends in | Flash chips | What changes |
|---|---|---|
| `_12mb` | Two: one of 8 MB and one of 4 MB | Split the image in step 5, then back up and write each chip in turn |
| Any other size | One | Flash the whole image as it is |

Where a model is listed with more than one size, pick the one that matches the flash on your board; on a running Linux system this shows the ROM size the firmware reports:

```bash
sudo dmidecode | grep ROM
```

An unmodified X230 or X230 Tablet has 12 MB, an 8 MB and a 4 MB chip, so it takes the `_12mb` target. Libreboot's install pages do not explain the X230's `_16mb` targets, and this guide does not cover them. Ignore the two `legacy_` targets as well: lbmk's configuration marks them never to be built, and keeps them only so `./mk inject` can still read archives from older releases. A T440p or W541 uses `lenovo_thinkpad_t440p_12mb` or `lenovo_thinkpad_w541_12mb`.

## Step 2: Build the images

Step 2 builds every image for your target. It takes a while the first time, because lbmk downloads and compiles coreboot and its toolchain:

```bash
./mk -b coreboot lenovo_thinkpad_t480s_16mb
```

Replace the target with yours. When the build finishes, lbmk packs the images into one archive in `bin/`, inserts the vendor files your laptop needs into every image inside it, and deletes the folder it built them in. List `bin/` to find the archive:

```bash
ls bin/
```

```text
libreboot-26.10rev16_lenovo_thinkpad_t480s_16mb.tar.xz
```

The part after `libreboot-` is the version lbmk is checked out at, and it should read `26.10rev16`. A longer version such as `26.10rev3-158-gb2b6e2ec` means the clone is on lbmk's development branch rather than the release; [step 2 of build Libreboot](/docs/libreboot/build/#step-2-clone-lbmk) explains why and how to check out the release.

## Step 3: Unpack the archive

Step 3 unpacks the images from the archive into a folder of their own, outside lbmk, so the next build cannot touch them:

```bash
mkdir -p ~/libreboot
tar -xf bin/libreboot-26.10rev16_lenovo_thinkpad_t480s_16mb.tar.xz -C ~/libreboot
ls ~/libreboot/bin/lenovo_thinkpad_t480s_16mb/
```

The archive holds one folder, `bin/` followed by your target's name, with every image built for the board. For the T480s in 26.10rev16 that is 33 files:

```text
bios_seabios_lenovo_thinkpad_t480s_16mb_libgfxinit_corebootfb.rom
bios_seabios_lenovo_thinkpad_t480s_16mb_libgfxinit_txtmode.rom
bios_seagrub_lenovo_thinkpad_t480s_16mb_libgfxinit_corebootfb_colemak.rom
...
bios_seagrub_lenovo_thinkpad_t480s_16mb_libgfxinit_txtmode_usqwerty.rom
uefi_edk2_grub_lenovo_thinkpad_t480s_16mb_libgfxinit_corebootfb.rom
```

## Step 4: Choose the image

Step 4 picks the one image to flash. The start of each file name says what it boots:

| Image name starts with | What it boots | Use it if |
|---|---|---|
| `uefi_edk2_grub_` | EDK2, an open-source UEFI, with Libreboot's GRUB built in | You want the default. Libreboot recommends it, and current Linux installers boot from it normally. Older 32-bit-only boards do not have one |
| `bios_seabios_` | SeaBIOS, a legacy BIOS, whose boot menu can also start GRUB and memtest | You want the old BIOS-style boot. Since 26.10rev12 the UEFI image no longer contains SeaBIOS, so this is the way to get it |
| `bios_seagrub_` | SeaBIOS, set to start GRUB first | You want GRUB first. There is one file per keyboard layout (`usqwerty`, `ukqwerty`, `deqwertz` and others), so pick yours |

The end of the name records how the screen is driven: `libgfxinit_corebootfb` gives a graphical screen, and `libgfxinit_txtmode` a text-only one, which Libreboot suggests for FreeBSD and DragonFlyBSD. The UEFI image comes only as `corebootfb`. Copy the image you chose to your home folder as `libreboot.rom`, the name the rest of this guide uses:

```bash
cp ~/libreboot/bin/lenovo_thinkpad_t480s_16mb/uefi_edk2_grub_lenovo_thinkpad_t480s_16mb_libgfxinit_corebootfb.rom ~/libreboot.rom
```

Replace the target with yours in both places.

## Step 5: Split the image if your board has two chips

Step 5 prepares the file for each flash chip: a board with one chip takes `libreboot.rom` as it is, and a board with two chips (every `_12mb` target) needs the image cut into the 8 MB that go on one chip and the 4 MB that go on the other.

### One chip

Nothing to do. `~/libreboot.rom` is the file you flash.

### Two chips

The first 8 MB of the image belong on the 8 MB chip and the last 4 MB on the 4 MB chip, which is how Libreboot's own X230, T440p and W541 instructions split it:

```bash
cd ~
dd if=libreboot.rom of=libreboot_8mb.rom bs=1M count=8
dd if=libreboot.rom of=libreboot_4mb.rom bs=1M skip=8
ls -l libreboot_8mb.rom libreboot_4mb.rom
```

`ls -l` should show 8388608 bytes for `libreboot_8mb.rom` and 4194304 for `libreboot_4mb.rom`. Keep `libreboot.rom` as well: [updating Libreboot](/docs/libreboot/update-bios/) later from inside Linux writes the whole image, not the halves. The [flashing page](/docs/libreboot/flashing-bios/) writes these files.
