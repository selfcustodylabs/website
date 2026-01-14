---
sidebar_position: 1
title: "Bitcoin Node Setup Guide"
description: "Step-by-step guide to setting up your own Bitcoin node. Learn how to install, configure, and connect your wallet to your own node for maximum privacy."
keywords: ["bitcoin node", "self custody", "bitcoin core", "full node", "setup", "installation"]
tags: ["bitcoin node", "self custody", "guide"]
---

# Bitcoin Node Setup Guide

:::info What You'll Do
In this guide, you will:
- Install Bitcoin node software
- Sync with the Bitcoin network
- Set up an Electrum server for wallet connectivity
- Configure Tor for additional privacy
- Connect your wallet to your own node

**Time required:** 2-4 hours (plus sync time)  
**Difficulty:** Intermediate  
**Estimated cost:** $100-300 (Raspberry Pi + SSD) or $50-100 (repurpose old PC + SSD)  
**Requirements:** Dedicated computer or Raspberry Pi, 1TB+ storage
:::

:::tip Background Reading
If you haven't already, read [What is a Bitcoin Node](/docs/basics/nodes/what-is-node) and [Why Run Your Own Node](/docs/basics/nodes/why-run-node) to understand what you're building and why it matters.
:::


## What You're Building

A complete node setup for true self-custody:

```
YOUR NODE SETUP
-------------------------------------------------
                                                 
  Bitcoin Core  --->  Electrum  --->  Your Wallet
  (Full Node)         Server          (Sparrow)  
                                                 
  Downloads &         Indexes         Connects   
  verifies the        data for        privately  
  blockchain          wallet          to YOUR    
                      queries         server     
-------------------------------------------------
```

<div class="fixed-width-table">

| Component | Purpose |
|-----------|---------|
| **Bitcoin Core** | Downloads and verifies the entire blockchain |
| **Electrum Server** | Indexes data so your wallet can query it |
| **Your Wallet** | Connects to YOUR server, not public ones |

</div>


## Hardware Options

### Option 1: Dedicated Device (Recommended)

A Raspberry Pi 4/5 or old laptop running 24/7:
- Always available for your wallet
- Low power consumption
- Set and forget

### Option 2: Desktop Computer

Your main computer:
- No extra hardware needed
- Node only runs when computer is on
- Must catch up each time

### Option 3: Pre-built Node Software

All-in-one solutions that bundle everything:

<div class="fixed-width-table">

| Solution | Description |
|----------|-------------|
| **Umbrel** | User-friendly, app store interface |
| **RaspiBlitz** | Feature-rich, Lightning-focused |
| **Start9** | Privacy-focused, sovereign computing |

</div>


## Minimum Requirements

<div class="fixed-width-table">

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Storage** | 1 TB SSD | 2 TB SSD |
| **RAM** | 4 GB | 8+ GB |
| **CPU** | Dual-core | Quad-core |
| **Internet** | Stable connection | Unlimited data |

</div>

:::warning SSD Required
Do NOT use a traditional hard drive (HDD). Initial sync takes weeks instead of days, and ongoing performance will be poor.
:::


## Guide Steps

<div class="fixed-width-table">

| Step | What You'll Do |
|------|----------------|
| 1. [Node Setup](/docs/bitcoin-node/node-setup) | Install and sync Bitcoin Core |
| 2. [Electrum Server](/docs/bitcoin-node/electrum-server) | Set up wallet connectivity |
| 3. [Tor Configuration](/docs/bitcoin-node/tor) | Add network privacy |
| 4. [Connect Wallet](/docs/bitcoin-node/connect-sparrow-wallet) | Link Sparrow to your node |

</div>


## Time Expectations

<div class="fixed-width-table">

| Phase | Duration |
|-------|----------|
| Software installation | 30-60 minutes |
| Initial blockchain sync | 1-7 days (depends on hardware) |
| Electrum server indexing | 12-48 hours |
| Wallet connection | 15 minutes |

</div>

The initial sync is slow but only happens once. After that, your node stays current automatically.

---

## Related Concepts

- [What is a Bitcoin Node](/docs/basics/nodes/what-is-node) — Conceptual foundation
- [Why Run Your Own Node](/docs/basics/nodes/why-run-node) — Privacy and verification benefits
- [Why Privacy Matters](/docs/basics/privacy/why-privacy-matters) — The bigger picture
