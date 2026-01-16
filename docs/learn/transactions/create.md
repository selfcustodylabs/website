---
sidebar_position: 4
title: "How Bitcoin Transactions Are Created"
description: "Practical guide: Creation. Covers Manually Building Transactions, Using Wallets to Send Transactions, RBF – Replace-by-Fee."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "creation"]
tags: ["bitcoin", "transactions", "creation"]
---
# Creating Transactions

Most Bitcoin wallets make it incredibly simple to create a transaction: just enter the amount you want to send and the recipient’s address. Behind the scenes, though, there’s a lot more going on.


## Manually Building Transactions

For users who want greater control, it's possible to build Bitcoin transactions manually. This involves selecting which unspent transaction outputs (UTXOs) to use as **inputs**, specifying the **outputs** (where the Bitcoin will go), choosing a **change address** (where the leftover amount returns), and setting a transaction fee to pay the miners.

Tools like [Sparrow Wallet](https://sparrowwallet.com/), [Electrum Wallet](https://electrum.org/), and [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/) allow for this level of precision. Manual construction is especially useful for privacy-conscious users, since it enables **coin control**, avoiding UTXOs that could be linked to your identity. It also lets you fine-tune fees and decide how your change is handled, which can impact both cost and privacy.


## Using Wallets to Send Transactions

Most wallets take care of everything for you. They automatically select inputs and outputs, calculate the fee, and handle signing and broadcasting the transaction.

From your end, all you typically do is enter the recipient's address and the amount to send. Some wallets may also let you choose a **fee rate** or priority level. This convenience makes wallet-based sending ideal for everyday use and helps minimize user error.


## RBF – Replace-by-Fee


**Replace-by-Fee (RBF)** is a feature that lets you increase a transaction’s fee after it’s been broadcast, provided it hasn’t been confirmed yet.

This is especially useful when a transaction gets stuck in the mempool because the original fee was too low. Instead of waiting indefinitely, you can resend the transaction with a higher fee to speed things up.

To use RBF, you need to enable it when creating the transaction. Most wallets have a checkbox or setting for this. If the transaction remains unconfirmed, you can then replace it with a higher-fee version.


## CPFP – Child Pays for Parent

If you didn’t enable RBF and your transaction is stuck, there’s another option: **Child Pays for Parent (CPFP)**.

With CPFP, you create a second transaction, the "child" that spends from the unconfirmed transaction, the "parent." You attach a high fee to the child transaction, which incentivizes miners to include both in the next block so they can claim the combined fee.

This method is particularly useful in wallets that support advanced fee control or for miners optimizing which transactions to include in a block.
---

<RelatedArticles 
  title="Continue Learning"
  articles={[
    { title: "Signing Transactions", href: "/docs/learn/transactions/sign/", tag: "Next" },
    { title: "UTXOs Explained", href: "/docs/learn/transactions/utxos/", tag: "Learn" },
    { title: "Transaction Fees", href: "/docs/learn/transactions/fees/", tag: "Learn" },
    { title: "UTXO Management Guide", href: "/docs/privacy/utxo-management/", tag: "Guide" },
  ]}
/>
