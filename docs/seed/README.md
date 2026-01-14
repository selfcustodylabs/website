---
sidebar_position: 1
title: "DIY Bitcoin Seed Generation"
description: "Generate your own Bitcoin seed phrase using dice rolls for true randomness. Step-by-step guide to creating a secure BIP39 seed without trusting third parties."
keywords: ["bitcoin seed", "seed phrase", "DIY seed", "dice roll", "BIP39", "entropy", "self custody"]
tags: ["seed", "self custody", "entropy", "dice"]
---
# DIY Bitcoin Seed

:::info What You'll Do
In this guide, you will:
- Generate true randomness using physical dice rolls
- Convert binary entropy to BIP39 seed words
- Calculate and verify your checksum
- Securely backup your seed phrase on metal

**Time required:** 1-2 hours  
**Difficulty:** Intermediate  
**Requirements:** [Air-gapped computer](/docs/air-gapped-computer) or Raspberry Pi Zero, casino dice
:::

:::tip Prerequisites
Before starting, make sure you understand:
- [What seed phrases are](/docs/basics/keys/seed) and how they protect your Bitcoin
- [Why randomness matters](/docs/basics/keys/random) for security
- [Private keys](/docs/basics/keys/intro) and how they relate to seeds
:::


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
| 1. [Requirements](/docs/seed/requirements) | Gather materials and set up air-gapped environment |
| 2. [Dice Rolling](/docs/seed/dice-roll) | Generate 256 bits of entropy with 99 dice rolls |
| 3. [Binary to Decimal](/docs/seed/binary-decimal) | Convert binary to numbers (0-2047) |
| 4. [Checksum](/docs/seed/checksum) | Calculate the verification bits |
| 5. [BIP39 Words](/docs/seed/bip39) | Look up your 24 words |
| 6. [Backup](/docs/seed/backup) | Store your seed securely on metal |

</div>

Let's begin!
