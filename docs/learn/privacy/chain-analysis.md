---
sidebar_position: 2
title: "Chain Analysis Explained"
description: "Learn how blockchain surveillance works. Understand the heuristics and techniques used to track Bitcoin transactions and link addresses to identities."
keywords: ["chain analysis", "blockchain surveillance", "bitcoin tracking", "heuristics", "common input ownership"]
tags: ["privacy", "chain analysis", "bitcoin", "surveillance"]
---

# Chain analysis explained

**Chain analysis** is the practice of studying the public bitcoin blockchain to group addresses by owner, follow coins from one transaction to the next, and attach those groups to real people, mostly using data from exchanges. It is an industry selling to governments, exchanges and banks. It works from heuristics, which are rules of thumb about how people usually spend, and from outside data, so it produces probabilities rather than proof, and each heuristic has known weaknesses that privacy tools such as coin control and CoinJoin exploit.

## What does chain analysis try to do?

At its core, chain analysis is pattern recognition on a massive scale. Analysts study blockchain data to achieve several goals:

**Clustering addresses:** Determining which addresses belong to the same person or entity. If they can prove that addresses A, B, and C all belong to you, they've dramatically expanded what they know about your activity.

**Tracking fund flows:** Following bitcoin as it moves through the network. Where did your coins come from? Where did they go? Who else handled them along the way?

**Identifying entities:** Linking address clusters to real-world identities. This is where the blockchain's pseudonymity breaks down entirely.

**Flagging transactions:** Marking certain coins as "tainted" or suspicious based on their history. Yes, your coins can be flagged for something a previous owner did.

This intelligence is valuable. Law enforcement uses it to track criminals. Exchanges use it to comply with regulations. Tax authorities use it to ensure compliance. And increasingly, ordinary financial institutions use it to make decisions about which customers to serve.

## Which techniques does chain analysis use?

Chain analysis isn't black magic. It's a set of logical inferences applied at scale. The industry relies on **heuristics**: rules of thumb that are usually (but not always) true. Understanding these heuristics reveals both their power and their limitations.

### The common-input-ownership heuristic

This is the most powerful tool in the analyst's arsenal, and it's deceptively simple.

**The assumption:** If multiple addresses are used as inputs in the same transaction, they all belong to the same owner.

**Why it usually works:** To spend bitcoin from multiple addresses in one transaction, you need the private keys for all of them. Typically, only one person has those keys.

<div class="doc-diagram">

![The common input ownership heuristic: addresses A, B and C worth 0.5, 0.3 and 0.4 BTC are spent together into outputs of 0.7 and 0.5 BTC, so an analyst concludes one entity controls all three inputs](/img/diagrams/privacy/chain-common-input.svg)

</div>

**When it breaks down:**
- CoinJoin transactions intentionally combine inputs from multiple people
- PayJoin transactions mix buyer and seller inputs

### Change address detection

When you spend bitcoin, you rarely have the exact amount needed. If you have a 1 BTC UTXO and want to pay someone 0.7 BTC, the remaining 0.3 BTC comes back to you as change, sent to a new address your wallet controls.

Analysts exploit this pattern. In any transaction with two outputs, they ask: which one is the payment, and which one is change returning to the sender?

<div class="doc-diagram">

![Change detection: a 1.00 BTC input pays 0.70 BTC to a round-number payment output and 0.29 BTC to a new address of the same script type; the odd remainder marks it as change returning to the sender, with 0.01 BTC as fee](/img/diagrams/privacy/chain-change-detection.svg)

</div>

Several indicators help analysts make this determination:

<div class="fixed-width-table">

| Indicator | Why It Suggests Change |
|-----------|----------------------|
| New address | Wallets generate fresh change addresses |
| Odd decimal places | Payments tend to be round numbers |
| Same script type | Wallet uses consistent address format |
| Smaller amount | Change is often the remainder |

</div>

The real power comes from combining heuristics. Once analysts identify a change address, they can link it to your other addresses via common input ownership when you spend from it later. Your change address becomes another piece of your financial profile.

### Address reuse

Using the same address twice is a privacy catastrophe. It creates an undeniable link between transactions.

<div class="doc-diagram">

![Address reuse: a payment received at address A, a payment sent from A and a second payment received at A are all permanently linked; knowing one transaction reveals the others, which is why wallets rotate addresses](/img/diagrams/privacy/chain-address-reuse.svg)

</div>

Modern wallets generate new addresses automatically for this reason, but address reuse still happens, especially when people share a single "donation" address publicly or when merchants use static payment addresses.

### Timing analysis

Time leaves fingerprints. Transactions close together in time are often related, and regular patterns reveal behavioral information.

If you deposit to an exchange and withdraw minutes later, those transactions are likely related. If you receive payment and immediately forward it to another address, the connection is obvious. If you make transactions at the same time every day or week, you're creating a pattern that can be correlated with real-world activity.

### Amount correlation

Numbers tell stories. Payments are often round numbers (0.1 BTC, 0.01 BTC), while change addresses tend to have irregular amounts. If 0.5 BTC enters a mixer and 0.5 BTC exits somewhere else, they might be connected, though sophisticated mixers work hard to break this correlation.

## How do analysts build a profile of you?

The real power of chain analysis comes from combining these techniques. Individually, each heuristic provides a piece of the puzzle. Together, they build comprehensive profiles.

<div class="doc-diagram">

![Cluster building: addresses A, B and C spent together are one owner, change detection adds D, a later co-spend adds E, and the analyst ends up holding a map of every address you control](/img/diagrams/privacy/chain-analysis-cluster.svg)

</div>

## Where does the identity data come from?

Blockchain analysis is powerful, but it becomes devastating when combined with off-chain data. The blockchain tells analysts where coins move; external data tells them who's moving them.

### Exchange records

Here's the uncomfortable truth: when you use a KYC (Know Your Customer) exchange, you're creating a permanent link between your legal identity and your Bitcoin addresses. The exchange knows who you are. They know which addresses you've deposited to and withdrawn from. And they share this information with chain analysis companies, sometimes directly, sometimes through regulatory requirements.

This is often the starting point for tracing. An analyst might not know who controls a random address on the blockchain, but once that address receives funds from a known exchange withdrawal, the connection is made.

### Web scraping

Chain analysis companies don't just watch the blockchain; they scour the internet. They search for Bitcoin addresses posted in forums, donation addresses on websites, addresses in leaked databases, and social media posts where people mention their addresses. Every public mention of a Bitcoin address is potential data.

That donation address on your blog? It's been catalogued. That transaction ID you shared to prove a payment? It's been noted. The internet never forgets, and neither do surveillance companies.

### Network metadata

Even beyond blockchain and web data, your transactions leak information. If you're not using Tor, your IP address may be associated with your transactions. Browser fingerprints, transaction timing patterns, and unique wallet behaviors all create signatures that can be correlated with other data.

## How certain are the attributions?

There's an important distinction between clustering and attribution. Clustering means determining that addresses A, B, and C belong to the same entity. Attribution means determining that entity is you.

**Strong attribution** comes from direct evidence: your exchange account withdrew to that address, you posted that address publicly, or that address appears in a law enforcement database linked to your identity.

**Weak attribution** comes from inference: the address transacted with someone identified, the behavioral pattern matches expectations, or statistical analysis suggests a likely owner.

Chain analysis companies often have high confidence in their clusters but varying confidence in attribution. They know addresses belong together; they're less certain about who controls them. This matters because weak attribution can be challenged, and because it creates false positive risk.

## What does this mean for you?

Let's make this concrete. If an analyst has identified even one address you control, here's what they can potentially learn:

**Your transaction history is visible.** Every transaction from identified addresses is recorded permanently. Where you sent coins, when you sent them, how much you sent: all of it.

**Past actions affect future privacy.** Those coins you bought years ago still carry their history. Address reuse from the past still creates links. Your entire financial history can be reconstructed retroactively if the starting point is identified.

**Exchanges are key vulnerability points.** KYC exchanges create the identity links that make everything else possible. Even using an exchange once, years ago, creates a permanent record that can anchor future analysis.

## What are the limits of chain analysis?

Chain analysis is powerful, but it's not omniscient. Every technique has limitations, and understanding them reveals opportunities for protection.

<div class="fixed-width-table">

| Technique | Limitation |
|-----------|------------|
| Common input ownership | Broken by CoinJoin and PayJoin |
| Change detection | Multiple conflicting indicators |
| Timing analysis | Users can deliberately delay transactions |
| Amount correlation | Equal-output transactions obscure amounts |

</div>

**CoinJoin and similar techniques** specifically target these heuristics. When multiple people combine their transactions, the common input ownership assumption breaks down completely. When outputs are all equal amounts, change detection becomes impossible. When timing is randomized, temporal analysis loses power.

This is the key insight: chain analysis relies on assumptions about how people typically use Bitcoin. Use Bitcoin atypically, intentionally, and those assumptions fail.
