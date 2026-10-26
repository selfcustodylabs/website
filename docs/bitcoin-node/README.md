---
sidebar_position: 1
title: "Run Your Own Bitcoin Node: Complete Setup Guide"
description: "Complete guide to running your own Bitcoin node. Learn why it matters, compare software options, and follow step-by-step setup instructions with Parmanode."
keywords: ["bitcoin node", "self custody", "bitcoin core", "full node", "parmanode", "electrum server"]
tags: ["bitcoin node", "self custody", "guide"]
guide:
  time: "2-4 hours of active work (plus days of sync time)"
  level: "Intermediate"
  cost: "$150-350 (Raspberry Pi 5 + 2 TB SSD) or $100-150 (an old PC + 2 TB SSD)"
---

# Bitcoin node guide

Running your own Bitcoin node means your wallet checks balances and transactions against a copy of the blockchain that you downloaded and verified yourself, instead of asking a stranger's server. A complete setup has three parts: Bitcoin Core, which verifies the chain; an Electrum server, which indexes it; and your wallet, such as Sparrow, pointed at that server. It takes two to four hours of work plus a few days of syncing, on a dedicated small computer or an old laptop with a 2 TB SSD. We recommend [Parmanode](/docs/bitcoin-node/parmanode-setup/) to install it, because it handles the downloads, signature checks and configuration and connects Sparrow for you.

<GuideFacts />

## Why run a node?

Without your own node, your wallet asks someone else's computer for your balance, whether a payment is valid and what is happening on the network. That server learns your addresses, your transaction history and when you are online. With your own node:

- Your wallet's queries stay on your own hardware, so nobody else can link your addresses together.
- You verify every block and transaction against the rules yourself, rather than trusting someone else's answer.
- You enforce bitcoin's rules directly, as one of the nodes the network is made of.

[Why run your own node](/docs/learn/nodes/why-run-node/) covers the reasons in full.

## What are you building?

<div class="doc-diagram">

![A complete node setup: Bitcoin Core downloads and verifies the full chain, an Electrum server indexes it for fast queries, and Sparrow Wallet connects to your own server instead of a stranger's](/img/diagrams/bitcoin-node/node-stack.svg)

</div>

<div class="fixed-width-table">

| Component | What it does |
|-----------|--------------|
| Bitcoin Core | Downloads and independently verifies the whole blockchain, about 770 GB as of September 2026 |
| Electrum server | Indexes the blockchain so your wallet can look up its addresses quickly |
| Your wallet | Connects to your Electrum server instead of public ones |

</div>

## What hardware do you need?

<div class="fixed-width-table">

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Storage | 2 TB SSD | 2 TB SSD or larger |
| Memory | 4 GB | 8 GB or more |
| Processor | Dual-core | Quad-core |
| Internet | A stable connection | No monthly data cap |

</div>

The blockchain grows by roughly 75 GB a year, and Bitcoin Core plus an Electrum server index no longer fit on a 1 TB drive.

:::warning Use an SSD, not a hard disk
On a spinning hard disk the initial sync takes weeks instead of days, and the Electrum server stays slow afterwards. An SSD is not the place to save money.
:::

A dedicated device, such as a Raspberry Pi 5 or an old laptop left running, is the better choice: it uses little power and is always available to your wallet. Your everyday computer also works and needs no extra hardware, but the node only runs while the computer is on and has to catch up after each restart.

## What are the steps?

<div class="fixed-width-table">

| Step | What you do | Time |
|------|----------------|------|
| 1. [Choose software](/docs/bitcoin-node/node-software-options/) | Compare the options and pick one | 15 minutes |
| 2. [Set up Parmanode](/docs/bitcoin-node/parmanode-setup/) | Install and configure the node | 1-2 hours |
| 3. [Electrum server](/docs/bitcoin-node/electrum-server/) | Understand and choose an indexer | 15 minutes |
| 4. [Tor](/docs/bitcoin-node/tor/) | Add network privacy (optional) | 30 minutes |
| 5. [Connect Sparrow](/docs/bitcoin-node/connect-sparrow-wallet/) | Point your wallet at your node | 15 minutes |

</div>

## How long does it take?

<div class="fixed-width-table">

| Phase | Duration |
|-------|----------|
| Reading and planning | 30-60 minutes |
| Installing the software | 30-60 minutes |
| Bitcoin Core's initial sync | 1-7 days, depending on hardware |
| Electrum server indexing | 12-48 hours |
| Connecting the wallet | 15 minutes |

</div>

The initial sync happens once; after it, the node keeps itself current. Start it and leave it running.

## Why do we recommend Parmanode?

[Parmanode](/docs/bitcoin-node/parmanode-setup/) is a terminal-based installer that handles the fiddly parts (downloading, checking signatures, configuring) while leaving you in control of an ordinary Linux system. It also installs Sparrow already connected to your node, so there are no connection details to copy. If you prefer a graphical interface, the [node software options](/docs/bitcoin-node/node-software-options/) page compares the alternatives.

If nodes are new to you, read [what a Bitcoin node is](/docs/learn/nodes/what-is-node/) and [why privacy matters](/docs/learn/privacy/why-privacy-matters/) first.
