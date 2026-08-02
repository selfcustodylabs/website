---
sidebar_position: 3
title: "Air-Gapped Wallets: Complete Guide"
description: "Understand and build a Bitcoin air-gapped wallet. Concepts, hardware options (laptop, Raspberry Pi, desktop), and a full step-by-step air-gapped computer setup."
keywords: ["bitcoin", "self custody", "security", "privacy", "air-gapped", "air-gapped computer", "offline signing", "cold storage", "AGC", "libreboot"]
tags: ["bitcoin", "air-gapped", "wallet", "advanced"]
slug: /learn/wallets/air-gapped-wallets
---

# What Does "Air-Gapped" Mean?

An air-gapped wallet is a setup where the device holding the private keys is physically isolated from the internet and other networks, ensuring it cannot be remotely accessed or compromised. The main modules such as Wi-Fi and Bluetooth are physically removed.

This is the highest level of self custody security.


## Why Some People Use Air-Gapped Wallets

By keeping the signing device completely offline, air-gapped setups remove entire categories of risk.

They are commonly used by:
- Long term holders
- Privacy focused users
- People protecting significant amounts of Bitcoin

This approach prioritizes security over convenience.


## How Transactions Work

Instead of connecting directly to the internet, air-gapped wallets use:

- QR codes
- SD cards
- USB drives (used carefully)

The online device prepares the transaction.
The offline device signs it.
The signed transaction is then sent to the network.

The private keys never leave the offline device.


## Is This for Everyone?

No, and that's okay.

Air-gapped setups:
- Take more time to learn
- Require more discipline
- Are slower to use

They are not necessary for beginners, but they exist for people who want maximum control and minimal risk.

Think of this as deep cold storage, not a daily wallet.


## Why an Air-Gapped Computer Over a SeedSigner?

Both approaches give you an offline signing device, but they trade off along very different axes.

<div class="fixed-width-table">

| Feature | Air-Gapped Computer | SeedSigner |
|---------|---------------------|------------|
| **Encryption** | Store encrypted wallet backups | Stateless, unencrypted only |
| **Verification** | Use multiple wallets to cross-check | Single software |
| **User experience** | Full keyboard, large display | Small screen, camera input |
| **Discretion** | Looks like a normal laptop | Known Bitcoin device |
| **Functionality** | GPG, scripts, advanced tasks | Signing only |

</div>

SeedSigner is purpose-built and excellent at signing. An air-gapped computer is more versatile: you can use it for seed generation from dice rolls, encrypted backups, and cross-verification across multiple wallets.


## Use Cases for an Air-Gapped Computer

<div class="fixed-width-table">

| Use Case | Description |
|----------|-------------|
| **Seed generation** | Create seeds from dice rolls with the [DIY Seed Guide](/docs/learn/keys/random/) |
| **Hardware wallet verification** | Verify that your hardware wallet generates the correct addresses |
| **Transaction signing** | Sign transactions completely offline |
| **Inheritance planning** | Create encrypted messages for heirs |

</div>


## Choosing Your Hardware

When building an air-gapped computer, there are a few options to consider.

### Laptop (Recommended)

An older laptop is usually the best choice for an air-gapped setup. The **Lenovo ThinkPad X230** is affordable and easy to modify: you can physically remove the Wi-Fi and Bluetooth modules so that it cannot connect wirelessly.

Why the X230 specifically? It is well-supported by [Libreboot](/docs/libreboot), has removable wireless modules, and is inexpensive on the used market.

### Raspberry Pi Zero 1.3

The original Pi Zero 1.3 has no built-in Wi-Fi, Bluetooth, or Ethernet, so it physically cannot reach the internet. The downside is that it only has 512 MB of memory, making it difficult to run a full desktop OS. If you are comfortable on the command line, [DietPi](https://dietpi.com/) is a good lightweight option.

This is a harder-to-find device and is better suited to users who already know their way around Linux.

### Desktop Computer

A desktop can be an excellent dedicated "seed generator" because of its superior speed. You can assemble it yourself or have a shop build it, but in either case you must make sure the components do not include Wi-Fi, Bluetooth, or Ethernet. Avoiding these features at the hardware level keeps the machine truly isolated.


## Building Your Air-Gapped Computer

When setting up your air-gapped computer (using the Lenovo ThinkPad X230 as an example), focus on four areas: hardware, BIOS firmware, operating system, and disk encryption.

### Step 1: Hardware Isolation

Once you have your laptop, make it impossible to connect to the internet:

- **Remove wireless modules:** Take out the Wi-Fi, Bluetooth, and mobile network (WWAN) modules. This prevents the laptop from connecting wirelessly.
- **Disable the Ethernet port:** Either remove the Ethernet port from the motherboard or physically disable it so the laptop cannot connect, even if stolen.

### Step 2: BIOS (Libreboot)

[Libreboot](/docs/libreboot) is an open-source BIOS/firmware replacement with significant security advantages for an air-gapped computer. It removes proprietary firmware like Intel Management Engine (ME) and AMD Platform Security Processor (PSP), eliminating backdoors that could compromise the device.

For an air-gapped setup, where the whole point is maintaining an isolated, tamper-proof system, Libreboot ensures that no hidden code is running on your hardware. The source code is fully auditable.

If your hardware isn't supported by Libreboot, [Coreboot](/docs/coreboot) supports a wider range of laptops and provides most of the same benefits.

### Step 3: Operating System (Linux Mint)

Linux Mint is a good choice for an air-gapped computer because it balances ease of use and stability. It is lightweight and user-friendly, ideal for minimizing unnecessary services in an offline setup. Built on Ubuntu, it benefits from broad hardware compatibility and a reliable release cadence.

Its default desktop environment is straightforward to navigate, even for users who aren't deeply familiar with Linux.

### Step 4: Disk Encryption (LUKS)

Linux Mint offers full-disk encryption through LUKS (Linux Unified Key Setup), which keeps all data on the device encrypted at rest. During installation, select LUKS to encrypt the entire drive. This protects sensitive data even if the device is physically stolen.

LUKS is widely regarded as one of the most reliable encryption standards on Linux and supports multiple key slots for different passphrases.

### Step 5: Install Your Offline Software

With the base system in place, install the tools you will actually use offline:

- Offline seed tools such as the [Ian Coleman BIP39 tool](https://iancoleman.io/bip39/) and/or a [Bitcoin Seed Tool](https://bitcoiner.guide/seed/).
- An offline wallet such as [Sparrow](https://www.sparrowwallet.com/) or [Electrum](https://electrum.org/) for managing keys and signing transactions.

Once these are installed, you can generate seeds and create PSBTs (Partially Signed Bitcoin Transactions) on a completely isolated Bitcoin computer.


## Related Guides

:::tip Generate Your Own Seed
Use your air-gapped computer to create a truly random seed phrase with the **[DIY Seed Generation Guide](/docs/learn/keys/random/)**. Dice rolls plus an air-gapped computer gives you maximum security.
:::

:::info Firmware Options
For the best air-gapped security, replace the stock BIOS with open-source firmware:
- **[Libreboot Guide](/docs/libreboot)**: removes Intel ME completely
- **[Coreboot Guide](/docs/coreboot)**: supports more laptop models
:::

:::danger Critical Reminder
No matter which wallet you use:
- Your seed phrase is the most important thing
- Anyone with it controls your Bitcoin
- Losing it means losing access forever

The wallet is a tool. The seed phrase is the key.
:::
