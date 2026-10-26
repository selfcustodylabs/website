---
sidebar_position: 1
title: "Bitcoin Security: DIY Seed Generation & Advanced Protection"
description: "Advanced Bitcoin security: generate seeds with dice, add passphrase protection, and apply operational and physical security best practices."
keywords: ["bitcoin security", "seed generation", "diy seed", "passphrase", "operational security", "self custody security", "dice roll seed"]
tags: ["security", "seed", "passphrase", "opsec"]
slug: /security
---

# Security hardening guides

Bitcoin security works in layers, added in order as your holdings and threats grow: a hardware wallet with a tested backup first, then a seed you made with dice, a passphrase, operational security (how you behave and what you say), physical security (where things are kept and what happens under threat), and finally multisig. Most people need only the first few; match the layers to your [threat model](/docs/learn/fundamentals/threat-models/). These guides assume you already have a working hardware wallet; if not, start with [wallet setup](/docs/wallet-setup/).

## What are the layers?

| Layer | What it adds | Guide |
|---|---|---|
| 1. Hardware wallet | Keys stay on a device that signs; most people stop here | [Hardware wallet setup](/docs/wallet-setup/hardware-wallet/) |
| 2. A seed made with dice | Randomness you can verify instead of trusting the device | [Seed generation with dice](/docs/learn/keys/random/) |
| 3. Passphrase | A second secret, so a found seed phrase is not enough | [Passphrases](/docs/learn/keys/passphrase/) |
| 4. Operational security | Habits that stop you giving yourself away | [Operational security](/docs/security/operational-security/) |
| 5. Physical security | Protection against theft, disaster and threats to you | [Physical security](/docs/security/physical-security/) |
| 6. Multisig | No single key, device or place can lose or spend everything | [Multisig](/docs/learn/wallets/multisig/) |

## What does each guide cover?

| Guide | Time | Covers |
|---|---|---|
| [Seed generation with dice](/docs/learn/keys/random/) | 2-4 hours | Rolling dice for entropy, converting rolls to bits, calculating the BIP39 checksum, backing up on metal. Why: a device's random number generator can fail silently, as Coldcard's did until 2026, and dice-generated seeds were untouched |
| [Passphrases](/docs/learn/keys/passphrase/) | 30 minutes | How a passphrase changes the wallet, making a strong one with dice, testing and backing it up. A forgotten passphrase cannot be reset |
| [Operational security](/docs/security/operational-security/) | 30 minutes to read | Not discussing holdings, verifying before trusting, assuming devices are compromised, safe communication, social engineering |
| [Physical security](/docs/security/physical-security/) | 30 minutes to read | The "$5 wrench attack", home security, backup locations, travelling with bitcoin, decoy wallets |

## In what order should you add them?

| Stage | What to do | Who |
|-------|------------|------|
| 1 | A hardware wallet with a proper backup | Everyone |
| 2 | Test the backup by restoring from it | Everyone |
| 3 | Stop discussing your holdings publicly | Everyone |
| 4 | Add a passphrase | Meaningful holdings |
| 5 | Make your own seed with dice | High security needs |
| 6 | Secure storage and home security | Significant holdings |
| 7 | Multisig | Large holdings |

## What mistakes undermine security?

| Mistake | What it looks like |
|---|---|
| Security theatre | Worrying about exotic threats while ignoring the real ones, which are phishing, malware and social engineering |
| Complexity beyond competence | A setup you could not recover yourself, which is a trap rather than security |
| Single points of failure | One seed, one place, one device |
| Trusting without verifying | Believing a website instead of checking the address on your device and the signature on the software |
| Talking too much | Every person who knows you hold bitcoin widens your exposure |

Related reading: [what happens if you lose your seed](/docs/reference/faq/lost-seed/), [recovery scams](/docs/reference/faq/recovery-scams/), and the [before you deposit checklist](/docs/wallet-setup/before-you-deposit/).
