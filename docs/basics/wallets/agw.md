---
sidebar_position: 3
title: "Air-Gapped Wallets"
description: "Practical guide: Air-Gapped Wallets. Covers Why Some People Use Air-Gapped Wallets, How Transactions Work, Is This for Everyone?."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "gapped", "wallets", "air-gapped", "offline signing", "cold storage"]
slug: "/basics/wallets/air-gapped-wallets"
tags: ["bitcoin", "air-happed", "wallets"]
---
# What Does “Air-Gapped” Mean?

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

No, and that’s okay.

Air-gapped setups:
- Take more time to learn
- Require more discipline
- Are slower to use

They are not necessary for beginners, but they exist for people who want maximum control and minimal risk.

Think of this as a deep cold storage, not a daily wallet.


## Build an Air‑Gapped Device

If you want to explore air‑gapped setups in more detail, why they are useful, when you should use one, and why they can be more secure than hardware wallets, navigate to the sections dedicated to building an [Air‑gapped computer](/docs/air-gapped-computer).


:::tip One Important Reminder

No matter which wallet you use:
- Your seed phrase is the most important thing
- Anyone with it controls your Bitcoin
- Losing it means losing access forever

The wallet is a tool.
The seed phrase is the key.