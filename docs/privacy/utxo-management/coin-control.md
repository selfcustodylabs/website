---
sidebar_position: 2
title: "Coin Control"
description: "Learn how to use coin control in Bitcoin wallets. Select specific UTXOs for transactions to optimize fees and protect privacy."
keywords: ["bitcoin", "coin control", "utxo", "sparrow", "electrum", "privacy", "fees"]
tags: ["utxo", "coin control", "privacy", "bitcoin"]
---

# Coin Control: Choosing Your UTXOs

Coin control is the ability to select **exactly which UTXOs** you spend in a transaction. Without it, your wallet makes these decisions for you—often poorly.


## Why Coin Control Matters

### Without Coin Control

Your wallet automatically selects UTXOs using algorithms that optimize for fees, but ignore privacy:

```
You want to send 0.05 BTC

Wallet automatically picks:
- 0.03 BTC (from KYC exchange)
- 0.025 BTC (from non-KYC source)
─────────────────────────────────
Result: KYC and non-KYC coins are now linked!
```

### With Coin Control

You deliberately choose which UTXOs to spend:

```
You want to send 0.05 BTC

You select:
- 0.05 BTC (from KYC exchange only)
─────────────────────────────────
Result: Non-KYC coins remain separate!
```


## Coin Control in Sparrow Wallet

Sparrow has the best coin control interface available.

### Viewing Your UTXOs

1. Open your wallet in Sparrow
2. Click the **UTXOs** tab
3. You'll see every UTXO with:
   - Amount
   - Address
   - Label
   - Date received
   - Transaction ID

### Sending from Specific UTXOs

**Method 1: Send Selected**
1. Go to **UTXOs** tab
2. Check the box next to the UTXO(s) you want to spend
3. Click **Send Selected** at the bottom
4. Enter destination and amount
5. Complete the transaction

**Method 2: From Send Tab**
1. Go to **Send** tab
2. Enter destination and amount
3. Before creating, check the transaction diagram
4. Click on inputs to change UTXO selection

### Labeling UTXOs

1. Go to **UTXOs** tab
2. Double-click on any UTXO
3. Enter a descriptive label:
   - Source (exchange name, friend, etc.)
   - KYC status
   - Date or purpose
4. Labels persist across sessions

### Freezing UTXOs

To prevent a UTXO from being spent (e.g., suspicious dust):

1. Go to **UTXOs** tab
2. Right-click the UTXO
3. Select **Freeze UTXO**
4. The UTXO will be marked and excluded from all transactions

To unfreeze, right-click and select **Unfreeze UTXO**.


## Coin Control in Electrum

Electrum also supports coin control, though the interface is less intuitive.

### Enabling Coin View

1. Go to **View** menu
2. Check **Show Coins**
3. A new **Coins** tab appears

### Viewing UTXOs

1. Click the **Coins** tab
2. See all UTXOs with amounts and addresses
3. Right-click for options

### Sending from Specific UTXOs

1. Go to **Coins** tab
2. Right-click the UTXO you want to spend
3. Select **Spend From**
4. This opens the Send tab with only that UTXO selected
5. Complete your transaction

### Freezing in Electrum

1. Go to **Coins** tab
2. Right-click the UTXO
3. Select **Freeze**
4. Frozen UTXOs won't be used in transactions


## Best Practices for Coin Control

### 1. Always Use Coin Control

Make it a habit. Never let your wallet choose for you.

### 2. Group UTXOs by Source

Organize your thinking:
- **Exchange A UTXOs** — All KYC, linked to your identity
- **Exchange B UTXOs** — Different KYC, different identity link
- **Non-KYC UTXOs** — From P2P trades, mining, etc.
- **Mixed UTXOs** — Post-[CoinJoin](/docs/privacy/coinjoin)

### 3. Spend Within Categories

When making a payment:
- If paying from KYC funds → use only KYC UTXOs from one source
- If paying from non-KYC → use only non-KYC UTXOs
- Never mix categories in one transaction

### 4. Minimize Inputs

Select the fewest UTXOs needed:
- Fewer inputs = lower fees
- Fewer inputs = less history linked together

### 5. Consider Change Output

After selecting UTXOs, think about change:
- Where will change go?
- Is the change amount creating dust?
- Can you adjust the payment to minimize change?


## UTXO Selection Strategies

### Strategy: Exact Match

Find a UTXO close to your payment amount to minimize change:

```
Payment needed: 0.048 BTC

Available UTXOs:
- 0.1 BTC   ← Too big (lots of change)
- 0.05 BTC  ← Good match! (0.002 BTC change)
- 0.02 BTC  ← Too small (would need 3)

Best choice: 0.05 BTC UTXO
```

### Strategy: Combine Same-Source

When you must use multiple UTXOs, ensure they're from the same source:

```
Payment needed: 0.15 BTC

Available UTXOs:
- 0.1 BTC (Coinbase)
- 0.08 BTC (Coinbase)
- 0.05 BTC (Kraken)
- 0.03 BTC (Non-KYC)

Best choice: 0.1 + 0.08 from Coinbase
Avoid: mixing Coinbase with Kraken or Non-KYC
```

### Strategy: Spend Oldest First

For privacy, consider spending older UTXOs first:
- They've been sitting longer
- Less likely to be correlated with recent activity
- Keeps wallet "fresh"


## Common Coin Control Mistakes

### Mistake 1: Mixing Sources

❌ **Wrong:** Selecting KYC + non-KYC in same transaction
✅ **Right:** Only select from one source category

### Mistake 2: Over-Consolidating

❌ **Wrong:** Combining all UTXOs when making a payment
✅ **Right:** Use minimum UTXOs needed for the amount

### Mistake 3: Ignoring Labels

❌ **Wrong:** Selecting UTXOs randomly without checking labels
✅ **Right:** Always verify the source before selecting

### Mistake 4: Spending Dust Unknowingly

❌ **Wrong:** Wallet auto-includes tiny UTXOs to "clean up"
✅ **Right:** Freeze suspicious small UTXOs, handle dust deliberately


## Coin Control Checklist

Before finalizing any transaction:

- [ ] Am I using coin control (not auto-select)?
- [ ] Are all selected UTXOs from the same source category?
- [ ] Have I verified the labels on selected UTXOs?
- [ ] Is this the minimum number of UTXOs needed?
- [ ] Is the change output going somewhere appropriate?
- [ ] Are there any suspicious UTXOs I should freeze?

---

**Next:** Learn about [UTXO consolidation strategies](/docs/privacy/utxo-management/consolidation) to optimize your wallet during low-fee periods.
