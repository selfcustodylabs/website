---
sidebar_position: 7
title: "Bitcoin PayJoin (BIP78): Stealth Privacy for Payments"
description: "Learn how PayJoin (BIP78) enhances Bitcoin privacy by breaking the common-input-ownership assumption. Set up PayJoin with Sparrow Wallet and BTCPay Server."
keywords: ["bitcoin payjoin", "BIP78", "P2EP", "pay to endpoint", "bitcoin privacy", "sparrow payjoin", "btcpay server payjoin", "blockchain analysis"]
tags: ["payjoin", "privacy", "transactions", "BIP78"]
slug: /learn/privacy/payjoin
guide:
  time: "30 minutes"
  level: "Intermediate"
  cost: "Free (just transaction fees)"
---

# PayJoin: stealth privacy for Bitcoin payments

**PayJoin** (BIP78, also called pay-to-endpoint) is a way of paying in bitcoin in which the receiver adds one of their own inputs to the sender's transaction. The result looks like an ordinary payment, but it breaks the assumption chain analysis relies on most, that all of a transaction's inputs belong to the sender, and it hides the real amount paid. It costs no more than a normal payment; it needs a receiver that supports it, such as a merchant using BTCPay Server, and a sending wallet that does, such as Sparrow.

<GuideFacts />

[UTXOs](/docs/learn/transactions/utxos/) are useful background.

In a normal payment the sender provides every input, the receiver gets one output and the sender gets change. In a PayJoin the receiver contributes an input too, so the transaction on chain looks normal while the analyst's reading of it is wrong.

<div class="doc-diagram">

![In a normal payment Alice's 1.0 BTC input pays Bob 0.7 with 0.3 change; in a PayJoin Bob adds his own 0.5 BTC input and receives 1.2, so the analyst reads the payment as 1.2 and wrongly assumes every input is Alice's](/img/diagrams/privacy/payjoin-vs-normal.svg)

</div>

## Why does PayJoin matter?

Chain analysis assumes that all inputs in a transaction belong to one owner. The assumption is right most of the time, which is what makes it useful for surveillance. PayJoin breaks it, and because a PayJoin looks like any other payment, analysts can no longer be sure of the assumption even for transactions that are not PayJoins. Every PayJoin adds that doubt across the whole transaction graph, so wider use helps everyone's privacy, including people who never use it.

## How does a PayJoin work?

1. Alice wants to pay Bob 0.7 BTC.
2. Her wallet builds a normal transaction: a 1 BTC input, 0.7 BTC to Bob, 0.3 BTC change to Alice.
3. Instead of broadcasting it, the wallet sends it as a PSBT to Bob's PayJoin endpoint.
4. Bob adds an input of his own, 0.5 BTC, and raises his output to 1.2 BTC.
5. Bob sends the modified transaction back.
6. Alice's wallet checks that it still pays what she intended, and she signs her input.
7. The final transaction is broadcast: inputs of 1 BTC (Alice) and 0.5 BTC (Bob); outputs of 1.2 BTC (Bob) and 0.3 BTC (Alice).

| What an analyst assumes | What actually happened |
|----------------------|---------|
| The sender owned 1.5 BTC of inputs | The sender owned 1 BTC and the receiver 0.5 BTC |
| The payment was about 1.2 BTC | The payment was 0.7 BTC |
| The change was 0.3 BTC | Correct, by coincidence |

## How does PayJoin compare with CoinJoin?

<div class="fixed-width-table">

| | PayJoin | CoinJoin |
|---------|---------|----------|
| Participants | Two: sender and receiver | Many: from 4 to over 100 |
| Coordination | Directly between the two, during the payment | A coordinator, or a peer-to-peer market |
| How it looks | Like a normal transaction | Recognisable as a CoinJoin |
| Purpose | Privacy for a payment | Cutting a coin's history |
| Fees | A normal transaction fee | Mixing fees and a larger transaction |

</div>

PayJoin is stealth privacy: it does not look like a privacy transaction. CoinJoin is explicit privacy: anyone can see it is a CoinJoin, though they cannot trace through it. The two complement each other.

## Which wallets support PayJoin?

### Sending

<div class="fixed-width-table">

| Wallet | Platform | Can send PayJoins |
|--------|----------|-----------------|
| Sparrow | Desktop | Yes |
| BTCPay Server | Web | Yes |
| Wasabi | Desktop | Yes |
| BlueWallet | Mobile | Yes |
| JoinMarket | Desktop | Yes |

</div>

### Receiving

Receiving under BIP78 needs a wallet that supports it and an endpoint, a web address the sender's wallet can reach. BTCPay Server is the easiest way, and handles it automatically for customers whose wallets support it. A newer version, BIP77 ("Payjoin v2"), lets a receiver accept PayJoins without running a server, and some wallets have begun to adopt it; check your wallet's documentation.

## Step 1: Get the recipient's PayJoin request

Step 1 starts from the recipient. A PayJoin-capable recipient gives you a BIP21 payment request (a `bitcoin:` link or QR code) that includes a PayJoin endpoint, an address such as `https://btcpay.example.com/BTC/pj`.

## Step 2: Paste the request into Sparrow

Step 2 builds the payment. In Sparrow, open the `Send` tab and paste the BIP21 request. Sparrow recognises the PayJoin endpoint itself.

## Step 3: Review and send

Step 3 completes it. Sparrow negotiates with the recipient's endpoint, shows that the transaction is a PayJoin, and checks that the payment still goes where you intended. Confirm and broadcast.

## How do you accept PayJoins with BTCPay Server?

1. Open the store's checkout settings.
2. Enable PayJoin (BIP78).
3. Set up a hot wallet for the store, since PayJoin needs the server to contribute and sign an input.

When a customer pays an invoice, a wallet that supports PayJoin negotiates it automatically; one that does not simply pays normally, with no error. The customer does nothing different.

## How do you use PayJoin well?

Use it whenever a recipient offers it, since every PayJoin helps network privacy, and run BTCPay Server if you accept payments, to offer it to your customers. Combine it with coin control and your own node.

Do not expect anonymity from PayJoin alone: it defeats one heuristic, not all of them. Using it with KYC coins does not hide them from the exchange that knows them. And you cannot control the receiver's side; a receiver with poor practices can leak information about the payment.

## What are PayJoin's limits?

- Amounts are still visible on chain.
- It defeats the common-input-ownership heuristic, not the others.
- It protects new transactions, not past ones.
- Both sides need compatible software.

Use [CoinJoin](/docs/learn/privacy/coinjoin/) instead when you need to cut links to a coin's past, want a larger anonymity set, or cannot count on the receiver's cooperation. Use PayJoin when paying a recipient that supports it, when you want privacy that does not look like privacy, or simply to add doubt to the network's transaction graph.

## Where does PayJoin fit among privacy tools?

<div class="fixed-width-table">

| Tool | What it does |
|------|--------------|
| [Your own node](/docs/bitcoin-node/) | Keeps your addresses from third parties |
| [Coin control](/docs/learn/privacy/utxo-management/) | Stops your coins being linked together |
| PayJoin | Defeats the common-input-ownership heuristic |
| [CoinJoin](/docs/learn/privacy/coinjoin/) | Cuts the traceability of a coin's history |
| [Tor](/docs/bitcoin-node/tor/) | Hides your IP address when transacting |

</div>

The strongest privacy uses several layers together.

## Where can you read more?

- [BIP78](https://github.com/bitcoin/bips/blob/master/bip-0078.mediawiki), the PayJoin specification
- [BTCPay Server's PayJoin documentation](https://docs.btcpayserver.org/Payjoin/), for merchants
- [Sparrow Wallet](https://sparrowwallet.com), which sends PayJoins
