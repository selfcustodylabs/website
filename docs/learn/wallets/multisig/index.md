---
sidebar_position: 1
title: "Bitcoin Multisig: Complete Guide"
description: "Understand and set up a Bitcoin multisig wallet. Concepts, 2-of-3 configurations, hardware devices, and a full step-by-step setup guide."
keywords: ["multisig", "multi-signature", "bitcoin security", "2-of-3", "hardware wallet", "self custody", "sparrow"]
tags: ["multisig", "security", "wallet", "bitcoin", "hardware wallet", "advanced"]
slug: /learn/wallets/multisig
---

# Multisig: Multi-Signature Wallets

A standard Bitcoin wallet has a single point of failure: one seed phrase controls everything. If it's stolen, your bitcoin is gone. If it's lost, your bitcoin is gone.

**Multisig** (multi-signature) eliminates this vulnerability by requiring multiple keys to spend bitcoin.


## What is Multisig?

A multisig wallet requires **multiple private keys** to authorize a transaction. Instead of one key having complete control, you distribute control across several keys.

Think of it like a bank vault that requires two managers to turn their keys simultaneously—neither can open it alone.


## The M-of-N Model

Multisig uses an "M-of-N" structure:

- **N** = Total number of keys in the setup
- **M** = Number of keys required to sign

```
2-of-3 MULTISIG:
────────────────────────────────────────────────────
Total keys: 3
Required to spend: 2

Any combination of 2 keys can authorize a transaction.
```

### Common Configurations

<div class="fixed-width-table">

| Setup | Required | Total | Use Case |
|-------|----------|-------|----------|
| **2-of-3** | 2 | 3 | Individual self-custody (most popular) |
| **3-of-5** | 3 | 5 | High-value holdings, organizations |
| **2-of-2** | 2 | 2 | Shared control (no fault tolerance) |
| **1-of-2** | 1 | 2 | Easy access from multiple locations |

</div>


## How It Works

### Creating a Multisig Wallet

1. Generate 3 separate private keys (usually on 3 hardware wallets)
2. Extract the public key (xpub) from each device
3. Combine the xpubs in coordinator software to create the multisig wallet
4. The wallet can now receive bitcoin

### Spending from a Multisig Wallet

1. Create an unsigned transaction (called a PSBT)
2. Sign with Device 1 → Transaction is still incomplete
3. Sign with Device 2 → Transaction is now valid
4. Broadcast the fully-signed transaction

```
SIGNING FLOW:
────────────────────────────────────────────────────
                     PSBT (Unsigned Transaction)
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
               ┌─────────┐         ┌─────────┐
               │ Device 1│         │ Device 2│
               │  Signs  │         │  Signs  │
               └────┬────┘         └────┬────┘
                    │                   │
                    └─────────┬─────────┘
                              ▼
                    Fully Signed Transaction
                              │
                              ▼
                      Broadcast to Network
```


## Why Use Multisig?

### Eliminates Single Points of Failure

<div class="fixed-width-table">

| Scenario | Single-Sig | 2-of-3 Multisig |
|----------|------------|-----------------|
| One key stolen | **Funds lost** | Safe (thief needs 2 keys) |
| One key lost | **Funds lost forever** | Safe (2 remaining keys work) |
| House fire destroys backup | **Funds lost** | Safe (other locations have keys) |
| Coerced to hand over key | **Funds lost** | Safe (can't access other keys) |

</div>

### Security Through Distribution

With multisig, your bitcoin security doesn't depend on any single thing:

```
SINGLE-SIG:
──────────────────
One seed phrase → Full control → Single point of failure

MULTISIG (2-of-3):
──────────────────
Key 1 (Home)    ─┐
Key 2 (Office)  ─┼─→ Need ANY 2 to spend
Key 3 (Safe)    ─┘

One key compromised ≠ funds lost
```


## The Tradeoffs

### Advantages

- **Theft protection** — Attacker needs multiple keys
- **Loss protection** — Can lose one key and still recover
- **Inheritance** — Can distribute keys to family
- **Shared control** — Multiple parties must agree to spend

### Disadvantages

- **More complexity** — More things to back up and manage
- **Higher fees** — Multisig transactions are larger
- **More points of failure** — Must back up descriptor AND seeds
- **Slower transactions** — Need multiple devices to sign

### The Complexity Warning

:::danger Before Using Multisig
Multisig adds complexity that can lead to permanent fund loss if mismanaged:
- You must back up the **wallet descriptor** (not just seed phrases)
- You must test recovery **before** depositing significant funds
- You need secure storage for multiple seeds in different locations

If you're not comfortable with single-sig hardware wallets yet, master that first.
:::


## When to Consider Multisig

### Good Candidates

- ✅ Significant holdings you'd be devastated to lose
- ✅ Long-term "vault" storage (not daily spending)
- ✅ Business funds requiring multiple approvals
- ✅ Inheritance planning scenarios
- ✅ Access to multiple secure storage locations

### Not Necessary For

- Small amounts (under ~$10,000)
- Daily spending funds
- Users still learning basic self-custody
- Those without multiple secure storage locations


## Key Components

### Hardware Wallets

Each key lives on a separate hardware wallet. Recommended: use devices from **different manufacturers** to avoid single-vendor vulnerabilities.

### Coordinator Software

Software like Sparrow, Nunchuk, or Specter:
- Creates the multisig configuration
- Generates receive addresses
- Creates unsigned transactions
- Combines signatures

### Wallet Descriptor

A text string containing:
- All public keys (xpubs)
- The M-of-N policy
- Script type and derivation paths

:::danger Critical
**The wallet descriptor is as important as your seed phrases.** Without it, you cannot reconstruct your multisig wallet—even with all seeds.
:::


## Collaborative Custody

Some services offer "assisted" multisig where they hold one key:

<div class="fixed-width-table">

| Service | Model | You Hold | They Hold |
|---------|-------|----------|-----------|
| Unchained | 2-of-3 | 2 keys | 1 key |
| Casa | 2-of-3 or 3-of-5 | 2+ keys | 1 key |
| Nunchuk | Flexible | Your choice | Optional |

</div>

**Benefits:** Professional backup, inheritance support, recovery assistance

**Tradeoff:** Third party involved (though they can't spend without you)


## Key Takeaways

- Multisig requires **multiple keys** to spend bitcoin
- **2-of-3** is the most popular individual setup
- Eliminates **single points of failure** for both theft and loss
- Adds **complexity**—more things can go wrong
- **Wallet descriptor** backup is critical (not just seeds)
- Best for **significant, long-term holdings**
- Master single-sig first before attempting multisig

---

## Ready to Build It? Step-by-Step Setup

If you understand the concepts above and want to implement a 2-of-3 multisig, the following sections walk you through the full DIY setup with Sparrow Wallet.

:::info What You'll Do
- Set up 3 hardware wallets for multisig
- Create a 2-of-3 multisig wallet in Sparrow
- Properly back up seed phrases and wallet descriptor
- Test your recovery procedure

**⏱️ Time required:** 2-3 hours
**📊 Difficulty:** Intermediate to Advanced
**💰 Estimated cost:** $200-450 (3 hardware wallets) + $30-60 (metal seed backups)
:::


## Choosing Your Configuration

### 2-of-3: The Sweet Spot

For most individuals, **2-of-3 multisig** offers the best balance:

**Advantages:**
- Lose 1 key → Still have access (fault tolerance)
- 1 key stolen → Funds still safe (theft protection)
- Manageable complexity (3 backups, 3 devices)
- Lower transaction fees than 3-of-5

### 3-of-5: Maximum Security

For very large holdings or organizations:

**Advantages:**
- Can lose 2 keys and still access funds
- 2 keys can be stolen without fund loss
- Good for distributed teams/families

**Disadvantages:**
- 5 devices to purchase and manage
- 5 seed phrases to secure (10 locations if you separate!)
- Higher transaction fees
- More coordination for signing

### 2-of-2: Shared Control (Use Carefully)

**⚠️ Not recommended for most users**

- No redundancy — lose 1 key, lose everything
- Both parties must be available to spend
- Use only for specific shared-custody scenarios


## DIY vs. Collaborative Custody

Don't want to manage all keys yourself? **Collaborative custody** providers hold one key while you hold the majority.

<div class="fixed-width-table">

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **Unchained** | Yes (2-of-3) | From $0 + per-sign fee | Financial services, loans |
| **Casa** | Basic wallet | From $30/month | Beginners, inheritance |
| **Nunchuk** | Yes | From $15/month | Privacy, flexibility |

</div>

<div class="fixed-width-table">

| Factor | DIY Multisig | Collaborative Custody |
|--------|--------------|----------------------|
| **Technical skill needed** | High | Low-Medium |
| **Privacy** | Maximum | Provider sees balances |
| **Support available** | Community only | Professional help |
| **Ongoing cost** | One-time (hardware) | Monthly subscription |
| **Recovery assistance** | You're on your own | Help available |
| **Best for** | Technical users | Beginners, busy people |

</div>

**Recommendation:**
- **New to multisig?** Start with collaborative custody to learn the concepts
- **Technical and privacy-focused?** DIY with Sparrow Wallet
- **Significant holdings but not technical?** Collaborative custody is worth the cost


## Common Multisig Mistakes

### Mistake 1: Not Backing Up the Wallet Descriptor

**Problem:** You have all 3 seed phrases but can't reconstruct the wallet.

**Solution:** Store the wallet descriptor (as PDF, file, or printed) with each seed phrase backup.

### Mistake 2: Storing Multiple Seeds Together

**Problem:** A single theft or disaster compromises multiple keys.

**Solution:** Geographic distribution — each seed in a different location.

### Mistake 3: Using the Same Hardware Wallet Brand

**Problem:** A firmware vulnerability affects all your signing devices.

**Solution:** Mix manufacturers (e.g., Coldcard + Trezor + Keystone).

### Mistake 4: Not Testing Recovery

**Problem:** You think your backup works but haven't verified it.

**Solution:** Practice recovery with a small amount before depositing significant funds.

### Mistake 5: Overcomplicating the Setup

**Problem:** 5-of-7 multisig across 3 continents with time locks...

**Solution:** Start simple. 2-of-3 is sufficient for most individuals.

### Mistake 6: Not Verifying Addresses on Devices

**Problem:** Malware could show you a fake address on your computer.

**Solution:** **Always verify receive addresses on your hardware wallet screens** before depositing.


## Security Checklist

Before depositing significant funds, verify:

- [ ] Each hardware wallet is from a different manufacturer (recommended)
- [ ] Each seed phrase is backed up on metal (fire/water resistant)
- [ ] Seed phrases are stored in separate physical locations
- [ ] Wallet descriptor is backed up (multiple copies in different locations)
- [ ] You've verified a receive address matches on at least 2 hardware wallets
- [ ] You've successfully completed a test transaction (send and receive)
- [ ] You've practiced full wallet recovery from backups
- [ ] You understand you need M keys to spend (not just one)
- [ ] Hardware wallets are registered with the multisig configuration


<NextSteps
  title="Set Up Your Multisig"
  items={[
    {
      label: "Step 1",
      title: "Hardware Setup",
      href: "/docs/learn/wallets/multisig/hardware-setup/",
      description: "Prepare your three signing devices for multisig"
    },
    {
      label: "Step 2",
      title: "Sparrow Setup",
      href: "/docs/learn/wallets/multisig/sparrow-setup/",
      description: "Create your 2-of-3 multisig wallet in Sparrow"
    },
    {
      label: "Step 3",
      title: "Backup & Recovery",
      href: "/docs/learn/wallets/multisig/backup-recovery/",
      description: "Properly secure your seeds and wallet descriptor"
    }
  ]}
/>
