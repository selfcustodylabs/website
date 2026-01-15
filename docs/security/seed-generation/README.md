---
sidebar_position: 2
title: "Generate Your Own Bitcoin Seed Phrase (DIY Dice Method)"
description: "Generate your own Bitcoin seed phrase using dice rolls for true randomness. Step-by-step guide to creating a secure BIP39 seed without trusting third parties."
keywords: ["bitcoin seed", "seed phrase", "DIY seed", "dice roll", "BIP39", "entropy", "self custody"]
tags: ["seed", "self custody", "entropy", "dice", "security"]
slug: /security/seed-generation
---
# DIY Bitcoin Seed

:::danger Fund Loss Warning
**Mistakes in seed generation can result in permanent, irreversible loss of all Bitcoin.**

Common fatal errors:
- **Using a compromised computer** — If your "air-gapped" machine was ever connected to the internet, it may have malware that captures your seed
- **Insufficient randomness** — Using weak entropy (like mental "random" numbers) makes your seed guessable
- **Transcription errors** — A single wrong word means a completely different (empty) wallet
- **Improper backup storage** — Paper burns, fades, and water-damages easily

**There is no recovery.** No customer support. No password reset. If you lose access to your seed or generate it insecurely, your Bitcoin is gone forever.

**Do not proceed unless you fully understand these risks.**
:::

:::info What You'll Do
In this guide, you will:
- Generate true randomness using physical dice rolls
- Convert binary entropy to BIP39 seed words
- Calculate and verify your checksum
- Securely backup your seed phrase on metal

**Time required:** 2-4 hours  
**Difficulty:** Intermediate  
**Estimated cost:** $10-30 (casino dice) + $20-50 (metal backup plate)  
**Requirements:** [Air-gapped computer](/docs/advanced/air-gapped-computer) or Raspberry Pi Zero, casino dice
:::

:::tip Prerequisites
Before starting, make sure you understand:
- [What seed phrases are](/docs/learn/keys/seed) and how they protect your Bitcoin
- [Why randomness matters](/docs/learn/keys/random) for security
- [Private keys](/docs/learn/keys/intro) and how they relate to seeds
:::

## Who Is This Guide For?

| Situation | Recommendation |
|-----------|----------------|
| Learning with small amounts | **Not recommended** — Use hardware wallet's built-in seed generation |
| Moderate holdings, want to learn | **Maybe** — Practice on testnet first, understand the risks |
| Significant holdings, high security needs | **Yes** — Verifiable entropy is worth the effort |
| Don't trust hardware wallet RNG | **Yes** — This eliminates that trust requirement |
| Not comfortable with technical processes | **No** — A mistake here loses everything |

**Most people should use their hardware wallet's seed generation.** This guide is for users who want verifiable randomness and understand the additional risks of manual processes.

## Why Generate Your Own Seed?

Most wallets generate seeds for you, but this requires trust:

<div class="fixed-width-table">

| Risk | Description |
|------|-------------|
| **Weak randomness** | Software may not use proper entropy |
| **Backdoors** | Wallets could have security flaws or intentional vulnerabilities |
| **Supply chain attacks** | Pre-generated seeds have been found in compromised hardware wallets |

By generating your own seed with physical dice, you:
- **Verify the randomness yourself** — no trust required
- **Eliminate software vulnerabilities** — dice can't be hacked
- **Understand what you're protecting** — knowledge is security

</div>

## Critical Environment Requirements

:::warning Before You Begin
Your seed generation environment **must** meet ALL of these requirements:

- [ ] **Air-gapped computer** — A machine that has NEVER connected to the internet and NEVER will
- [ ] **Fresh operating system** — Booted from a verified, read-only medium (like Tails USB)
- [ ] **No wireless hardware** — WiFi and Bluetooth physically removed or disabled in BIOS
- [ ] **No cameras or microphones** — Cover or disconnect them
- [ ] **Private location** — No one can see your screen or seed words
- [ ] **No electronic devices nearby** — Phones, smartwatches, etc. can capture keystrokes or screens

**If any of these are not met, your seed may be compromised before you even finish generating it.**
:::

## What You'll Create

A 24-word BIP39 seed phrase generated from 256 bits of true randomness:

```
1.  reward    7.  camera    13. ritual    19. whisper
2.  symptom   8.  reward    14. ocean     20. weasel
3.  rude      9.  pride     15. rib       21. chunk
4.  hamster   10. roof      16. wing      22. rival
5.  wide      11. weather   17. board     23. obvious
6.  weekend   12. keep      18. potato    24. clean
```

This seed can restore your Bitcoin wallet on any BIP39-compatible software or hardware wallet.


## Guide Overview

<div class="fixed-width-table">

| Step | What You'll Do |
|------|----------------|
| 1. [Requirements](/docs/security/seed-generation/requirements) | Gather materials and set up air-gapped environment |
| 2. [Dice Rolling](/docs/security/seed-generation/dice-roll) | Generate 256 bits of entropy with 99 dice rolls |
| 3. [Binary to Decimal](/docs/security/seed-generation/binary-decimal) | Convert binary to numbers (0-2047) |
| 4. [Checksum](/docs/security/seed-generation/checksum) | Calculate the verification bits |
| 5. [BIP39 Words](/docs/security/seed-generation/bip39) | Look up your 24 words |
| 6. [Backup](/docs/security/seed-generation/backup) | Store your seed securely on metal |

</div>

Let's begin!