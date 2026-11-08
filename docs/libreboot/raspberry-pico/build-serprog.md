---
sidebar_position: 1
title: "Build Serprog"
description: "Build serprog firmware for the Raspberry Pi Pico H so it can act as an SPI programmer for flashing Libreboot to a laptop chip."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "build", "serprog"]
tags: ["libreboot", "raspberry", "pico", "serprog"]
date: "2025-03-29"
---
# Build serprog

serprog is open-source firmware that turns a Raspberry Pi Pico into an SPI programmer that flashprog can drive over USB. Build it with lbmk, unpack the `.uf2` file for your Pico from the archive lbmk leaves in `bin/`, copy it onto the Pico while it is in bootloader mode, and check that it reappears as a serial device. Commands are for Libreboot 26.10rev16 (4 November 2026).

## Step 1: Build the firmware

Step 1 builds the serprog firmware with lbmk, which compiles it with the Pico toolchain that `./mk dependencies` installed in [build Libreboot](/docs/libreboot/build/). From the `lbmk` directory:

```bash
./mk -b pico-serprog
```

The build takes a few minutes. lbmk builds a firmware file for every board the Raspberry Pi Pico SDK knows and packs them all into one archive in `bin/`, next to the ROM archive from [build ROMs](/docs/libreboot/roms/):

```bash
ls bin/
```

```text
libreboot-26.10rev16-pico-serprog-default.tar.xz
libreboot-26.10rev16_lenovo_thinkpad_t480s_16mb.tar.xz
```

As with the ROM archive, the version after `libreboot-` should read `26.10rev16`; anything longer means lbmk is not on the release tag ([build Libreboot, step 2](/docs/libreboot/build/#step-2-clone-lbmk)).

## Step 2: Unpack the firmware

Step 2 unpacks the serprog archive into the `~/libreboot` folder that already holds your ROM images, and copies out the one file your Pico needs:

```bash
mkdir -p ~/libreboot
tar -xf bin/libreboot-26.10rev16-pico-serprog-default.tar.xz -C ~/libreboot
ls ~/libreboot/elf/pico-serprog/default/default/noconfig/xbmk/
```

The archive holds one folder, `elf/pico-serprog/default/default/noconfig/xbmk/`, with a `.uf2` file for each board. Two of them are for this guide:

- `serprog_pico.uf2`, for the Pico and Pico H
- `serprog_pico_w.uf2`, for the Pico W

Ignore the rest. Use the original Pico (RP2040): Libreboot removed Pico 2 support because of stability problems. Copy the file for your board to your home folder:

```bash
cp ~/libreboot/elf/pico-serprog/default/default/noconfig/xbmk/serprog_pico.uf2 ~/
```

## Step 3: Copy the firmware onto the Pico

1. Hold down the BOOTSEL button on the Pico and plug it into your computer with the USB cable, then let go. Holding BOOTSEL while plugging in starts the Pico's bootloader, and it appears as a USB drive named `RPI-RP2`.
2. Copy `~/serprog_pico.uf2` onto that drive, with your file manager, or with `cp ~/serprog_pico.uf2 /media/$USER/RPI-RP2/` if your desktop mounted it there. The Pico restarts with the new firmware and the drive disappears.

To change the firmware later, hold BOOTSEL while plugging in again.

## Step 4: Check the Pico is detected

Step 4 confirms the computer sees the Pico as a serial device. Unplug the Pico, start watching the kernel log, and plug it back in:

```bash
sudo dmesg -wH
```

You should see something like:

```text
[  +0.092782] usb 3-7.2: New USB device found, idVendor=cafe, idProduct=4001, bcdDevice= 1.00
[  +0.000010] usb 3-7.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  +0.000003] usb 3-7.2: Product: pico-serprog (pico)
[  +0.000003] usb 3-7.2: Manufacturer: libreboot.org
[  +0.000002] usb 3-7.2: SerialNumber: E661410403213F31
[  +0.010021] cdc_acm 3-7.2:1.0: ttyACM0: USB ACM device
```

Note the serial port on the last line (`ttyACM0` here). flashprog needs it, and the rest of this guide assumes `/dev/ttyACM0`; use yours if it differs.
