---
sidebar_position: 5
title: "Bitcoin CoinJoin: How It Works & Best Practices"
description: "How Bitcoin CoinJoin works: equal outputs, anonymity sets, Wasabi vs JoinMarket, and how to preserve privacy after mixing."
keywords: ["bitcoin coinjoin", "wasabi", "whirlpool", "joinmarket", "sparrow coinjoin", "bitcoin privacy", "chain analysis", "anonymity set", "post-mix best practices"]
tags: ["coinjoin", "privacy", "wasabi", "whirlpool", "joinmarket"]
slug: /learn/privacy/coinjoin
---

# CoinJoin: Complete Bitcoin Privacy Guide

:::info What You'll Learn
**Time:** 45 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Understanding of [UTXOs](/docs/learn/transactions/utxos), [chain analysis](/docs/learn/privacy/chain-analysis), and [UTXO management](/docs/learn/privacy/utxo-management).
:::

CoinJoin is one of Bitcoin's most important privacy tools. It lets multiple users combine their transactions so that blockchain analysts cannot determine who owns which output. This page covers the full picture: how CoinJoin works, which services exist, and — most importantly — how to handle your coins afterward so you don't undo the privacy you just paid for.


## What is CoinJoin?

CoinJoin is a **collaborative Bitcoin transaction** where multiple users combine their inputs and outputs into a single transaction. The result: outside observers cannot determine which input belongs to which output.

```
NORMAL TRANSACTION:
────────────────────────────────
Alice (1 BTC) ─────► Bob (1 BTC)
Easy to trace: Alice paid Bob.

COINJOIN TRANSACTION:
────────────────────────────────
Alice (1 BTC) ──┐
Bob   (1 BTC) ──┼──► 1 BTC ──► ??? (Alice? Bob? Carol?)
Carol (1 BTC) ──┘    1 BTC ──► ??? (Alice? Bob? Carol?)
                     1 BTC ──► ??? (Alice? Bob? Carol?)
Hard to trace: Each participant got 1 BTC, but who got which?
```

The math is simple, but the privacy gain is huge. When three people CoinJoin 1 BTC each, an external observer sees three inputs and three equal 1 BTC outputs. There is no way to tell which output belongs to which input. With more participants, the ambiguity compounds.


## Why Do CoinJoin?

Bitcoin is **pseudonymous, not anonymous**. The blockchain is a permanent public ledger. Without privacy tools:

- Your employer sees your purchases
- Your recipients see your balance
- Analytics companies build profiles
- Criminals can target wealthy holders
- Governments can trace and seize funds

CoinJoin directly defeats the [chain analysis](/docs/learn/privacy/chain-analysis) heuristics by:

- Combining inputs from multiple people (breaks common-input-ownership)
- Creating equal outputs (hides which output belongs to whom)
- Adding ambiguity to the transaction graph

After a good CoinJoin, analysts cannot determine which output is yours and your previous transaction history is broken — your coins gain **forward privacy**.


## How CoinJoin Works

### The Equal-Outputs Trick

The key innovation of CoinJoin is **equal-value outputs**. If outputs had different amounts, you could still trace them by following the numbers. With equal outputs, the outputs become interchangeable.

```
Without equal outputs (traceable):
  Inputs: 0.5 + 0.8 + 0.3 = 1.6 BTC
  Outputs: 0.3 + 0.5 + 0.8 = 1.6 BTC
  Analyst: "That 0.8 output must be the same person who sent 0.8."

With equal outputs (not traceable):
  Inputs: 0.5 + 0.8 + 0.3
  Outputs: 0.5 + 0.5 + 0.5 + change
  Analyst: "Three identical 0.5 BTC outputs... I can't tell them apart."
```

### The Anonymity Set

The **anonymity set** is the number of possible owners for each output after a CoinJoin. Bigger is better.

```
2-person CoinJoin: Each output has 2 possible owners
5-person CoinJoin: Each output has 5 possible owners  
100-person CoinJoin: Each output has 100 possible owners
```

After a 100-person CoinJoin, each 0.1 BTC output could belong to any of 100 people. An analyst has a 1% chance of guessing correctly. That is why services like Wasabi Wallet target large anonymity sets.

### Multiple Rounds Compound Privacy

Doing multiple rounds of CoinJoin increases privacy exponentially:

```
Round 1: 100-person CoinJoin → 1% chance of identifying each output
Round 2: 100-person CoinJoin → 0.01% chance
Round 3: 100-person CoinJoin → 0.0001% chance
```

Each additional round dilutes the information available to an analyst.

### The Full Flow

```
1. REGISTRATION
   You and other users express interest in joining a CoinJoin.

2. COORDINATION
   A coordinator (or decentralized protocol) matches participants
   with compatible amounts.

3. TRANSACTION CONSTRUCTION
   The coordinator builds a transaction that combines everyone's
   inputs and creates equal outputs.

4. SIGNING
   Each participant verifies the transaction and signs their inputs.
   No one can steal — each person only signs their own inputs.

5. BROADCAST
   Once everyone signs, the transaction is broadcast to the network.
   Privacy is preserved for all participants.
```

**Why the coordinator can't steal:** Each participant only signs their own inputs, and they only sign if the outputs include a valid return to themselves. If a coordinator tries to redirect funds, signatures won't be provided.


## A Simple Example

Three people want more privacy:

- **Alice** — received 1 BTC from her employer (identity linked)
- **Bob** — bought 1 BTC on an exchange with KYC
- **Carol** — has 1 BTC with a known history

Without CoinJoin, each transaction is clearly traceable. They coordinate a CoinJoin:

```
INPUTS                      OUTPUTS
──────                      ───────
Alice's 1 BTC  ─┐
Bob's 1 BTC    ─┼──→      ──→ 1 BTC to ???
Carol's 1 BTC  ─┘          ──→ 1 BTC to ???
                           ──→ 1 BTC to ???

Each person provided 1 BTC and received 1 BTC, but the
connections between inputs and outputs are ambiguous.
```

After the CoinJoin:

- Alice's employer cannot trace her spending
- Bob's exchange history is broken
- Carol's known coins are mixed with others
- An observer sees three people got 1 BTC each, but cannot link specific inputs to specific outputs


## What CoinJoin Can and Cannot Do

### ✅ What CoinJoin Accomplishes

- **Breaks transaction history** — Previous links are obscured
- **Creates uncertainty** — Analysts can't be sure who owns what
- **Increases anonymity** — Your coins mix with many others
- **Forward privacy** — Mixed coins gain a fresh history

### ❌ What CoinJoin Cannot Do

- **Hide the fact you used CoinJoin** — The transaction is visible on-chain and identifiable as a CoinJoin
- **Make you anonymous** — You are still behind a pseudonym
- **Fix poor operational security** — If you reveal identity later, privacy is broken
- **Work with all amounts** — Equal outputs constrain sizes
- **Protect against all analysis** — Some heuristics still apply


## CoinJoin Services

Several tools make CoinJoin accessible. Each has a clear audience.

<div class="fixed-width-table">

| Service | Wallet | Coordinator | Min Amount | Approximate Cost |
|---------|--------|-------------|------------|------------------|
| **Wasabi 2.0** | Wasabi Wallet | Centralized | 0.00005 BTC | 0.3% coordinator fee + mining |
| **Whirlpool** | Sparrow Wallet | Centralized | Pool dependent | Fixed fee per pool + mining |
| **JoinMarket** | Jam (web UI) | Decentralized | Flexible | Variable (can earn as maker) |

</div>

### Wasabi Wallet

[Wasabi Wallet](https://wasabiwallet.io/) is a desktop Bitcoin wallet with built-in CoinJoin.

**How it works**

1. Download and install Wasabi Wallet
2. Create or import a wallet
3. Receive Bitcoin into the wallet
4. Enable CoinJoin — coins mix automatically
5. Wait for mixing rounds to complete

**Pros**

- ✅ Simple user interface, set-and-forget
- ✅ Large anonymity sets (100+)
- ✅ Continuous remixing included
- ✅ Runs on Windows, macOS, Linux

**Cons**

- ❌ Coordinator fee (0.3%)
- ❌ Centralized coordinator (a privacy trade-off in itself)
- ❌ Must keep the wallet running to remix
- ❌ Wallet is specific to Wasabi (not portable)

**Best for** beginners who want simple privacy and prefer "set and forget".

**Fees:** 0.3% coordinator fee + mining fees. Remixing is free (no additional coordinator fee).

### Whirlpool (via Sparrow Wallet)

Whirlpool is a CoinJoin implementation originally from Samourai Wallet, now available in [Sparrow Wallet](https://sparrowwallet.com/).

**How it works**

1. Download and install Sparrow Wallet
2. Connect to your own Bitcoin node (recommended) or a public server
3. Create or import a wallet
4. Go to **UTXOs → Select coins → Mix Selected**
5. Choose a pool size
6. Coins enter the mixing cycle

**Pool sizes**

<div class="fixed-width-table">

| Pool | Entry Amount |
|------|--------------|
| 0.5 BTC | 0.5 BTC + fee |
| 0.05 BTC | 0.05 BTC + fee |
| 0.01 BTC | 0.01 BTC + fee |
| 0.001 BTC | 0.001 BTC + fee |

</div>

**Pros**

- ✅ Fixed, predictable fee
- ✅ Sparrow is an excellent wallet for other uses too
- ✅ Good anonymity sets
- ✅ Free remixes after the initial mix
- ✅ Connects to your own node

**Cons**

- ❌ Fixed pool sizes (less flexible)
- ❌ Centralized coordinator
- ❌ Need to leave Sparrow running for remixes
- ❌ "Toxic change" problem (the change from pool entry isn't private)

**Best for** users already comfortable with Sparrow, those who want a full-featured wallet with mixing, and users running their own Bitcoin node.

**Toxic change:** When you enter a Whirlpool pool, you pay a fee plus your contribution. The "change" from the entry transaction is called **toxic change** because it is clearly linked to your identity, reveals you participated in CoinJoin, and should be kept separate from your mixed coins.

### JoinMarket

[JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) is a decentralized CoinJoin marketplace with no central coordinator.

**Two roles**

- **Taker** — pays for mixes. You pay makers a small fee to use their liquidity. Your mix happens immediately. You control timing.
- **Maker** — earns fees by providing liquidity. You offer your coins for others to mix with. You earn fees when selected, and your coins get mixed in the process.

**Pros**

- ✅ No central coordinator (truly decentralized)
- ✅ Can earn fees as a maker
- ✅ Flexible amounts (no fixed pools)
- ✅ More resistant to censorship
- ✅ Open source and transparent

**Cons**

- ❌ Steeper learning curve
- ❌ Traditionally requires command-line skills
- ❌ Smaller user base = smaller anonymity sets
- ❌ As a maker, coins are in a hot wallet

**Best for** technical users who value decentralization over convenience and have time to learn.

**Getting started:** JoinMarket traditionally required the command line, but newer interfaces like **[Jam](https://jamapp.org/)** (a web UI) make it significantly more accessible.


## Which Should You Choose?

- **Wasabi** if you are new to CoinJoin, want the simplest experience, and accept a centralized coordinator.
- **Whirlpool (Sparrow)** if you already use or want to use Sparrow, run your own node, or want a full-featured wallet beyond just mixing.
- **JoinMarket** if you value decentralization above convenience, are technically skilled, and might want to earn fees as a maker.

### Privacy Comparison

<div class="fixed-width-table">

| Aspect | Wasabi | Whirlpool | JoinMarket |
|--------|--------|-----------|------------|
| Coordinator | Centralized | Centralized | Decentralized |
| Anonymity set | 100+ | 5+ (per round) | Variable |
| Rounds | Continuous | Multiple | As paid |
| Node required | Recommended | Recommended | Required |

</div>


## Always Use Your Own Node

Regardless of which service you choose, **connect to your own Bitcoin node.** If you use a public node, the node learns your addresses, your mixing activity is exposed to whoever runs it, and you lose much of the privacy you are trying to gain.

See the [Bitcoin Node guide](/docs/bitcoin-node) to set up your own.


## Best Practices After CoinJoin

Mixing your coins is only half the battle. How you **handle and spend** mixed coins determines whether you maintain privacy or accidentally undo all your work.

:::danger Critical Rules — Never Break These
1. Never merge mixed coins with KYC or unmixed coins
2. Never send multiple mixed UTXOs to the same address
3. Always use your own node
4. Use coin control for every transaction
:::

### Rule 1: Never Merge Mixed and Unmixed Coins

This is the most common mistake that destroys CoinJoin privacy.

```
BAD TRANSACTION:
─────────────────────────────────────────────────
INPUTS                          OUTPUT
──────                          ──────
0.1 BTC (mixed, private)   ─┬─→ 0.25 BTC (payment)
0.15 BTC (KYC, not mixed)  ─┘

Result: The mixed coin is now linked to your identity.
```

When you combine a mixed UTXO with an unmixed one:

- The unmixed coin is linked to your identity from the exchange.
- Both coins are now in the same transaction.
- The mixed coin is now also linked to your identity.
- All mixing effort is wasted.

**How to avoid this** — use **separate wallets** (a "KYC wallet" and a "private wallet") or use **careful labeling** and never let the two categories touch each other.

### Rule 2: Don't Consolidate Mixed Coins

Sending multiple mixed UTXOs to the same address reveals they belong to the same person.

```
BAD TRANSACTION:
─────────────────────────────────────────────────
INPUTS                          OUTPUT
──────                          ──────
0.1 BTC (mixed, round 1)   ─┬─→ 0.3 BTC (your address)
0.1 BTC (mixed, round 2)   ─┤
0.1 BTC (mixed, round 3)   ─┘

Observer: "These three mixed coins belong to the same person."
```

Before this transaction, each 0.1 BTC could have belonged to anyone. After consolidating, it is clear they all belong to you. Spend mixed coins **individually** when possible. If you must combine for a larger payment, understand you are trading privacy for utility.

### Rule 3: Handle Change Carefully

When you spend a mixed coin you may receive change. That change has reduced privacy — it is obviously linked to whoever made the payment and should be considered "semi-tainted". Options:

1. **Remix it** — send it through CoinJoin again
2. **Use it for non-private spending** — since it is already somewhat exposed
3. **Combine it only with other change** — never with fresh mixed coins
4. **Avoid change entirely** — when possible, select UTXOs that match your payment amount closely

### Rule 4: Always Use Your Own Node

This applies to all Bitcoin usage, but is critical for mixed coins. If you use someone else's node, the operator learns which addresses belong to you — including your mixed addresses. See the [Bitcoin Node guide](/docs/bitcoin-node).

### Rule 5: Use Coin Control

Without coin control, your wallet might grab a mixed coin and an unmixed coin together, or consolidate multiple UTXOs unnecessarily. With coin control you explicitly choose the UTXOs you want to spend. See the [UTXO Management guide](/docs/learn/privacy/utxo-management) for detailed techniques in Sparrow and Electrum.

### Rule 6: Consider Lightning Network

Opening Lightning channels with mixed coins adds another privacy layer. The channel opening is on-chain (visible), but the actual payments are not. When you close the channel, the link back to the original mix is further obscured.

1. Mix your coins (CoinJoin)
2. Open Lightning channels with mixed UTXOs
3. Spend via Lightning for everyday purchases
4. Close channels eventually — the resulting coins have a fresh history

### Rule 7: Be Patient

Don't spend mixed coins immediately after mixing. If you CoinJoin at 2:00 PM and spend from a mixed output at 2:15 PM, an observer can correlate the timing. Let mixed coins "age" for hours, days, or weeks, and try not to be the first or last to move after a mix.


## Checklist: Before Spending Mixed Coins

- [ ] Am I using my own node?
- [ ] Am I using coin control to select specific UTXOs?
- [ ] Are ALL inputs in this transaction from my mixed pool?
- [ ] Am I not combining multiple mixed UTXOs unnecessarily?
- [ ] Is the change amount acceptable, or can I adjust to minimize it?
- [ ] Has enough time passed since the mix?


## Common Mistakes Summary

<div class="fixed-width-table">

| Mistake | Why It's Bad | How to Avoid |
|---------|--------------|--------------|
| Merging mixed + unmixed | Links mixed coins to your identity | Separate wallets |
| Consolidating mixed UTXOs | Reveals common ownership | Spend individually |
| Using a public node | Node learns your addresses | Run your own node |
| No coin control | Wallet makes poor choices | Use Sparrow or Electrum |
| Spending immediately | Timing analysis possible | Wait before spending |
| Ignoring change | Change has reduced privacy | Remix or handle carefully |

</div>


## Is CoinJoin Legal?

CoinJoin itself is legal in most jurisdictions. It is a privacy tool, not a crime. However, be aware:

- **Know your local laws** — regulations vary
- **Some exchanges flag CoinJoin outputs** — they may freeze deposits or require additional verification
- **Regulatory landscape is evolving** — what's legal today may change
- **Privacy is a human right** — UN declarations support financial privacy

Using CoinJoin is not an admission of wrongdoing. It is equivalent to keeping your bank statements private.


## Do You Need CoinJoin?

CoinJoin is most valuable if you:

- Have KYC coins and want forward privacy
- Received Bitcoin from an identified source
- Want to spend privately in the future
- Are a journalist, activist, or targeted individual
- Hold significant amounts that may attract attention

CoinJoin may be overkill if you only use small amounts, acquired Bitcoin anonymously from the start, or only use Bitcoin for specific identified purposes.


## Summary

- CoinJoin gives you privacy, but only if you maintain it afterward.
- Separate mixed from unmixed — never let them touch.
- Spend mixed coins individually — don't consolidate.
- Use your own node — essential for real privacy.
- Use coin control — be deliberate about what you spend.
- Be patient — don't rush to spend after mixing.

Privacy is a practice, not a one-time action. Every transaction is an opportunity to preserve or destroy your privacy.

<NextSteps
  title="Continue Building Privacy"
  items={[
    {
      label: "Foundation",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Master coin control, consolidation, and dust handling"
    },
    {
      label: "Related",
      title: "PayJoin Privacy Guide",
      href: "/docs/learn/privacy/payjoin/",
      description: "Stealth privacy that looks like a normal payment"
    },
    {
      label: "Infrastructure",
      title: "Run Your Own Bitcoin Node",
      href: "/docs/bitcoin-node/",
      description: "Essential for any serious privacy setup"
    }
  ]}
/>
