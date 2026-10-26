---
sidebar_position: 3
title: "Protecting Your Privacy"
description: "Overview of Bitcoin privacy techniques. Learn the principles and methods for protecting your financial privacy when using Bitcoin."
keywords: ["bitcoin privacy", "privacy techniques", "coinjoin", "utxo management", "tor", "own node"]
tags: ["privacy", "bitcoin", "security"]
date: "2026-01-13"
---

# Protecting your privacy

Protecting bitcoin privacy comes down to a few habits and three tools. The habits: never reuse an address, keep coins from different sources apart, do not post addresses or discuss your holdings, and think before each transaction about what it links. The tools: your own node, so no server learns your addresses; UTXO management and coin control, so payments do not tie your coins together; and CoinJoin or PayJoin, which break the links chain analysis relies on. Start with the habits and your own node, and add the rest as your [threat model](/docs/learn/fundamentals/threat-models/) requires.

This page is the overview; [why privacy matters](/docs/learn/privacy/why-privacy-matters/) and [chain analysis explained](/docs/learn/privacy/chain-analysis/) cover the problem.

## Which principles come first?

- Think before you act. Every transaction leaves a permanent trace, so ask whether it links your identity to an address, reveals more than it needs to, or could be done more privately.
- Keep identities separate. Do not mix KYC bitcoin (bought with ID) with non-KYC bitcoin, work payments with personal ones, or public donation addresses with private savings.
- Leak as little as possible. Use a new address for every payment, do not post addresses publicly unless you must, and consider who can see each transaction.

## Which techniques help, and how hard are they?

| Technique | What it does | Effort | Guide |
|-----------|--------------|------------|---|
| Never reuse addresses | Stops payments being linked through one address | Easy | |
| Keep coin sources separate | Keeps identities apart | Easy | [UTXO management](/docs/learn/privacy/utxo-management/) |
| Do not post addresses | Prevents scraping | Easy | |
| Run your own node | Stops your addresses leaking to servers | Medium | [Node guide](/docs/bitcoin-node/) |
| Coin control and labels | Decide which coins each payment spends | Medium | [Coin control](/docs/learn/privacy/utxo-management/#what-is-coin-control) |
| CoinJoin | Mixes coins with others to cut their history | Harder | [CoinJoin](/docs/learn/privacy/coinjoin/) |
| PayJoin | Hides a payment inside an ordinary-looking transaction | Medium | [PayJoin](/docs/learn/privacy/payjoin/) |

## Why run your own node?

A wallet that uses someone else's node or a public server reveals all your addresses, your transaction history and possibly your IP address to whoever runs it. With your own node the wallet's questions stay on your hardware, nobody else sees your addresses, and you verify everything yourself. [What is a Bitcoin node](/docs/learn/nodes/what-is-node/) and [why run your own](/docs/learn/nodes/why-run-node/) explain it, and the [node guide](/docs/bitcoin-node/) sets one up.

## Why manage your UTXOs?

Your bitcoin is a set of separate coins, and how you spend them decides what observers can link. Combining coins from different sources ties them together, more coins mean higher fees, and careless spending reveals your activity. Label where every coin came from, never combine KYC and non-KYC coins, choose inputs with coin control, and consolidate only coins from the same source. The [UTXO management guide](/docs/learn/privacy/utxo-management/) covers it.

## What does CoinJoin add?

CoinJoin combines inputs from several people into equal outputs, which defeats the common-input-ownership heuristic and hides which output belongs to whom. After a good CoinJoin, analysts cannot tell which output is yours, and the coins' history is cut: they gain forward privacy. The mixed coins then need careful handling, and some exchanges flag CoinJoin history. The [CoinJoin page](/docs/learn/privacy/coinjoin/) covers both.

## How can you acquire bitcoin more privately?

Bitcoin bought on a KYC exchange is linked to your identity from the start, and no later technique fully undoes that. Other ways to acquire it:

| Method | Privacy | Trade-offs |
|--------|---------------|-----------|
| Peer to peer | Higher | More effort, and a risk of scams |
| Some bitcoin ATMs | Medium | Often filmed, and many now require ID |
| Being paid in bitcoin | Higher | The payer knows your address |
| Mining | Highest | Expensive equipment and technical knowledge |

## What about privacy at the network level?

A transaction that looks private on chain can still leak your IP address when it is broadcast, when you come online, and who you connect to.

| Tool | What it does |
|------|--------------|
| Tor | Hides your IP address |
| A VPN | Hides your IP address from everyone except the VPN provider |
| Your own node | Broadcasts your transactions without a third-party server |
| Your own node over Tor | The best combination |

The [Tor guide](/docs/bitcoin-node/tor/) sets it up.

## What can't be fixed afterwards?

| Situation | Why it cannot be undone |
|-----------|----------------------|
| A withdrawal from a KYC exchange | The exchange keeps your identity on record |
| An address posted online | It may be archived, scraped or saved |
| A payment to an identified address | The transaction is permanent |
| Blockchain history in general | The past cannot be changed |

What you can do is start fresh with new coins, CoinJoin existing coins for forward privacy, and be more careful from now on.

## What does each technique cost?

| Technique | Privacy benefit | Cost or risk |
|-----------|----------------|-----------|
| Your own node | No address leakage | Disk space and setup time |
| CoinJoin | Cuts transaction links | Fees, time, and possible questions from exchanges |
| Buying peer to peer | No KYC link | A price premium and counterparty risk |
| Coin control | Better privacy for each payment | Manual effort and a learning curve |

## Where should you start?

1. Run your own node, with the [node guide](/docs/bitcoin-node/).
2. Learn [UTXO management](/docs/learn/privacy/utxo-management/).
3. Use [coin control](/docs/learn/privacy/utxo-management/#what-is-coin-control) on every payment.
4. Consider [CoinJoin](/docs/learn/privacy/coinjoin/) for coins you already hold.

And keep the habits: a new address every time, labels on every incoming payment, sources kept apart, and a moment's thought before each transaction.
