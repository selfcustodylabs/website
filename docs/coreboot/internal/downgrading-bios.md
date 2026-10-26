---
sidebar_position: 1
title: "Downgrading BIOS"
description: "Downgrade your laptop's stock BIOS to a version with an unlocked Intel ME region, a prerequisite for internal Coreboot flashing."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "downgrading", "bios"]
tags: ["coreboot", "downgrading", "bios"]
date: "2025-08-12"
---
# Downgrading BIOS

Internal flashing relies on vulnerabilities in older Lenovo BIOS versions, which later updates patched, so a ThinkPad running a newer BIOS has to be downgraded first: download Lenovo's BIOS update ISO for the version in the table below, change its boot script so it allows installing an older version, write it to a USB stick, and boot from it to flash the older BIOS.

## Which BIOS versions still allow internal flashing?

The table lists, for each model, the newest BIOS version that still allows internal flashing. If your BIOS is newer, downgrade to that version or an earlier one before installing coreboot.

<div class="fixed-width-table">

| Model | Newest BIOS that can be flashed internally |
|-|-|
| X230 | 2.60 |
| X230T | 2.58 |
| T430 | 2.64 |
| T430s | 2.59 |
| T530 | 2.60 |
| W530 | 2.58 |

</div>

## Why is a downgrade possible?

Lenovo describes its BIOS as having security rollback prevention: once updated, it cannot go back to an older version. The check is made by Lenovo's flashing tools (the Windows utility and the bootable CD), not by the BIOS itself, so running the flashing program (`winflash.exe` or `dosflash.exe`) directly skips it. That takes a small change to the bootable CD image Lenovo publishes.

## Step 1: Download the BIOS ISO

Step 1 downloads Lenovo's bootable BIOS update image for the version in the table. This guide uses a T430s on a BIOS newer than 2.59 as the example. Open the [Lenovo support page for the T430s](https://support.lenovo.com/us/en/downloads/ds029724-bios-update-utility-bootable-cd-for-windows-10-81-8-7-64-bit-81-8-7-32-bit-xp-thinkpad-t430s-t430si), find the "Release (BIOS Bootable)" column, and download `g7uj13us.iso`, which contains BIOS 2.59 (an older version also works). For another model, use that model's support page and the version in the table.

## Step 2: Extract and mount the boot image

Step 2 extracts the El Torito boot image from the ISO and mounts it so its files can be edited. `geteltorito` comes with the `genisoimage` package on Debian and Ubuntu.

```bash
geteltorito -o ./bios.img g7uj13us.iso
sudo mount -t vfat ./bios.img /mnt -o loop,offset=16384
ls /mnt
ls /mnt/FLASH
```

Inside `FLASH` is one directory named after the BIOS build. The commands below show `G1ET93WW`, from a T430 image; use the name you see. List it and look for a `.FL1` file, something like `$01D2000.FL1`:

```bash
ls /mnt/FLASH/G1ET93WW
```

## Step 3: Make the boot script run the flasher directly

Step 3 edits `AUTOEXEC.BAT` so the image starts `dosflash.exe` itself instead of Lenovo's wrapper, which is what enforces the rollback block:

```bash
sudo nano /mnt/AUTOEXEC.BAT
```

The file looks like this:

```bash
@ECHO OFF
PROMPT $p$g
cd c:\flash
command.com
```

Replace the last line, `command.com`, with this, adjusting the path to your `.FL1` file:

```bash
dosflash.exe /sd /file G1ET93WW\$01D2000.FL1
```

Save the file and unmount the image:

```bash
sudo umount /mnt
```

## Step 4: Write the image to a USB drive

Step 4 writes the modified image to a USB drive. Replace `/dev/sdX` with your USB device, and check it with `lsblk` first: `dd` overwrites whatever disk you name.

```bash
sudo dd if=./bios.img of=/dev/sdX bs=1M
```

## Step 5: Flash the older BIOS

Step 5 boots the laptop from the USB drive, which flashes the older BIOS automatically:

1. Reboot and press `F1` to enter the BIOS settings. In the Startup tab, set Startup Mode to Legacy (or Both, Legacy first), then save and reboot with `F10`.
2. Connect AC power. Do not flash on battery: if power is lost during the flash, recovering the laptop needs an external programmer.
3. Press `F12` during startup and choose the USB drive. Flashing starts on its own, and the laptop may reboot several times; do not interrupt it.
4. When it has finished, enter the BIOS settings again and set Startup Mode back to UEFI (or Both, UEFI first). The S3 boot script flaw used on the [next page](/docs/coreboot/internal/unlocking-bios/) is in the UEFI firmware, so the laptop has to boot in UEFI mode.
5. Boot your operating system and check that `/sys/firmware/efi` exists, which confirms it booted in UEFI mode.
