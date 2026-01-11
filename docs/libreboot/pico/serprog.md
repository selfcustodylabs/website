---
sidebar_position: 1
title: "Build Serprog"
description: "Practical guide: Build Serprog. Covers Build serprog firmware from source, Connect the Pico to PC, Copy the Firmware."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "build", "serprog"]
slug: "/libreboot/build-serprog/"
tags: ["libreboot", "raspberry", "pico", "serprog"]
---
# Build Serprog

Install the required dependencies

```bash
sudo apt install cmake libusb-1.0-0-dev libmbedtls-dev gcc-arm-none-eabi -y
```

## Build serprog firmware from source

To build the pico-serprog firmware from source, navigate to your lbmk folder and run:

```bash
./mk -b pico-serprog
```

This command will automatically compile the firmware for the Raspberry Pi Pico (it will take some time).

Once the build is complete, the firmware files will be located in:

- `bin/serprog_pico/serprog_pico.uf2`
- `bin/serprog_pico/serprog_pico_w.uf2`

Files with `pico2` in the name are specifically for the Pico 2, but they are also compatible.


## Connect the Pico to PC

- Connect the USB cable to your laptop
- Press and hold the BOOTSEL button on your Pico while you plug it in (this forces it into the bootloader mode)
- The Pico will be detected as USB flash drive

## Copy the Firmware

- Drag your `serprog_pico.uf2` into your Pico.
- Your Pico will disconnect, that means it is now ready and can be unplugged.

Type the following command

```bash
sudo dmesg -wH
```

Now plug your Raspberry Pico again and you should get the following output

```text
[  +0.092782] usb 3-7.2: New USB device found, idVendor=cafe, idProduct=4001, bcdDevice= 1.00
[  +0.000010] usb 3-7.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  +0.000003] usb 3-7.2: Product: pico-serprog (pico)
[  +0.000003] usb 3-7.2: Manufacturer: libreboot.org
[  +0.000002] usb 3-7.2: SerialNumber: E661410403213F31
[  +0.010021] cdc_acm 3-7.2:1.0: ttyACM0: USB ACM device
```

Please ensure you take note of the serial port designation (in this instance, ttyACM0) to which your device is connected. This step is crucial as we'll need to verify the readiness of the device for usage following the installation of flashprog.

Now you can unplug the Raspberry Pico

If you want to change the firwmare in the future, you need to press the BOOTSEL button on the board while you plug it in.