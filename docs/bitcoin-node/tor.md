---
sidebar_position: 5
title: "Tor Configuration for Bitcoin Nodes"
description: "Configure your Bitcoin node to run over Tor for enhanced privacy. Hide your IP address and enable secure remote access to your node."
keywords: ["bitcoin node", "tor", "privacy", "onion", "hidden service", "ip address"]
tags: ["bitcoin node", "tor", "privacy", "self custody"]
---

# Tor Configuration

Your Bitcoin node talks to the world in two ways: it connects to other Bitcoin nodes to stay synchronized, and it serves your wallet's queries. Both of these connections have privacy implications—and Tor can help with both.


## Why Tor Matters for Nodes

### Your IP Address is Your Identity

When your node connects to other Bitcoin nodes, those nodes see your IP address. Your IP address isn't anonymous—it's tied to your identity through your Internet Service Provider's records. With minimal effort, someone can:

- Determine your approximate geographic location
- Identify that you're running a Bitcoin node
- Potentially correlate your node with other online activity

Why does this matter? If attackers know you're running a Bitcoin node, they might assume you hold significant Bitcoin. If you're running a Lightning node, your channel capacity is publicly visible—giving observers a floor estimate of your holdings. This makes you a potential target for physical attacks.

Running your node over Tor hides your IP address from the Bitcoin network. Other nodes see a Tor exit address, not your home connection.

### Two Types of Tor Connections

Tor serves two distinct purposes for your node:

```
TOR USE CASES
─────────────────────────────────────────────────────────────

1. NODE-TO-NODE (Privacy)
   
   Your Node ──► Tor Network ──► Other Bitcoin Nodes
   
   Hides your IP from the Bitcoin network.
   Other nodes can't see where you're located.

2. WALLET-TO-NODE (Remote Access)
   
   Your Wallet ──► Tor Network ──► Your Node's Onion Address
   
   Enables access from anywhere in the world.
   No port forwarding or VPN needed.

─────────────────────────────────────────────────────────────
```


## Connection 1: Node to Bitcoin Network

This is about **privacy**. By routing your node's connections through Tor, you prevent other Bitcoin nodes from learning your real IP address.

### What It Protects Against

- Network observers learning you run a Bitcoin node
- Geographic identification of your node
- Correlation of your node with other internet activity
- ISP logging of your Bitcoin network connections

### Configuration

Most node software can be configured to connect to peers exclusively over Tor. In Parmanode, Tor support is built into the menus—enable it from the appropriate option.

Bitcoin Core's relevant settings:
```
proxy=127.0.0.1:9050
listen=1
bind=127.0.0.1
onlynet=onion
```

These settings tell Bitcoin Core to route all connections through Tor and only connect to other Tor-enabled nodes.


## Connection 2: Your Wallet to Your Node

This is about **remote access**. When you're home, your wallet connects to your node over your local network—completely private, no Tor needed. But what happens when you're away from home?

Your node has an internal IP address (like `192.168.1.100`) that only exists on your home network. When you're at a coffee shop or traveling, that address doesn't work—you're on a different network.

### The Problem with Traditional Solutions

**Port forwarding** exposes your node to the entire internet. Anyone can attempt to connect, and your home IP address is visible.

**VPN to home** works but requires setup and monthly costs.

**Tor hidden service** solves this elegantly. Your node publishes an onion address that's accessible from anywhere in the world, through the Tor network, without exposing your home IP.

### How It Works

Your node creates a Tor hidden service—an `.onion` address that routes through the Tor network to reach your node. Your wallet connects to this onion address from anywhere:

```
Remote Access via Tor
─────────────────────────────────────────────────────────────

You (traveling)              Home Network
      │                           │
      │                    ┌──────┴──────┐
      │                    │  Your Node   │
      │                    │  (electrum   │
      ▼                    │   server)    │
┌───────────┐              └──────▲───────┘
│  Wallet   │                     │
│ (phone or │                     │
│  laptop)  │                     │
└─────┬─────┘              Tor Hidden Service
      │                    abc123xyz.onion
      │                           ▲
      └──────► Tor Network ───────┘

─────────────────────────────────────────────────────────────
```

The connection is encrypted, your home IP is never exposed, and no port forwarding is required.


## Setting Up Tor

### With Parmanode

Parmanode can install and configure Tor for you. From the Other Install menu, look for Tor-related options. Once installed, Parmanode will display your onion addresses for both Bitcoin Core and your Electrum server.

### Tor Connection Details

Your Electrum server (Fulcrum or electrs) will have its own onion address, shown in its status menu:

```
TOR:  abc123...xyz.onion:50001
```

Enter this address in your wallet's server settings to connect from anywhere.


## Sharing Your Node

One benefit of Tor access: you can share your node with friends and family. Give them your Electrum server's onion address, and they can connect their wallets to your node from anywhere in the world.

**A word of caution:** Each connected wallet adds load to your node. A Raspberry Pi can handle a few simultaneous connections, but don't share your address publicly unless you have robust hardware.


## Privacy Tradeoffs

Running over Tor adds latency. Connections are slower because traffic routes through multiple relays. For most node operations, this is acceptable. For time-sensitive applications (like running a routing Lightning node), the latency might matter.

You can also run in "hybrid" mode—connecting to both Tor and clearnet peers. This improves connectivity but reduces privacy, as clearnet connections expose your IP.


## Key Takeaways

- **Node-to-network Tor** hides your IP from other Bitcoin nodes (privacy)
- **Wallet-to-node Tor** enables remote access without port forwarding (convenience)
- Your node's **onion address** lets you connect from anywhere in the world
- **Parmanode** can install and configure Tor for you
- **Share with caution**—too many connections can overload small hardware

---

## Next Steps

→ **Next:** [Connect Sparrow Wallet](/docs/bitcoin-node/connect-sparrow-wallet) — Link your wallet

→ **Back:** [Electrum Server](/docs/bitcoin-node/electrum-server) — Understanding the indexer

→ **Start:** [Parmanode Setup](/docs/bitcoin-node/parmanode-setup) — Full installation guide
