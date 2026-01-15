---
sidebar_position: 4
title: "Choose Your Self-Custody Setup"
description: "Interactive decision tree to help you choose the right Bitcoin self-custody setup based on your holdings, technical comfort, and security needs."
keywords: ["bitcoin wallet choice", "self custody setup", "hardware wallet comparison", "bitcoin security decision"]
tags: ["getting started", "wallet", "decision", "setup"]
---

# Choose Your Self-Custody Setup

:::info Purpose
Different situations call for different setups. This guide helps you choose the right approach based on your actual needs—not over-engineer, not under-protect.
:::

## Quick Decision Tree

Answer these questions in order:

### Question 1: How much Bitcoin are you securing?

**A) Under $1,000** → [Starter Setup](#-starter-setup)
- Software wallet on your phone is acceptable
- Focus on learning before adding complexity

**B) $1,000 - $50,000** → [Standard Setup](#-standard-setup)
- Hardware wallet recommended
- Proper backup essential

**C) $50,000 - $500,000** → [Enhanced Setup](#-enhanced-setup)
- Hardware wallet required
- Consider passphrase
- Run your own node

**D) Over $500,000** → [Maximum Setup](#-maximum-setup)
- Multisig strongly recommended
- Geographic distribution
- Professional-grade operational security

---

### Question 2: What's your technical comfort?

| Level | Description | Realistic Setup |
|-------|-------------|-----------------|
| **Beginner** | New to Bitcoin, limited technical background | Start simple, upgrade later |
| **Intermediate** | Comfortable with technology, can follow detailed guides | Most setups are accessible |
| **Advanced** | Technical professional, comfortable with command line | Can implement any setup |

---

### Question 3: How patient are you?

| Patience Level | Implication |
|----------------|-------------|
| **Want it now** | Start with hardware wallet, enhance later |
| **Willing to learn** | Can implement proper setup from the start |
| **Very thorough** | Take time to do everything correctly |

---

## Setup Recommendations

### 🌱 Starter Setup

**For:** Small amounts, learning phase, technical beginners

**Components:**
| Component | Recommendation | Cost |
|-----------|----------------|------|
| Wallet | Mobile software wallet (BlueWallet, Muun) | Free |
| Backup | Paper backup stored securely | Free |
| Node | Use default (public nodes) | Free |

**Pros:**
- ✅ Free to start
- ✅ Easy to use
- ✅ Good for learning

**Cons:**
- ❌ Keys on internet-connected device
- ❌ Using public nodes (privacy trade-off)
- ❌ Not suitable for significant amounts

**Your action items:**
1. Download [BlueWallet](https://bluewallet.io/) (Bitcoin-only, open source)
2. Create a new wallet
3. Write down the seed phrase on paper
4. Store in a secure location
5. Test with small amounts first

**When to upgrade:** When you have more than $1,000 or want better security.

→ **Next step:** [Software Wallet Basics](/docs/learn/wallets/software-wallets)

---

### 🔐 Standard Setup

**For:** Meaningful savings, privacy-conscious users, anyone serious about self-custody

**Components:**
| Component | Recommendation | Cost |
|-----------|----------------|------|
| Wallet | Hardware wallet (Trezor Safe 3, BitBox02, Coldcard) | $80-150 |
| Backup | Metal seed backup | $20-50 |
| Software | Sparrow Wallet (desktop) | Free |
| Node | Public initially, own node later | Free initially |

**Pros:**
- ✅ Keys never touch internet-connected device
- ✅ Verifiable on hardware screen
- ✅ Resistant to malware
- ✅ Industry standard security

**Cons:**
- ❌ Upfront cost
- ❌ Requires learning curve
- ❌ Single point of failure (one device, one seed)

**Your action items:**
1. Purchase hardware wallet from official source
2. Follow [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/)
3. Create metal backup
4. Complete [Backup Verification](/docs/wallet-setup/backup-verification/)
5. Review [Before You Deposit Checklist](/docs/getting-started/before-you-deposit)

**When to upgrade:** When holdings exceed $50,000 or you want maximum security.

→ **Start here:** [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/)

---

### 🛡️ Enhanced Setup

**For:** Significant holdings, high security needs, privacy-focused users

**Components:**
| Component | Recommendation | Cost |
|-----------|----------------|------|
| Wallet | Premium hardware wallet (Coldcard, Trezor Model T) | $150-200 |
| Backup | Metal seed backup + passphrase | $50-100 |
| Passphrase | DIY generated passphrase | Free |
| Software | Sparrow Wallet connected to own node | Free |
| Node | Own Bitcoin full node | $100-300 |
| Privacy | UTXO management, coin control | Free (knowledge) |

**Pros:**
- ✅ Two-layer security (seed + passphrase)
- ✅ Private queries (own node)
- ✅ Full verification
- ✅ No third-party dependencies

**Cons:**
- ❌ More complexity to manage
- ❌ Passphrase creates second failure point
- ❌ Requires running hardware 24/7 (node)

**Your action items:**
1. Set up hardware wallet with [Hardware Wallet Setup](/docs/wallet-setup/hardware-wallet/)
2. Add passphrase with [DIY Passphrase Guide](/docs/security/passphrase/)
3. Run your own node with [Bitcoin Node Guide](/docs/bitcoin-node/)
4. Learn [UTXO Management](/docs/privacy/utxo-management/)
5. Review [Why Privacy Matters](/docs/learn/privacy/why-privacy-matters)

**When to upgrade:** When holdings exceed $500,000 or threat model requires multisig.

→ **Start here:** [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/), then [Bitcoin Node Guide](/docs/bitcoin-node/)

---

### 🏰 Maximum Setup

**For:** Large holdings, public figures, hostile jurisdiction concerns, maximum security requirements

**Components:**
| Component | Recommendation | Cost |
|-----------|----------------|------|
| Wallet | Multisig (2-of-3 or 3-of-5) | $250-500 (multiple devices) |
| Devices | Hardware wallets from different manufacturers | Varies |
| Backup | Metal backups + wallet descriptor, geographically distributed | $100-200 |
| Node | Own Bitcoin full node over Tor | $100-300 |
| Signing | Air-gapped computer for sensitive operations | $50-200 |
| Privacy | CoinJoin, strict coin control | Mixing fees |

**Pros:**
- ✅ No single point of failure
- ✅ Survives theft, loss, or compromise of one key
- ✅ Geographic distribution
- ✅ Maximum security possible for individual

**Cons:**
- ❌ Significant complexity
- ❌ Coordination required for spending
- ❌ Higher transaction fees (multisig)
- ❌ Requires deep understanding

**Your action items:**
1. Master standard setup first
2. Study [Multisig Concepts](/docs/learn/wallets/multisig)
3. Follow [Multisig Setup Guide](/docs/advanced/multisig/)
4. Set up geographic distribution
5. Consider [Air-Gapped Computer](/docs/advanced/air-gapped-computer/) for signing
6. Implement [CoinJoin](/docs/privacy/coinjoin/) for privacy

**Alternative:** Consider collaborative custody (Unchained, Casa) if you want professional support.

→ **Start here:** [Multisig Setup Guide](/docs/advanced/multisig/)

---

## Hardware Wallet Comparison

If you're choosing a hardware wallet:

| Device | Price | Best For | Key Features |
|--------|-------|----------|--------------|
| **Trezor Safe 3** | ~$80 | Budget + open source | Affordable, secure element, open source |
| **BitBox02** | ~$150 | Simplicity | Minimalist, Swiss quality, easy backup |
| **Coldcard Mk4** | ~$150 | Security maximalists | Bitcoin-only, air-gapped, advanced features |
| **Trezor Model T** | ~$180 | Open source advocates | Touchscreen, fully open source |
| **Keystone Pro** | ~$170 | Air-gap preference | QR-code based, large screen |
| **Ledger Nano S+** | ~$80 | Budget option | Secure element, multi-coin |

**My recommendations:**

- **Best for beginners:** Trezor Safe 3 or BitBox02 Bitcoin-only
- **Best for security:** Coldcard Mk4
- **Best for open source:** Trezor Model T

→ **Deep dive:** [Hardware Wallets Explained](/docs/learn/wallets/hardware-wallets)

---

## Still Not Sure?

If you're paralyzed by choice:

1. **Start with the Standard Setup** — Hardware wallet is the right choice for most people
2. **Don't overthink it** — Any reputable hardware wallet is dramatically better than an exchange
3. **You can upgrade later** — Security is iterative; start somewhere and improve

**The biggest risk isn't choosing the "wrong" wallet—it's leaving your Bitcoin on an exchange while you decide.**

---

## Next Steps

Based on your chosen setup:

| Setup | First Action |
|-------|--------------|
| Starter | [Download BlueWallet](https://bluewallet.io/) and create wallet |
| Standard | [Purchase hardware wallet](/docs/wallet-setup/hardware-wallet/) from official source |
| Enhanced | [Hardware Wallet Setup](/docs/wallet-setup/hardware-wallet/) → [Bitcoin Node](/docs/bitcoin-node/) |
| Maximum | Study [Multisig Concepts](/docs/learn/wallets/multisig) before implementing |

---

## Common Questions

**"Can I use multiple setups?"**
Yes! Many people have a mobile wallet for small amounts and a hardware wallet for savings.

**"Should I wait for a better wallet?"**
No. Start securing your Bitcoin now. You can always migrate later.

**"Is [specific wallet] safe?"**
If it's on our comparison list, it's reputable. The important thing is proper setup and backup.

**"What about paper wallets?"**
Not recommended. They were an early solution that creates more problems than it solves.
