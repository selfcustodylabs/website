---
sidebar_position: 0
sidebar_label: "Overview"
title: "Bitcoin Transactions: How They Work"
description: "How Bitcoin transactions work end to end: UTXOs, transaction creation, signing, broadcasting, fees, and the transaction types you will actually encounter."
keywords: ["bitcoin transactions", "utxo", "psbt", "signing", "broadcasting", "fees", "self custody"]
tags: ["transactions", "bitcoin", "self custody"]
slug: /learn/transactions
---

# Bitcoin Transactions

A Bitcoin transaction is not a debit from an account. It is a chain of cryptographic claims: you prove you control some unspent outputs (UTXOs), you spend them, and you create new outputs locked to whoever you are paying. Understanding this changes how you think about wallets, fees, and privacy.

## In this section

- **[Understanding Transactions](./understanding)** — the mental model you need before anything else
- **[UTXOs](./utxos)** — the building blocks every transaction consumes and produces
- **[Creating Transactions](./create)** — how a wallet actually assembles a transaction
- **[Signing Transactions](./sign)** — what signing means and how online vs offline signing differ
- **[Broadcasting Transactions](./broadcast)** — getting your signed transaction onto the network
- **[Fees](./fees)** — how miners pick which transactions to include
- **[Transaction Types](./types)** — pre-signed, fully signed, and partially signed (PSBT)
