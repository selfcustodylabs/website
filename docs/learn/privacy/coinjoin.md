---
sidebar_position: 5
title: "Bitcoin CoinJoin: How It Works & Best Practices"
description: "How Bitcoin CoinJoin works: equal outputs, anonymity sets, the 2026 tools (JoinMarket NG, Jam, Ashigaru Whirlpool, Wasabi), and post-mix rules."
keywords: ["bitcoin coinjoin", "joinmarket ng", "jam joinmarket", "whirlpool", "ashigaru", "wasabi", "bitcoin privacy", "chain analysis", "anonymity set", "post-mix best practices"]
tags: ["coinjoin", "privacy", "joinmarket"]
slug: /learn/privacy/coinjoin
---

# CoinJoin: How It Works and When to Use It

CoinJoin is Bitcoin's most important on-chain privacy tool. It lets strangers combine their transactions into one, so that blockchain analysts can no longer tell who owns which coin. This page explains the concept: how it works, what it can and cannot do, which tools still work in 2026, and the post-mix rules that decide whether your privacy survives.

:::info What You'll Learn
**Time:** 30 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Understanding of [UTXOs](/docs/learn/transactions/utxos), [chain analysis](/docs/learn/privacy/chain-analysis), and [UTXO management](/docs/learn/privacy/utxo-management).
:::

:::tip Want to actually do it?
This page is the theory. When you are ready to run real coinjoins, follow the hands-on guide: [CoinJoin Tutorial: JoinMarket NG and Jam](/docs/learn/privacy/coinjoin-tutorial/).
:::

## What is CoinJoin?

Picture ten people around a table. Each drops an identical 50 euro note into a hat. The hat is shaken and everyone takes one note back out. Every person walks away with exactly what they put in, but nobody watching can say which note ended up with whom.

CoinJoin is that hat, built as a single Bitcoin transaction. Multiple users combine their inputs and receive **equal-sized outputs**, so an outside observer cannot match inputs to outputs.

<div class="doc-diagram">

![A normal payment of 1.00 BTC from Alice to Bob leaves one traceable link, while a CoinJoin where Alice, Bob and Carol each contribute 1.00 BTC and each receive 1.00 BTC back gives every output three equally likely owners](/img/diagrams/privacy/coinjoin-vs-normal.svg)

</div>

Two properties make this safe:

- **Non-custodial:** nobody ever holds your coins. You sign only your own input, and only after checking the transaction pays you back.
- **Nothing to confiscate:** the privacy comes from the transaction structure itself, not from trusting a company.

## Why CoinJoin Exists

Bitcoin is **pseudonymous, not anonymous**. Every transaction is public forever, and [chain analysis](/docs/learn/privacy/chain-analysis) firms are good at attaching names to addresses. Without countermeasures:

- The exchange you bought from can follow your coins for years
- Anyone you pay can look up your balance and income
- Analytics companies sell profiles of your financial life
- Thieves can identify wealthy targets

CoinJoin attacks the tracing directly. It breaks the **common-input-ownership heuristic** (the assumption that all inputs of a transaction belong to one person) and the output linking that chain analysis depends on. After a good coinjoin, your coins have **forward privacy**: their future movements can no longer be confidently tied to their past.

## How CoinJoin Works {#how-coinjoin-works}

<div class="doc-diagram">

![Five unequal inputs of 0.82, 0.31, 0.55, 0.24 and 0.47 BTC each produce one identical 0.20 BTC mixed output plus their own change of 0.62, 0.11, 0.35, 0.04 and 0.27 BTC; the mixed outputs cannot be told apart, but change stays linkable by amount](/img/diagrams/privacy/coinjoin-equal-outputs.svg)

</div>

### Equal Outputs Make Coins Interchangeable

If outputs had different sizes, you could trace them by following the amounts. Equal outputs remove that signal.

<div class="doc-diagram">

![With unequal outputs an analyst matches the 0.5, 0.8 and 0.3 BTC inputs to their outputs by amount; with three equal 0.30 BTC outputs plus change of 0.20 and 0.50, the amounts carry no signal](/img/diagrams/privacy/coinjoin-equal-vs-unequal.svg)

</div>

### The Anonymity Set

The **anonymity set** is the number of equally plausible owners each output has. Bigger is better.

<div class="doc-diagram">

![One coin entering three successive CoinJoin rounds of five participants each: candidate owners grow from 5 after one round to 25 after two and up to 125 after three, multiplying with every remix](/img/diagrams/privacy/coinjoin-anonymity-rounds.svg)

</div>

After one 100-person round, an analyst picking an output has a 1% chance of naming the right owner.

### Rounds Compound

One coinjoin is good; several chained coinjoins are far better. Each extra round multiplies the possibilities an analyst must consider, and remixing with new participants each time compounds the ambiguity. This is why every serious tool supports **remixing**, and why doing a single round and stopping is a half-measure.

### Why Nobody Can Steal

A coinjoin is one transaction that everyone must sign. Each participant:

1. Contributes an input they control
2. Checks the draft transaction pays them back in full
3. Signs **only their own input**, and only if step 2 checks out

If anyone (including a coordinator) tampers with the outputs, the signatures simply never arrive and the transaction dies. The worst a malicious party can do is waste your time, never take your coins.

## A Concrete Example

Three people each hold 0.1 BTC with a history they would rather not carry around:

- **Alice** was paid by her employer, who knows her address
- **Bob** withdrew from an exchange that keeps records under his name
- **Carol** received coins whose past is publicly known

They coinjoin:

<div class="doc-diagram">

![Alice's employer, Bob's exchange and anyone watching Carol each follow a 0.1 BTC coin into the same CoinJoin and out to three identical 0.1 BTC outputs; every watcher's trail dead-ends into a one-in-three guess](/img/diagrams/privacy/coinjoin-dead-ends.svg)

</div>

Afterward, Alice's employer sees her 0.1 BTC entered a coinjoin and then becomes one of three identical outputs. It cannot tell which one is hers, and neither can Bob's exchange or anyone watching Carol's coins. Each history now dead-ends into ambiguity, and with bigger rounds and more remixes the ambiguity grows from "one in three" to "one in hundreds".

## What CoinJoin Can and Cannot Do

### ✅ What it accomplishes

- **Breaks history:** the link between your coins' past and future is cut
- **Creates doubt:** analysts get probabilities, not proof
- **Forward privacy:** mixed coins start fresh

### ❌ What it does not do

- **Hide that you coinjoined:** the transaction is recognizable as a coinjoin on-chain, and the funding transaction into it is visible to whoever knew your coins
- **Make you anonymous:** amounts, timing, and your own later behavior still leak information
- **Survive bad habits:** one careless transaction afterward can undo everything (see the rules below)
- **Work at arbitrary size:** equal outputs constrain the amounts you can mix at once

## CoinJoin Tools in 2026 {#coinjoin-services}

The coinjoin landscape was reshaped by law enforcement and burnout between 2024 and 2026. Older guides recommend setups that no longer exist, so here is the honest current state.

:::note The 2024-2026 shakeout
- **April 2024:** US federal authorities seize Samourai Wallet's infrastructure; the original Whirlpool coordinator goes dark. The founders plead guilty and, in November 2025, are sentenced to five and four years in prison.
- **June 2024:** zkSNACKs shuts down the original Wasabi coordinator; Sparrow Wallet removes its Whirlpool integration.
- **June 2025:** Ashigaru, a community fork of Samourai, launches a new Whirlpool coordinator, reachable only over Tor.
- **April 2026:** the original JoinMarket repository is archived after a long quiet period; development continues in JoinMarket NG.
:::

### JoinMarket NG + Jam (our recommendation)

[JoinMarket NG](https://github.com/joinmarket-ng/joinmarket-ng) is the actively developed implementation of the JoinMarket protocol, wire-compatible with the original client whose repository was archived in April 2026. There is **no coordinator at all**: it is a peer-to-peer market with two roles.

- **Takers** pay a small fee to mix on demand, whenever they want, at any amount
- **Makers** provide liquidity and earn those fees; their coins get mixed as a side effect

Because no company sits in the middle, there is nothing to seize and nobody to subpoena; the Samourai story cannot repeat here. The historical downside was usability: JoinMarket lived on the command line. **[Jam](https://github.com/joinmarket-webui/jam)** fixed that: it is a web interface for JoinMarket NG that turns wallet creation, single coinjoins, scheduled mixing rounds, and maker mode into a point-and-click experience. It ships as an app on most node-in-a-box platforms.

- ✅ Decentralized: no coordinator to trust, seize, or fee-gouge
- ✅ Flexible amounts, mix immediately as a taker
- ✅ Can earn fees as a maker instead of paying them
- ✅ Cheap: market-set maker fees, typically fractions of a percent
- ❌ Needs your own Bitcoin node and a little setup
- ❌ Smaller per-round anonymity sets (typically 4-20 participants), so plan multiple rounds

**Best for:** self-custody users who run their own node, which, if you are reading this site, likely means you. The [practical tutorial](/docs/learn/privacy/coinjoin-tutorial/) walks through the full setup.

### Whirlpool: Gone, Then Back (Ashigaru)

Short answer to "does Whirlpool still work?": **the original is dead; a revival exists under new management.**

The original Whirlpool depended on Samourai Wallet's central coordinator. When the servers were seized in April 2024 every Whirlpool client stopped mixing the same day, which is the textbook demonstration of coordinator risk. Sparrow Wallet removed its integration shortly after; old guides pointing at "Whirlpool via Sparrow" are obsolete.

In June 2025, [Ashigaru](https://ashigaru.rs/), an open-source fork of Samourai run by anonymous maintainers, launched a **new, independent Whirlpool coordinator**:

- Tor-only, no clearnet access, using the Zerolink fixed-pool model
- Two pools: **0.025 BTC** and **0.25 BTC**
- Flat **5% entry fee** per pool entry (0.00125 and 0.0125 BTC respectively), then free remixing indefinitely
- Requires Ashigaru's own software (Ashigaru Terminal on desktop, Ashigaru Mobile); it does not work with Sparrow or the old Samourai apps

- ✅ Zerolink pools with free remixes, a proven privacy design
- ✅ Strict Tor-only posture
- ❌ Still a centralized coordinator: the same structural weakness that killed the original
- ❌ 5% entry fee is steep (JoinMarket costs a fraction of a percent)
- ❌ Fixed pool sizes only

**Best for:** users who specifically want the Zerolink model and accept the fee and the coordinator risk.

### Wasabi Wallet

[Wasabi](https://wasabiwallet.io/) survived its own coordinator shutdown. zkSNACKs (the company) exited in June 2024, but the wallet is community-maintained and, since version 2.2, ships with **no built-in coordinator fee**: you choose an independent, third-party coordinator, several of which coordinate for free, so costs can be just mining fees.

- ✅ Easiest experience: install, pick a coordinator, enable coinjoin
- ✅ Large rounds (often 100+ participants) and variable amounts that reduce toxic change
- ✅ Free or near-free depending on coordinator
- ❌ You must trust your chosen coordinator to be honest about round composition
- ❌ Coordinators are centralized parties and can disappear or be pressured, as history shows

**Best for:** desktop users who want set-and-forget mixing and accept picking a coordinator.

### Comparison

<div class="fixed-width-table">

| Aspect | JoinMarket NG + Jam | Ashigaru Whirlpool | Wasabi |
|--------|--------------------|--------------------|--------|
| Coordinator | None (peer-to-peer) | Centralized (Ashigaru) | Centralized (third-party) |
| Amounts | Flexible | Fixed pools (0.025 / 0.25 BTC) | Variable |
| Cost | Maker fees, well under 1% | 5% pool entry, free remix | Often free + mining fees |
| Anonymity set per round | 4-20 | Pool-based, grows with remixes | 100+ |
| Own node | Required | Recommended | Recommended |
| Can earn fees | Yes (maker) | No | No |

</div>

**Our pick is JoinMarket NG with Jam.** It is the only option with no central point of failure, it aligns with everything else this site teaches (your node, your keys, your rules), and 2024 proved that coordinator-based services can vanish overnight. Wasabi is a reasonable simpler alternative; Ashigaru Whirlpool is for committed Zerolink fans.

## Use Your Own Node

Whichever tool you pick, connect it to **your own Bitcoin node**. If your wallet talks to someone else's server, that server learns all your addresses, including the freshly mixed ones, and your coinjoin becomes theater. JoinMarket NG makes this mandatory; treat it as mandatory everywhere. See the [Bitcoin Node guide](/docs/bitcoin-node/).

## Best Practices After CoinJoin {#best-practices-after-coinjoin}

Mixing is half the work. What you do **afterward** decides whether the privacy holds.

:::danger Critical rules
1. Never combine mixed coins with KYC or unmixed coins
2. Never consolidate multiple mixed UTXOs into one address
3. Always use your own node
4. Use coin control for every post-mix transaction
:::

### Rule 1: Never Merge Mixed and Unmixed Coins

The most common way people destroy their own coinjoin:

<div class="doc-diagram">

![Two transactions that undo a mix: merging a 0.10 BTC mixed coin with a 0.15 BTC KYC coin into one 0.25 BTC payment re-attaches your identity, and consolidating three 0.10 BTC mixed coins from different rounds into a single 0.30 BTC output proves one owner ran all three rounds](/img/diagrams/privacy/coinjoin-postmix-rules.svg)

</div>

The KYC coin carries your name. Spending both in one transaction signs your name onto the mixed coin too, and the mixing fee bought you nothing. Keep mixed and unmixed funds in **separate wallets** so your software cannot combine them by accident.

### Rule 2: Don't Consolidate Mixed Coins

Before such a consolidation, each mixed output could have belonged to anyone in its round. After it, all three provably share an owner, which collapses their anonymity sets at once. Spend mixed UTXOs individually. If a payment truly requires combining, understand you are spending privacy to make it.

### Rule 3: Handle Change Carefully

Spending a mixed coin usually produces change, and that change is linked to the payment you just made. Treat it as semi-exposed:

1. **Remix it** through another coinjoin round, or
2. **Spend it somewhere non-private**, since it is already exposed, or
3. **Combine it only with other change**, never with fresh mixed coins

### Rule 4: Use Coin Control

Without [coin control](/docs/learn/privacy/utxo-management), your wallet picks UTXOs automatically and will eventually pair a mixed coin with a labeled one. Choose inputs by hand for every transaction that touches mixed funds.

### Rule 5: Let Coins Age

If you mix at 14:00 and spend at 14:15, timing alone links the two events. Let mixed outputs sit for days or weeks, and avoid being the first or last participant to move funds after a round.

### Rule 6: Consider Lightning

Opening a [Lightning](https://lightning.network/) channel with a mixed UTXO adds another layer: the channel open is visible, the payments inside it are not, and the eventual channel close produces coins with yet more distance from their origin.

## Checklist: Before Spending Mixed Coins

- [ ] Am I connected to my own node?
- [ ] Did I hand-pick the UTXOs for this transaction?
- [ ] Are ALL inputs from my mixed pool, and no KYC coins?
- [ ] Am I spending one mixed UTXO, not consolidating several?
- [ ] Has enough time passed since the mix?

## Common Mistakes Summary

<div class="fixed-width-table">

| Mistake | Why it's bad | How to avoid |
|---------|--------------|--------------|
| Merging mixed + unmixed | Re-links coins to your identity | Separate wallets |
| Consolidating mixed UTXOs | Proves common ownership | Spend individually |
| Using a public server | Operator learns your addresses | Run your own node |
| Auto coin selection | Wallet pairs the wrong UTXOs | Coin control |
| Spending immediately | Timing correlation | Be patient |
| Ignoring change | Change is semi-exposed | Remix or quarantine it |

</div>

## Is CoinJoin Legal?

In most jurisdictions, using CoinJoin is legal. It is a privacy technique, comparable to keeping your bank statements out of public view.

The 2024-2025 Samourai prosecutions targeted the **operators**, not users: the founders ran a centralized coordinator business, collected fees on it, and were convicted of operating an unlicensed money-transmitting business. No CoinJoin *user* was charged. Non-custodial coinjoins, where nobody else ever controls your coins, are a different activity from running a mixing service, and decentralized designs like JoinMarket have no operator in the first place.

Practical realities to keep in mind:

- **Some exchanges flag coinjoin history** and may freeze deposits or ask questions; avoid sending freshly mixed coins straight to a KYC exchange
- **Rules differ by country and change**; know your local situation
- None of this is legal advice

## Do You Need CoinJoin?

CoinJoin is most valuable if you:

- Hold KYC coins and want forward privacy
- Plan to spend Bitcoin without broadcasting your net worth to every counterparty
- Are a journalist, activist, or otherwise a target
- Hold enough that being identifiable is a physical-security risk

It may be unnecessary if your coins were acquired without identity attached, or you only ever move small amounts. Privacy is a spectrum; match the effort to your [threat model](/docs/learn/fundamentals/threat-models).

## Summary

- CoinJoin makes equal outputs interchangeable, cutting the link between your coins' past and future.
- It is non-custodial: nobody can steal during a round.
- In 2026 the working options are **JoinMarket NG + Jam** (decentralized, our pick), **Ashigaru Whirlpool** (revived, centralized, 5% entry), and **Wasabi** (third-party coordinators).
- The original Samourai Whirlpool is gone, and its shutdown is the argument for decentralized mixing.
- Privacy survives only if you follow the post-mix rules: separate wallets, no consolidation, coin control, patience, your own node.

Ready for practice? Continue with the [CoinJoin Tutorial: JoinMarket NG and Jam](/docs/learn/privacy/coinjoin-tutorial/).
