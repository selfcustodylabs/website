---
sidebar_position: 2
title: "What is Bitcoin?"
description: "Understand what Bitcoin is, how it works, and why it matters. A beginner's introduction to digital money that no one controls."
keywords: ["bitcoin", "what is bitcoin", "cryptocurrency", "digital money", "decentralized", "blockchain"]
tags: ["bitcoin", "basics", "introduction", "getting started"]
slug: /learn/fundamentals/what-is-bitcoin
---

# What is Bitcoin?

By the end of this page you'll understand what Bitcoin actually is, how a Bitcoin transaction moves from one person to another, why the supply is capped, and why holding it yourself is the part that really matters.

Bitcoin is digital money that no single person, company, or government controls. It was launched in 2009 by someone using the name Satoshi Nakamoto, whose real identity has never been confirmed. Instead of being issued by a central bank, Bitcoin runs on a worldwide network of computers that anyone is free to join. No authority can print more of it, freeze your account, or reverse a transaction after it happens.

That last point is worth pausing on, because it's the feature that makes Bitcoin feel strange the first time you use it. When you send bitcoin, it leaves your hands for good. There's no customer service line, no chargeback, no "wait, can we undo that?" The upside is the same as the downside: nobody else can undo it either.

## How Bitcoin is different from the money you already use

The money in your bank account is created by central banks, and there is no ceiling on how much of it can exist. Banks and payment companies sit in the middle of every transfer, which is why your card can be declined, your account can be frozen, and a wire can be clawed back days later. It's a system built on trusted institutions, and it works well right up until the moment you need to do something those institutions don't want you to do.

Bitcoin inverts almost all of that. New coins are created by mathematical rules that no one can rewrite, the total supply is permanently capped at 21 million, and there's no company standing between you and the person you're paying. Transfers move directly from one participant to another, they can't be censored by a middleman, and once they're confirmed they stay confirmed. This is why people describe Bitcoin as "permissionless" money. You don't need anyone's approval to use it.

## How a Bitcoin transaction actually works

The easiest way to understand Bitcoin is to picture it as a shared notebook. Imagine millions of people around the world each keeping an identical copy of the same ledger, and every time someone spends bitcoin, the entry gets written into every copy at once. Nobody can secretly tear out a page, because everyone else would immediately notice that their copy no longer matches. That shared notebook is what people mean when they say **blockchain**.

Here's what happens when Maya, who lives in Mexico City, wants to send a little bitcoin to her cousin Daniel in Buenos Aires.

<div class="doc-diagram">

![The journey of a 0.1 BTC payment from Maya to Daniel: her wallet builds and signs the transaction, the network broadcasts it, miners verify every rule and include it in a block, and Daniel verifies his money himself](/img/diagrams/fundamentals/tx-journey.svg)

</div>

Notice what's missing from that sequence: a bank, a card network, a wire service, a foreign exchange desk. Maya and Daniel don't need any of them, because the network itself is doing the job those institutions normally do. That's the core invention.

## Miners, blocks, and why the chain can't be rewritten

Miners are specialized computers that compete to add the next page to that shared notebook. Think of mining as a global lottery where the only way to win a ticket is to burn real electricity on a hard math problem. Whichever miner solves the problem first gets to publish the next block of transactions and is rewarded with newly created bitcoin. That reward is how new coins enter circulation.

This competition matters because it's what makes the history tamper-proof. To rewrite an old block, an attacker would have to redo all the lottery work for that block and every block that has been added since, faster than the rest of the world is adding new ones. In practice this is so expensive that it has never happened to Bitcoin. The deeper a transaction sits in the chain, the more settled it becomes.

## Why the supply is fixed at 21 million

Bitcoin's software will only ever allow 21 million coins to exist, and that rule is enforced by every participant on the network rather than by a policy decision somebody could quietly change. Roughly 19.5 million of those coins have already been mined, and the rate of new issuance gets cut in half every four years. The final fraction of a bitcoin is expected to be mined sometime around the year 2140.

The reason this matters is simple. When a central bank prints more money, every unit you hold quietly becomes a smaller slice of the pie. Bitcoin can't do that to you, because the pie is a fixed size and everyone can verify it. That's why people sometimes call it "digital gold": you can't mine past a known ceiling, and the scarcity is baked into the rules rather than promised by a company.

## Why Bitcoin matters to you

The first reason is that Bitcoin lets you move money to anyone in the world without asking for permission. If you've ever tried to send a wire to another country, you know how much friction sits in that process. With Bitcoin, geography more or less disappears. New York, Lagos, Manila, Buenos Aires: the network works the same way in all of them, and it doesn't observe bank holidays.

The second reason is protection from the slow erosion of inflation. Because no one can expand the supply, the bitcoin you hold today is the same fraction of the total that it will be ten years from now. You may not need this protection if you live somewhere with a stable currency, but for people in countries where inflation regularly runs double digits, it's not an abstract benefit at all.

The third reason is ownership that actually belongs to you. Bank accounts, brokerage accounts, and even real estate can be frozen, seized, or restricted by someone with enough authority. When you hold your own Bitcoin keys, there is no such authority. If you control the keys, you control the coins, and nobody else gets a say.

## What Bitcoin is not

A lot of what people "know" about Bitcoin is wrong, and it's worth clearing up the biggest misconceptions before they steer you somewhere unhelpful.

:::warning Common Misconceptions

**Bitcoin is anonymous.** Actually, Bitcoin is pseudonymous. Every transaction is public and permanently recorded, and specialists can often trace coins between addresses. Real privacy takes deliberate effort, which is why we wrote a whole [privacy section](/docs/learn/privacy/why-privacy-matters) for it.

**Bitcoin is only for criminals.** Cash is used for far more crime than Bitcoin is, because the public blockchain is actually a poor hiding place. Once a coin is linked to an identity, its entire history becomes an investigator's roadmap.

**Bitcoin has no real value.** Its value comes from a combination of utility and scarcity. It lets anyone move money across borders without permission, and its supply is fixed forever. Whether that's worth something is a judgment each person makes for themselves.

**Bitcoin is too volatile to be useful.** Its price swings have gotten smaller as the network has grown, and many people treat it as long-term savings rather than a way to buy groceries. Volatility looks different when your time horizon is ten years instead of ten days.

:::

## Units and satoshis

One bitcoin is divisible into 100 million smaller pieces, because the protocol stores amounts with eight decimal places. The smallest unit is called a **satoshi**, named after Bitcoin's creator, and you'll often see people abbreviate it as "sat". You'll also see millibitcoin and microbitcoin in some wallets, though most people today talk only about bitcoin and sats.

<div class="fixed-width-table">

| Unit | Value in BTC | Symbol |
|------|--------------|--------|
| **Bitcoin** | 1.0 | BTC |
| **Millibitcoin** | 0.001 | mBTC |
| **Microbitcoin** | 0.000001 | μBTC |
| **Satoshi** | 0.00000001 | sat |

</div>

At current prices a single satoshi is worth a fraction of a cent, which means Bitcoin is practical at any size, from buying a coffee to settling a real estate deal. You're never forced to transact in whole coins.

## How people get bitcoin

There are a handful of realistic ways to acquire bitcoin, and they differ mainly in how much effort they take and how much you trust the counterparty.

1. Buy it from an exchange, which is a platform that lets you trade traditional currency for bitcoin. For most people this is the simplest starting point because the process looks a lot like opening a brokerage account.
2. Accept it as payment for goods or services you already sell. This is how a lot of freelancers and small businesses build a stack without ever touching an exchange.
3. Trade peer-to-peer with someone you know or meet through a reputable platform, which cuts out the exchange entirely at the cost of doing a little more work to verify the other side.
4. Earn it from an employer who pays in bitcoin. More companies do this than you might expect, especially in software and content work.
5. Mine it yourself by running specialized hardware. This is technically possible for anyone, but the upfront cost and electricity bills mean it's really a business rather than a hobby.

:::danger Important warning
When you buy bitcoin on an exchange, the exchange holds the coins for you. This arrangement is called **custodial** storage, because someone else is the actual custodian of your money. If that exchange is hacked, goes bankrupt, or decides to freeze your account, you can lose access to your bitcoin even though your balance "belongs" to you on paper. This is exactly why self-custody exists, and it's why we recommend moving your bitcoin off the exchange as soon as you're comfortable doing it.
:::

## Why self-custody is the point

Owning bitcoin on an exchange is a lot like having a gift card from a store. The card says you have a balance, but you're really only trusting the store to honor it. Self-custody means holding your own private keys, which is the actual mechanism that authorizes a Bitcoin transaction. Once you hold the keys, no exchange failure can take your coins, no account freeze can stop you from spending them, and no third party can say no on your behalf.

This is what people mean by the phrase "not your keys, not your coins". It sounds like a slogan, but it's a literal description of how Bitcoin works under the hood. Learning to do self-custody well takes a little patience and a little care, because the flip side of having no third party is that there's no one to call when you make a mistake. The upside is that you end up with an asset that truly answers to you alone.

## Where to go next

The logical next step is learning how self-custody actually works in practice, because understanding what Bitcoin is without owning it yourself is like reading about swimming without ever getting in the water. Start with [What is Self-Custody?](/docs/learn/fundamentals/what-is-self-custody) to see why holding your own keys matters, and then read [Private Keys Explained](/docs/learn/keys/intro) when you're ready to see how that ownership works at the level of the keys themselves.
