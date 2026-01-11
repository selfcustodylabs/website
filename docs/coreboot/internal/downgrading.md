---
sidebar_position: 1
title: "Downgrading BIOS"
description: "Practical guide: Downgrading BIOS. Covers Why Downgrade is Possible, Performing Downgrade, bitcoin."
keywords: ["bitcoin", "self custody", "security", "privacy", "coreboot", "downgrading", "bios"]
slug: "/coreboot/internal/downgrading-bios/"
tags: ["coreboot", "downgrading", "bios"]
---
# Downgrading BIOS

Before we can flash Coreboot internally on a ThinkPad, we need to make sure the BIOS version is vulnerable enough to be overwritten.
Some newer BIOS versions patch the vulnerabilities that make internal flashing possible, so downgrading may be required.


# Supported BIOS Versions

The table below lists the latest BIOS versions that still allow internal flashing.
If your BIOS is newer than the version shown, you’ll need to downgrade to that version or an earlier one before installing Coreboot.

<div class="fixed-width-table">

|Model|BIOS Version|
|-|-|
|X230|2.60|
|X230T|2.58|
|T430|2.64|
|T430s|2.59|
|T530|2.60|
|W530|2.58|

</div>


## Why Downgrade is Possible

Lenovo claims their BIOS has “security rollback prevention,” meaning once you update to a newer version, you can’t go back to an older one.
In reality, this restriction is entirely client-side, it’s enforced by Lenovo’s flashing utilities (both the Windows version and the Bootable CD), not the BIOS itself.

If you run the flashing program (winflash.exe or dosflash.exe) directly, you can bypass the block. This requires slightly modifying the Bootable CD image you download from Lenovo.

## Performing Downgrade

We’ll assume your T430s is running a BIOS newer than 2.59. In that case, we’ll downgrade to version 2.59.

### Download the BIOS ISO

Visit the [Lenovo support page for the T430s](https://support.lenovo.com/us/en/downloads/ds029724-bios-update-utility-bootable-cd-for-windows-10-81-8-7-64-bit-81-8-7-32-bit-xp-thinkpad-t430s-t430si) and find the “`Release (BIOS Bootable)`” column.
Download `g7uj13us.iso`, which contains BIOS version 2.59 (you can also choose an even older version if you prefer).


### Extract and Modify the Bootable Image

Extract the El Torito image:

```bash
geteltorito -o ./bios.img g1uj41us.iso
```

Mount the image:

```bash
sudo mount -t vfat ./bios.img /mnt -o loop,offset=16384
```

List the contents:

```bash
ls /mnt
ls /mnt/FLASH
```

Inside `FLASH`, you’ll see a directory such as `G1ET93WW` (the name depends on your model and BIOS version).
Check what’s inside:

```bash
ls /mnt/FLASH/G1ET93WW
```

Look for a `.FL1` file, something like `$01D2000.FL1`.


### Modify the Boot Script

Open `AUTOEXEC.BAT`:

```bash
sudo nano /mnt/AUTOEXEC.BAT
```

You’ll see something like:

```bash
@ECHO OFF
PROMPT $p$g
cd c:\flash
command.com
```

Replace the last line (`command.com`) with this (adjust the path to match your `.FL1` file):

```bash
dosflash.exe /sd /file G1ET93WW\$01D2000.FL1
```

Save and unmount:

```bash
sudo umount /mnt
```

### Write to a USB Drive

Flash the modified image to USB:

```bash
sudo dd if=./bios.img of=/dev/sdX bs=1M
```

(Replace /dev/sdX with your actual USB device).


### Flashing the BIOS

- Enter BIOS settings: Reboot and press `F1`.
- In the Startup tab, set Startup Mode to Legacy (or Both/Legacy First).
- Save and reboot: Press `F10`.
- Connect AC power: Do not attempt flashing on battery power. If the system loses power during flashing, you’ll likely need an external programmer to recover.
- Boot from USB: Press `F12` during startup, choose the USB drive, and the BIOS flashing will begin automatically.
- The process may reboot your laptop several times, do not interrupt it.
- After completion: Enter BIOS again and set Startup Mode back to UEFI (or Both/UEFI First). This is required for the Coreboot vulnerability to be usable.
- Check in your OS: Boot into your operating system and verify that `/sys/firmware/efi` or `/sys/firmware/efivars` exists.