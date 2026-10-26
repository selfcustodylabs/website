---
sidebar_position: 0
sidebar_label: "Overview"
title: "Bitcoin Transactions: How They Work"
description: "How Bitcoin transactions work end to end: UTXOs, transaction creation, signing, broadcasting, fees, and the transaction types you will actually encounter."
keywords: ["bitcoin transactions", "utxo", "psbt", "signing", "broadcasting", "fees", "self custody"]
tags: ["transactions", "bitcoin", "self custody"]
slug: /learn/transactions
---

# Bitcoin transactions

A bitcoin transaction is not a debit from an account. It spends specific unspent outputs (UTXOs) that you prove you control, destroys them, and creates new outputs locked to whoever you are paying, with any remainder returned to you as change and the difference left as the miner's fee. That model explains why fees depend on size rather than amount, why change addresses exist, and why combining coins can reveal what you own.

## What does this section cover?

| Page | What it explains |
|---|---|
| [How transactions work](/docs/learn/transactions/understanding/) | Inputs, outputs, change and fees, and a transaction's path from wallet to block |
| [UTXOs](/docs/learn/transactions/utxos/) | The coins every transaction consumes and creates, and why they matter for fees and privacy |
| [Creating transactions](/docs/learn/transactions/create/) | How a wallet assembles one, coin control, and how to speed up a stuck one |
| [Signing transactions](/docs/learn/transactions/sign/) | What a signature proves, online and offline signing, and PSBTs |
| [Broadcasting transactions](/docs/learn/transactions/broadcast/) | Getting a signed transaction to the network, and what that reveals |
| [Fees](/docs/learn/transactions/fees/) | How fees are set, estimated and reduced |
| [Transaction types](/docs/learn/transactions/types/) | Unsigned, partially signed, fully signed and pre-signed transactions |
