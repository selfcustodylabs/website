---
sidebar_position: 4
title: "Electrum Server Explained"
description: "Understand Electrum servers (Electrs, Fulcrum): what they do, why you need one, and how to choose between options for your Bitcoin node setup."
keywords: ["electrum server", "electrs", "fulcrum", "bitcoin node", "sparrow wallet", "indexing", "self custody"]
tags: ["bitcoin node", "electrum", "setup", "self custody"]
---

# Electrum Server Explained

You've got Bitcoin Core running, syncing hundreds of gigabytes of blockchain data. But here's the problem: when Sparrow Wallet asks "what's my balance?", Bitcoin Core can't answer quickly. It would need to scan the entire blockchain looking for transactions involving your addresses—a process that could take hours.

This is where an Electrum server comes in. It creates an index of the blockchain data, organizing everything by address. When your wallet asks about a specific address, the Electrum server can answer in milliseconds instead of hours.

Think of it like the difference between reading every page of a 600-gigabyte book versus checking the index at the back.


## What an Electrum Server Does

An Electrum server sits between Bitcoin Core and your wallet:

```
QUERY FLOW
─────────────────────────────────────────────────────────────

Sparrow Wallet                     Bitcoin Core
     │                                  │
     │  "Balance for                    │
     │   address bc1q...?"              │
     │                                  │
     ▼                                  │
┌─────────────────┐                     │
│ Electrum Server │◄────────────────────┘
│   (Index)       │     Reads blockchain
└────────┬────────┘
         │
         │  "0.5 BTC"
         │  (instant response)
         ▼
   Sparrow Wallet

─────────────────────────────────────────────────────────────
```

The server indexes all addresses and transactions, building a database that can answer wallet queries efficiently. Your wallet never talks directly to Bitcoin Core—it talks to the Electrum server, which has already organized all the data for fast retrieval.


## Why You Need One

Without an Electrum server, you have limited options for connecting your wallet to your node:

**Option 1: Let your wallet scan the blockchain directly**  
This works but is slow. Every time you open your wallet, it needs to catch up by scanning recent blocks. Some wallets support this; many don't.

**Option 2: Use a public Electrum server**  
Fast, but defeats the purpose of running your own node. The public server sees all your addresses and can track your activity.

**Option 3: Run your own Electrum server**  
Best of both worlds. Fast queries, complete privacy. This is what we recommend.


## Electrum Server Options

Several implementations exist, each with tradeoffs:

<div class="fixed-width-table">

| Server | Language | RAM Usage | Index Time | Best For |
|--------|----------|-----------|------------|----------|
| **Fulcrum** | C++ | 4+ GB | Faster | Most users |
| **electrs** | Rust | 2+ GB | Slower | Limited RAM |
| **ElectrumX** | Python | 8+ GB | Varies | Legacy setups |

</div>

### Fulcrum (Recommended)

Fulcrum is written in C++ and is the fastest option. Once indexed, queries are lightning fast. The tradeoff is higher RAM usage—you'll want at least 4 GB available, ideally 8 GB.

If you're running Parmanode, install Fulcrum by typing `f` in the Node Install menu.

### electrs

electrs (lowercase) is written in Rust and uses less RAM than Fulcrum. It's a good choice for Raspberry Pi 4 with only 4 GB of RAM. The indexing process is slower, but once complete, it works well.

In Parmanode, type `ersd` for the Docker version of electrs.

### ElectrumX

The original Python implementation. Still works but generally not recommended for new setups—the alternatives are faster and more efficient.


## The Indexing Process

After Bitcoin Core finishes syncing, your Electrum server needs to build its index. This is a one-time process that takes **12-48 hours** depending on your hardware.

During indexing:
- The server reads the entire blockchain from Bitcoin Core
- It builds a database mapping addresses to transactions
- CPU and disk usage will be high
- Your wallet won't connect until indexing completes

**Be patient.** Just like the Bitcoin Core sync, this only happens once. After the initial index is built, the server stays current automatically.


## Security and Privacy Benefits

Running your own Electrum server provides significant advantages:

**Privacy:** Your wallet queries never leave your network. Public Electrum servers see every address you check and every transaction you broadcast. Your own server keeps that information private.

**Verification:** Data comes directly from your own Bitcoin Core instance, which has verified every block against Bitcoin's rules. You're not trusting a third party to tell you the truth.

**Reliability:** Public servers can go offline, be slow, or be shut down. Your own server is always available (when your computer is running).

**No Logging:** Public servers could be logging your activity. Your own server logs only what you configure it to log.


## Connection Information

Once your Electrum server is running, you'll need connection details for your wallet. If you installed through Parmanode, this information is displayed in the server's menu:

```
CONNECT:    127.0.0.1:50001   [From this computer only]
            127.0.0.1:50002:s [From this computer only - SSL]
            192.168.0.170:50001 [From any home network computer]

TOR:        [onion address for remote access]
```

**Port 50001** — Standard Electrum protocol (unencrypted, fine for local network)  
**Port 50002** — SSL-encrypted connection  
**Tor address** — For connecting from outside your home network privately

If you installed your wallet through Parmanode, it will already be configured—no manual setup needed.


## Storage Requirements

Your Electrum server index adds storage beyond Bitcoin Core's blockchain:

<div class="fixed-width-table">

| Server | Approximate Index Size |
|--------|----------------------|
| **Fulcrum** | 100-130 GB |
| **electrs** | 30-50 GB |
| **ElectrumX** | 50-70 GB |

</div>

Plan for **at least 1.5 TB total** for Bitcoin Core plus Fulcrum, or **1.2 TB** for Bitcoin Core plus electrs.


## Troubleshooting

### "Connection refused" when connecting wallet

The Electrum server might still be indexing, or it might not be running.

- Check if Bitcoin Core is fully synced first
- Verify the Electrum server is running (check the menu in Parmanode)
- Ensure you're using the correct port (50001 or 50002)

### Indexing seems stuck

Initial indexing takes 12-48 hours. It's not stuck—it's just slow. Check:

- Is there disk activity? (indicates the server is working)
- How much RAM is available? (low RAM slows indexing significantly)
- Is Bitcoin Core fully synced? (the Electrum server waits for Core)

### High CPU usage during indexing

This is normal. Once the initial index is complete, CPU usage drops dramatically. The server only needs to index new blocks as they arrive (every ~10 minutes).

---

## Key Takeaways

- An Electrum server **indexes the blockchain** for fast wallet queries
- Without one, your wallet would need to **scan the entire blockchain** (slow)
- **Fulcrum** is fastest, **electrs** uses less RAM
- Initial indexing takes **12-48 hours** (one-time)
- Parmanode **auto-configures** wallets to use your server

---

## Next Steps

→ **Next:** [Tor Configuration](/docs/bitcoin-node/tor) — Add network privacy

→ **Connect:** [Connect Sparrow Wallet](/docs/bitcoin-node/connect-sparrow-wallet) — Manual wallet connection

→ **Back:** [Parmanode Setup](/docs/bitcoin-node/parmanode-setup) — Installation guide
