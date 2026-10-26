---
title: "Our CoinJoin recommendation is now JoinMarket NG"
description: "On 22 August 2026 we rewrote the CoinJoin guide for the tools that survived 2024 to 2026: JoinMarket NG with Jam recommended, Wasabi and Whirlpool covered."
keywords: ["coinjoin", "joinmarket ng", "jam", "whirlpool", "wasabi", "bitcoin privacy"]
date: "2026-10-26"
---

On 22 August 2026 we rewrote our [CoinJoin page](/docs/learn/privacy/coinjoin/) and added a [hands-on CoinJoin tutorial](/docs/learn/privacy/coinjoin-tutorial/). We now recommend one tool, JoinMarket NG with the Jam interface, because it has no coordinator that can be seized or shut down. Before the rewrite, the page offered Wasabi, Whirlpool through Sparrow, and the original JoinMarket as three equal choices, and all three entries had gone out of date.

<!-- truncate -->

## What had gone out of date?

| What the page said | What was true by August 2026 |
|---|---|
| Use Whirlpool through Sparrow Wallet | US authorities seized Samourai Wallet's coordinator in April 2024, and Sparrow removed its Whirlpool integration in June 2024 |
| Wasabi charges a 0.3% coordinator fee | zkSNACKs shut down its coordinator in June 2024; Wasabi now connects to independent coordinators, and since version 2.2 has no built-in coordinator fee |
| JoinMarket, linked to its original repository | That repository was archived in April 2026; development continues as JoinMarket NG |

## Why recommend only one?

2024 showed what coordinator risk means in practice: the day Samourai's servers were seized, every Whirlpool user stopped mixing. JoinMarket NG is a peer-to-peer market with no company in the middle, so there is nothing to seize. It requires your own Bitcoin node, which the rest of this site already recommends, and Jam makes it usable without the command line.

The other tools are still covered. Wasabi is the simpler alternative. Ashigaru, a community fork of Samourai, launched a new Whirlpool coordinator in June 2025; we describe it without recommending it.

## Why are theory and practice now separate pages?

The [CoinJoin page](/docs/learn/privacy/coinjoin/) explains how mixing works, what it protects and what it does not, and compares the tools. The [tutorial](/docs/learn/privacy/coinjoin-tutorial/) is the procedure: your own node, a temporary hot wallet protected by a passphrase, JoinMarket NG and Jam, and sweeping the mixed coins out to cold storage when you are done. A reader who only wants to understand CoinJoin no longer has to scroll past installation steps, and a reader following the steps no longer has to skip the theory.
