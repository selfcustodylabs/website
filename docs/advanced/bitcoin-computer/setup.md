---
sidebar_position: 3
title: "Bitcoin Computer Setup Guide"
description: "Set up your dedicated Bitcoin computer with Libreboot BIOS, Linux Mint, and LUKS encryption for maximum security and privacy."
keywords: ["bitcoin computer setup", "libreboot", "linux mint", "LUKS encryption", "secure setup"]
tags: ["bitcoin", "computer", "setup", "libreboot", "encryption"]
---
# System Setup & Security

When setting up your Bitcoin computer, it’s essential to focus on three key areas: BIOS firmware, Operating System, and Disk Encryption.


## BIOS: Libreboot

Libreboot ([see my guide here](/docs/libreboot)) is an open-source BIOS/firmware replacement that offers significant security advantages for any computer, particularly for an Bitcoin computer. By removing proprietary firmware like Intel Management Engine (ME) or AMD Platform Security Processor (PSP), Libreboot eliminates potential backdoors that could compromise the security of your device. In an Bitcoin computer setup, where the primary concern is creating and broadcasting Bitcoin transactions in a protected, malware-free environment, using Libreboot ensures that no hidden code is running on your hardware, minimizing the risk of attacks. Libreboot is fully transparent, meaning its source code is available for review, making it an ideal choice for those who prioritize control over their system and its security.


## OS: Linux Mint

Linux Mint is a great choice for a Bitcoin Laptop due to its balance of ease of use and stability. It offers a lightweight, user-friendly experience, ideal for minimizing unnecessary services and applications in an offline setup. Built on Ubuntu, Linux Mint benefits from a reputation for reliability and compatibility with various hardware, making it a solid foundation for a secure, online environment. Its default desktop environment is straightforward and easy to navigate, even for users who aren't deeply familiar with Linux.


## Hard Drive: LUKS Encryption

Linux Mint offers full disk encryption through LUKS (Linux Unified Key Setup), which ensures that all data on the device remains encrypted at rest. During installation, you must select LUKS to encrypt the entire drive, protecting sensitive data even if the device is stolen or accessed without authorization. LUKS is widely regarded as one of the most reliable encryption standards on Linux, offering both strong security and flexibility. The system uses a passphrase to unlock the encryption, and it supports additional layers of protection, such as multiple key slots for different passphrases. With LUKS, your Bitcoin computer can operate securely online, with all data fully protected from unauthorized access, making it a perfect solution for safeguarding critical Bitcoin data and other sensitive files.


## TOR

Tor (The Onion Router) protects your privacy by encrypting your internet traffic and routing it through multiple servers, making it difficult for anyone to track your IP address or link your online activity to your identity.  

Since you'll be setting up a Bitcoin node on a separate device that runs over Tor, it's not strictly necessary to route all internet traffic from your Bitcoin laptop through Tor. However, because the laptop is connected to the internet, routing all Bitcoin-related activity through Tor ensures maximum privacy.

#### Why Use Tor?

- **Hides Your IP Address** – Prevents blockchain surveillance from linking your node or wallet activity to your location.
- **Bypasses Censorship** – Some ISPs or governments restrict Bitcoin traffic; Tor helps bypass these blocks.
- **Enhances Privacy** – Even if you’re running a full node, Tor ensures your connections remain anonymous.