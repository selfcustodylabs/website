---
sidebar_position: 5
title: "Bitcoin CoinJoin: How It Works & Best Practices"
description: "How Bitcoin CoinJoin works: equal outputs, anonymity sets, the 2026 tools (JoinMarket NG, Jam, Ashigaru Whirlpool, Wasabi), and post-mix rules."
keywords: ["bitcoin coinjoin", "joinmarket ng", "jam joinmarket", "whirlpool", "ashigaru", "wasabi", "bitcoin privacy", "chain analysis", "anonymity set", "post-mix best practices"]
tags: ["coinjoin", "privacy", "joinmarket"]
slug: /learn/privacy/coinjoin
guide:
  time: "30 minutes"
  level: "Intermediate"
---

# CoinJoin: how it works and when to use it

A **CoinJoin** is a single bitcoin transaction in which several people combine their coins and each receives back outputs of the same size, so that nobody watching the blockchain can tell which output belongs to whom. It is non-custodial (each person signs only their own input) and it cuts the link between a coin's past and its future, which is bitcoin's most important on-chain privacy tool. As of October 2026 we recommend JoinMarket NG with the Jam interface, which has no coordinator to seize; and the privacy only survives if you follow the post-mix rules below.

<GuideFacts />

This page is the theory; the hands-on guide is the [CoinJoin tutorial with JoinMarket NG and Jam](/docs/learn/privacy/coinjoin-tutorial/). [UTXOs](/docs/learn/transactions/utxos/), [chain analysis](/docs/learn/privacy/chain-analysis/) and [UTXO management](/docs/learn/privacy/utxo-management/) are useful background.

## What does a CoinJoin look like?

Ten people each drop an identical banknote into a hat, shake it and each take one back: everyone leaves with what they put in, and nobody watching can say which note went where. A CoinJoin does this in one bitcoin transaction: several users contribute inputs and receive equal-sized outputs, so an observer cannot match inputs to outputs.

<div class="doc-diagram">

![A normal payment of 1.00 BTC from Alice to Bob leaves one traceable link, while a CoinJoin where Alice, Bob and Carol each contribute 1.00 BTC and each receive 1.00 BTC back gives every output three equally likely owners](/img/diagrams/privacy/coinjoin-vs-normal.svg)

</div>

Two properties make it safe. Nobody ever holds your coins: you sign only your own input, and only after checking the transaction pays you back. And there is nothing to confiscate, because the privacy comes from the structure of the transaction, not from trusting a company.

## Why does CoinJoin exist?

Bitcoin is pseudonymous, not anonymous: every transaction is public forever, and [chain analysis](/docs/learn/privacy/chain-analysis/) firms are good at attaching names to addresses. Without countermeasures, the exchange you bought from can follow your coins for years, anyone you pay can look up your balance and income, analytics companies sell profiles of your finances, and thieves can pick out wealthy targets.

CoinJoin attacks the tracing directly. It breaks the **common-input-ownership heuristic**, the assumption that all inputs of a transaction belong to one person, and the output matching that chain analysis depends on. After a good CoinJoin your coins have forward privacy: their future movements can no longer be confidently tied to their past.

## How does CoinJoin work? {#how-coinjoin-works}

<div class="doc-diagram">

![Five unequal inputs of 0.82, 0.31, 0.55, 0.24 and 0.47 BTC each produce one identical 0.20 BTC mixed output plus their own change of 0.62, 0.11, 0.35, 0.04 and 0.27 BTC; the mixed outputs cannot be told apart, but change stays linkable by amount](/img/diagrams/privacy/coinjoin-equal-outputs.svg)

</div>

### Why do the outputs have to be equal?

If the outputs had different sizes, an analyst could trace them by matching amounts. Equal outputs remove that signal.

<div class="doc-diagram">

![With unequal outputs an analyst matches the 0.5, 0.8 and 0.3 BTC inputs to their outputs by amount; with three equal 0.30 BTC outputs plus change of 0.20 and 0.50, the amounts carry no signal](/img/diagrams/privacy/coinjoin-equal-vs-unequal.svg)

</div>

### What is an anonymity set?

The **anonymity set** is the number of equally plausible owners each output has; bigger is better.

<div class="doc-diagram">

![One coin entering three successive CoinJoin rounds of five participants each: candidate owners grow from 5 after one round to 25 after two and up to 125 after three, multiplying with every remix](/img/diagrams/privacy/coinjoin-anonymity-rounds.svg)

</div>

After one 100-person round, an analyst picking an output has a 1% chance of naming the right owner.

### Why do several rounds help?

Each extra round multiplies the possibilities an analyst has to consider, and remixing with new participants compounds the ambiguity. That is why every serious tool supports remixing, and why a single round is a half-measure.

### Why can nobody steal the coins?

A CoinJoin is one transaction that everyone must sign. Each participant:

1. Contributes an input they control
2. Checks the draft transaction pays them back in full
3. Signs only their own input, and only if step 2 checks out

If anyone, including a coordinator, tampers with the outputs, the signatures never arrive and the transaction fails. The worst a malicious party can do is waste your time.

## What does it look like in practice?

Three people each hold 0.1 BTC with a history they would rather not carry: Alice was paid by her employer, who knows her address; Bob withdrew from an exchange that keeps records under his name; Carol received coins whose past is publicly known. They join one CoinJoin:

<div class="doc-diagram">

![Alice's employer, Bob's exchange and anyone watching Carol each follow a 0.1 BTC coin into the same CoinJoin and out to three identical 0.1 BTC outputs; every watcher's trail dead-ends into a one-in-three guess](/img/diagrams/privacy/coinjoin-dead-ends.svg)

</div>

Afterwards, Alice's employer sees her 0.1 BTC enter a CoinJoin and become one of three identical outputs. It cannot tell which one is hers, and neither can Bob's exchange or anyone watching Carol's coins. Each history now dead-ends into ambiguity, and with bigger rounds and more remixes the ambiguity grows from "one in three" to "one in hundreds".

## What can CoinJoin do, and what can't it?

| CoinJoin does | CoinJoin does not |
|---|---|
| Cut the link between your coins' past and future | Hide that you took part: CoinJoins are recognisable on chain, and the transaction into one is visible to whoever knew your coins |
| Give analysts probabilities instead of proof | Make you anonymous: amounts, timing and your later behaviour still leak information |
| Give mixed coins a fresh start | Survive bad habits: one careless transaction afterwards can undo it (see the rules below) |
| | Work at any amount: equal outputs limit how much can be mixed at once |

## Which CoinJoin tools work in 2026? {#coinjoin-services}

Law enforcement and burnout reshaped CoinJoin between 2024 and 2026, and older guides recommend setups that no longer exist:

| When | What happened |
|---|---|
| April 2024 | US authorities seize Samourai Wallet's servers and the original Whirlpool coordinator goes dark. The founders later plead guilty and in November 2025 are sentenced to five and four years in prison |
| June 2024 | zkSNACKs shuts down the original Wasabi coordinator; Sparrow Wallet removes its Whirlpool integration |
| June 2025 | Ashigaru, a community fork of Samourai, launches a new Whirlpool coordinator, reachable only over Tor |
| April 2026 | The original JoinMarket repository is archived after a long quiet period; development continues in JoinMarket NG |

### JoinMarket NG and Jam (our recommendation)

[JoinMarket NG](https://github.com/joinmarket-ng/joinmarket-ng) is the actively developed implementation of the JoinMarket protocol, wire-compatible with the original client whose repository was archived in April 2026. There is **no coordinator at all**: it is a peer-to-peer market with two roles.

Takers pay a small fee to mix on demand, at any time and any amount; makers provide the liquidity and earn those fees, with their own coins mixed as a side effect. Because no company sits in the middle, there is nothing to seize and nobody to subpoena, so the Samourai story cannot repeat. JoinMarket's old weakness was that it lived on the command line; [Jam](https://github.com/joinmarket-webui/jam) is a web interface for JoinMarket NG that makes wallet creation, single CoinJoins, scheduled mixing and maker mode point-and-click, and it ships as an app on most node-in-a-box platforms.

| Strengths | Weaknesses |
|---|---|
| No coordinator to trust, seize or overcharge | Needs your own Bitcoin node and some setup |
| Any amount, mixed immediately as a taker | Smaller rounds (typically 4 to 20 participants), so plan several |
| You can earn fees as a maker instead of paying them | |
| Market-set fees, typically fractions of a percent | |

It suits self-custody users who run their own node. The [tutorial](/docs/learn/privacy/coinjoin-tutorial/) walks through the setup.

### Whirlpool: gone, then back (Ashigaru)

The original Whirlpool is gone; a revival exists under new management.

The original Whirlpool depended on Samourai Wallet's central coordinator. When the servers were seized in April 2024 every Whirlpool client stopped mixing the same day, which is the textbook demonstration of coordinator risk. Sparrow Wallet removed its integration shortly after; old guides pointing at "Whirlpool via Sparrow" are obsolete.

In June 2025, [Ashigaru](https://ashigaru.rs/), an open-source fork of Samourai run by anonymous maintainers, launched a new, independent Whirlpool coordinator. It is reachable only over Tor and uses the Zerolink fixed-pool model, with two pools of 0.025 BTC and 0.25 BTC and a flat 5% fee per pool entry (0.00125 and 0.0125 BTC), after which remixing is free. It needs Ashigaru's own software (Ashigaru Terminal on desktop, Ashigaru Mobile) and does not work with Sparrow or the old Samourai apps.

| Strengths | Weaknesses |
|---|---|
| Zerolink pools with free remixes, a proven design | Still a central coordinator, the weakness that ended the original |
| Strictly Tor-only | A 5% entry fee, against a fraction of a percent for JoinMarket |
| | Fixed pool sizes only |

It suits people who specifically want the Zerolink model and accept the fee and the coordinator risk.

### Wasabi Wallet

[Wasabi](https://wasabiwallet.io/) survived its own coordinator shutdown. zkSNACKs, the company behind it, left in June 2024, but the wallet is maintained by its community and, since version 2.2, has no built-in coordinator fee: you choose an independent coordinator, several of which charge nothing, so the cost can be just mining fees.

| Strengths | Weaknesses |
|---|---|
| The easiest: install, pick a coordinator, turn on CoinJoin | You trust your chosen coordinator to be honest about who is in a round |
| Large rounds (often 100 or more) and variable amounts that reduce leftover change | Coordinators are central parties that can disappear or be pressured |
| Free or nearly free, depending on the coordinator | |

It suits desktop users who want mixing to run on its own and accept choosing a coordinator.

### How do they compare?

<div class="fixed-width-table">

| | JoinMarket NG and Jam | Ashigaru Whirlpool | Wasabi |
|--------|--------------------|--------------------|--------|
| Coordinator | None (peer-to-peer) | Centralized (Ashigaru) | Centralized (third-party) |
| Amounts | Flexible | Fixed pools (0.025 / 0.25 BTC) | Variable |
| Cost | Maker fees, well under 1% | 5% pool entry, free remixes | Often free, plus mining fees |
| Anonymity set per round | 4 to 20 | Grows with remixes | 100 or more |
| Own node | Required | Recommended | Recommended |
| Can earn fees | Yes (maker) | No | No |

</div>

We recommend JoinMarket NG with Jam. It is the only option with no central point of failure, it fits everything else this site teaches (your node, your keys), and 2024 showed that coordinator-based services can vanish overnight. Wasabi is a reasonable simpler alternative; Ashigaru's Whirlpool is for committed Zerolink users.

## Why does CoinJoin need your own node?

Whichever tool you use, connect it to your own Bitcoin node. A wallet that talks to someone else's server tells that server all your addresses, including the freshly mixed ones, and the CoinJoin protects nothing. JoinMarket NG requires your own node; treat it as required everywhere. See the [node guide](/docs/bitcoin-node/).

## What should you do after a CoinJoin? {#best-practices-after-coinjoin}

Mixing is half the work; what you do afterwards decides whether the privacy holds.

:::danger Mixed coins lose their privacy in one careless transaction
Never spend mixed coins together with KYC or unmixed coins, never consolidate several mixed coins into one, always use your own node, and choose the inputs by hand for every transaction that touches mixed coins.
:::

### Why must mixed and unmixed coins never be combined?

It is the most common way people undo their own CoinJoin:

<div class="doc-diagram">

![Two transactions that undo a mix: merging a 0.10 BTC mixed coin with a 0.15 BTC KYC coin into one 0.25 BTC payment re-attaches your identity, and consolidating three 0.10 BTC mixed coins from different rounds into a single 0.30 BTC output proves one owner ran all three rounds](/img/diagrams/privacy/coinjoin-postmix-rules.svg)

</div>

The KYC coin carries your name. Spending both in one transaction attaches your name to the mixed coin too, and the mixing bought nothing. Keep mixed and unmixed funds in separate wallets so the software cannot combine them by accident.

### Why not consolidate mixed coins?

Before such a consolidation, each mixed output could have belonged to anyone in its round. After it, all three provably share an owner, which collapses their anonymity sets at once. Spend mixed UTXOs individually. If a payment truly requires combining, understand you are spending privacy to make it.

### What do you do with change from a mixed coin?

Spending a mixed coin usually produces change, which is linked to the payment you just made. Treat it as partly exposed: remix it through another round, spend it somewhere privacy does not matter, or combine it only with other change, never with fresh mixed coins.

### Why use coin control?

Without [coin control](/docs/learn/privacy/utxo-management/), your wallet picks UTXOs itself and will eventually pair a mixed coin with a labelled one. Choose the inputs by hand for every transaction that touches mixed funds.

### How long should mixed coins wait?

If you mix at 14:00 and spend at 14:15, the timing alone links the two. Let mixed outputs sit for days or weeks, and avoid being the first or last participant to move after a round.

### Where does Lightning fit?

Opening a [Lightning](https://lightning.network/) channel with a mixed UTXO adds another layer: the channel opening is visible, the payments inside it are not, and the eventual closing produces coins with still more distance from their origin.

### What should you check before spending mixed coins?

- The wallet is connected to your own node.
- You chose the inputs yourself.
- Every input comes from your mixed coins, with no KYC coins among them.
- You are spending one mixed coin, not consolidating several.
- Enough time has passed since the mix.

### What mistakes undo a CoinJoin?

<div class="fixed-width-table">

| Mistake | Why it matters | How to avoid it |
|---------|--------------|--------------|
| Merging mixed and unmixed coins | Re-links the coins to your identity | Separate wallets |
| Consolidating mixed UTXOs | Proves common ownership | Spend individually |
| Using a public server | Operator learns your addresses | Run your own node |
| Auto coin selection | Wallet pairs the wrong UTXOs | Coin control |
| Spending immediately | Timing correlation | Be patient |
| Ignoring change | Change is semi-exposed | Remix or quarantine it |

</div>

## Common questions

### What is a Bitcoin CoinJoin?

A CoinJoin is a single bitcoin transaction in which several users combine their inputs and each receives an equal-sized output, so an outside observer cannot match inputs to outputs. Everyone leaves with what they put in, but nobody watching can say which output belongs to whom.

### Does Whirlpool still work in 2026?

The original Whirlpool is gone, and a revival exists under new management. US authorities seized Samourai Wallet's coordinator in April 2024 and every Whirlpool client stopped mixing the same day; Sparrow Wallet removed its integration shortly after. In June 2025 Ashigaru, an open-source fork run by anonymous maintainers, launched an independent Whirlpool coordinator reachable over Tor. We cover it but do not recommend it, because it brings back the coordinator risk that ended the original.

### Which CoinJoin implementation should you use in 2026?

We recommend JoinMarket NG with the Jam web interface. JoinMarket NG has no coordinator at all: it is a peer-to-peer market where takers pay a fee to mix on demand and makers earn those fees, so there is nothing to seize and nobody to subpoena. Jam makes it a point-and-click app that ships on most node-in-a-box platforms. It needs your own Bitcoin node, and rounds typically have 4 to 20 participants, so plan on several.

### Is CoinJoin legal?

In most jurisdictions, yes: it is a privacy technique, comparable to keeping your bank statements out of public view. The 2024 to 2025 Samourai prosecutions targeted the operators, who ran a central coordinator business and were convicted of operating an unlicensed money-transmitting business; no CoinJoin user was charged. Some exchanges flag CoinJoin history and may freeze deposits or ask questions, so do not send freshly mixed coins straight to a KYC exchange, and know the rules where you live. None of this is legal advice.

### Do you need CoinJoin?

It is most valuable if you hold KYC coins and want forward privacy, if you spend bitcoin and do not want every counterparty to see your net worth, if you are a journalist, activist or otherwise a target, or if you hold enough that being identifiable is a physical risk. It may be unnecessary if your coins were acquired without your identity attached, or you only move small amounts. Match the effort to your [threat model](/docs/learn/fundamentals/threat-models/).
