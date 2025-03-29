---
sidebar_position: 3
title: System Setup & Security
slug: /air-gapped-computer/system-setup/
tags: [air-gapped, computer, OS, software, libreboot, ssd]
---

# System Setup & Security

When setting up your Air-Gapped Computer, it’s essential to focus on three key areas: BIOS firmware, Operating System, and Disk Encryption.


## BIOS: Libreboot

Libreboot ([see my guide here](/docs/libreboot)) is an open-source BIOS/firmware replacement that offers significant security advantages for any computer, particularly for an AGC. By removing proprietary firmware like Intel Management Engine (ME) or AMD Platform Security Processor (PSP), Libreboot eliminates potential backdoors that could compromise the security of your device. In an AGC setup, where the primary concern is maintaining a completely isolated, tamper-proof system, using Libreboot ensures that no hidden code is running on your hardware, minimizing the risk of attacks. Libreboot is fully transparent, meaning its source code is available for review, making it an ideal choice for those who prioritize control over their system and its security.


## OS: Linux Mint

Linux Mint is a great choice for an AGC due to its balance of ease of use and stability. It offers a lightweight, user-friendly experience, ideal for minimizing unnecessary services and applications in an offline setup. Built on Ubuntu, Linux Mint benefits from a reputation for reliability and compatibility with various hardware, making it a solid foundation for a secure, offline environment. Its default desktop environment is straightforward and easy to navigate, even for users who aren't deeply familiar with Linux.


## Hard Drive: LUKS Encryption

Linux Mint offers full disk encryption through LUKS (Linux Unified Key Setup), which ensures that all data on the device remains encrypted at rest. During installation, you can select LUKS to encrypt the entire drive, protecting sensitive data even if the device is stolen or accessed without authorization. LUKS is widely regarded as one of the most reliable encryption standards on Linux, offering both strong security and flexibility. The system uses a passphrase to unlock the encryption, and it supports additional layers of protection, such as multiple key slots for different passphrases. With LUKS, your AGC can operate securely offline, with all data fully protected from unauthorized access, making it a perfect solution for safeguarding critical Bitcoin data and other sensitive files.