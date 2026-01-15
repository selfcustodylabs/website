---
sidebar_position: 2
title: "Parmanode Setup Guide"
description: "Step-by-step guide to setting up a Bitcoin node with Parmanode. Easy installation for Linux, Mac, and Raspberry Pi with automatic wallet configuration."
keywords: ["parmanode", "bitcoin node", "bitcoin core", "electrum server", "sparrow wallet", "self custody", "raspberry pi"]
tags: ["bitcoin node", "parmanode", "setup", "self custody"]
---

# Parmanode Setup Guide

If the idea of setting up a Bitcoin node sounds intimidating, Parmanode is about to change your mind. It's an open-source Bitcoin node installer that takes the complexity out of running your own node—without taking away your control.

Created by Arman the Parman (a well-known Bitcoin educator), Parmanode is a terminal-based wizard that guides you through installing Bitcoin Core and related software. It handles the tedious parts automatically—downloading, verifying signatures, configuring settings—while giving you full access to everything under the hood.

:::tip Why Parmanode?
Unlike GUI-based solutions like Umbrel or Start9, Parmanode doesn't hide anything from you. You're running real software on a real Linux (or Mac) system. When something goes wrong, you can actually troubleshoot it. When you want to customize something, you can. It's training wheels that come off gracefully.
:::


## What Parmanode Does

Parmanode is a package installer wizard that makes it easy to:

- **Download software securely** — Automatic PGP signature and SHA256 verification
- **Install Bitcoin Core** — The reference Bitcoin implementation
- **Set up Electrum servers** — Fulcrum, Electrs, or Electrum X
- **Install wallet software** — Sparrow, Electrum, Specter, and more
- **Configure everything automatically** — Wallets connect to your node without manual setup
- **Add privacy tools** — Tor, Whirlpool, JoinMarket

The key feature that sets Parmanode apart: **it connects your wallet to your node automatically**. Install Sparrow or Electrum through Parmanode, and they'll be pre-configured to use your local Electrum server. No copying connection strings or fumbling with settings.


## Supported Platforms

<div class="fixed-width-table">

| Platform | Support Level |
|----------|---------------|
| **Linux (Debian/Ubuntu)** | Full support — recommended |
| **Mac (Intel & Apple Silicon)** | Most features work |
| **Raspberry Pi** | Full support with ParmanodL OS |
| **Windows** | Not supported (use Linux VM) |

</div>

Parmanode works best on Linux. If you're on Mac, most node-related software will work, but some advanced features are Linux-only.


## What You Can Install

Parmanode organizes software into categories. You pick what you need:

### Node Software
- Bitcoin Core / Bitcoin Knots
- Electrs (Electrum Server)
- Fulcrum (faster Electrum Server)
- Electrum X
- Mempool (block explorer)
- LND (Lightning)
- BTCPay Server

### Wallet Software
- Sparrow Wallet
- Electrum
- Specter Desktop
- Green Wallet
- Trezor Suite
- Ledger Live

### Other Tools
- Tor
- Tor Browser
- Whirlpool (CoinJoin)
- JoinMarket
- Nostr Relay
- And more...

You don't have to install everything—tailor it to your needs.

---

## Installation

### Prerequisites

Before you begin:

- A computer running **Linux (Debian/Ubuntu family)** or **Mac**
- At least **1 TB SSD** storage (2 TB recommended)
- **Stable internet connection** (blockchain download is ~600 GB)
- Basic comfort with the terminal

:::warning Storage Warning
Do not attempt to run a Bitcoin node on a traditional hard drive (HDD). The initial sync will take weeks instead of days, and ongoing performance will be frustrating. An SSD is essential.
:::

### Step 1: Open Terminal

On Linux, open your terminal application. On Mac, open Terminal from Applications → Utilities.

### Step 2: Install Parmanode

Copy and paste this single command:

```bash
curl https://parmanode.com/install.sh | sh
```

This downloads and runs the Parmanode installer. The script is short and simple—if you want to inspect it first, run the command without `| sh` to print it to your screen.

:::note Mac Users
You may be prompted to install Command Line Developer Tools. A popup window will appear—click "Install" and wait a few minutes. This is required for git to work.
:::

### Step 3: Run Parmanode

After installation completes, start Parmanode by typing:

```bash
rp
```

That's it—just two characters. The Parmanode menu will appear.

### Step 4: Navigate the Menus

Parmanode uses a simple menu system:

```
PARMANODE --> Main Menu --> Install Menu --> Node Install
═══════════════════════════════════════════════════════════

# Not yet installed...

    (core)        Bitcoin Core/Knots
    (ersd)        electrs (Docker)
    (ex)          Electrum X
    (f)           Fulcrum (an Electrum Server)
    ...

# Installed...
    
    Bitcoin Core/Knots
    electrs

═══════════════════════════════════════════════════════════
Type your choice from above options, or: (p) for previous,
(m) for main, (q) to quit.
Then <enter>:
```

Type the code in parentheses (like `core` or `f`) and press Enter to install that software.

---

## Installing Bitcoin Core

From the main menu:

1. Navigate to **Install Menu** → **Node Install**
2. Type `core` and press Enter
3. Follow the prompts

Parmanode will:
- Download Bitcoin Core from bitcoin.org
- Verify the PGP signatures automatically
- Install and configure Bitcoin Core
- Start the initial blockchain sync

:::info Sync Time
The initial blockchain download takes **1-7 days** depending on your hardware and internet speed. This only happens once—after that, your node stays current automatically.
:::

### Checking Sync Progress

Parmanode provides status information for installed software. You can monitor your sync progress through the Bitcoin Core menu.

---

## Installing an Electrum Server

An Electrum server indexes the blockchain so your wallet can query it efficiently. Without one, your wallet would need to scan the entire blockchain for your transactions.

### Recommended: Fulcrum

Fulcrum is faster than electrs, though it requires more RAM. From the Node Install menu:

1. Type `f` and press Enter
2. Follow the prompts

### Alternative: Electrs

If you have limited RAM (4 GB or less), electrs is lighter:

1. Type `ersd` and press Enter
2. Follow the prompts

:::warning Wait for Bitcoin Core
Your Electrum server needs Bitcoin Core to be fully synced before it can index the blockchain. The indexing process takes an additional 12-48 hours after Bitcoin Core finishes syncing.
:::

---

## Installing Sparrow Wallet

Here's where Parmanode shines. From the main menu:

1. Navigate to **Install Menu** → **Wallet Install**
2. Type `sparrow` and press Enter
3. Follow the prompts

When installation completes, **Sparrow will automatically be configured to connect to your local Electrum server**. No manual configuration needed.

Launch Sparrow and it will already be talking to your node. Your transactions, your addresses, your balance queries—all private, all verified by your own infrastructure.

---

## Connection Information

Even though Parmanode configures wallets automatically, you can view your connection settings anytime. From the Electrum server menu, you'll see something like:

```
═══════════════════════ Electrs v0.10.3 Menu ══════════════

ELECTRS IS: RUNNING
STATUS:     Bitcoin still sync'ing (external drive)

CONNECT:    127.0.0.1:50001   [From this computer only]
            127.0.0.1:50002:s [From this computer only]
            192.168.0.170:50001:s [From any home network computer]

TOR:        [onion address for remote access]

═══════════════════════════════════════════════════════════
```

Use these addresses to connect wallets on other devices to your node.

---

## Updating Parmanode

Parmanode can update itself from within the software. Look for the update option in the main menu.

**Important:** Updating Parmanode does not automatically update the apps it installed. To get newer versions of Bitcoin Core or other software:

1. Uninstall the app using Parmanode's remove tools
2. Reinstall it (the new version of Parmanode will install the newer version)

If the built-in update is giving you trouble, you can force a refresh:

```bash
curl https://parmanode.com/refresh_parmanode | sh
```

---

## Running on a Raspberry Pi

Parmanode offers **ParmanodL OS**—a complete operating system image for Raspberry Pi 4 or 5. This is the easiest way to set up a dedicated Bitcoin node.

### Getting ParmanodL

Download options:

1. **Direct download** from parmanode.com
2. **Torrent** (helps distribute the file to others)
3. **Tor hidden service** for maximum privacy

### Default Credentials

When you boot ParmanodL:
- **Username:** `parman`
- **Password:** `parmanodl`

### SSH Access

To access your node remotely:

```bash
ssh parman@parmanodl.local
```

:::note Graphical Applications via SSH
Some Parmanode features launch graphical applications (like wallets). To see these over SSH, use the `-Y` flag and ensure X11 forwarding is enabled:

```bash
ssh -Y parman@parmanodl.local
```

On Mac, you'll need an X11 viewer like XQuartz.
:::

---

## Tips and Troubleshooting

### Password Prompts

When Parmanode asks for a password, it's asking for your computer's **sudo password** (your login password). This is needed to access system functions like mounting drives.

### Don't Run as Root

Parmanode is designed to run as a normal user, not root. If you try to run it as root, you'll get errors.

### VPS Hosting

You can run Parmanode on a Virtual Private Server, but be aware that blockchain storage can get expensive unless you run Bitcoin Core in pruned mode.

### Learning from the Code

Parmanode is fully open source with extensive comments. If you want to learn how things work:

1. Open `~/parman_programs/parmanode/` in a code editor
2. Start with `run_parmanode.sh` and follow the logic
3. Every command is something you could run manually in the terminal

This is a great way to learn Linux and Bitcoin infrastructure.

---

## Key Takeaways

Parmanode makes running a Bitcoin node accessible without dumbing it down:

- **One-line installation** — `curl https://parmanode.com/install.sh | sh`
- **Automatic verification** — PGP and SHA256 checks happen automatically
- **Automatic wallet configuration** — Sparrow and Electrum connect to your node without manual setup
- **Full control** — You're running real software on a real system, nothing hidden
- **Educational** — The code is commented and readable

Whether you're setting up your first node or your fifth, Parmanode removes friction without removing understanding.

---

## Next Steps

Once your node is running:

→ **Next:** [Electrum Server Details](/docs/bitcoin-node/electrum-server) — Understand your indexing options

→ **Privacy:** [Tor Configuration](/docs/bitcoin-node/tor) — Add network-level privacy

→ **Connect:** [Connect Sparrow Wallet](/docs/bitcoin-node/connect-sparrow-wallet) — Link your wallet to your node

---

## Resources

- [Parmanode Website](https://parmanode.com) — Official site and downloads
- [Parmanode GitHub](https://github.com/ArmanTheParman/parmanode) — Source code
- [Arman the Parman's Website](https://armantheparman.com) — Educational articles on Bitcoin
