---
sidebar_position: 6
title: "CoinJoin Tutorial: JoinMarket NG and Jam Step by Step"
description: "Step-by-step Bitcoin coinjoin with JoinMarket NG and Jam: your own node, a dedicated hot wallet, funding, mixing rounds, and sweeping out cleanly."
keywords: ["coinjoin tutorial", "joinmarket ng", "jam joinmarket", "how to coinjoin bitcoin", "joinmarket guide", "jam web ui", "bitcoin privacy tutorial", "coinjoin setup"]
tags: ["coinjoin", "privacy", "joinmarket"]
slug: /learn/privacy/coinjoin-tutorial
guide:
  time: "1-2 hours of setup, then mixing runs on its own"
  level: "Advanced"
  cost: "Maker fees (a small fraction of a percent) plus mining fees"
---

# Run your first CoinJoin with JoinMarket NG and Jam

To run a CoinJoin without trusting a coordinator, use JoinMarket NG, a peer-to-peer CoinJoin engine, through Jam, its web interface, on top of your own Bitcoin node: install Jam (most node-in-a-box platforms offer it as an app), create a separate hot wallet for mixing, fund it with the amount to mix, run collaborative transactions or Jam's scheduler, and sweep the mixed coins to fresh addresses in your cold storage. It takes one to two hours to set up, then the mixing runs on its own, and costs maker fees of a fraction of a percent plus mining fees. The [theory page](/docs/learn/privacy/coinjoin/) explains why it works.

<GuideFacts />

You need a [Bitcoin node](/docs/bitcoin-node/), or the time to set one up in step 1. The setup has four parts, built in this order:

1. Your own Bitcoin node, which everything else talks to.
2. A separate hot wallet, which exists only to run CoinJoin rounds.
3. [JoinMarket NG](https://github.com/joinmarket-ng/joinmarket-ng), the engine that finds counterparties and builds the CoinJoins.
4. [Jam](https://github.com/joinmarket-webui/jam), the web interface for it.

## What are you building?

<div class="doc-diagram">

![The JoinMarket stack: Jam in your browser drives the JoinMarket NG daemon, which signs coinjoins and talks to makers over Tor, while your own Bitcoin Core node verifies the chain and your balance](/img/diagrams/privacy/joinmarket-stack.svg)

</div>

Jam is the control panel, JoinMarket NG does the mixing, and your node keeps everything private and verified. Counterparty traffic runs over Tor.

## Why is the mixing wallet a hot wallet?

:::danger The mixing wallet's keys are online
Running CoinJoin rounds needs keys that stay online while the rounds run, so the mixing wallet is a hot wallet, less secure than your hardware wallet by design. Treat it as a temporary working wallet, not savings: fund it only with the amount you are mixing (start with an amount you could bear to lose while learning), give it its own new seed, and never import your cold storage or hardware wallet seed into it.
:::

The separation also makes the privacy rules easy to follow. With mixing funds in their own wallet, your KYC coins and your mixed coins physically cannot end up in the same transaction by accident.

## Step 1: Run your own Bitcoin node

Step 1 gives JoinMarket NG a backend to check balances and broadcast transactions, and for privacy that backend must be your own node. If your setup asked someone else's server, that server would see every address you are trying to unlink, before, during, and after the mix.

Two ways to get there:

- A node-in-a-box platform, the easiest: Umbrel, Start9 and RaspiBlitz run Bitcoin Core for you and offer Jam as an app, so step 2 takes five minutes.
- Your own Bitcoin Core on your own hardware: follow the [node guide](/docs/bitcoin-node/) first, then come back.

Either way, wait until the node is fully synced before mixing.

## Step 2: Install JoinMarket NG and Jam

Step 2 installs the mixing software.

### On a node-in-a-box

If you run Umbrel, Start9 or RaspiBlitz, open its app store and install Jam. The app bundles the JoinMarket backend and wires it to your node automatically. When Jam opens in your browser, skip to Step 3.

### On your own Linux server

On your own Linux machine, install JoinMarket NG with its installer:

```bash
curl -sSL https://raw.githubusercontent.com/joinmarket-ng/joinmarket-ng/main/install.sh | bash
source ~/.joinmarket-ng/activate.sh
```

Piping a script from the internet into your shell deserves a look first: download `install.sh`, read it, then run it.

Then point it at your node. The configuration lives in `~/.joinmarket-ng/config.toml`; set the backend to Bitcoin Core and fill in your node's RPC credentials:

```toml
backend_type = "descriptor_wallet"   # use Bitcoin Core as the backend
# plus your Bitcoin Core RPC host, port, user, and password
```

Start the wallet daemon (`jmwalletd`), which exposes the API that Jam connects to. Finally install Jam itself and point it at the daemon; the [Jam installation docs](https://jamdocs.org/software/installation/) cover the supported setups, including Docker.

Installer options and daemon names change faster than guides do. If anything here disagrees with the [JoinMarket NG documentation](https://joinmarket-ng.github.io/joinmarket-ng/) or the [Jam documentation](https://jamdocs.org/), follow theirs.

## Step 3: Create the mixing wallet

Step 3 creates the temporary hot wallet in Jam.

1. Give it an obvious name, such as `mixing`, so it is never mistaken for anything long-term.
2. Set a strong password. Jam encrypts the wallet with it, and anyone with the machine and the password can spend the funds.
3. Write down the seed phrase, even for a temporary wallet: coins may sit here for days while rounds run, and a failed disk should not cost them. If Jam offers an extra passphrase on top of the seed (a mnemonic extension), you can add one; write it down too, because the seed alone will not restore the wallet without it.
4. Never put your cold storage seed here.

When the wallet opens, Jam shows a receive address. That is where your coins to be mixed will go.

## Step 4: Fund the wallet

Step 4 moves the coins to be mixed into the mixing wallet's receive address, from an exchange withdrawal or your existing wallet. For a first session, 0.001 to 0.01 BTC is enough to watch full rounds complete without meaningful risk. The funding transaction is visible to whoever knew your coins before, such as the exchange, and they can see the coins went to a wallet that then joins CoinJoins; that is expected, since CoinJoin gives coins a private future, not a hidden past. Wait for a confirmation before mixing.

## Step 5: Mix

Step 5 runs the CoinJoins. Jam offers two ways, both available once the wallet is funded.

A single collaborative transaction: in the send screen, toggle the collaborative option, pick the number of counterparties, and send, either to one of your own fresh addresses or straight to a payment destination. You pay each maker its advertised fee plus mining fees; even with many counterparties the total is normally a small fraction of one percent. This is the taker role: your mix happens on your schedule, usually within minutes.

The scheduler: Jam's main feature runs a full mixing session for you: it splits your balance and executes a sequence of collaborative transactions over several hours or days with randomized timing, ending by sweeping the wallet. This is the closest thing to "press play, come back to mixed coins". Use it when you are mixing a meaningful amount rather than experimenting.

While rounds run, keep the machine on, since rounds cannot complete with the daemon offline (always-on node-in-a-box setups suit this). If nothing seems to happen, check the order book Jam shows, which lists the makers offering liquidity and their fees. And remember that rounds compound: one join gives one round's anonymity set, and the scheduler's chain of joins is what builds real privacy, as the [theory page](/docs/learn/privacy/coinjoin/#how-coinjoin-works) explains.

## Step 6: Sweep out and wind down

Step 6 moves the mixed coins to long-term storage; the mixing wallet is a waypoint, not a destination.

1. Send the mixed coins to fresh addresses of your long-term wallet (your hardware wallet or cold storage), one UTXO per address, never to an address that has been used before. If you used the scheduler, you can give it destination addresses so the final sweep lands there directly.
2. Follow the post-mix rules from the theory page: [never merge with KYC coins, never consolidate, coin control always](/docs/learn/privacy/coinjoin/#best-practices-after-coinjoin). The mixing is the cheap part; the discipline afterwards is what keeps the privacy.
3. Once the wallet is swept, the wallet can sit empty until your next batch, or be retired entirely. Keep the seed backup until the balance is zero and confirmed elsewhere.

## Should you stay on as a maker?

So far you have been a taker, paying small fees to mix on demand. Jam's earn tab lets you switch sides and run as a maker: your wallet offers liquidity, other people's coinjoins include your coins, and you collect fees while your coins get remixed over and over for free.

- Your keys stay online the whole time; this is a long-running hot wallet by design, so size the balance accordingly.
- Earnings are modest; think of them as offsetting your costs while your privacy keeps compounding.
- Committed makers can lock a fidelity bond (timelocked coins) to rank higher in taker selections; read the [JoinMarket NG docs](https://joinmarket-ng.github.io/joinmarket-ng/) before locking anything.

## What if something does not work?

- Jam cannot reach the backend: the wallet daemon is not running, or (manual path) Jam is pointed at the wrong host or port.
- The backend cannot reach the node: RPC credentials in `config.toml` do not match your Bitcoin Core settings, or the node is still syncing.
- No collaborative transaction starts: check the orderbook. If you see no offers, your Tor connection is likely down; if you see offers but joins fail, retry, since individual makers do drop out mid-round.
- Everything is slow: that is normal. Tor adds latency and the scheduler adds deliberate random delays. Slow is part of the privacy.

## What should you check?

- The mixing wallet has its own new seed, written down.
- It has a strong password.
- The first session uses a small amount you could bear to lose.
- The node is fully synced, and the daemon talks only to your own node.
- The mixed coins were swept to fresh cold storage addresses.
- The post-mix rules are followed: no merging, no consolidation, coin control on every spend.

Afterwards, manage the mixed coins with [UTXO management](/docs/learn/privacy/utxo-management/), and consider [PayJoin](/docs/learn/privacy/payjoin/) for the payments themselves.
