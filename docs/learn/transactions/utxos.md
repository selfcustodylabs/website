---
sidebar_position: 1
title: "UTXOs Explained"
description: "Understand Bitcoin's UTXO model. Learn how Unspent Transaction Outputs work, why Bitcoin isn't an account balance, and how UTXOs affect fees and privacy."
keywords: ["utxo", "unspent transaction output", "bitcoin transactions", "bitcoin model", "coin selection"]
tags: ["utxo", "transactions", "bitcoin", "basics"]
---

# UTXOs: How Bitcoin Actually Works

Most people think of their Bitcoin wallet like a bank account—a single balance that goes up and down. This mental model is wrong, and misunderstanding it leads to costly mistakes.

Bitcoin uses the **UTXO model**: Unspent Transaction Outputs. Understanding UTXOs is fundamental to understanding Bitcoin.


## What is a UTXO?

A UTXO is an **Unspent Transaction Output**—a discrete chunk of bitcoin that you can spend.

Think of UTXOs as **digital coins** or **digital bills** in your wallet. You don't have a "balance" in the traditional sense. You have a collection of individual UTXOs, and your wallet displays their sum.


## The Cash Analogy

Imagine your physical wallet contains:

<div class="fixed-width-table">

| Bills | Value |
|-------|-------|
| One $50 bill | $50 |
| Two $20 bills | $40 |
| Three $5 bills | $15 |
| **Total** | **$105** |

</div>

You don't have "$105 of balance." You have **six physical bills** that add up to $105.

Your Bitcoin wallet works the same way:

<div class="fixed-width-table">

| UTXOs | Value |
|-------|-------|
| One UTXO | 0.05 BTC |
| One UTXO | 0.02 BTC |
| One UTXO | 0.02 BTC |
| One UTXO | 0.005 BTC |
| One UTXO | 0.005 BTC |
| **Total** | **0.1 BTC** |

</div>

You don't have "0.1 BTC of balance." You have **five UTXOs** that add up to 0.1 BTC.


## How UTXOs Are Created and Destroyed

UTXOs follow a simple lifecycle:

```
CREATION:
  When someone sends you bitcoin, a new UTXO is created.
  This UTXO is "locked" to your address—only you can spend it.

DESTRUCTION:
  When you spend a UTXO, it is completely consumed.
  It no longer exists. New UTXOs are created from its value.
```

### Every Transaction Destroys and Creates UTXOs

When you send bitcoin:

1. **Inputs** — Existing UTXOs you own are consumed (destroyed)
2. **Outputs** — New UTXOs are created for recipients (and change for you)

```
BEFORE TRANSACTION:
──────────────────────────────────────────────────
Your wallet contains:
  UTXO #1: 0.05 BTC
  UTXO #2: 0.03 BTC
  UTXO #3: 0.02 BTC

TRANSACTION (pay someone 0.04 BTC):
──────────────────────────────────────────────────
INPUTS (destroyed):           OUTPUTS (created):
  UTXO #1: 0.05 BTC    →      0.04 BTC (to recipient)
                               0.0099 BTC (change to you)
                               [0.0001 BTC fee]

AFTER TRANSACTION:
──────────────────────────────────────────────────
Your wallet contains:
  UTXO #2: 0.03 BTC (unchanged)
  UTXO #3: 0.02 BTC (unchanged)
  UTXO #4: 0.0099 BTC (new - your change)

Recipient's wallet contains:
  New UTXO: 0.04 BTC
```


## Key Properties of UTXOs

### 1. UTXOs Are Indivisible

You cannot spend "part" of a UTXO. When you use a UTXO as a transaction input, the **entire UTXO** is consumed.

**Example:**  
You have a 0.1 BTC UTXO and want to pay 0.03 BTC.

- You must spend the whole 0.1 BTC UTXO
- 0.03 BTC goes to the recipient
- ~0.07 BTC comes back to you as a new UTXO (change)

### 2. UTXOs Can Be Combined

You can spend multiple UTXOs in a single transaction. They all get consumed, and their combined value creates new outputs.

```
COMBINING UTXOs:
──────────────────────────────────────────────────
INPUTS:                       OUTPUTS:
  UTXO A: 0.02 BTC  ─┐
  UTXO B: 0.02 BTC  ─┼──→    0.05 BTC (payment)
  UTXO C: 0.02 BTC  ─┘        0.0099 BTC (change)
                              [0.0001 fee]
```

### 3. Each UTXO Has a History

Every UTXO can be traced back through the blockchain to its creation. This history is permanent and public.

```
UTXO HISTORY EXAMPLE:
──────────────────────────────────────────────────
Your 0.05 BTC UTXO came from:
  ← A payment from Alice
    ← Who got it from an exchange withdrawal
      ← Who got it from a mining pool
        ← ...back to the coinbase (mining reward)
```

This traceable history has important implications for [privacy](/docs/learn/privacy/why-privacy-matters).

### 4. UTXOs Are Locked by Addresses

Each UTXO is "locked" to a specific Bitcoin address. Only someone with the private key for that address can "unlock" and spend it.

Your wallet manages many addresses and their UTXOs automatically. When you see a "balance," your wallet is summing all UTXOs locked to addresses it controls.


## Why the UTXO Model Matters

### Transaction Fees Depend on UTXOs

Bitcoin fees are based on **transaction size in bytes**, not the **value** being sent.

Each UTXO input adds bytes to your transaction:

<div class="fixed-width-table">

| Input Type | Size |
|------------|------|
| Legacy (P2PKH) | ~148 bytes |
| SegWit (P2WPKH) | ~68 vbytes |
| Taproot (P2TR) | ~57 vbytes |

</div>

**More UTXOs = Larger transaction = Higher fees**

```
SAME VALUE, DIFFERENT FEES:
──────────────────────────────────────────────────
Sending 0.1 BTC using 1 UTXO:
  ~140 vbytes → Low fee

Sending 0.1 BTC using 10 UTXOs:
  ~680 vbytes → ~5x higher fee

Sending 0.1 BTC using 50 UTXOs:
  ~3,400 vbytes → ~25x higher fee
```

### Privacy Depends on UTXO Handling

When you combine UTXOs from different sources, you reveal they belong to the same owner:

```
PRIVACY LEAK:
──────────────────────────────────────────────────
INPUTS:                       OUTPUT:
  From Exchange A  ─┐
  From Exchange B  ─┼──→     0.15 BTC (payment)
  From friend      ─┘

Chain analysis conclusion:
  "All three inputs belong to the same person"
```

This is called the **common-input-ownership heuristic**. See [Chain Analysis Explained](/docs/learn/privacy/chain-analysis) for more details.

### Small UTXOs Can Become Unspendable

If a UTXO is worth less than the fee required to spend it, it becomes **economic dust**—trapped forever.

**Example during high fees (100 sat/vB):**
- Spending one SegWit input costs ~6,800 sats in fees
- A UTXO worth 5,000 sats costs more to spend than it's worth
- This UTXO is effectively worthless until fees drop significantly


## UTXOs in Your Wallet

Your wallet software handles UTXOs automatically:

<div class="fixed-width-table">

| Function | What Your Wallet Does |
|----------|----------------------|
| **Balance** | Sums all UTXOs you control |
| **Receiving** | Generates new addresses to receive new UTXOs |
| **Sending** | Selects which UTXOs to spend (coin selection) |
| **Change** | Creates change outputs back to addresses you control |

</div>

### Coin Selection

When you send bitcoin, your wallet must choose which UTXOs to spend. This is called **coin selection**.

Different wallets use different strategies:

<div class="fixed-width-table">

| Strategy | Behavior |
|----------|----------|
| **Largest first** | Uses biggest UTXOs first |
| **Smallest first** | Uses smallest UTXOs first |
| **Random** | Selects randomly |
| **Branch and bound** | Tries to find exact match (no change) |

</div>

Advanced users use **coin control** to manually select UTXOs. This is important for privacy and fee optimization.


## UTXO Visualization

Here's how to think about your wallet:

```
YOUR WALLET
──────────────────────────────────────────────────
┌──────────────────────────────────────────────┐
│                                              │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│   │  UTXO   │  │  UTXO   │  │  UTXO   │     │
│   │ 0.05 BTC│  │ 0.02 BTC│  │ 0.01 BTC│     │
│   │ addr: A │  │ addr: B │  │ addr: C │     │
│   └─────────┘  └─────────┘  └─────────┘     │
│                                              │
│   ┌─────────┐  ┌─────────┐                  │
│   │  UTXO   │  │  UTXO   │                  │
│   │0.005 BTC│  │0.003 BTC│                  │
│   │ addr: D │  │ addr: E │                  │
│   └─────────┘  └─────────┘                  │
│                                              │
│   Balance displayed: 0.088 BTC              │
│   Actual structure: 5 separate UTXOs        │
│                                              │
└──────────────────────────────────────────────┘
```

Each UTXO:
- Has a specific value
- Is locked to a specific address
- Has a history on the blockchain
- Must be spent entirely when used


## Common Misconceptions

### ❌ "I can send part of my balance"

**Reality:** You can only spend whole UTXOs. Your wallet creates change automatically, but behind the scenes, entire UTXOs are being consumed.

### ❌ "Fees depend on how much I'm sending"

**Reality:** Fees depend on transaction **size** (bytes), which depends on how many UTXOs you're spending, not their value.

### ❌ "All my bitcoin is the same"

**Reality:** Each UTXO has different history, came from different sources, and may have different privacy implications.

### ❌ "My wallet balance is one number"

**Reality:** Your balance is a sum of discrete UTXOs. Understanding which UTXOs you have and where they came from is important for fees and privacy.


## Key Takeaways

- Bitcoin uses **UTXOs** (Unspent Transaction Outputs), not account balances
- Your wallet balance is the **sum of individual UTXOs** you control
- UTXOs are **indivisible**—you spend them entirely or not at all
- **More UTXOs = higher fees** because each adds bytes to transactions
- **Combining UTXOs reveals common ownership** (privacy implication)
- Each UTXO has a **traceable history** on the blockchain
- Small UTXOs can become **unspendable dust** during high fees

<RelatedArticles 
  title="Continue Learning"
  articles={[
    { title: "Transaction Fees", href: "/docs/learn/transactions/fees/", tag: "Learn" },
    { title: "How Transactions Work", href: "/docs/learn/transactions/understanding/", tag: "Learn" },
    { title: "Chain Analysis", href: "/docs/learn/privacy/chain-analysis/", tag: "Privacy" },
    { title: "UTXO Management Guide", href: "/docs/privacy/utxo-management/", tag: "Guide" },
  ]}
/>
