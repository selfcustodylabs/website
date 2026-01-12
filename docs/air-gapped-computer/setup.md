---
sidebar_position: 3
title: "Air-Gapped Computer Setup"
description: "Step-by-step guide to setting up your air-gapped computer with Libreboot BIOS and Linux Mint for secure Bitcoin operations."
keywords: ["bitcoin", "self custody", "security", "air-gapped", "setup", "libreboot", "linux mint"]
tags: ["air-gapped", "setup", "libreboot", "linux", "OS"]
---
# Air-Gapped Computer Setup & Security

When setting up your Air-Gapped Computer (for this example the **Lenovo ThinkPad X230**), it’s essential to focus on four key areas: Harware, BIOS firmware, Operating System, and Disk Encryption.

## Hardware

Once you have your laptop, take steps to make it impossible to connect to the internet:

- **Remove wireless modules:** Take out the Wi-Fi, Bluetooth, and mobile network (WWAN) modules. This prevents the laptop from connecting wirelessly.
- **Disable the Ethernet port:** Either remove the Ethernet port from the motherboard or physically disable it so the laptop cannot connect to the internet, even if stolen.


## BIOS: Libreboot

Libreboot ([see my guide here](/docs/libreboot)) is an open-source BIOS/firmware replacement that offers significant security advantages for any computer, particularly for an AGC. By removing proprietary firmware like Intel Management Engine (ME) or AMD Platform Security Processor (PSP), Libreboot eliminates potential backdoors that could compromise the security of your device. In an AGC setup, where the primary concern is maintaining a completely isolated, tamper-proof system, using Libreboot ensures that no hidden code is running on your hardware, minimizing the risk of attacks. Libreboot is fully transparent, meaning its source code is available for review, making it an ideal choice for those who prioritize control over their system and its security.


## OS: Linux Mint

Linux Mint is a great choice for an AGC due to its balance of ease of use and stability. It offers a lightweight, user friendly experience, ideal for minimizing unnecessary services and applications in an offline setup. Built on Ubuntu, Linux Mint benefits from a reputation for reliability and compatibility with various hardware, making it a solid foundation for a secure, offline environment. Its default desktop environment is straightforward and easy to navigate, even for users who aren't deeply familiar with Linux.


## Hard Drive: LUKS Encryption

Linux Mint offers full disk encryption through LUKS (Linux Unified Key Setup), which ensures that all data on the device remains encrypted at rest. During installation, you can select LUKS to encrypt the entire drive, protecting sensitive data even if the device is stolen or accessed without authorization. LUKS is widely regarded as one of the most reliable encryption standards on Linux, offering both strong security and flexibility. The system uses a passphrase to unlock the encryption, and it supports additional layers of protection, such as multiple key slots for different passphrases. With LUKS, your AGC can operate securely offline, with all data fully protected from unauthorized access, making it a perfect solution for safeguarding critical Bitcoin data and other sensitive files.

## Softwares

- Install offline tools such as the [Ian Coleman BIP39](https://iancoleman.io/bip39/) tool and/or a [Bitcoin Seed Tool](https://bitcoiner.guide/seed/).
- Install a wallet like [Sparrow](https://www.sparrowwallet.com/) or [Electrum](https://electrum.org/) for managing keys and signing transactions offline.

By following these steps, you can start experimenting with offline seed management and create PSBTs (Partially Signed Bitcoin Transactions) on a completely isolated Bitcoin computer.