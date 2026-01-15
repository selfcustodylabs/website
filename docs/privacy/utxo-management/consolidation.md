---
sidebar_position: 3
title: "Consolidation Strategies"
description: "Learn when and how to consolidate Bitcoin UTXOs. Optimize fees during low-fee periods while maintaining privacy."
keywords: ["bitcoin", "utxo", "consolidation", "fees", "privacy", "mempool"]
tags: ["utxo", "consolidation", "fees", "bitcoin"]
---

# UTXO Consolidation Strategies

Consolidation is combining multiple UTXOs into fewer, larger ones. Done correctly, it reduces future transaction costs. Done incorrectly, it destroys privacy.


## When to Consolidate

### Check the Fee Environment

Before consolidating, check current fee rates at [mempool.space](https://mempool.space):

<div class="fixed-width-table">

| Fee Rate | Recommendation |
|----------|----------------|
| **1-10 sat/vB** | 🟢 Excellent time to consolidate |
| **10-30 sat/vB** | 🟡 Good, proceed if needed |
| **30-100 sat/vB** | 🟠 Wait if possible |
| **100+ sat/vB** | 🔴 Do not consolidate |

</div>

### Signs You Need Consolidation

- You have many UTXOs under 0.01 BTC
- Your last transaction used 5+ inputs
- You're paying high fees for simple sends
- You've been dollar-cost averaging in small amounts


## The Privacy-Preserving Consolidation Rule

:::danger Critical Rule
**Only consolidate UTXOs from the SAME source.**

Never combine:
- KYC with non-KYC
- Different exchanges
- Mixed with unmixed
:::

### Why This Matters

When you consolidate, you create an on-chain record that says "all these UTXOs belong to the same person":

```
CONSOLIDATION:
────────────────────────────────────────────
0.01 BTC (from Coinbase)     ─┐
0.02 BTC (from Coinbase)     ─┼─→ 0.06 BTC (to yourself)
0.03 BTC (from Coinbase)     ─┘

✅ Good: All from same source, already linked to same identity
```

```
BAD CONSOLIDATION:
────────────────────────────────────────────
0.01 BTC (from Coinbase)     ─┐
0.02 BTC (from Kraken)       ─┼─→ 0.06 BTC (to yourself)  
0.03 BTC (non-KYC trade)     ─┘

❌ Bad: Now Coinbase, Kraken, and your non-KYC 
       coins are all linked together forever!
```


## Step-by-Step Consolidation

### Step 1: Sort Your UTXOs by Source

Open your wallet's UTXO view and categorize:

```
COINBASE UTXOs:        KRAKEN UTXOs:         NON-KYC UTXOs:
- 0.005 BTC            - 0.008 BTC           - 0.05 BTC
- 0.003 BTC            - 0.012 BTC           - 0.02 BTC
- 0.007 BTC            - 0.004 BTC
- 0.002 BTC
```

### Step 2: Plan Each Consolidation Separately

Each source gets its own consolidation transaction:

```
Transaction 1: Coinbase UTXOs
  0.005 + 0.003 + 0.007 + 0.002 → 0.017 BTC (minus fee)

Transaction 2: Kraken UTXOs
  0.008 + 0.012 + 0.004 → 0.024 BTC (minus fee)

Transaction 3: Non-KYC UTXOs
  0.05 + 0.02 → 0.07 BTC (minus fee)
```

### Step 3: Execute During Low Fees

1. Wait for fees to drop below 15 sat/vB
2. Use [coin control](/docs/privacy/utxo-management/coin-control) to select only same-source UTXOs
3. Send to a **new address in your own wallet**
4. Set a low fee (since timing isn't critical)
5. Label the new UTXO with its source

### Step 4: Verify and Label

After confirmation:
- Check the new UTXO appears in your wallet
- Label it with the source (e.g., "Coinbase consolidated 2024-01")
- Verify old UTXOs are gone


## Consolidation Math: Is It Worth It?

Before consolidating, calculate if it saves money long-term.

### The Calculation

**Cost to consolidate now:**
```
Inputs: 10 UTXOs × 68 vB = 680 vB
Outputs: 1 × 34 vB = 34 vB
Overhead: 10 vB
─────────────────────────────────
Total: ~724 vB

At 10 sat/vB: 7,240 sats (~$7)
```

**Future cost without consolidation:**
```
If you spend these 10 UTXOs later at 100 sat/vB:
724 vB × 100 sat/vB = 72,400 sats (~$72)
```

**Savings: ~65,000 sats ($65)**

### When NOT to Consolidate

- **Privacy cost is too high** — Don't consolidate different sources
- **UTXOs are already large** — No benefit to combining 0.5 BTC UTXOs
- **Fees are high** — Wait for a better time
- **You're mixing soon** — Let [CoinJoin](/docs/privacy/coinjoin) handle it


## Target UTXO Sizes

After consolidation, aim for these sizes:

<div class="fixed-width-table">

| Purpose | Target Size | Reasoning |
|---------|-------------|-----------|
| Long-term holding | 0.1 - 1.0 BTC | Efficient for large future spends |
| Regular spending | 0.01 - 0.1 BTC | Flexible without revealing full stack |
| Minimum viable | 0.01 BTC | Stays economical in most fee environments |

</div>

### Example Target Portfolio

```
After consolidation:
─────────────────────
1 × 0.5 BTC    — Long-term savings
3 × 0.1 BTC    — Medium transactions
5 × 0.02 BTC   — Small payments
─────────────────────
Total: 0.9 BTC in 9 UTXOs (was 47 UTXOs)
```


## Advanced: Consolidation for Different Wallet Types

### Single-Signature Wallets

Standard consolidation as described above. Each input costs ~68 vB (SegWit).

### Multi-Signature Wallets (2-of-3)

Multi-sig inputs are larger (~105 vB for 2-of-3). Consolidation is even more valuable:

```
10 UTXOs in 2-of-3 multisig:
- Without consolidation: 10 × 105 vB = 1,050 vB of inputs
- After consolidation: 1 × 105 vB = 105 vB of inputs
- Savings: 945 vB per future transaction
```

### Hardware Wallet Considerations

When consolidating with hardware wallets:
- You'll need to sign the transaction on the device
- Large consolidations (50+ inputs) may take time to sign
- Some hardware wallets have limits on inputs per transaction


## Timing Your Consolidation

### Best Times to Consolidate

- **Weekends** — Typically lower fees
- **Holidays** — Less trading activity
- **After major fee spikes** — Mempool clears out
- **When mempool is nearly empty** — Check mempool.space

### Worst Times to Consolidate

- **During market volatility** — High trading = high fees
- **After Bitcoin halving events** — Historical fee spikes
- **When mempools show backlog** — Wait for it to clear


## Consolidation Checklist

Before each consolidation:

- [ ] Fees are below 20 sat/vB
- [ ] All selected UTXOs are from the SAME source
- [ ] I'm sending to a fresh address in my own wallet
- [ ] I've calculated the fee savings to confirm it's worthwhile
- [ ] I have the new UTXO labeled with its source
- [ ] I'm not in a hurry (can wait for confirmation)

---

**Related:** Learn about [coin control](/docs/privacy/utxo-management/coin-control) to properly select UTXOs for consolidation.
