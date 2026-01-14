---
sidebar_position: 3
title: "CoinJoin Services"
description: "Compare Bitcoin CoinJoin services: Wasabi Wallet, Whirlpool (Sparrow), and JoinMarket. Understand fees, privacy levels, and how to choose."
keywords: ["bitcoin", "coinjoin", "wasabi", "whirlpool", "joinmarket", "sparrow", "privacy"]
tags: ["coinjoin", "privacy", "bitcoin", "wasabi", "whirlpool"]
---

# CoinJoin Services Comparison

Several tools make CoinJoin accessible. This page compares the main options to help you choose.


## Overview

<div class="fixed-width-table">

| Service | Wallet | Coordinator | Min Amount | Approximate Cost |
|---------|--------|-------------|------------|------------------|
| **Wasabi 2.0** | Wasabi Wallet | Centralized | 0.00005 BTC | 0.3% coordinator fee + mining |
| **Whirlpool** | Sparrow Wallet | Centralized | Pool dependent | Fixed fee per pool + mining |
| **JoinMarket** | Jam (Web UI) | Decentralized | Flexible | Variable (can earn as maker) |

</div>

## Wasabi Wallet

[Wasabi Wallet](https://wasabiwallet.io/) is a desktop Bitcoin wallet with built-in CoinJoin.

### How It Works

1. Download and install Wasabi Wallet
2. Create or import a wallet
3. Receive Bitcoin to the wallet
4. Enable CoinJoin—coins mix automatically
5. Wait for mixing rounds to complete

### Pros

- ✅ Simple user interface
- ✅ Automatic mixing (set and forget)
- ✅ Large anonymity sets (100+)
- ✅ Continuous remixing included
- ✅ Works on Windows, Mac, Linux

### Cons

- ❌ Coordinator fee (0.3%)
- ❌ Centralized coordinator (privacy trade-off)
- ❌ Must keep wallet running to remix
- ❌ Wallet is specific to Wasabi (not portable)

### Best For

- Beginners who want simple privacy
- Users with moderate amounts to mix
- Those who prefer "set and forget"

### Fee Structure

- **Coordinator fee:** 0.3% of the amount mixed
- **Mining fees:** Variable based on network conditions
- **Remixing:** Free (no additional coordinator fee)


## Whirlpool (via Sparrow Wallet)

Whirlpool is a CoinJoin implementation originally from Samourai Wallet, now available in [Sparrow Wallet](https://sparrowwallet.com/).

### How It Works

1. Download and install Sparrow Wallet
2. Connect to your own node (recommended) or public server
3. Create or import a wallet
4. Go to UTXOs → Select coins → Mix Selected
5. Choose a pool size
6. Coins enter the mixing cycle

### Pool Sizes

<div class="fixed-width-table">

| Pool | Entry Amount | After Fee |
|------|--------------|-----------|
| 0.5 BTC | 0.5 BTC + fee | 0.5 BTC outputs |
| 0.05 BTC | 0.05 BTC + fee | 0.05 BTC outputs |
| 0.01 BTC | 0.01 BTC + fee | 0.01 BTC outputs |
| 0.001 BTC | 0.001 BTC + fee | 0.001 BTC outputs |

</div>

### Pros

- ✅ Fixed fee (predictable cost)
- ✅ Sparrow is an excellent wallet for other uses too
- ✅ Good anonymity sets
- ✅ Free remixes after initial mix
- ✅ Connects to your own node

### Cons

- ❌ Fixed pool sizes (less flexible)
- ❌ Centralized coordinator
- ❌ Need to leave Sparrow running for remixes
- ❌ "Toxic change" problem (change from pool entry isn't private)

### Best For

- Users already comfortable with Sparrow
- Those who want a full-featured wallet with mixing
- Users running their own Bitcoin node

### Fee Structure

- **Pool fee:** One-time flat fee (varies by pool)
- **Mining fees:** For initial mix and subsequent remixes
- **Remixing:** Free (only mining fees)

### Toxic Change

When you enter a Whirlpool pool, you pay a fee plus your contribution. The "change" from this entry transaction is called **toxic change** because:
- It's clearly linked to your identity
- It reveals you participated in CoinJoin
- It should be handled carefully (don't merge with mixed coins)


## JoinMarket

[JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) is a decentralized CoinJoin marketplace with no central coordinator.

### How It Works

JoinMarket has two roles:

**Taker:** Pays for mixes
- You pay makers a small fee to use their liquidity
- Your mix happens immediately
- You control timing

**Maker:** Earns fees by providing liquidity
- You offer your coins for others to mix with
- You earn fees when selected
- Your coins also get mixed in the process

### Pros

- ✅ No central coordinator (truly decentralized)
- ✅ Can earn fees as a maker
- ✅ Flexible amounts (no fixed pools)
- ✅ More resistant to censorship
- ✅ Open-source and transparent

### Cons

- ❌ Steeper learning curve
- ❌ Requires command line or technical setup
- ❌ Smaller user base = smaller anonymity sets
- ❌ As maker, coins are in a hot wallet

### Best For

- Technical users comfortable with Linux/command line
- Those who want decentralization over convenience
- Users with time who want to earn fees as makers

### Getting Started

JoinMarket traditionally required command-line skills, but newer interfaces like **Jam** (web-based UI) make it more accessible:
- [Jam](https://jamapp.org/) — Web interface for JoinMarket


## Which Should You Choose?

### Choose Wasabi If:
- You're new to CoinJoin
- You want the simplest experience
- You're OK with a centralized coordinator

### Choose Whirlpool (Sparrow) If:
- You already use or want to use Sparrow Wallet
- You run your own Bitcoin node
- You want a full-featured wallet beyond just mixing

### Choose JoinMarket If:
- You value decentralization above convenience
- You're technically skilled
- You want to potentially earn fees as a maker

<div class="fixed-width-table">

## Privacy Comparison

| Aspect | Wasabi | Whirlpool | JoinMarket |
|--------|--------|-----------|------------|
| Coordinator | Centralized | Centralized | Decentralized |
| Anonymity Set | 100+ | 5+ (per round) | Variable |
| Rounds | Continuous | Multiple | As paid |
| Node Required | Recommended | Recommended | Required |

</div>


## Important: Always Use Your Own Node

Regardless of which service you choose, **connect to your own Bitcoin node**.

If you use a public node:
- The node learns your addresses
- Your mixing is exposed to whoever runs that node
- You lose much of the privacy you're trying to gain

See our [Bitcoin Node guide](/docs/bitcoin-node) to set up your own.


## After Mixing: Best Practices

Once you have mixed coins:

1. **Don't merge with unmixed coins** — This undoes the privacy
2. **Use coin control** — Be intentional about which UTXOs you spend
3. **Consider Lightning** — Open channels with mixed coins for additional privacy
4. **Keep mixed coins separate** — Different wallet or careful labeling

---

**Next:** Learn about [Post-CoinJoin Best Practices](/docs/coinjoin/best-practices) to maintain your privacy after mixing.
