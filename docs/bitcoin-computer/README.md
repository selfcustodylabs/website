---
sidebar_position: 1
title: "Dedicated Bitcoin Computer Guide"
description: "Build a dedicated Bitcoin computer for secure transactions. Learn why using a regular computer is dangerous and how to protect your Bitcoin."
keywords: ["bitcoin computer", "dedicated computer", "malware protection", "secure transactions", "self custody"]
tags: ["bitcoin", "computer", "security", "malware"]
---

# Dedicated Bitcoin Computer

:::info What You'll Do
In this guide, you will:
- Understand why a dedicated Bitcoin computer is important
- Choose hardware for your Bitcoin-only machine
- Set up a secure environment for transactions

**Time required:** 1-2 hours  
**Difficulty:** Beginner to Intermediate  
**Prerequisites:** Spare laptop or desktop, USB drive
:::

:::tip Background Reading
Before starting, make sure you understand:
- [Hardware wallets](/docs/basics/wallets/hardware-wallets) and how they protect your keys
- [Why privacy matters](/docs/basics/privacy/why-privacy-matters) when transacting
:::

:::danger Important
**Never use your regular computer for Bitcoin transactions!** Malware on your everyday machine can compromise your security even if you use a hardware wallet.
:::


## What is a Bitcoin Computer?

A Bitcoin computer is a dedicated device for securely creating and broadcasting Bitcoin transactions. It runs minimal software in a clean environment, reducing attack surface.

Transaction signing should still be handled by:
- A hardware wallet, or
- An [air-gapped computer](/docs/air-gapped-computer) for maximum security


## Why Your Regular Computer is Dangerous

Your everyday computer is exposed to:
- Websites, downloads, and email attachments
- Browser extensions and plugins
- Various software with potential vulnerabilities

If malware infects your regular computer, attackers could:

| Risk | Impact |
|------|--------|
| **View your balances** | Know how much you have (targeting risk) |
| **Modify clipboard** | Change destination addresses when you paste |
| **Monitor activity** | Track when you transact |
| **Physical threat** | Target you if they see large holdings |

A dedicated Bitcoin computer isolates your Bitcoin activity from these risks.


## Guide Overview

| Step | What You'll Do |
|------|----------------|
| 1. [Choosing Hardware](/docs/bitcoin-computer/choice) | Select appropriate hardware |
| 2. [Setup](/docs/bitcoin-computer/setup) | Install and configure your Bitcoin computer |

---

## Related Guides

:::tip Want Maximum Security?
For the highest level of protection, consider an **[Air-Gapped Computer](/docs/air-gapped-computer)** - a device that never connects to the internet and handles all signing offline.
:::

:::info Firmware Security
Enhance your Bitcoin computer's security with open-source firmware:
- **[Libreboot Guide](/docs/libreboot)** - Maximum openness, removes Intel ME
- **[Coreboot Guide](/docs/coreboot)** - Supports more hardware models
:::
