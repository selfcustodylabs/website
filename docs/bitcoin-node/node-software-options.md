---
sidebar_position: 3
title: "Node Software Options"
description: "Compare Bitcoin node software options: Parmanode, Umbrel, RaspiBlitz, Start9, and DIY setups. Find the right approach for your skill level and needs."
keywords: ["bitcoin node", "umbrel", "raspiblitz", "start9", "parmanode", "raspibolt", "comparison"]
tags: ["bitcoin node", "setup", "comparison"]
date: "2026-01-15"
---

# Choosing node software

Node software ranges from point-and-click appliances to building every part yourself, and the right choice depends on how much you want to understand your node. We recommend Parmanode: a terminal installer on an ordinary Linux system that handles the downloads, signature checks and configuration, and connects Sparrow for you. Umbrel and Start9 suit people who want a graphical app store; RaspiBlitz suits Lightning users; RaspiBolt and MiniBolt suit people who want to type every command themselves. Any of them is far better than no node.

## Where does each option sit?

<div class="doc-diagram">

![Node software on a spectrum from guided to manual: Umbrel's web UI, Start9's app store, Parmanode's terminal wizard, RaspiBlitz's scripts and Raspibolt's fully manual setup; these guides use Parmanode, in the middle](/img/diagrams/bitcoin-node/software-spectrum.svg)

</div>

The guided end is easy to start but hard to troubleshoot when something breaks; the manual end takes longer but leaves you understanding your system.

| Option | Difficulty | Control | What you learn | Suits |
|----------|------------|---------|----------------|----------|
| [Parmanode](/docs/bitcoin-node/parmanode-setup/) | Medium | High | A lot | Learning while doing |
| [Umbrel](https://umbrel.com) | Easy | Low | Little | Beginners who want simplicity |
| [Start9](https://start9.com) | Easy | Medium | Some | Privacy-minded users who want a home server |
| [RaspiBlitz](https://docs.raspiblitz.org) | Medium | High | A good deal | Lightning users |
| [RaspiBolt](https://raspibolt.org) or [MiniBolt](https://minibolt.minibolt.info) | Hard | Complete | The most | People who want to understand every part |

## Parmanode (our recommendation)

Parmanode is a terminal-based installer on a real Linux system that does the tedious parts (downloading, checking PGP signatures and SHA256 hashes, configuring) and installs Sparrow already connected to your node. It installs with one command, works on Linux, macOS and Raspberry Pi, and is open source with well-commented code. It has no web interface and needs basic comfort with a terminal. The [Parmanode guide](/docs/bitcoin-node/parmanode-setup/) walks through it.

## Umbrel

Umbrel is a web interface with an app store: Bitcoin Core, an Electrum server and Lightning each install with a click, on a Raspberry Pi or any Linux computer, and it has an active community. The cost is that it hides the details, so troubleshooting is hard when something breaks, and it runs everything in Docker containers. Since 2023 its code has been published under a non-commercial licence rather than an open-source one.

## Start9

Start9's StartOS (formerly embassyOS) is a personal server operating system for self-hosting in general, not only bitcoin, with a strong privacy focus, health monitoring and alerts. Start9 also sells pre-configured hardware. It costs more if you buy their hardware, and its app selection is smaller than Umbrel's.

## RaspiBlitz

RaspiBlitz began as a Lightning node and grew from there. It is feature-rich, well maintained and long established, with a terminal interface of text menus. The many options can feel overwhelming, and it is aimed mainly at the Raspberry Pi.

## RaspiBolt and MiniBolt

RaspiBolt (for Raspberry Pi) and MiniBolt (for a PC or laptop) are step-by-step guides to building a node by hand: you type every command and write every configuration file. Expect hours to days, and mistakes are easy to make, but you finish with a real understanding of every component.

## Which should you choose?

| Choose | If |
|---|---|
| Parmanode | You want to learn without suffering, are comfortable with a terminal, and want your wallet configured for you |
| Umbrel | You want the easiest setup and a graphical interface, and will trade control for convenience |
| Start9 | Privacy is your priority, you want a general self-hosting platform, and will pay for polished hardware |
| RaspiBlitz | Lightning matters to you and you are comfortable with terminal menus |
| RaspiBolt or MiniBolt | Learning matters more than finishing quickly |

If Parmanode feels too technical, start with Umbrel and move later; if it feels too guided, try RaspiBolt.

## What hardware does node software need?

<div class="fixed-width-table">

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Device | Raspberry Pi 4 (4 GB) | Raspberry Pi 5 (8 GB) or a mini PC |
| Storage | 2 TB SSD | 2 TB SSD or larger |
| Memory | 4 GB | 8 GB or more |
| Internet | A stable connection | No monthly data cap |

</div>

:::warning Use an SSD
Every option needs an SSD. A spinning hard disk is too slow for the blockchain: the initial sync takes days longer and the node stays slow afterwards.
:::
