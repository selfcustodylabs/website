---
sidebar_position: 6
title: "How to Broadcast a Bitcoin Transaction"
description: "How a signed Bitcoin transaction reaches the network, and why broadcasting through your own node instead of a public server keeps your IP and addresses private."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "broadcasting"]
tags: ["bitcoin", "transactions", "broadcasting"]
---

# Broadcasting transactions

Broadcasting is sending a fully signed transaction to the bitcoin network: the first node to receive it checks it and relays it to its peers, and within seconds it sits in nodes' mempools, where miners pick it up. Broadcasting through your own node reveals nothing to anyone else; broadcasting through a wallet company's or a public server tells that server your IP address and the transaction, and lets it log, delay or refuse to relay it. Your own node, ideally over Tor, is the private choice.

## Should you broadcast through your own node or a third-party server?

<div class="doc-diagram">

![Two ways to broadcast a transaction: through your own node it reaches the peer-to-peer network with no intermediary, while a third-party server sees your IP address and can log, delay or censor the transaction before relaying it](/img/diagrams/transactions/broadcast-paths.svg)

</div>

| | Your own node | Third-party server |
|---|---|---|
| Examples | Bitcoin Core, or a node package such as Umbrel or Parmanode | Public Electrum servers, a block explorer, the wallet company's servers |
| Who sees the transaction first | Only your node | The server operator, with your IP address |
| Can it be delayed or refused? | No | Yes, by the operator |
| Setup | A node to run and maintain; see the [node guide](/docs/bitcoin-node/) | None |

Many phone wallets broadcast through their developer's servers by default. That is convenient, but it is a trade of privacy and control for no setup.

## How do you broadcast more privately?

- Route the wallet's connection through Tor, whether it talks to your own node or a public server, so the IP address it reveals is not yours.
- Know what your phone wallet connects to by default, and point it at your own server if it allows.
- Run your own node: it is the one arrangement in which nobody else sees your transaction before the network does.
