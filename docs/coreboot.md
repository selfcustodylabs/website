# Coreboot Installation Guide

> Install Coreboot open-source firmware for a fast, secure, and transparent boot process. Perfect for Bitcoin nodes and security-focused setups.

Source: https://selfcustodylabs.com/docs/coreboot/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Coreboot is open-source firmware that replaces a laptop's proprietary BIOS or UEFI: it starts the hardware and hands over to a payload such as SeaBIOS or GRUB, which boots your operating system. This guide installs it on Ivy Bridge ThinkPads (the X230, T430, T430s, T530 and W530), either internally from Linux after downgrading and unlocking the stock BIOS, or externally with a Raspberry Pi Pico clipped to the flash chip, which also lets you neutralise the Intel Management Engine with me_cleaner. It supports more hardware than [Libreboot](https://selfcustodylabs.com/docs/libreboot/), at the cost of more vendor code left in place.

![A ThinkPad T430s running Coreboot with the SeaBIOS payload, its boot menu listing the DVD drive and the internal SSD](https://selfcustodylabs.com/img/coreboot/t430s.webp)

Time: 2-4 hours. Cost: $0 (internal flash) or $15-30 (external flash hardware). Level: Advanced. Updated: 26 Oct 2026. You need: Supported laptop, Linux system for building.

## Why use coreboot?

Most computers run proprietary BIOS or UEFI firmware that nobody outside the vendor can inspect. Coreboot replaces it with open source:

<div class="fixed-width-table">

| Benefit | What it means |
|---------|-------------|
| Open source | The boot code can be audited and rebuilt |
| Minimal | It initialises only what is needed, then hands over |
| Fast | Boots quicker than the stock firmware |
| Wide support | Runs on more machines than Libreboot |

</div>

What it does not do is remove all closed code. On these ThinkPads the Intel Management Engine firmware stays in the flash chip; the [external flashing guide](https://selfcustodylabs.com/docs/coreboot/external-flashing/) neutralises it with me_cleaner, which strips most of it and disables the rest. Some boards also need other vendor code, such as CPU microcode.

## How does coreboot start a computer?

Coreboot runs in stages: a tiny bootblock, then romstage, which sets up memory, then ramstage, which initialises the rest of the hardware, and finally the payload you chose (GRUB, SeaBIOS or a Linux kernel), which boots the operating system. Doing only what is necessary keeps it small, fast and easier to audit.

## Which route should you take?

| Route | When | Pages |
|---|---|---|
| Internal flashing | Your Ivy Bridge ThinkPad's BIOS can be downgraded and unlocked; no disassembly or programmer | [Downgrade](https://selfcustodylabs.com/docs/coreboot/internal/downgrading-bios/), [unlock](https://selfcustodylabs.com/docs/coreboot/internal/unlocking-bios/), [flash](https://selfcustodylabs.com/docs/coreboot/internal/flashing-bios/) |
| External flashing | You want to neutralise the Intel ME, the board does not allow internal flashing, or an internal flash failed | [External flashing](https://selfcustodylabs.com/docs/coreboot/external-flashing/) |

Both start from the [requirements](https://selfcustodylabs.com/docs/coreboot/requirements/) and [building coreboot](https://selfcustodylabs.com/docs/coreboot/build/). Once it is installed, use the laptop as a [Bitcoin computer](https://selfcustodylabs.com/docs/advanced/bitcoin-computer/) or an [air-gapped computer](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/).
