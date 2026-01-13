---
sidebar_position: 4
title: "Best Practices After CoinJoin"
description: "Learn how to maintain Bitcoin privacy after CoinJoin. Avoid common mistakes that undo your mixing, handle change properly, and spend privately."
keywords: ["bitcoin", "coinjoin", "privacy", "utxo", "coin control", "change", "spending"]
tags: ["coinjoin", "privacy", "bitcoin", "best practices"]
---

# Best Practices After CoinJoin

Mixing your coins is only half the battle. How you **handle and spend** mixed coins determines whether you maintain privacy or accidentally undo all your work.


## The Golden Rules

:::danger Critical Rules — Never Break These

1. **Never merge mixed coins with KYC/unmixed coins**
2. **Never send multiple mixed UTXOs to the same address**
3. **Always use your own node**
4. **Use coin control for every transaction**
:::


## Rule 1: Never Merge Mixed and Unmixed Coins

This is the most common mistake that destroys CoinJoin privacy.

### What Merging Looks Like

```
BAD TRANSACTION:
─────────────────────────────────────────────────
INPUTS                          OUTPUT
──────                          ──────
0.1 BTC (mixed, private)   ─┬─→ 0.25 BTC (payment)
0.15 BTC (KYC, not mixed)  ─┘

Result: The mixed coin is now linked to your identity!
```

When you combine a mixed UTXO with an unmixed one:
- The unmixed coin is linked to your identity (from the exchange)
- Both coins are now in the same transaction
- The mixed coin is now **also** linked to your identity
- All mixing effort wasted

### How to Avoid This

**Use separate wallets:**
```
Wallet 1: "Exchange/KYC Wallet"
  └─ Contains coins from exchanges
  └─ Never mixed
  └─ For regulated activities

Wallet 2: "Private Wallet"  
  └─ Contains only mixed coins
  └─ Connect to your own node
  └─ For private spending
```

**Or use careful labeling:**
- Label every UTXO as "mixed" or "unmixed"
- Never let them touch each other


## Rule 2: Don't Consolidate Mixed Coins

Sending multiple mixed UTXOs to the same address reveals they belong to the same person.

### The Problem

```
BAD TRANSACTION:
─────────────────────────────────────────────────
INPUTS                          OUTPUT
──────                          ──────
0.1 BTC (mixed, round 1)   ─┬─→ 0.3 BTC (your address)
0.1 BTC (mixed, round 2)   ─┤
0.1 BTC (mixed, round 3)   ─┘

Observer: "These three mixed coins belong to the same person!"
```

Before this transaction, each 0.1 BTC could have belonged to anyone. After consolidating, it's clear they all belong to you.

### Better Approach

Spend mixed coins **individually** when possible:

```
GOOD: Individual Spends
─────────────────────────────────────────────────
Tx 1: 0.1 BTC (mixed) → Payment
Tx 2: 0.1 BTC (mixed) → Different payment
Tx 3: 0.1 BTC (mixed) → Another payment
```

If you must combine (for a larger payment), understand you're trading privacy for utility.


## Rule 3: Handle Change Carefully

When you spend a mixed coin, you may receive change. This change has reduced privacy.

### Example

```
Spending mixed coin:
─────────────────────────────────────────────────
INPUT                           OUTPUTS
─────                           ───────
0.1 BTC (mixed, private)   →    0.05 BTC (payment)
                                0.049 BTC (change back to you)
```

The 0.049 BTC change is now:
- Obviously linked to whoever made the payment
- Less private than the original mixed coin
- Should be considered "semi-tainted"

### Options for Change

1. **Remix it** — Send it through CoinJoin again
2. **Use it for non-private spending** — Since it's already somewhat exposed
3. **Combine it with other change** — Not with fresh mixed coins
4. **Spend it entirely** — No change if amount matches exactly (rare)

### Ideal: Avoid Change Entirely

When possible, select UTXOs that match your payment closely:

```
Payment needed: 0.099 BTC
Your mixed UTXOs: 0.1 BTC, 0.05 BTC, 0.02 BTC

Best choice: Use the 0.1 BTC (leaves only 0.001 BTC change)
Worst choice: Use 0.05 + 0.05 + 0.02 BTC (consolidates AND creates change)
```


## Rule 4: Always Use Your Own Node

This applies to all Bitcoin usage, but is **critical** for mixed coins.

### Why It Matters

When your wallet connects to a node:
- It requests information about your addresses
- It reveals your IP address
- The node operator learns which addresses belong to you

If you use someone else's node (or a random public node):
- A surveillance company might run that node
- They learn all your addresses, including mixed ones
- Your privacy is compromised

### Solution

Run your own Bitcoin node. When you query your own node:
- You're asking yourself about your addresses
- No third party learns anything
- True privacy

See our [Bitcoin Node guide](/docs/bitcoin-node) to set up your own.


## Rule 5: Use Coin Control

**Coin control** is the ability to choose exactly which UTXOs you spend.

### Without Coin Control

Your wallet automatically selects coins:
- It might grab a mixed coin and an unmixed coin
- It might consolidate multiple UTXOs unnecessarily
- You lose control of your privacy

### With Coin Control

You explicitly choose:
- "I want to spend THIS specific 0.1 BTC UTXO"
- "I do NOT want to include any other coins"

### Wallets with Good Coin Control

- **Sparrow Wallet** — Excellent coin control, labeling, and visualization
- **Electrum** — Good coin control (Coins tab)
- **Wasabi** — Decent coin control

### How to Use Coin Control

In Sparrow:
1. Go to **UTXOs** tab
2. Right-click the specific UTXO you want to spend
3. Select **Send Selected**
4. This ensures ONLY that UTXO is used

In Electrum:
1. Go to **Coins** tab (View → Show Coins)
2. Right-click the UTXO
3. Select **Spend From**


## Rule 6: Consider Lightning Network

Opening Lightning channels with mixed coins adds another privacy layer.

### How It Helps

```
Mixed coins → Open Lightning channel → Make Lightning payments
```

- The channel opening is on-chain (visible)
- But Lightning payments are NOT on the public blockchain
- Recipients see a Lightning payment, not on-chain history
- When you close the channel, the link to original mix is further obscured

### Best Practice

1. Mix your coins (CoinJoin)
2. Open Lightning channels with mixed UTXOs
3. Spend via Lightning for everyday purchases
4. Close channels eventually (coins have new history)


## Rule 7: Be Patient

Don't spend mixed coins immediately after mixing.

### Why Timing Matters

If you:
1. CoinJoin at 2:00 PM
2. Spend from a mixed output at 2:15 PM

An observer might correlate the timing:
- "One of the CoinJoin outputs was spent 15 minutes later"
- "Let's see which participant was likely to spend quickly"

### Better Practice

- Let mixed coins "age" for hours, days, or weeks
- Don't be the first or last to move coins after a mix
- Blend into normal usage patterns


## Checklist: Before Spending Mixed Coins

Before making a transaction with mixed coins, ask yourself:

- [ ] Am I using my own node?
- [ ] Am I using coin control to select specific UTXOs?
- [ ] Are ALL inputs in this transaction from my mixed pool?
- [ ] Am I NOT combining multiple mixed UTXOs unnecessarily?
- [ ] Is the change amount acceptable? (or can I adjust to minimize it?)
- [ ] Has enough time passed since the mix?


## Common Mistakes Summary

| Mistake | Why It's Bad | How to Avoid |
|---------|--------------|--------------|
| Merging mixed + unmixed | Links mixed coins to your identity | Separate wallets |
| Consolidating mixed UTXOs | Reveals common ownership | Spend individually |
| Using public node | Node learns your addresses | Run your own node |
| No coin control | Wallet makes poor choices | Use Sparrow/Electrum |
| Spending immediately | Timing analysis possible | Wait before spending |
| Ignoring change | Change has reduced privacy | Remix or handle carefully |


## Summary

CoinJoin gives you privacy, but only if you maintain it:

1. **Separate mixed from unmixed** — Never let them touch
2. **Spend mixed coins individually** — Don't consolidate
3. **Use your own node** — Essential for real privacy
4. **Use coin control** — Be deliberate about what you spend
5. **Be patient** — Don't rush to spend after mixing

Privacy is a practice, not a one-time action. Every transaction is an opportunity to preserve or destroy your privacy.

---

**Related Guides:**
- [UTXO Management](/docs/utxo-management) — Master coin control and consolidation
- [Coin Control Guide](/docs/utxo-management/coin-control) — Detailed coin control techniques
- [Bitcoin Node Setup](/docs/bitcoin-node) — Run your own node
- [Understanding Transactions](/docs/basics/transactions/understanding) — Know how transactions work