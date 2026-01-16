---
sidebar_position: 4
title: "Multisig Wallets"
description: "Understand how Bitcoin multisig wallets work. Learn about M-of-N configurations, why multisig eliminates single points of failure, and when to use it."
keywords: ["multisig", "multi-signature", "bitcoin security", "2-of-3", "hardware wallet", "self custody"]
tags: ["multisig", "security", "wallets", "bitcoin"]
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

## You've Completed the Wallets Section

You now understand the different ways to hold Bitcoin keys—from software wallets to hardware devices to multisig setups. Next, learn how Bitcoin actually moves.

<NextSteps 
  title="What's Next?"
  items={[
    { 
      label: "Continue", 
      title: "Understanding Transactions", 
      href: "/docs/learn/transactions/utxos/", 
      description: "Learn how Bitcoin transactions actually work" 
    },
    { 
      label: "Setup", 
      title: "Multisig Setup Guide", 
      href: "/docs/advanced/multisig/", 
      description: "Ready to implement multisig? Follow our step-by-step guide" 
    },
    { 
      label: "Alternative", 
      title: "Hardware Wallet Setup", 
      href: "/docs/wallet-setup/hardware-wallet/", 
      description: "Start simpler with a single-sig hardware wallet" 
    }
  ]}
/>
