---
sidebar_position: 2
title: "Parmanode Setup Guide"
description: "Step-by-step guide to setting up a Bitcoin node with Parmanode. Easy installation for Linux, Mac, and Raspberry Pi with automatic wallet configuration."
keywords: ["parmanode", "bitcoin node", "bitcoin core", "electrum server", "sparrow wallet", "self custody", "raspberry pi"]
tags: ["bitcoin node", "parmanode", "setup", "self custody"]
---

# Parmanode setup guide

Parmanode is an open-source installer, run from the terminal, that sets up a Bitcoin node on an ordinary Linux or Mac computer: one command installs it, typing `rp` opens its menus, and from there it installs Bitcoin Core, an Electrum server such as Fulcrum, and Sparrow Wallet already connected to your node. It downloads each program, checks its PGP signature and SHA256 hash, and configures it, while leaving you with a normal system you can inspect and troubleshoot. Expect an hour or two of work, then one to seven days for Bitcoin Core to sync and another half to two days for the Electrum server to index.

Parmanode was created by Arman the Parman, a bitcoin educator. Unlike Umbrel or Start9 it hides nothing: you run real software on a real system, so you can fix it when something goes wrong and change it when you want to.

## What can Parmanode install?

| Category | Software |
|---|---|
| Node | Bitcoin Core or Bitcoin Knots; the Electrum servers electrs, Fulcrum and Electrum X; Mempool (a block explorer); LND (Lightning); BTCPay Server |
| Wallets | Sparrow, Electrum, Specter Desktop, Green, Trezor Suite, Ledger Live |
| Other | Tor, Tor Browser, JoinMarket, a Nostr relay and more |

Install only what you need. The feature that sets Parmanode apart is that wallets installed through it, such as Sparrow or Electrum, come configured to use your own Electrum server, with no connection details to copy.

## Which systems does it run on?

<div class="fixed-width-table">

| Platform | Support |
|----------|---------------|
| Linux (Debian and Ubuntu family) | Full support; recommended |
| Mac (Intel and Apple Silicon) | Most features |
| Raspberry Pi | Full support, with the ParmanodL operating system |
| Windows | Not supported; use a Linux virtual machine |

</div>

## What do you need first?

- A computer running Linux (Debian or Ubuntu family) or macOS.
- A 2 TB SSD: the blockchain alone was about 770 GB in September 2026, and the Electrum server index needs more.
- A stable internet connection; the blockchain download is about 770 GB.
- Basic comfort with a terminal.

:::warning Use an SSD, not a hard disk
On a spinning hard disk the initial sync takes weeks instead of days, and the node stays slow afterwards.
:::

## Step 1: Install Parmanode

Step 1 installs the installer. Open a terminal (on a Mac, Terminal is in Applications, Utilities) and run:

```bash
curl https://parmanode.com/install.sh | sh
```

The script is short; to read it first, run the command without `| sh`, which prints it instead. On a Mac you may be asked to install the Command Line Developer Tools, which git needs: click Install and wait a few minutes.

## Step 2: Open Parmanode

Step 2 starts it. Type:

```bash
rp
```

Parmanode's menus appear. Each option has a short code in brackets; type the code and press Enter:

```
PARMANODE --> Main Menu --> Install Menu --> Node Install
═══════════════════════════════════════════════════════════

# Not yet installed...

    (core)        Bitcoin Core/Knots
    (ersd)        electrs (Docker)
    (ex)          Electrum X
    (f)           Fulcrum (an Electrum Server)
    ...

═══════════════════════════════════════════════════════════
Type your choice from above options, or: (p) for previous,
(m) for main, (q) to quit.
Then <enter>:
```

## Step 3: Install Bitcoin Core

Step 3 installs the node itself. Go to the install menu, then node install, type `core` and follow the prompts. Parmanode downloads Bitcoin Core, checks its signatures, installs and configures it, and starts the initial sync, which takes one to seven days depending on your hardware and connection and only happens once. The Bitcoin Core menu shows the sync's progress.

## Step 4: Install an Electrum server

Step 4 adds the index your wallet will query. In the node install menu, type `f` for Fulcrum, which is faster but uses more memory, or `ersd` for electrs, which suits computers with 4 GB of memory or less, and follow the prompts. The server cannot index until Bitcoin Core has finished syncing, and indexing then takes another 12 to 48 hours. The [Electrum server page](/docs/bitcoin-node/electrum-server/) compares the options.

## Step 5: Install Sparrow

Step 5 installs your wallet already connected. Go to the install menu, then wallet install, type `sparrow` and follow the prompts. Sparrow is configured to use your own Electrum server, so when you open it, your balances and transactions are already private and checked by your own node.

## How do you see the connection details?

Parmanode configures its own wallets, but the Electrum server's menu shows the addresses for connecting wallets on other devices:

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

[Connect Sparrow to your node](/docs/bitcoin-node/connect-sparrow-wallet/) covers connecting another computer.

## How do you update Parmanode?

Parmanode updates itself from its main menu. Updating Parmanode does not update the programs it installed: to move to a newer Bitcoin Core, for example, uninstall it with Parmanode's remove option and install it again, and the updated Parmanode installs the newer version. If the built-in update fails, this forces a refresh:

```bash
curl https://parmanode.com/refresh_parmanode | sh
```

## How do you run it on a Raspberry Pi?

ParmanodL is a complete operating system image for the Raspberry Pi 4 or 5, and the easiest way to build a dedicated node. Download it from parmanode.com directly, by torrent or through its Tor address. It boots with the username `parman` and the password `parmanodl`; change the password at first login. To reach it from another computer:

```bash
ssh parman@parmanodl.local
```

Some Parmanode features open graphical programs such as wallets. To see them over SSH, connect with `ssh -Y parman@parmanodl.local` and make sure X11 forwarding is enabled; a Mac needs an X11 viewer such as XQuartz.

## What else is worth knowing?

- When Parmanode asks for a password, it means your computer's own login (sudo) password, which it needs for tasks such as mounting drives.
- Run it as a normal user, not as root, or it will fail.
- It can run on a rented virtual server, but storing the blockchain there gets expensive unless Bitcoin Core is pruned.
- The code is open source and heavily commented. To learn how it works, open `~/parman_programs/parmanode/` in an editor and follow `run_parmanode.sh`; every command in it is one you could run by hand.

The [Parmanode website](https://parmanode.com), its [source code](https://github.com/ArmanTheParman/parmanode) and [Arman the Parman's articles](https://armantheparman.com) go further.
