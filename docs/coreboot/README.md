---
sidebar_position: 1
title: Coreboot
slug: /coreboot/
tags: [coreboot, open source, bios]
---

# Coreboot BIOS

![](/img/coreboot/coreboot.png)


## Why Coreboot?

Most computers use proprietary BIOS or UEFI firmware, which is closed-source, slow, and potentially insecure. These firmwares may include unnecessary features or hidden backdoors. Coreboot is a fast, minimal, and open-source alternative that gives users full control over what runs at boot.

For Bitcoiners, this matters. Whether you're running a full node, using a hardware wallet, or signing transactions offline, Coreboot ensures your machine starts with clean, transparent code—free from vendor secrets or potential exploits.


## What is Coreboot?

Coreboot is a free and open-source replacement for traditional BIOS/UEFI. It initializes your hardware just enough to launch a "payload"—like GRUB, SeaBIOS, or a Linux kernel. It’s lightweight, secure, and designed to do only what’s necessary, nothing more.


## How Correboot Works

Coreboot runs in stages. It begins with a tiny bootblock, followed by romstage (which sets up memory), then ramstage (which initializes the rest of the hardware). Finally, it launches the chosen payload. This structure makes the boot process faster, simpler, and easier to audit—perfect for anyone who values system integrity.



![](/img/coreboot/t430s.jpg)