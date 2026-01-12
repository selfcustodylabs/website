---
sidebar_position: 1
title: "Coreboot Installation Guide"
description: "Install Coreboot open-source firmware for a fast, secure, and transparent boot process. Perfect for Bitcoin nodes and security-focused setups."
keywords: ["coreboot", "open source firmware", "BIOS replacement", "secure boot", "bitcoin computer"]
tags: ["coreboot", "open source", "bios", "firmware"]
---
# Coreboot BIOS

![Coreboot](/img/coreboot/coreboot.webp)

:::info What You'll Learn
In this guide, you will:
- Understand why open-source BIOS firmware matters
- Choose between internal and external flashing methods
- Build Coreboot from source for your laptop
- Flash Coreboot to replace your stock BIOS

**⏱️ Time required:** 2-4 hours  
**📊 Difficulty:** Advanced  
**🔧 Prerequisites:** Supported laptop, Linux system for building
:::


## Why Coreboot?

Most computers use proprietary BIOS or UEFI firmware, which is closed-source, slow, and potentially insecure. These firmwares may include unnecessary features or hidden backdoors. Coreboot is a fast, minimal, and open-source alternative that gives users full control over what runs at boot.

For Bitcoiners, this matters. Whether you're running a full node, using a hardware wallet, or signing transactions offline, Coreboot ensures your machine starts with clean, transparent code, free from vendor secrets or potential exploits.


## What is Coreboot?

Coreboot is a free and open-source replacement for traditional BIOS/UEFI. It initializes your hardware just enough to launch a "payload", like GRUB, SeaBIOS, or a Linux kernel. It’s lightweight, secure, and designed to do only what’s necessary, nothing more.


## How Coreboot Works

Coreboot runs in stages. It begins with a tiny bootblock, followed by romstage (which sets up memory), then ramstage (which initializes the rest of the hardware). Finally, it launches the chosen payload. This structure makes the boot process faster, simpler, and easier to audit, perfect for anyone who values system integrity.

![T430s](/img/coreboot/t430s.webp)

---

## Related Guides

:::info Libreboot Alternative
For even more freedom, check out **[Libreboot](/docs/libreboot)** – a Coreboot distribution that removes additional proprietary blobs like Intel ME. It supports fewer devices but offers maximum openness.
:::

:::tip Use Cases
Once you have Coreboot installed, use your laptop as a:
- **[Bitcoin Computer](/docs/bitcoin-computer)** – For secure transaction creation and broadcasting
- **[Air-Gapped Computer](/docs/air-gapped-computer)** – For offline seed generation and signing
:::