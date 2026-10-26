---
sidebar_position: 4
title: "How Bitcoin Transactions Are Created"
description: "How a Bitcoin transaction is put together: choosing UTXOs as inputs, setting outputs and change, and unsticking a slow payment with RBF or CPFP."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "creation"]
tags: ["bitcoin", "transactions", "creation"]
date: "2025-05-01"
---

# Creating transactions

Creating a bitcoin transaction means choosing which UTXOs to spend as inputs, the outputs (the recipient's address and amount, plus a change address for the remainder), and a fee rate. Most wallets do all of this when you enter an address and an amount. Doing it yourself, called coin control, lets you avoid spending coins that would link your identity to a payment and keep fees down. If a transaction sits unconfirmed because its fee was too low, it can be replaced with a higher-fee version (RBF) or pulled through by a high-fee transaction that spends its output (CPFP).

## How does a wallet build a transaction for you?

You enter the recipient's address and the amount, and the wallet selects inputs, adds the outputs and change, calculates the fee and, once you approve, signs and broadcasts. Many wallets let you pick a fee rate or a priority level. For everyday payments this is convenient and leaves little room for mistakes.

## What is coin control?

**Coin control** is choosing yourself which UTXOs a transaction spends, instead of leaving it to the wallet. With it you also choose the change address and set the fee exactly. [Sparrow](https://sparrowwallet.com/), [Electrum](https://electrum.org/) and [Bitcoin Core](https://bitcoincore.org/) all support it. It matters for privacy, because spending coins from different sources together tells observers they belong to the same person, and for fees, because every input adds size; [UTXO management](/docs/learn/privacy/utxo-management/) covers how to use it.

## What if a transaction is stuck?

A transaction stays in the mempool while its fee rate is below what miners are currently taking. Two methods speed it up.

### Replace-by-fee (RBF)

**Replace-by-fee** sends a new version of the transaction, spending the same inputs, with a higher fee; miners take the better-paying version and the original is dropped. Wallets used to have to mark a transaction as replaceable when it was created, but since Bitcoin Core 28.0 (October 2024) nodes accept a replacement for any unconfirmed transaction by default, and Bitcoin Core 29.0 removed the option to refuse. In practice you use the wallet's "bump fee" or "increase fee" action; Sparrow has one on every unconfirmed transaction it sent. Only the sender can do this, since only the sender can sign the inputs again.

### Child pays for parent (CPFP)

**Child pays for parent** is the receiver's option, and the sender's when RBF is not available. You create a second transaction, the child, that spends an output of the stuck transaction, the parent, with a fee high enough to cover both. Miners can only collect the child's fee by including the parent too, so they take both together.
