---
sidebar_position: 1
title: Libreboot
slug: /libreboot/
tags: [libreboot, open source, bios]
---

# Libreboot

## Why Libreboot?

If you're running a Bitcoin focused laptop, security and privacy should be top priorities. Libreboot helps by:
- ✅ Eliminating Backdoors – Removes Intel ME/AMD PSP, which are potential surveillance tools.
- ✅ Enhancing Security – Reduces attack surface by using open-source firmware.
- ✅ Improving Trust – Fully auditable, with no hidden proprietary code.
- ✅ Boosting Performance – Faster boot times and a minimal firmware footprint.

For Bitcoiners who value sovereignty and verifiable security, Libreboot ensures your laptop runs only free, transparent, and user-controlled software—perfect for self custody, running a Bitcoin full node, or signing transactions offline.


## What is Libreboot?

Libreboot is a free, open-source alternative to proprietary BIOS and UEFI firmware. It’s based on Coreboot and removes closed-source code like Intel Management Engine (ME) and AMD Platform Security Processor (PSP), which are potential security risks. Libreboot works on specific Intel, AMD, and ARM-based motherboards, commonly found in older laptops and desktops.

It initializes your hardware (CPU, RAM, storage, etc.) and loads your operating system. Linux and BSD are well-supported, and help is available on the #libreboot channel on Libera IRC.

## How Libreboot Works

Libreboot includes multiple bootloader options:

- **GRUB** – A flexible GNU bootloader for Linux and BSD.
- **SeaBIOS** – A lightweight BIOS-compatible option for legacy software.
- **U-Boot** – A simple UEFI bootloader for ARM and some x86/x86_64 systems.

All these options come bundled, letting you choose the right one when you boot.

![](/img/libreboot/t480s.jpg)