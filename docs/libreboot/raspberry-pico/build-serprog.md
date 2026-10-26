---
sidebar_position: 1
title: "Build Serprog"
description: "Build serprog firmware for the Raspberry Pi Pico H so it can act as an SPI programmer for flashing Libreboot to a laptop chip."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "build", "serprog"]
tags: ["libreboot", "raspberry", "pico", "serprog"]
date: "2025-03-29"
---
# Build serprog

serprog is open-source firmware that turns a Raspberry Pi Pico into an SPI programmer that flashprog can drive over USB. Build it with lbmk, copy the resulting `.uf2` file onto the Pico while it is in bootloader mode, and check that it reappears as a serial device.

## Step 1: Install the Pico toolchain

```bash
sudo apt install cmake libusb-1.0-0-dev libmbedtls-dev gcc-arm-none-eabi -y
```

## Step 2: Build the firmware

From the `lbmk` directory:

```bash
./mk -b pico-serprog
```

The build takes a few minutes and leaves two files:

- `bin/serprog_pico/serprog_pico.uf2`, for the Pico and Pico H
- `bin/serprog_pico/serprog_pico_w.uf2`, for the Pico W

Use the original Pico (RP2040). Libreboot removed Pico 2 support because of stability problems.

## Step 3: Copy the firmware onto the Pico

1. Hold down the BOOTSEL button on the Pico and plug it into your computer with the USB cable, then let go. Holding BOOTSEL while plugging in starts the Pico's bootloader, and it appears as a USB drive.
2. Copy `serprog_pico.uf2` onto that drive. The Pico restarts with the new firmware and the drive disappears.

To change the firmware later, hold BOOTSEL while plugging in again.

## Step 4: Check the Pico is detected

Unplug the Pico, start watching the kernel log, and plug it back in:

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
