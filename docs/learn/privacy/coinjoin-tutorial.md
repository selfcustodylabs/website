---
sidebar_position: 6
title: "CoinJoin Tutorial: JoinMarket NG and Jam Step by Step"
description: "Step-by-step Bitcoin coinjoin with JoinMarket NG and Jam: your own node, a dedicated hot wallet, funding, mixing rounds, and sweeping out cleanly."
keywords: ["coinjoin tutorial", "joinmarket ng", "jam joinmarket", "how to coinjoin bitcoin", "joinmarket guide", "jam web ui", "bitcoin privacy tutorial", "coinjoin setup"]
tags: ["coinjoin", "privacy", "joinmarket"]
slug: /learn/privacy/coinjoin-tutorial
---

# Run Your First CoinJoin with JoinMarket NG and Jam

:::info What You'll Do
**Time:** 1-2 hours of setup, then mixing runs on its own  
**Difficulty:** Advanced  
**Cost:** Maker fees (a small fraction of a percent) plus mining fees  
**Prerequisites:** The [CoinJoin theory page](/docs/learn/privacy/coinjoin/) and a [Bitcoin node](/docs/bitcoin-node/), or the willingness to set one up in Step 1.
:::

The [theory page](/docs/learn/privacy/coinjoin/) explains why CoinJoin works. This page is the practice: by the end you will have run real coinjoins through your own node, with no coordinator and no third-party server involved.

The stack has four pieces, and you will set them up in this order:

1. **Your own Bitcoin node**: the backend everything else talks to
2. **A dedicated hot wallet with a passphrase**: a temporary wallet that exists only to run coinjoin rounds
3. **[JoinMarket NG](https://github.com/joinmarket-ng/joinmarket-ng)**: the engine that finds counterparties and builds the coinjoins
4. **[Jam](https://github.com/joinmarket-webui/jam)**: the web interface that makes the engine pleasant to use

## What You're Building

<div class="doc-diagram">

![The JoinMarket stack: Jam in your browser drives the JoinMarket NG daemon, which signs coinjoins and talks to makers over Tor, while your own Bitcoin Core node verifies the chain and your balance](/img/diagrams/privacy/joinmarket-stack.svg)

</div>

Jam is the control panel, JoinMarket NG does the mixing, and your node keeps everything private and verified. Counterparty traffic runs over Tor.

## Before You Start: This Is a Hot Wallet

:::danger Understand what "hot" means here
Coinjoining requires keys that are online while rounds run. The mixing wallet you create below is a **hot wallet**: less secure than your hardware wallet or cold storage by definition. Handle it accordingly:

- Treat it as a **temporary working wallet**, not savings. Coins go in, get mixed, and get swept out.
- Fund it with **only the amount you are actively mixing**. Start small: an amount you could tolerate losing while you learn.
- It gets its **own brand-new seed**. Never import your cold storage or hardware wallet seed into it.
:::

This separation is not just damage control; it is also what makes the privacy rules easy to follow. With mixing funds in their own wallet, your KYC coins and your mixed coins physically cannot end up in the same transaction by accident.

## Step 1: Run Your Own Bitcoin Node

JoinMarket NG needs a backend to check balances and broadcast transactions, and for privacy that backend must be **your** node. If your setup asked someone else's server, that server would see every address you are trying to unlink, before, during, and after the mix.

Two ways to get there:

- **Node-in-a-box** (easiest): platforms like Umbrel, Start9, RaspiBlitz, Citadel, and MyNode run Bitcoin Core for you and offer Jam as an installable app. If this is you, Step 2 takes five minutes.
- **Manual node**: Bitcoin Core on your own hardware. Follow the [Bitcoin Node guide](/docs/bitcoin-node/) first, then come back.

Either way, wait until the node is fully synced before mixing.

## Step 2: Install JoinMarket NG and Jam

### The Easy Path: Node-in-a-Box App Store

If you run Umbrel, Start9, RaspiBlitz, Citadel, or MyNode, open its app store and **install Jam**. The app bundles the JoinMarket backend and wires it to your node automatically. When Jam opens in your browser, skip to Step 3.

### The Manual Path: Your Own Server

On your own Linux machine, install JoinMarket NG with its installer:

```bash
curl -sSL https://raw.githubusercontent.com/joinmarket-ng/joinmarket-ng/main/install.sh | bash
source ~/.joinmarket-ng/activate.sh
```

:::tip Verify before you run
Piping a script from the internet into your shell deserves a look first. Download `install.sh`, read it, then run it; being able to do that is the point of open source.
:::

Then point it at your node. The configuration lives in `~/.joinmarket-ng/config.toml`; set the backend to Bitcoin Core and fill in your node's RPC credentials:

```toml
backend_type = "descriptor_wallet"   # use Bitcoin Core as the backend
# plus your Bitcoin Core RPC host, port, user, and password
```

Start the wallet daemon (`jmwalletd`), which exposes the API that Jam connects to. Finally install Jam itself and point it at the daemon; the [Jam installation docs](https://jamdocs.org/software/installation/) cover the supported setups, including Docker.

:::note Commands drift
Installer flags, config options, and daemon names evolve faster than guide pages. If anything here disagrees with the [JoinMarket NG documentation](https://joinmarket-ng.github.io/joinmarket-ng/) or the [Jam docs](https://jamdocs.org/), trust the official docs.
:::

## Step 3: Create the Mixing Wallet

In Jam, create a **new wallet**. This is the temporary hot wallet from the warning above.

1. **Give it an obvious name** like `mixing`, so it can never be confused with anything long-term.
2. **Set a strong password.** Jam encrypts the wallet with it; anyone with access to the machine and this password can spend the funds.
3. **Write down the seed phrase.** Yes, even for a temporary wallet: coins may sit here for days while rounds run, and a crashed disk should not cost you them. If Jam offers an additional passphrase on top of the seed (a mnemonic extension), you can add one; write it down too, because the seed alone will not restore the wallet without it.
4. **Never put your cold storage seed here.** The mixing wallet gets its own fresh seed, full stop.

When the wallet opens, Jam shows a receive address. That is where your coins to be mixed will go.

## Step 4: Fund the Wallet

Send the amount you want to mix from wherever it currently lives (exchange withdrawal, your existing wallet) to the mixing wallet's receive address.

- **Start small** for your first session: something in the 0.001 to 0.01 BTC range is enough to watch full rounds complete without meaningful risk.
- **The funding transaction is visible.** Whoever knew your coins before (the exchange, anyone watching that wallet) can see they moved into a wallet that then coinjoins. That is expected: CoinJoin gives your coins a private *future*, it does not hide their past.
- Wait for a confirmation before mixing.

## Step 5: Mix

Jam gives you two ways to coinjoin, visible as soon as the wallet is funded.

**A single collaborative transaction.** In the send screen, toggle the collaborative option, pick the number of counterparties, and send, either to one of your own fresh addresses or straight to a payment destination. You pay each maker its advertised fee plus mining fees; even with many counterparties the total is normally a small fraction of one percent. This is the taker role: your mix happens on your schedule, usually within minutes.

**The scheduler.** Jam's flagship feature runs a full mixing session for you: it splits your balance and executes a sequence of collaborative transactions over several hours or days with randomized timing, ending by sweeping the wallet. This is the closest thing to "press play, come back to mixed coins". Use it when you are mixing a meaningful amount rather than experimenting.

A few things while rounds run:

- **Keep the machine on.** Rounds cannot complete with the daemon offline; node-in-a-box setups shine here because they are always on.
- **Check the orderbook** (Jam shows it) if nothing seems to happen; it lists the makers currently offering liquidity and their fees.
- **Remember rounds compound.** One join gives you one round's anonymity set; the scheduler's chain of joins is what builds real privacy, as covered in the [theory page](/docs/learn/privacy/coinjoin/#how-coinjoin-works).

## Step 6: Sweep Out and Wind Down

The mixing wallet is a waypoint, not a destination. When mixing is done:

1. **Send mixed coins to fresh addresses** of your long-term wallet (your hardware wallet or cold storage), one UTXO per address, never to an address that has been used before. If you used the scheduler, you can give it destination addresses so the final sweep lands there directly.
2. **Follow the post-mix rules** from the theory page: [never merge with KYC coins, never consolidate, coin control always](/docs/learn/privacy/coinjoin/#best-practices-after-coinjoin). The mixing was the cheap part; the discipline afterward is the actual product.
3. **Empty means done.** Once swept, the wallet can sit empty until your next batch, or be retired entirely. Keep the seed backup until the balance is zero and confirmed elsewhere.

## Optional: Stay On as a Maker

So far you acted as a taker: you paid small fees to mix on demand. Jam's earn tab lets you switch sides and run as a **maker**: your wallet offers liquidity, other people's coinjoins include your coins, and you collect fees while your coins get remixed over and over for free.

- Your keys stay online the whole time; this is a long-running hot wallet by design, so size the balance accordingly.
- Earnings are modest; think of them as offsetting your costs while your privacy keeps compounding.
- Serious makers can lock a **fidelity bond** (timelocked coins) to rank higher in taker selections; read the [JoinMarket NG docs](https://joinmarket-ng.github.io/joinmarket-ng/) before locking anything.

## Troubleshooting

- **Jam cannot reach the backend:** the wallet daemon is not running, or (manual path) Jam is pointed at the wrong host or port.
- **Backend cannot reach the node:** RPC credentials in `config.toml` do not match your Bitcoin Core settings, or the node is still syncing.
- **No collaborative transaction starts:** check the orderbook. If you see no offers, your Tor connection is likely down; if you see offers but joins fail, retry, since individual makers do drop out mid-round.
- **Everything is slow:** normal. Tor adds latency and the scheduler adds deliberate random delays. Slow is part of the privacy.

## Safety Checklist

- [ ] The mixing wallet has its own fresh seed, written down
- [ ] Strong wallet password set
- [ ] Funded with a small, tolerable amount for the first session
- [ ] Node fully synced, daemon running through your own node only
- [ ] Mixed coins swept to fresh cold storage addresses when done
- [ ] Post-mix rules followed: no merging, no consolidation, coin control

## Where to Go Next

You now have a working, coordinator-free privacy pipeline: node, JoinMarket NG, Jam, and a disciplined wallet routine around it. Keep the [post-mix rules](/docs/learn/privacy/coinjoin/#best-practices-after-coinjoin) close, manage the results with [UTXO management](/docs/learn/privacy/utxo-management/), and consider [PayJoin](/docs/learn/privacy/payjoin/) for the payments themselves.
