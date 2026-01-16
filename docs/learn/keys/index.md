---
sidebar_position: 0
sidebar_label: "Overview"
title: "Bitcoin Keys Explained: Private Keys, Seeds & Derivation Paths"
description: "Learn how Bitcoin keys work: private keys, seed phrases (BIP39), extended keys (xpub/xprv), and derivation paths. The foundation of Bitcoin ownership."
keywords: ["bitcoin keys", "private key", "seed phrase", "BIP39", "xpub", "xprv", "derivation path", "bitcoin ownership", "self custody"]
tags: ["keys", "seed", "bitcoin", "fundamentals"]
slug: /learn/keys
---

# Understanding Bitcoin Keys

Everything in Bitcoin self-custody comes back to one thing: **keys**. Your keys are your Bitcoin. This section explains how they work, from the ground up.

## The Big Picture

Here's what you need to understand: Bitcoin doesn't know who you are. It doesn't care about your name, your identity, or your bank account. The only thing that matters is whether you can prove you control the keys to a specific address.

```
THE KEY HIERARCHY
═══════════════════════════════════════════════════════════════

  Random Number (Entropy)
         │
         ▼
    Seed Phrase ──────────► 24 words you write down
    (BIP39)                  "abandon ability able..."
         │
         ▼
  Master Private Key ─────► One key that rules them all
    (xprv)                   Controls everything below
         │
         ▼
  Derivation Path ────────► Rules for generating child keys
    (BIP32/44/84)            m/84'/0'/0'/0/0
         │
         ▼
  Individual Keys ────────► Specific keys for specific addresses
         │
         ▼
    Addresses ────────────► Where Bitcoin is sent
                             bc1q...
```

**You don't need to understand every detail.** But knowing the general flow helps you understand:
- Why your seed phrase is so important (it's the root of everything)
- Why you can generate unlimited addresses from one seed
- Why losing your seed means losing everything
- Why different wallets can restore the same Bitcoin


## What You'll Learn

This section covers the key concepts in order, building from simple to complex:

### 1. [Private Keys](/docs/learn/keys/intro)
The foundation. A private key is just a very large random number that gives you control over Bitcoin at a specific address. Understand this, and everything else makes sense.

### 2. [Seed Phrases](/docs/learn/keys/seed)
How that random number becomes 24 memorable words. The BIP39 standard that makes backups human-friendly—and why word order matters.

### 3. [Extended Private Keys (xprv)](/docs/learn/keys/xprv)
How one seed generates unlimited keys. The "master key" concept that lets you create as many addresses as you need from a single backup.

### 4. [Extended Public Keys (xpub)](/docs/learn/keys/xpub)
The "watch-only" side of your wallet. How you can share the ability to *see* your Bitcoin without sharing the ability to *spend* it.

### 5. [Derivation Paths](/docs/learn/keys/derivation-path)
The roadmap your wallet follows to generate specific keys. Why `m/84'/0'/0'/0/0` matters—and when it doesn't.

### 6. [Passphrases](/docs/learn/keys/passphrase)
An optional 25th word that creates hidden wallets. Extra security, but with serious trade-offs to understand.

### 7. [Randomness](/docs/learn/keys/random) *(Technical)*
Why the quality of your random number matters enormously. The difference between "random enough" and actually random.

### 8. [Number Systems](/docs/learn/keys/number-systems) *(Technical)*
Binary, decimal, hexadecimal—the number formats you'll encounter. Reference material for when you need it.


## Key Concepts to Remember

Before diving in, here are the essential principles:

:::tip Principle 1: Keys Are Everything
Your Bitcoin exists on the blockchain. Your private key is the only proof that you're allowed to move it. No key = no Bitcoin.
:::

:::tip Principle 2: Seeds Are Keys
Your seed phrase isn't a "backup" of your key—it *is* your key in a different format. Anyone with your seed phrase controls your Bitcoin completely.
:::

:::tip Principle 3: One Seed, Many Keys
A single seed phrase can generate billions of addresses. You don't need a new seed for each transaction—your wallet handles this automatically.
:::

:::tip Principle 4: Public ≠ Private
Extended public keys (xpubs) let others see your balances without being able to spend. Useful, but still sensitive—they reveal your entire transaction history.
:::


## How Deep Do You Need to Go?

**For most users:**
- Understand that your seed phrase IS your Bitcoin
- Know that you can restore your wallet anywhere with the same seed
- Learn proper seed backup practices

**For serious self-custody:**
- Understand derivation paths (matters for recovery)
- Know the difference between xpub and xprv
- Consider passphrases for additional security

**For maximum understanding:**
- Learn how randomness affects security
- Understand the math behind key derivation
- Be able to verify seed generation independently


---

## Ready to Begin?

Start with the foundation:

→ **[Private Keys Explained](/docs/learn/keys/intro)** — What keys are and why they matter

Or if you want the practical summary:

→ **[Seed Phrases](/docs/learn/keys/seed)** — The 24 words that control your Bitcoin

<RelatedArticles 
  title="Related Sections"
  articles={[
    { title: "Hardware Wallets", href: "/docs/learn/wallets/hardware-wallets/", tag: "Learn" },
    { title: "Hardware Wallet Setup", href: "/docs/wallet-setup/hardware-wallet/", tag: "Guide" },
    { title: "DIY Seed Generation", href: "/docs/security/seed-generation/", tag: "Guide" },
    { title: "Glossary", href: "/docs/reference/glossary/", tag: "Reference" },
  ]}
/>
