---
sidebar_position: 1
title: "UTXOs Explained"
description: "Understand Bitcoin's UTXO model. Learn how Unspent Transaction Outputs work, why Bitcoin isn't an account balance, and how UTXOs affect fees and privacy."
keywords: ["utxo", "unspent transaction output", "bitcoin transactions", "bitcoin model", "coin selection"]
tags: ["utxo", "transactions", "bitcoin", "basics"]
---

# UTXOs: how Bitcoin actually works

A **UTXO** (unspent transaction output) is a separate amount of bitcoin, created by an earlier transaction and locked to one of your addresses, that has not been spent yet. A bitcoin wallet has no single balance: it holds a collection of UTXOs and shows you their total, and every payment spends whole UTXOs and creates new ones. That is why fees depend on how many coins a payment uses, why change comes back to you, and why spending coins together can reveal that they belong to the same person.

## How is a wallet like a purse full of notes?

A purse holding one $50 note, two $20 notes and three $5 notes contains six notes worth $105, not "$105 of balance". A bitcoin wallet works the same way:

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

That is five UTXOs that add up to 0.1 BTC.

## How are UTXOs created and destroyed?

A UTXO is created when someone sends you bitcoin, locked so that only your key can spend it, and destroyed when you spend it, at which point new UTXOs are created from its value. Every transaction does both. Its inputs are existing UTXOs you own, which it consumes; its outputs are new UTXOs, for the recipient and as change for you.

<div class="doc-diagram">

![Paying 0.04 BTC from a wallet holding 0.05, 0.03 and 0.02 BTC UTXOs: the 0.05 is destroyed whole and becomes 0.04 for the recipient, a new 0.0099 change UTXO and a 0.0001 mining fee, while the other two UTXOs stay untouched](/img/diagrams/transactions/utxo-lifecycle.svg)

</div>

## What are the properties of a UTXO?

### A UTXO is spent whole

A UTXO cannot be partly spent: used as an input, the whole of it is consumed. To pay 0.03 BTC from a 0.1 BTC UTXO, the transaction spends all 0.1 BTC, sends 0.03 BTC to the recipient, and returns about 0.07 BTC to you as a new change UTXO, less the fee.

### UTXOs can be combined

One transaction can spend several UTXOs. They are all consumed, and their combined value funds the new outputs.

<div class="doc-diagram">

![Combining UTXOs: three 0.02 BTC coins are consumed together to pay 0.05 BTC, produce 0.0099 BTC change and leave 0.0001 BTC as fee; all three inputs are destroyed in one spend](/img/diagrams/transactions/utxo-combining.svg)

</div>

### Every UTXO has a history

Every UTXO can be traced back through the blockchain, transaction by transaction, to the block reward that first created its coins. The history is permanent and public.

<div class="doc-diagram">

![A 0.05 BTC UTXO traced back through its history: a payment from Alice, before that an exchange withdrawal, a mining pool payout, and finally the coinbase mining reward; every hop is permanent and public](/img/diagrams/transactions/utxo-history.svg)

</div>

This traceable history has important implications for [privacy](/docs/learn/privacy/why-privacy-matters).

### Every UTXO is locked to an address

Each UTXO is locked to a bitcoin address, and only the holder of that address's private key can spend it. Your wallet manages many addresses and their UTXOs, and the balance it shows is the sum of every UTXO locked to an address it controls.

## Why does the UTXO model matter?

### Fees depend on how many UTXOs you spend

Bitcoin fees are based on a transaction's size in bytes, not the amount sent, and each input adds bytes:

<div class="fixed-width-table">

| Input Type | Size |
|------------|------|
| Legacy (P2PKH) | ~148 bytes |
| SegWit (P2WPKH) | ~68 vbytes |
| Taproot (P2TR) | ~57 vbytes |

</div>

More inputs make a larger transaction, and a larger transaction costs more:

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

### Privacy depends on which UTXOs you combine

Spending UTXOs from different sources together reveals that they belong to the same owner:

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

This is the **common-input-ownership heuristic**, the most important rule chain analysis uses; see [chain analysis](/docs/learn/privacy/chain-analysis/).

### Small UTXOs can become unspendable

A UTXO worth less than the fee needed to spend it is **economic dust**: it costs more to move than it is worth. At 100 sat/vB, spending one native segwit input costs about 6,800 sats, so a 5,000-sat UTXO is worthless until fees fall.

## How does your wallet handle UTXOs?

<div class="fixed-width-table">

| Function | What Your Wallet Does |
|----------|----------------------|
| **Balance** | Sums all UTXOs you control |
| **Receiving** | Generates new addresses to receive new UTXOs |
| **Sending** | Selects which UTXOs to spend (coin selection) |
| **Change** | Creates change outputs back to addresses you control |

</div>

### What is coin selection?

**Coin selection** is how a wallet chooses which UTXOs to spend for a payment. Wallets use different strategies:

<div class="fixed-width-table">

| Strategy | Behavior |
|----------|----------|
| **Largest first** | Uses biggest UTXOs first |
| **Smallest first** | Uses smallest UTXOs first |
| **Random** | Selects randomly |
| **Branch and bound** | Tries to find exact match (no change) |

</div>

Choosing the UTXOs yourself is called coin control, and it matters for both privacy and fees; see [UTXO management](/docs/learn/privacy/utxo-management/).

## What does a wallet balance really contain?

<div class="doc-diagram">

![A wallet showing a 0.088 BTC balance actually holds five separate UTXOs of 0.05, 0.02, 0.01, 0.005 and 0.003 BTC, each locked to its own address with its own history, and each spent whole or not at all](/img/diagrams/transactions/wallet-utxos.svg)

</div>

Each UTXO has its own value, address and history, and is spent whole or not at all.

## What do people get wrong about UTXOs?

| Belief | What actually happens |
|---|---|
| "I can send part of my balance" | Only whole UTXOs are spent; the wallet creates change so it looks like part of a balance |
| "Fees depend on how much I send" | Fees depend on size in bytes, which depends on how many UTXOs are spent, not on their value |
| "All my bitcoin is the same" | Each UTXO has its own history and sources, with different privacy consequences |
| "My balance is one number" | It is the sum of separate UTXOs, and knowing which you hold matters for fees and privacy |
