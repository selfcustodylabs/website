---
sidebar_position: 1
title: "Air-Gapped Computer Guide"
description: "Set up an air-gapped computer for Bitcoin self-custody. Secure seed generation, offline transaction signing, and maximum security for your private keys."
keywords: ["bitcoin", "self custody", "security", "privacy", "air-gapped computer", "offline signing", "cold storage", "AGC"]
tags: ["air-gapped", "computer", "seed", "wallet"]
---

# Air-Gapped Computer (AGC)

:::info What You'll Do
In this guide, you will:
- Understand why an air-gapped computer provides maximum security
- Choose the right hardware for your AGC
- Set up a permanently offline computer for Bitcoin operations

**Time required:** 2-4 hours  
**Difficulty:** Intermediate to Advanced  
**Prerequisites:** Old laptop (ThinkPad recommended), USB drive with Linux
:::

:::tip Background Reading
Before starting, make sure you understand:
- [What air-gapped wallets are](/docs/basics/wallets/air-gapped-wallets) and why they provide superior security
- [Private keys](/docs/basics/keys/intro) and why they must be protected
- [Seed phrases](/docs/basics/keys/seed) and how they work
:::


## Why You Need an Air-Gapped Computer

An air-gapped setup takes security to the highest level. The device holding your private keys is physically isolated from the internet—it cannot be accessed or attacked remotely.

Key security measures:
- Wi-Fi and Bluetooth physically removed
- Ethernet port disabled or permanently damaged
- Never connects to any network, ever

This is the **highest level of self-custody security**, though it requires more technical effort than standard hardware wallets.


## Use Cases for an AGC

<div class="fixed-width-table">

| Use Case | Description |
|----------|-------------|
| **Seed generation** | Create seeds from dice rolls with [DIY Seed Guide](/docs/seed) |
| **Hardware wallet verification** | Verify your HWW generates correct addresses |
| **Transaction signing** | Sign transactions completely offline |
| **Inheritance planning** | Create encrypted messages for heirs |

</div>


## Why AGC Over SeedSigner

<div class="fixed-width-table">

| Feature | AGC | SeedSigner |
|---------|-----|------------|
| **Encryption** | Store encrypted wallet backups | Stateless, unencrypted only |
| **Verification** | Use multiple wallets to cross-check | Single software |
| **User experience** | Full keyboard, large display | Small screen, camera input |
| **Discretion** | Looks like normal laptop | Known Bitcoin device |
| **Functionality** | GPG, scripts, advanced tasks | Signing only |

</div>

While SeedSigner is great for certain use cases, an AGC offers more versatility and security options.


## Guide Overview

<div class="fixed-width-table">

| Step | What You'll Do |
|------|----------------|
| 1. [Types of AGC](/docs/air-gapped-computer/types) | Choose your hardware approach |
| 2. [Setup](/docs/air-gapped-computer/setup) | Configure your air-gapped system |

</div>

---

## Related Guides

:::tip Generate Your Own Seed
Use your AGC to create a truly random seed phrase with our **[DIY Seed Generation Guide](/docs/seed)**. Dice rolls + air-gapped computer = maximum security.
:::

:::info Firmware Options
For the best AGC security, replace the stock BIOS with open-source firmware:
- **[Libreboot Guide](/docs/libreboot)** - Removes Intel ME completely
- **[Coreboot Guide](/docs/coreboot)** - Supports more laptop models
:::
