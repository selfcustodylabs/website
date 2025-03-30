---
sidebar_position: 5
title: Electrum Server (Electrs)
slug: /bitcoin-node/electrum-server-setup
tags: [bitcoin node, electrum, setup, self custody]
---

# Electrum Server (Electrs)

An Electrum server, in this case `Electrs`, is a service that helps index the Bitcoin blockchain to make it easier and faster for lightweight wallets (like Sparrow wallet) to interact with the blockchain without needing to store the entire blockchain locally. The key function of indexation is what makes an Electrum server so useful, and here's why it's important:


## What is Indexation?

Indexation refers to the process of organizing and structuring blockchain data in a way that allows fast access to specific information. In the context of Bitcoin, a full node has to process all transactions and blocks and store the entire history of the blockchain. Electrs takes this data from a Bitcoin full node and indexes it so that it can quickly serve requests from lightweight wallets like Sparrow.


## Why is Indexation Important?

- **Efficiency and Speed** – The Bitcoin blockchain is large and growing, with over 500 GB of data as of 2025. Storing and processing all this data can be resource-heavy. Instead of querying the entire blockchain every time you want to check a balance or validate a transaction, the indexing process creates a more efficient structure, so the server can return specific results (e.g., transactions related to your address) much faster.
- **Enabling Lightweight Wallets** – Lightweight wallets, like Sparrow, don't download the entire blockchain. Instead, they rely on servers (like Electrs) that have indexed blockchain data. This way, Sparrow wallet can access only the relevant parts of the blockchain, such as transactions involving your address, without needing to store all the data. Indexing makes this possible without sacrificing performance or reliability.
- **Reduced Storage Requirements** – Instead of downloading the entire blockchain (which is massive), a Sparrow wallet can query an Electrs server that has already indexed the necessary data. This allows users to run a Bitcoin wallet on devices with limited storage, while still interacting with the full, up-to-date blockchain.
- **Faster Search and Transaction Validation** – When you want to check if a transaction has been confirmed, or if your balance has changed, an indexed database allows the Electrs server to provide those updates quickly, rather than scanning through the entire blockchain each time. The server can quickly fetch the relevant block, transaction, and state without unnecessary delays.


## How Does Indexation Help with Security and Privacy?

- **Self-Hosting for Security** – By running your own Electrs server connected to your Bitcoin full node, you’re essentially creating your own personal index of the blockchain. This gives you control over the data and how it's accessed, rather than relying on potentially untrustworthy third-party servers.
- **Privacy** – Using an Electrs server that you control ensures that your wallet queries are private. Public Electrum servers can track your transactions and wallet usage. With your own server, your wallet's activity stays private.
- **No Need to Trust Third-Party Servers** – With Electrs indexing the blockchain data on your full node, you don’t have to rely on a public Electrum server to fetch blockchain data. Public servers might be unreliable or malicious, but your own indexed data ensures you're interacting with the blockchain in a secure, trustworthy manner.