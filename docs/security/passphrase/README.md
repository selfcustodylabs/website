---
sidebar_position: 3
title: "Create a Strong Bitcoin Passphrase (25th Word Guide)"
description: "Create a secure Bitcoin passphrase using dice rolls and the EFF word list. Add an extra layer of protection to your seed phrase with true randomness."
keywords: ["bitcoin passphrase", "diceware", "EFF word list", "seed security", "25th word"]
tags: ["passphrase", "self custody", "entropy", "dice", "security"]
slug: /security/passphrase
---
# DIY Bitcoin Passphrase

:::info What You'll Do
In this guide, you will:
- Generate a cryptographically strong passphrase using dice rolls
- Use the EFF word list for better memorability
- Properly backup your passphrase

**Time required:** 30 minutes  
**Difficulty:** Beginner  
**Estimated cost:** $5-10 (casino dice) or $0 (use any dice)  
**Requirements:** 5 six-sided dice, pen and paper
:::

:::tip Prerequisites
Before starting, make sure you understand:
- [What a passphrase is](/docs/learn/keys/passphrase) and its risks/benefits
- [Why randomness matters](/docs/learn/keys/random) for security
- You should already have a [seed phrase](/docs/learn/keys/seed) to protect
:::


## Why Use Dice for Passphrases?

Human-chosen passwords are predictable. Even when we try to be random, we follow patterns that attackers can exploit.

<div class="fixed-width-table">

| Human-chosen | Dice-generated |
|--------------|----------------|
| `Bitcoin2024!` | `cruelty postal clammy plasma` |
| `MyD0g$Name` | `stardust article corrode unmasked` |
| Predictable patterns | True randomness |
| Vulnerable to guessing | Measurable security |

</div>

With dice, every word is equally likely. No patterns. No bias. Just math.


## How Much Security?

Each word from the EFF list (7,776 words) adds ~12.9 bits of entropy:

<div class="fixed-width-table">

| Words | Entropy | Attempts to Crack |
|-------|---------|-------------------|
| 4 words | ~51 bits | 2.3 quadrillion |
| 5 words | ~64 bits | 18 quintillion |
| 6 words | ~77 bits | 151 sextillion |

</div>

For Bitcoin passphrases, **4-6 words** provides excellent security while remaining memorable.


## Guide Overview

<div class="fixed-width-table">

| Step | What You'll Do |
|------|----------------|
| 1. [Word Lists](/docs/security/passphrase/word-lists) | Understand EFF vs original Diceware |
| 2. [Dice Rolling](/docs/security/passphrase/dice-roll) | Generate your random words |
| 3. [Backup](/docs/security/passphrase/backup) | Store your passphrase securely |

</div>


## Important Warnings

:::danger Critical
- **Never lose your passphrase** — Without it, your Bitcoin is gone forever
- **A passphrase creates a completely different wallet** — Even a typo generates different addresses
- **Store separately from your seed** — Different locations for defense in depth
:::

Ready? Let's create your passphrase!
