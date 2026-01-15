---
sidebar_position: 1
title: "Advanced Setup Guides"
description: "Advanced Bitcoin self-custody setups for maximum security. Multisig wallets, inheritance planning, air-gapped computers, dedicated Bitcoin workstations, and open-source firmware."
keywords: ["bitcoin multisig", "bitcoin inheritance", "air-gapped computer", "bitcoin computer", "advanced security", "self custody", "estate planning"]
tags: ["advanced", "multisig", "air-gapped", "security", "inheritance"]
slug: /advanced
---

# Advanced Setup Guides

Take your Bitcoin security to the highest level.

:::warning Prerequisites
These guides are for users who already have:
- A working hardware wallet setup
- Verified backup recovery process
- Understanding of basic Bitcoin concepts

If you're new, start with [Getting Started](/docs/getting-started/) and [Wallet Setup](/docs/wallet-setup/) first.
:::

## Why Go Advanced?

Standard hardware wallet setups are excellent for most users. Advanced setups address specific threat models:

| Setup | Protects Against | Complexity | Who Needs It |
|-------|------------------|------------|--------------|
| **Multisig** | Single point of failure, device compromise | High | Large holdings, inheritance planning |
| **Inheritance Planning** | Loss of Bitcoin at death | Medium | Anyone with Bitcoin to pass on |
| **Air-Gapped Computer** | Network-based attacks, malware | Medium | DIY seed generation, offline signing |
| **Bitcoin Computer** | Compromised daily-use devices | Medium | Privacy-focused users |
| **Open Firmware** | BIOS-level backdoors, Intel ME | Very High | Maximum security requirements |

**Most people don't need these.** Match your security to your [threat model](/docs/getting-started/threat-models).

---

## 🔐 Multisig Wallets

<div class="guide-card">

### [Multisig Setup Guide](/docs/advanced/multisig/)

**Time:** 4-8 hours | **Difficulty:** Advanced | **Cost:** $230-510

Eliminate single points of failure by requiring multiple keys to spend. In a 2-of-3 multisig, you need any 2 of 3 keys to move funds.

**Benefits:**
- No single device compromise can steal funds
- Geographic distribution of keys
- Inheritance planning built-in
- Survives loss of one key

**What you'll learn:**
- Multisig concepts and quorum selection
- Hardware wallet configuration
- Sparrow Wallet multisig setup
- Backup and recovery procedures

**Prerequisites:** Experience with single-sig hardware wallets, understanding of [private keys](/docs/learn/keys/intro).

</div>

---

## 📜 Inheritance Planning

<div class="guide-card">

### [Bitcoin Inheritance Guide](/docs/advanced/inheritance-planning)

**Time:** 2-4 hours | **Difficulty:** Intermediate | **Cost:** Varies

Ensure your Bitcoin passes to your loved ones—not lost forever. An estimated 4 million Bitcoin are permanently lost, many because owners died without sharing access.

**What you'll learn:**
- Why Bitcoin inheritance is different from traditional assets
- Simple to advanced inheritance approaches
- Step-by-step multisig inheritance setup
- Common mistakes that lose family fortunes
- Legal considerations and documentation

**Best approach:** Family multisig where heirs hold keys from the start—no reconstruction needed after death.

</div>

---

## 🔌 Air-Gapped Computer

<div class="guide-card">

### [Air-Gapped Computer Guide](/docs/advanced/air-gapped-computer/)

**Time:** 2-4 hours | **Difficulty:** Intermediate | **Cost:** $50-200 (or free with old hardware)

A computer that has never and will never connect to any network. Used for:
- DIY seed generation
- Offline transaction signing
- Secure key operations

**What you'll learn:**
- Types of air-gapped setups
- Hardware selection and preparation
- Software installation (Tails, etc.)
- Secure data transfer methods

**Why it matters:** Even the best hardware wallet connects to your computer. An air-gapped machine provides complete isolation.

</div>

---

## 💻 Dedicated Bitcoin Computer

<div class="guide-card">

### [Bitcoin Computer Guide](/docs/advanced/bitcoin-computer/)

**Time:** 2-4 hours | **Difficulty:** Intermediate | **Cost:** $50-150 (or free with repurposed hardware)

A computer used exclusively for Bitcoin operations—separate from your daily-use devices.

**Benefits:**
- Reduced attack surface
- No browsing, email, or other risky activities
- Clean environment for wallet software
- Can be hardened specifically for Bitcoin

**What you'll learn:**
- Hardware selection and options
- Operating system choices
- Security hardening
- Software installation

**Difference from air-gapped:** A Bitcoin computer can connect to the network (for running a node, broadcasting transactions). An air-gapped computer never connects.

</div>

---

## 🔧 Open-Source Firmware

For users with the highest security requirements, replacing proprietary BIOS/UEFI with open-source firmware eliminates potential backdoors at the deepest level.

<div class="guide-card">

### [Libreboot Guide](/docs/libreboot/)

**Difficulty:** Very Advanced | **Cost:** $15-30 (flashing hardware)

Fully open-source firmware that completely replaces proprietary BIOS and removes Intel Management Engine. Maximum transparency and security.

**Best for:** Users who want complete control and can verify the entire software stack.

</div>

<div class="guide-card">

### [Coreboot Guide](/docs/coreboot/)

**Difficulty:** Very Advanced | **Cost:** $0-30

Open-source firmware foundation. More hardware support than Libreboot but may retain some proprietary blobs.

**Best for:** Users who need open firmware on hardware not supported by Libreboot.

</div>

---

## Setup Progression

Build advanced capabilities in stages:

### Stage 1: Foundation (Do First)
1. **[Hardware wallet](/docs/wallet-setup/hardware-wallet/)** — Basic self-custody
2. **[Backup verification](/docs/wallet-setup/backup-verification/)** — Confirm recovery works
3. **[Run your own node](/docs/bitcoin-node/)** — Verify transactions yourself

### Stage 2: Enhanced Security
4. **[Dedicated Bitcoin computer](/docs/advanced/bitcoin-computer/)** — Separate from daily use
5. **[Security hardening](/docs/security/)** — OpSec and physical security
6. **[Inheritance planning](/docs/advanced/inheritance-planning)** — Don't let Bitcoin die with you

### Stage 3: Advanced Protection
7. **[Air-gapped computer](/docs/advanced/air-gapped-computer/)** — For offline operations
8. **[DIY seed generation](/docs/security/seed-generation/)** — Verify your entropy

### Stage 4: Maximum Security
9. **[Multisig setup](/docs/advanced/multisig/)** — Eliminate single points of failure
10. **[Open firmware](/docs/libreboot/)** — Remove BIOS-level threats

---

## Choosing Your Path

### "I want to eliminate single points of failure"
→ **[Multisig](/docs/advanced/multisig/)** is your answer. Start with 2-of-3.

### "I want my family to inherit my Bitcoin"
→ **[Inheritance Planning](/docs/advanced/inheritance-planning)** — don't let your Bitcoin die with you.

### "I want to generate my own seed securely"
→ **[Air-gapped computer](/docs/advanced/air-gapped-computer/)** + [DIY seed guide](/docs/security/seed-generation/)

### "I want a clean environment for Bitcoin"
→ **[Dedicated Bitcoin computer](/docs/advanced/bitcoin-computer/)**

### "I want maximum possible security"
→ All of the above, plus **[open firmware](/docs/libreboot/)**

---

## Common Questions

**"Is multisig worth the complexity?"**

For significant holdings (life-changing amounts), yes. The complexity cost is worth eliminating single points of failure. For smaller amounts, a well-secured single-sig setup is sufficient.

**"Can I use an old laptop as an air-gapped computer?"**

Yes! Old laptops are ideal. Disable WiFi/Bluetooth at the hardware level if possible (remove the card). See the [air-gapped setup guide](/docs/advanced/air-gapped-computer/setup).

**"Do I really need open-source firmware?"**

For most users, no. Standard hardware wallets with good practices provide excellent security. Open firmware is for users with extreme threat models or those who want complete transparency.

**"What about hardware wallets with secure elements vs. open source?"**

Both approaches have merit. Secure elements provide tamper resistance. Open source provides auditability. Some devices (like Coldcard) offer both. See [hardware wallet comparison](/docs/getting-started/choosing-your-path#hardware-wallet-comparison).

---

## Related Resources

### Prerequisites
- [Threat Model Assessment](/docs/getting-started/threat-models) — What level do you need?
- [Hardware Wallet Setup](/docs/wallet-setup/hardware-wallet/) — Start here if you haven't

### Supporting Guides
- [Bitcoin Node Setup](/docs/bitcoin-node/) — Verify your own transactions
- [Security Hardening](/docs/security/) — OpSec and physical security
- [Privacy Guides](/docs/privacy/) — Protect your transaction history
