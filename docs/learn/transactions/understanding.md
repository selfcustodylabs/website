---
sidebar_position: 2
title: "How Transactions Work"
description: "Understand how Bitcoin transactions work: inputs, outputs, change, and fees. Learn the basics of sending Bitcoin."
keywords: ["bitcoin", "transactions", "inputs", "outputs", "fees", "basics"]
tags: ["bitcoin", "transactions", "understanding"]
---

# How Bitcoin Transactions Work

Bitcoin might seem complicated at first, but once you understand a few key ideas, the process becomes much clearer. Here's what actually happens when you send Bitcoin.


## Inputs and Outputs

Bitcoin doesn't work like a bank account where your balance is just a number. Instead, it uses the **UTXO model** (Unspent Transaction Outputs).

:::tip Deep Dive
For a complete explanation of UTXOs, see [UTXOs Explained](/docs/learn/transactions/utxos).
:::

- **Input:** Where the Bitcoin is coming from (previous UTXOs you own)
- **Output:** Where the Bitcoin is going (new UTXOs being created)

When you send Bitcoin, you're telling the network:

*"I want to consume these inputs (UTXOs I previously received) and create these outputs (new UTXOs for the recipient and change for myself)."*


## You Always Spend the Whole Input

One important detail: Bitcoin doesn't let you spend just a portion of an input. You always spend the whole thing. If you only need part of it, the rest is sent back to you as **change**, usually to a new address that your wallet controls automatically.

Example:

- You have an input worth 0.01 BTC
- You send 0.008 BTC to a friend
- The remaining 0.002 BTC goes back to you as change on a new address

Your wallet takes care of this behind the scenes, but it helps to understand what's happening.


## Transaction Fees

To get your transaction included in a block, you pay a small fee to the miners. This fee isn't a separate line item - it's simply the difference between the amount you're spending and what's being sent out.

Going back to our example:

- **Inputs**: 0.01 BTC
- **Outputs**: 0.008 BTC to friend + 0.0019 BTC change
- **Fee**: 0.0001 BTC (automatically calculated by your wallet)

That means the remaining 0.0001 BTC was used as the transaction fee.

Your wallet usually calculates the fee for you, based on how busy the network is.

:::info Fee Insight
Fees depend on transaction **size** (in bytes), not the **value** being sent. More UTXOs means a larger transaction and higher fees. See [UTXOs Explained](/docs/learn/transactions/utxos) for details.
:::


## Miners Confirm Your Transaction

Once your transaction is broadcasted, it enters the Bitcoin network and waits in the **mempool** - a sort of public waiting room for unconfirmed transactions.

Miners look through the mempool and choose which transactions to include in the next block. Transactions with higher fees get picked first. When your transaction is added to a block, it gets its first confirmation.

Each time a new block is added after that, your transaction gains another confirmation. One confirmation is usually enough for small payments, while larger ones (like several thousand dollars or more) typically wait for six confirmations to be considered fully secure.
