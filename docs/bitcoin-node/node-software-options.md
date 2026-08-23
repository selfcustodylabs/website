# Node Software Options

> Compare Bitcoin node software options: Parmanode, Umbrel, RaspiBlitz, Start9, and DIY setups. Find the right approach for your skill level and needs.

Source: https://selfcustodylabs.com/docs/bitcoin-node/node-software-options/
Last updated: 2026-08-23
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

There's no single "best" way to run a Bitcoin node. Different solutions optimize for different things: ease of use, learning opportunity, feature richness, or maximum control. Here's how to think about your options.

## The Spectrum of Control

Node software exists on a spectrum from "just works" to "build everything yourself":

<div class="doc-diagram">

![Node software on a spectrum from guided to manual: Umbrel's web UI, Start9's app store, Parmanode's terminal wizard, RaspiBlitz's scripts and Raspibolt's fully manual setup; these guides use Parmanode, in the middle](https://selfcustodylabs.com/img/diagrams/bitcoin-node/software-spectrum.svg)

</div>

**Left side:** Easy to start, but when something breaks, you may not understand why.

**Right side:** Steeper learning curve, but you understand your system deeply.

## Quick Comparison

<div class="fixed-width-table">

| Solution | Difficulty | Control | Learning Value | Best For |
|----------|------------|---------|----------------|----------|
| **Parmanode** | Medium | High | Excellent | Learning while doing |
| **Umbrel** | Easy | Low | Limited | Beginners who want simplicity |
| **Start9** | Easy | Medium | Moderate | Privacy-focused users |
| **RaspiBlitz** | Medium | High | Good | Lightning enthusiasts |
| **Raspibolt** | Hard | Maximum | Maximum | Deep learners |

</div>

## Option 1: Parmanode (Recommended)

**Best for:** Users who want to learn without suffering

Parmanode is our recommended approach because it strikes the ideal balance. You're working in a real terminal on a real Linux system, but the wizard handles the tedious parts: downloading, signature verification, configuration. When you install Sparrow through Parmanode, it automatically connects to your node. Magic that you can understand.

**Highlights:**
- One-line installation
- Automatic PGP/SHA256 verification
- Wallets auto-configure to use your node
- Open source with extensive code comments
- Works on Linux, Mac, and Raspberry Pi

**Tradeoffs:**
- Terminal-based (no pretty web UI)
- Requires basic command-line comfort

→ **[Parmanode Setup Guide](https://selfcustodylabs.com/docs/bitcoin-node/parmanode-setup)**

## Option 2: Umbrel

**Best for:** Non-technical users who just want a working node

Umbrel provides a beautiful web interface and an "app store" for installing Bitcoin software. Click to install Bitcoin Core, click to install an Electrum server, click to install Lightning. It's genuinely impressive how accessible they've made node operation.

**Highlights:**
- Gorgeous web interface
- One-click app installation
- Active community
- Works on Raspberry Pi or any Linux system

**Tradeoffs:**
- Abstracts away the details (hard to troubleshoot)
- Docker-based (adds complexity under the hood)
- When things break, you may feel helpless

→ [Umbrel Website](https://umbrel.com)

## Option 3: Start9

**Best for:** Privacy-focused users who want a sovereign server

Start9 goes beyond Bitcoin: it's trying to build a "personal server" for all your self-hosted needs. Their focus on privacy and sovereignty aligns well with Bitcoin values. The Embassy OS provides a polished experience with thoughtful design.

**Highlights:**
- Strong privacy focus
- Broader vision (not just Bitcoin)
- Health monitoring and alerts
- Sell pre-configured hardware

**Tradeoffs:**
- More expensive if buying hardware
- Smaller app ecosystem than Umbrel
- Proprietary OS (though open source)

→ [Start9 Website](https://start9.com)

## Option 4: RaspiBlitz

**Best for:** Lightning Network enthusiasts

RaspiBlitz started as a Lightning-focused node and has grown from there. It's feature-rich, well-maintained, and has an active community. The interface is terminal-based with ASCII menus, functional rather than pretty.

**Highlights:**
- Excellent Lightning support
- Feature-rich
- Long track record
- Active development

**Tradeoffs:**
- Can feel overwhelming (many options)
- Less polished UX than Umbrel
- Primarily Raspberry Pi focused

→ [RaspiBlitz Documentation](https://docs.raspiblitz.org)

## Option 5: DIY (Raspibolt/Minibolt)

**Best for:** Deep learners who want maximum understanding

Raspibolt and Minibolt are step-by-step guides to building a node from scratch. No wizard, no automation: you type every command, create every configuration file, understand every component. It's the slow path, but you emerge with genuine knowledge.

**Highlights:**
- Maximum learning opportunity
- Complete understanding of your system
- No magic or abstraction
- Excellent documentation

**Tradeoffs:**
- Time-intensive (expect hours to days)
- Easy to make mistakes
- Troubleshooting requires understanding

→ [Raspibolt Guide](https://raspibolt.org) (Raspberry Pi)  
→ [Minibolt Guide](https://minibolt.minibolt.info) (PC/Laptop)

## Decision Framework

**Choose Parmanode if:**
- You want to learn but not suffer
- You're comfortable with a terminal
- You want wallets to auto-configure
- You might want to peek at the code

**Choose Umbrel if:**
- You want the easiest possible setup
- You prefer graphical interfaces
- You won't need deep customization
- You're okay trading control for convenience

**Choose Start9 if:**
- Privacy is your top priority
- You want a broader "sovereign computing" platform
- You're willing to pay for polished hardware

**Choose RaspiBlitz if:**
- Lightning Network is important to you
- You want lots of features
- You're comfortable with terminal menus

**Choose DIY (Raspibolt) if:**
- Learning is more important than finishing quickly
- You want to understand every component
- You enjoy technical challenges

## Hardware Considerations

Most node software works on similar hardware:

<div class="fixed-width-table">

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Device** | Raspberry Pi 4 (4GB) | Raspberry Pi 5 (8GB) or mini PC |
| **Storage** | 1 TB SSD | 2 TB SSD |
| **RAM** | 4 GB | 8+ GB |
| **Internet** | Stable connection | Unlimited data |

</div>

**Warning: SSD Required**
All node software requires an SSD. Traditional hard drives are too slow for the Bitcoin blockchain. Don't try to save money here: you'll waste days of sync time and have ongoing performance issues.

## Our Recommendation

For most users reading this site, **[Parmanode](https://selfcustodylabs.com/docs/bitcoin-node/parmanode-setup)** is the right choice. It teaches you real skills while removing unnecessary friction. You'll understand your node because you built it with real tools, but you won't waste hours on tasks a script can do in seconds.

If Parmanode feels too technical, start with Umbrel; you can always migrate later. If Parmanode feels too guided, try Raspibolt; you'll learn even more.

The important thing is running a node, period. Any of these options gets you there.

---

## Next Steps

→ **Recommended:** [Parmanode Setup Guide](https://selfcustodylabs.com/docs/bitcoin-node/parmanode-setup) (our recommended approach)

→ **Background:** [Why Run Your Own Node](https://selfcustodylabs.com/docs/learn/nodes/why-run-node) (understand the benefits)
