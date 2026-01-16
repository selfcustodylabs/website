---
sidebar_position: 7
title: "Bitcoin Transaction Fees Explained"
description: "Understand how Bitcoin transaction fees work, why they vary, and how to minimize costs. Learn fee estimation, RBF, CPFP, and fee optimization strategies."
keywords: ["bitcoin fees", "transaction fees", "sat/vB", "fee estimation", "RBF", "CPFP", "mempool"]
tags: ["fees", "transactions", "bitcoin", "optimization"]
slug: /learn/transactions/fees
---

# Bitcoin Transaction Fees

Every Bitcoin transaction requires a fee to be processed. Understanding how fees work helps you avoid overpaying during normal times and ensures your transactions confirm when you need them to.

## How Fees Work

Bitcoin fees are paid to miners for including your transaction in a block. Unlike traditional payment systems with fixed percentages, Bitcoin fees are based on **data size, not transaction value**.

### Fee Basics

```
FEE = TRANSACTION SIZE (vBytes) × FEE RATE (sats/vB)
```

This means:
- Sending 0.001 BTC costs the same as sending 100 BTC
- Complex transactions (more inputs/outputs) cost more
- Simple transactions are cheapest

### Why Fees Vary

Bitcoin blocks have limited space (~4MB, or ~2,000-3,000 transactions). When more people want to transact than blocks can hold, a market forms:

| Demand | Typical Fee Rate | Confirmation Time |
|--------|------------------|-------------------|
| Low | 1-5 sats/vB | Next block - hours |
| Normal | 5-20 sats/vB | 10 min - 1 hour |
| High | 20-100 sats/vB | 10-30 minutes |
| Extreme | 100-500+ sats/vB | Priority inclusion |

Fees fluctuate constantly based on network demand.


## Understanding Fee Rates

### sats/vB (Satoshis per Virtual Byte)

The standard unit for Bitcoin fees:
- **sat** = satoshi (0.00000001 BTC)
- **vB** = virtual byte (measure of transaction size)

A typical single-input, single-output transaction is ~140 vB.

### Example Calculations

| Transaction Type | Size | At 10 sats/vB | At 50 sats/vB |
|------------------|------|---------------|---------------|
| Simple (1 input → 2 outputs) | ~140 vB | 1,400 sats (~$0.60) | 7,000 sats (~$3) |
| Medium (3 inputs → 2 outputs) | ~380 vB | 3,800 sats (~$1.60) | 19,000 sats (~$8) |
| Complex (10 inputs → 2 outputs) | ~1,100 vB | 11,000 sats (~$4.70) | 55,000 sats (~$24) |

*Prices assume ~$43,000/BTC*


## What Affects Transaction Size

### Inputs vs Outputs

Every transaction has:
- **Inputs**: UTXOs you're spending (where funds come from)
- **Outputs**: Where funds are going (recipients + change)

**More inputs = larger transaction = higher fee**

This is why [UTXO management](/docs/learn/transactions/utxos) matters.

### Address Types

Different address types have different sizes:

| Address Type | Input Size | Output Size | Notes |
|--------------|------------|-------------|-------|
| P2PKH (Legacy) | ~148 vB | ~34 vB | Starts with `1` |
| P2SH-P2WPKH (Nested SegWit) | ~91 vB | ~32 vB | Starts with `3` |
| P2WPKH (Native SegWit) | ~68 vB | ~31 vB | Starts with `bc1q` |
| P2TR (Taproot) | ~57 vB | ~43 vB | Starts with `bc1p` |

**Recommendation**: Use Native SegWit (`bc1q`) or Taproot (`bc1p`) addresses for lowest fees.


## Fee Estimation

### Mempool Analysis

The **mempool** is the waiting room for unconfirmed transactions. Analyzing it helps estimate appropriate fees:

- [mempool.space](https://mempool.space) — Visual fee estimation
- Sparrow Wallet's built-in fee estimation
- Your node's mempool data

### Fee Estimation Strategy

1. **Check current mempool** — What fee rate is clearing?
2. **Consider urgency** — Do you need next block or can you wait?
3. **Account for volatility** — Fees can spike suddenly

### Common Mistakes

❌ **Overpaying during low demand** — Checking fees saves money  
❌ **Underpaying during high demand** — Transaction gets stuck  
❌ **Using wallet defaults blindly** — Often set too high


## Stuck Transactions

If your transaction isn't confirming, you have options:

### RBF (Replace-By-Fee)

Replace your unconfirmed transaction with a higher-fee version.

**Requirements:**
- Original transaction must have RBF enabled (Sparrow enables by default)
- You control at least one input

**How to use in Sparrow:**
1. Find the unconfirmed transaction
2. Right-click → "Increase Fee"
3. Set new fee rate
4. Broadcast replacement

### CPFP (Child-Pays-For-Parent)

Create a new transaction that spends the unconfirmed output with a high enough fee to incentivize mining both.

**When to use:**
- RBF not available
- You're the recipient (can't RBF sender's transaction)

**How it works:**
The new transaction's fee must cover the "deficit" of the parent transaction to make the combined package attractive to miners.


## Fee Optimization Strategies

### 1. Consolidate During Low Fees

When fees are cheap (1-5 sats/vB), combine small UTXOs:

```
BEFORE: 50 small UTXOs
  → Future transaction needs 50 inputs = expensive

AFTER: 1 large UTXO
  → Future transaction needs 1 input = cheap
```

See [UTXO Consolidation](/docs/privacy/utxo-management/consolidation) for details.

### 2. Batch Transactions

If sending to multiple recipients, batch them:

```
INEFFICIENT:
  Transaction 1: You → Alice     (140 vB)
  Transaction 2: You → Bob       (140 vB)
  Transaction 3: You → Charlie   (140 vB)
  Total: 420 vB

EFFICIENT:
  Transaction 1: You → Alice, Bob, Charlie (200 vB)
  Savings: 52%
```

### 3. Time Your Transactions

Fee patterns by time:
- **Weekends**: Often lower fees
- **US business hours**: Often higher fees
- **After difficulty adjustments**: Variable

### 4. Use Appropriate Address Types

Switching from Legacy to SegWit addresses can save 30-40% on fees.

### 5. Enable RBF

Always enable RBF (Replace-By-Fee) so you can bump fees if needed. Sparrow Wallet enables this by default.


## Lightning Network

For small, frequent transactions, the [Lightning Network](https://lightning.network) offers:
- Near-instant confirmation
- Fees of ~1 sat or less
- No on-chain footprint per transaction

**Tradeoff**: Requires channel management and isn't suitable for cold storage.


## Fee Calculator

Quick reference for planning:

| Your Goal | Recommended Strategy |
|-----------|---------------------|
| Send immediately | Pay current "high priority" rate |
| Send within hours | Pay "medium priority" rate |
| Send within a day | Pay "low priority" rate |
| Consolidate UTXOs | Wait for under 5 sats/vB |
| Large cold storage deposit | Use batching, wait for low fees |


## Summary

- Fees are based on **transaction size**, not value
- Use **SegWit or Taproot** addresses for lower fees
- **Check the mempool** before setting fees
- **Consolidate UTXOs** during low-fee periods
- Enable **RBF** on all transactions
- **Batch** when sending to multiple recipients

Understanding fees helps you save money and ensures your transactions confirm when you need them.

<NextSteps 
  title="Related Topics"
  items={[
    { 
      label: "Essential", 
      title: "UTXOs Explained", 
      href: "/docs/learn/transactions/utxos/", 
      description: "Understand how UTXOs affect your transaction fees" 
    },
    { 
      label: "Optimize", 
      title: "UTXO Management", 
      href: "/docs/privacy/utxo-management/", 
      description: "Strategies to minimize fees and improve privacy" 
    },
    { 
      label: "Tools", 
      title: "Run Your Own Node", 
      href: "/docs/bitcoin-node/", 
      description: "Get accurate fee estimation from your own mempool" 
    }
  ]}
/>
