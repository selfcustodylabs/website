---
sidebar_position: 1
title: "Run Your Own Bitcoin Node: Complete Setup Guide"
description: "Complete guide to running your own Bitcoin node. Learn why it matters, compare software options, and follow step-by-step setup instructions with Parmanode."
keywords: ["bitcoin node", "self custody", "bitcoin core", "full node", "parmanode", "electrum server"]
tags: ["bitcoin node", "self custody", "guide"]
---

# Bitcoin Node Guide

Running your own Bitcoin node is one of the most important steps you can take toward true self-sovereignty. It's where "don't trust, verify" becomes real—where you stop relying on others to tell you what's happening on the network and start verifying everything yourself.

This guide will take you from understanding why nodes matter to running your own fully-configured setup.

:::info What You'll Achieve
By the end of this guide, you will have:
- Your own Bitcoin full node, verifying every transaction
- An Electrum server for efficient wallet queries
- Your wallet connected privately to YOUR infrastructure
- Optional Tor configuration for network privacy

**Time required:** 2-4 hours of active work (plus days of sync time)  
**Difficulty:** Intermediate  
**Cost:** $100-300 (Raspberry Pi + SSD) or $50-100 (repurpose old PC)
:::


## Why Run a Node?

When you use Bitcoin without your own node, you're trusting someone else's computer to tell you:
- Your balance
- Whether transactions are valid
- What's actually happening on the network

That third party learns your addresses, your transaction history, when you're online. You're trading privacy for convenience.

With your own node:
- **Privacy** — Your queries stay between you and your own infrastructure
- **Verification** — You confirm everything yourself, trusting no one
- **Sovereignty** — You participate directly in Bitcoin's consensus

→ Read more: [Why Run Your Own Node](/docs/learn/nodes/why-run-node)


## What You're Building

A complete node setup connects three components:

```
YOUR NODE SETUP
─────────────────────────────────────────────────────────────

  Bitcoin Core  ───►  Electrum Server  ───►  Your Wallet
  (Full Node)              │                  (Sparrow)
       │                   │                      │
       ▼                   ▼                      ▼
  Downloads &         Indexes data          Connects to
  verifies the        for efficient         YOUR server,
  blockchain          wallet queries        not public ones

─────────────────────────────────────────────────────────────
```

<div class="fixed-width-table">

| Component | What It Does |
|-----------|--------------|
| **Bitcoin Core** | Downloads and independently verifies the entire blockchain (~600 GB) |
| **Electrum Server** | Indexes the blockchain so your wallet can query it efficiently |
| **Your Wallet** | Connects to your server instead of random public servers |

</div>


## Hardware Requirements

<div class="fixed-width-table">

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Storage** | 1 TB SSD | 2 TB SSD |
| **RAM** | 4 GB | 8+ GB |
| **CPU** | Dual-core | Quad-core |
| **Internet** | Stable connection | Unlimited data |

</div>

:::warning SSD Required
Do NOT use a traditional hard drive (HDD). Initial sync takes weeks instead of days, and ongoing performance will be frustrating. An SSD is essential—this is not the place to save money.
:::

### Hardware Options

**Dedicated Device (Recommended)**  
A Raspberry Pi 4/5 or old laptop running 24/7. Low power consumption, always available for your wallet, set and forget.

**Your Desktop Computer**  
No extra hardware, but your node only runs when your computer is on. You'll need to catch up each time you restart.


## Guide Structure

<div class="fixed-width-table">

| Step | What You'll Do | Time |
|------|----------------|------|
| 1. [Choose Software](/docs/bitcoin-node/node-software-options) | Compare options and pick your approach | 15 min |
| 2. [Parmanode Setup](/docs/bitcoin-node/parmanode-setup) | Install and configure your node | 1-2 hours |
| 3. [Electrum Server](/docs/bitcoin-node/electrum-server) | Understand indexing options | 15 min |
| 4. [Tor Configuration](/docs/bitcoin-node/tor) | Add network privacy (optional) | 30 min |
| 5. [Connect Wallet](/docs/bitcoin-node/connect-sparrow-wallet) | Link Sparrow to your node | 15 min |

</div>


## Time Expectations

Be realistic about timing:

<div class="fixed-width-table">

| Phase | Duration |
|-------|----------|
| Reading and planning | 30-60 minutes |
| Software installation | 30-60 minutes |
| Bitcoin Core sync | 1-7 days (depends on hardware) |
| Electrum server indexing | 12-48 hours |
| Wallet connection | 15 minutes |

</div>

The initial sync is slow but only happens once. After that, your node stays current automatically. Don't wait by the computer—start the sync and go live your life.


## Our Recommended Approach: Parmanode

We recommend **[Parmanode](/docs/bitcoin-node/parmanode-setup)** for most users. It's a terminal-based wizard that handles the complex parts (downloading, signature verification, configuration) while keeping you in control of a real Linux system.

The killer feature: **Parmanode automatically configures your wallet to connect to your node.** Install Sparrow through Parmanode and it just works—no copying connection strings or fumbling with settings.

→ **[Start with Parmanode](/docs/bitcoin-node/parmanode-setup)**

If you prefer a GUI-based approach, see our [comparison of node software options](/docs/bitcoin-node/node-software-options).

---

## Background Reading

If you're new to nodes, start here:

- [What is a Bitcoin Node](/docs/learn/nodes/what-is-node) — The conceptual foundation
- [Why Run Your Own Node](/docs/learn/nodes/why-run-node) — Privacy and verification benefits
- [Why Privacy Matters](/docs/learn/privacy/why-privacy-matters) — The bigger picture

---

## Ready to Begin?

→ **[Node Software Options](/docs/bitcoin-node/node-software-options)** — Compare your choices

→ **[Parmanode Setup Guide](/docs/bitcoin-node/parmanode-setup)** — Jump straight in (recommended)
