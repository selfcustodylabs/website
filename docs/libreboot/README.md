---
sidebar_position: 1
title: "Libreboot Installation Guide"
description: "Install Libreboot open-source firmware to replace your BIOS. Remove Intel ME backdoors and enhance security for your Bitcoin computer."
keywords: ["libreboot", "open source firmware", "Intel ME", "BIOS replacement", "bitcoin security"]
tags: ["libreboot", "open source", "bios", "firmware"]
---

# Libreboot BIOS

![Libreboot](/img/libreboot/libreboot.webp)

:::info What You'll Do
In this guide, you will:
- Set up external flashing hardware (Raspberry Pi Pico + SOIC8 clip)
- Build Libreboot from source
- Flash Libreboot to your laptop's BIOS chip
- Configure bootloader options

**Time required:** 3-5 hours  
**Difficulty:** Advanced  
**Prerequisites:** Supported laptop (ThinkPad recommended), Raspberry Pi Pico, SOIC8 clip
:::

:::tip Background Reading
This guide assumes you're building a [Bitcoin Computer](/docs/bitcoin-computer) or [Air-Gapped Computer](/docs/air-gapped-computer). If you're not sure why open-source firmware matters, see those guides first.
:::


## Why Libreboot?

For a Bitcoin-focused laptop, security and privacy are paramount. Libreboot provides:

<div class="fixed-width-table">

| Benefit | Description |
|---------|-------------|
| **No backdoors** | Removes Intel ME/AMD PSP surveillance components |
| **Auditable code** | Fully open-source, no hidden proprietary code |
| **Reduced attack surface** | Minimal firmware footprint |
| **Faster boot** | Less bloat means quicker startup |

</div>

For Bitcoiners who value sovereignty, Libreboot ensures your laptop runs only transparent, user-controlled software.


## What is Libreboot?

Libreboot is a free, open-source alternative to proprietary BIOS and UEFI firmware. It’s based on Coreboot and removes closed-source code like Intel Management Engine (ME) and AMD Platform Security Processor (PSP), which are potential security risks. Libreboot works on specific Intel, AMD, and ARM-based motherboards, commonly found in older laptops and desktops.

It initializes your hardware (CPU, RAM, storage, etc.) and loads your operating system. Linux and BSD are well-supported, and help is available on the #libreboot channel on Libera IRC.

## How Libreboot Works

Libreboot includes multiple bootloader options:

- **GRUB** – A flexible GNU bootloader for Linux and BSD.
- **SeaBIOS** – A lightweight BIOS-compatible option for legacy software.
- **U-Boot** – A simple UEFI bootloader for ARM and some x86/x86_64 systems.

All these options come bundled, letting you choose the right one when you boot.

![T480s](/img/libreboot/t480s.webp)

---

## Related Guides

:::info Coreboot vs Libreboot
Libreboot is based on Coreboot but removes more proprietary blobs. If your hardware isn't supported by Libreboot, check out our **[Coreboot Guide](/docs/coreboot)** for an alternative that supports more devices.
:::

:::tip Use Cases
Once you have Libreboot installed, use your laptop as a:
- **[Bitcoin Computer](/docs/bitcoin-computer)** – For secure transaction creation and broadcasting
- **[Air-Gapped Computer](/docs/air-gapped-computer)** – For offline seed generation and signing
:::