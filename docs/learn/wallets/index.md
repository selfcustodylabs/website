---
sidebar_position: 0
sidebar_label: "Overview"
title: "Bitcoin Wallets: Hardware, Software, Air-Gapped, Multisig"
description: "Bitcoin wallet types compared: hardware wallets, software wallets, air-gapped setups, and multisig vaults. Pick the right security model for your needs."
keywords: ["bitcoin wallet", "hardware wallet", "software wallet", "air gapped", "multisig", "self custody"]
tags: ["wallet", "bitcoin", "self custody"]
slug: /learn/wallets
date: "2026-04-15"
---

# Bitcoin wallets

A bitcoin wallet does not hold bitcoin: the coins are recorded on the blockchain, and the wallet holds the keys that can spend them. Wallet types differ in where those keys live and what can reach them. A software wallet keeps keys on a phone or computer; a hardware wallet keeps them on a dedicated device that signs; an air-gapped wallet keeps them on a device that never connects to a network; a multisig wallet spreads them across several devices so that no single one can spend.

## Which wallet type fits which situation?

| Wallet type | Where the keys live | Suits | Read |
|---|---|---|---|
| Software wallet | A phone or computer app | Learning and small amounts | [Software wallets](/docs/learn/wallets/software-wallets/) |
| Hardware wallet | A dedicated signing device | Savings you would miss; most people | [Hardware wallets](/docs/learn/wallets/hardware-wallets/) |
| Air-gapped wallet | A device that never touches a network | Larger holdings, higher threat levels | [Air-gapped wallets](/docs/learn/wallets/air-gapped-wallets/) |
| Multisig | Several devices, any M of N needed to spend | Life-changing amounts, inheritance | [Multisig](/docs/learn/wallets/multisig/) |

Pick the model that matches your [threat model](/docs/learn/fundamentals/threat-models/), not the most impressive one: the right wallet for $500 is rarely the right wallet for $50,000. Two related pages cover what went wrong for one vendor in 2026, the [Coldcard entropy incident](/docs/learn/wallets/coldcard-entropy-incident/), and the [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) for choosing a device.
