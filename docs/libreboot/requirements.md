---
sidebar_position: 2
title: "Libreboot Hardware Requirements"
description: "Practical guide: HW Requirements. Covers Laptop, Raspberry Pi Pico H with pre-soldered headers, Pomona 5250 SOIC8 Clip."
keywords: ["bitcoin", "self custody", "security", "privacy", "libreboot", "requirements"]
tags: ["libreboot", "raspberry", "pico", "bios", "pomona", "clip", "usb", "cables"]
---
# Hardware Requirements

We created this guide specifically for installing Libreboot on Lenovo ThinkPad models with an SOIC8 (8-pin) BIOS chip. To get started, you'll need the following equipment:

## Laptop

Libreboot supports several Lenovo ThinkPad models, with the **ThinkPad T480s** being the latest and most powerful option. It supports NVMe storage and up to 24GB of RAM, making it an excellent choice.

Here’s the complete list of supported models covered in this guide.

- X Series: X230
- T Series: T420, T430, T440p, T480s, T530
- W Series: W530


## Raspberry Pi Pico H (with pre-soldered headers)

The Raspberry Pi Pico H is an affordable microcontroller that operates at 3.3V logic levels, ensuring safe communication with your BIOS chip without the risk of damage from 5V signals.

![Pico](/img/libreboot/pico.webp)


## Pomona 5250 SOIC8 Clip

The Pomona 5250 clip is widely regarded as the best tool for flashing SOIC8 chips, providing a reliable and secure connection during the process.

![Pomona](/img/libreboot/pomona.webp)


## Female-to-Female Dupont Cables (10cm)

You’ll need 10cm female-to-female Dupont cables to connect your Raspberry Pi Pico to the SOIC8 clip. Longer cables may introduce signal instability, increasing the risk of data errors.

![Dupont](/img/libreboot/dupont.webp)


## Micro USB Cable (with Data Transfer Support)

A Micro USB cable is required to connect your Raspberry Pi Pico to your laptop. Make sure the cable supports data transfer, not just charging, to ensure proper communication during the flashing process.

![USB](/img/libreboot/usb.webp)