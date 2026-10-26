---
sidebar_position: 4
title: "Electrum Server Explained"
description: "Understand Electrum servers (Electrs, Fulcrum): what they do, why you need one, and how to choose between options for your Bitcoin node setup."
keywords: ["electrum server", "electrs", "fulcrum", "bitcoin node", "sparrow wallet", "indexing", "self custody"]
tags: ["bitcoin node", "electrum", "setup", "self custody"]
---

# Electrum server explained

An Electrum server is software that indexes the blockchain your Bitcoin Core node has verified by address, so that a wallet such as Sparrow can ask "what is the balance and history of these addresses?" and get an answer in milliseconds. Running your own keeps those questions private and answered from data you verified, instead of telling a public server every address you own. We recommend Fulcrum, the fastest; electrs uses less memory and suits a Raspberry Pi with 4 GB. Building the index takes 12 to 48 hours once Bitcoin Core has synced.

## What does an Electrum server do?

Bitcoin Core verifies the chain but is not built to look up arbitrary addresses quickly. The Electrum server sits between it and your wallet, reads every block Core has verified, and builds a database that maps addresses to transactions; the wallet then talks only to the Electrum server.

<div class="doc-diagram">

![An Electrum server sits between Sparrow and Bitcoin Core: the wallet asks for an address balance, the server answers instantly from its index, and the index is built by reading the chain Core has verified](/img/diagrams/bitcoin-node/electrum-query-flow.svg)

</div>

## Why do you need one?

| How the wallet gets its data | Speed | Privacy |
|---|---|---|
| Directly from Bitcoin Core (Sparrow supports this) | Works, but each wallet has to be rescanned from its creation date, and few wallets support it | Private |
| From a public Electrum server | Fast | The server sees every address and transaction |
| From your own Electrum server | Fast | Private: the questions stay on your network |

Your own server is the one arrangement that is both fast and private, and it lets any Electrum-compatible wallet, on any of your devices, use your node.

## Which Electrum server should you run?

<div class="fixed-width-table">

| Server | Written in | Memory | Indexing | Suits |
|--------|----------|-----------|------------|----------|
| Fulcrum | C++ | 4 GB or more, ideally 8 GB | Faster | Most people |
| electrs | Rust | 2 GB or more | Slower | Computers with little memory |
| ElectrumX | Python | 8 GB or more | Varies | Older setups |

</div>

Fulcrum is the fastest, and once its index is built, queries are near-instant; in Parmanode, type `f` in the node install menu. electrs uses less memory, which suits a 4 GB Raspberry Pi 4, at the cost of slower indexing; in Parmanode, type `ersd` for its Docker version. ElectrumX is the original Python implementation; it still works, but the other two are faster and more efficient for new setups.

## What happens during indexing?

After Bitcoin Core finishes syncing, the server reads the whole blockchain from it and builds its database, which takes 12 to 48 hours depending on your hardware. CPU and disk use are high throughout, and wallets cannot connect until it finishes. It happens once: afterwards the server indexes each new block as it arrives, about every ten minutes.

## What does running your own give you?

- Privacy: your wallet's questions never leave your network, where a public server would see every address you check and every transaction you broadcast.
- Verification: the answers come from your own Bitcoin Core, which checked every block against the rules.
- Reliability: public servers go offline, slow down or shut; yours is there whenever your node is running.
- No logging but your own: a public server may record your activity; yours records only what you configure.

## How do you connect a wallet?

If you installed through Parmanode, the server's menu shows its connection details:

```
CONNECT:    127.0.0.1:50001   [From this computer only]
            127.0.0.1:50002:s [From this computer only - SSL]
            192.168.0.170:50001 [From any home network computer]

TOR:        [onion address for remote access]
```

Port 50001 is the standard, unencrypted Electrum protocol, fine on your own network; port 50002 is encrypted with SSL; the Tor address is for connecting privately from outside your home. Wallets installed through Parmanode are already configured. [Connect Sparrow to your node](/docs/bitcoin-node/connect-sparrow-wallet/) covers the rest.

## How much storage does the index need?

Each server's index is extra storage on top of the blockchain: Fulcrum's is the largest, at well over 100 GB, electrs's the smallest, at roughly 50 GB, and ElectrumX's in between, all growing with the chain. The blockchain itself was about 770 GB in September 2026 and grows by roughly 75 GB a year, so Bitcoin Core plus any of these servers no longer fits on a 1 TB drive. Use a 2 TB SSD.

## What if something does not work?

| Problem | What to check |
|---|---|
| The wallet gets "connection refused" | That Bitcoin Core has fully synced, that the Electrum server is running (Parmanode's menu shows it) and has finished indexing, and that you are using the right port, 50001 or 50002 |
| Indexing seems stuck | It takes 12 to 48 hours. Check for disk activity, which means it is working, how much memory is free, since too little slows it badly, and that Bitcoin Core has fully synced |
| CPU use is high | Normal while indexing; it drops once the index is built |
