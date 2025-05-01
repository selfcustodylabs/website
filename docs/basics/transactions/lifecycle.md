---
sidebar_position: 3
title: Lifecycle
slug: /basics/transactions/lifecycle
tags: [bitcoin, transactions, lifecycle]
---

# Transaction Lifecycle

When you send Bitcoin, the transaction goes through a series of steps before it's fully confirmed and secure. Here's what happens behind the scenes.


## Step 1: Creating the Transaction

It all begins in your Bitcoin wallet. You enter the recipient’s address and the amount you want to send. The wallet then selects which coins (UTXOs) to use, generates the outputs—including any change back to you—and calculates an appropriate fee based on current network conditions.

Once everything is set, the transaction is **signed** using your private key. This signature proves that you're authorized to spend the funds and makes the transaction ready for broadcasting.


## Step 2: Broadcasting the Transaction

Next, your wallet sends the signed transaction to the Bitcoin network. It’s now publicly visible and enters the **mempool**, a kind of waiting room for unconfirmed transactions.


## Step 3: The Mempool – Waiting Room

Every full node on the Bitcoin network keeps a copy of the mempool. This is where your transaction waits to be included in a block. Miners review the mempool and select which transactions to include, typically favoring those that pay higher fees.

If your fee is too low, your transaction might stay in the mempool for a while until a miner chooses to include it—or until you boost the fee using RBF or CPFP techniques.


## Step 4: Block Inclusion

Roughly every 10 minutes, a miner successfully mines a new block and includes a set of transactions from the mempool. If your transaction makes it into the block, it’s now considered confirmed, and this is the moment it officially becomes part of the blockchain.


## Step 5: Confirmations

Once your transaction is in a block, each additional block that gets added afterward increases its number of confirmations. At:

- 0 confirmations, the transaction is unconfirmed.
- 1 confirmation means it’s in a block.
- 6 confirmations is widely considered secure, especially for larger transactions.

The more confirmations a transaction has, the harder it becomes to reverse. That’s why businesses and users often wait for multiple confirmations before considering the payment final.