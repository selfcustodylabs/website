---
sidebar_position: 1
title: "Bitcoin Security: DIY Seed Generation & Advanced Protection"
description: "Advanced Bitcoin security techniques: generate your own seed phrase with dice, add passphrase protection, and implement operational and physical security best practices."
keywords: ["bitcoin security", "seed generation", "diy seed", "passphrase", "operational security", "self custody security", "dice roll seed"]
tags: ["security", "seed", "passphrase", "opsec"]
slug: /security
---

# Security Hardening Guides

Take your Bitcoin security beyond the basics.

:::info Who Is This For?
These guides are for users who already have a working hardware wallet setup and want to enhance their security. If you haven't set up a wallet yet, start with [Wallet Setup](/docs/wallet-setup/) first.
:::

## Security Layers

Bitcoin security works in layers. Each layer you add makes your setup more resilient:

```
SECURITY LAYERS
═══════════════════════════════════════════════════════════════

Layer 1: Hardware Wallet           ← Most people stop here
         └─ Keys offline, device signs

Layer 2: DIY Seed Generation       ← Verify your randomness
         └─ Dice-generated entropy

Layer 3: Passphrase                ← Hidden wallet protection
         └─ 25th word adds second factor

Layer 4: Operational Security      ← Behavior and habits
         └─ How you act matters

Layer 5: Physical Security         ← Real-world protection
         └─ Protect against physical threats

Layer 6: Multisig                  ← Eliminate single points of failure
         └─ Multiple keys required
```

**You don't need all layers.** Match your security to your [threat model](/docs/learn/fundamentals/threat-models).

---

## 🎲 DIY Seed Generation

<div class="guide-card">

### [DIY Seed Generation Guide](/docs/security/seed-generation/)

**Time:** 2-4 hours | **Difficulty:** Intermediate | **Cost:** $30-80

Generate your own seed phrase using dice for verifiable randomness. Don't trust—verify.

**Why do this?**
- Hardware wallet RNG could be compromised
- Verify your entropy source
- Educational: understand how seeds work

**What you'll learn:**
- Rolling dice for true randomness
- Converting rolls to binary
- Calculating BIP39 checksum
- Proper backup procedures

**Prerequisites:** Understanding of [seed phrases](/docs/learn/keys/seed) and [private keys](/docs/learn/keys/intro).

</div>

---

## 🔐 Passphrase Security

<div class="guide-card">

### [DIY Passphrase Guide](/docs/security/passphrase/)

**Time:** 1-2 hours | **Difficulty:** Beginner | **Cost:** Free-$10

Add a passphrase (25th word) to create a hidden wallet that requires both seed AND passphrase.

**Why do this?**
- Creates plausible deniability (decoy wallet)
- Adds second factor to seed
- Protects against seed-only compromise

**What you'll learn:**
- How passphrases work
- Generating strong passphrases
- Backup strategies for passphrases
- Common passphrase mistakes

**Prerequisites:** Working hardware wallet with seed backup.

:::danger Critical Understanding
A passphrase creates a **completely different wallet**. If you forget your passphrase, funds in that wallet are **unrecoverable**. This is not like a password—there's no reset.
:::

</div>

---

## 🕵️ Operational Security

<div class="guide-card">

### [Operational Security Guide](/docs/security/operational-security/)

**Time:** 30 min read | **Difficulty:** Beginner | **Cost:** Free

How you behave matters as much as your technical setup. OpSec covers the human element.

**Key topics:**
- Don't talk about your holdings
- Verify before you trust
- Assume devices are compromised
- Secure communication practices
- Social engineering awareness

**Why it matters:** The best technical security fails if you tell the wrong person or click the wrong link.

</div>

---

## 🏠 Physical Security

<div class="guide-card">

### [Physical Security Guide](/docs/security/physical-security/)

**Time:** 30 min read | **Difficulty:** Beginner | **Cost:** Varies

Protect yourself and your Bitcoin from real-world threats.

**Key topics:**
- The $5 wrench attack
- Home security considerations
- Backup storage locations
- Travel with Bitcoin
- Duress wallets and plausible deniability

**Why it matters:** All the cryptography in the world won't help if someone threatens you physically.

</div>

---

## Security Progression

Here's a recommended order for implementing security layers:

| Stage | What to Do | When |
|-------|------------|------|
| **1. Foundation** | Hardware wallet + proper backup | Everyone |
| **2. Verification** | Test backup recovery | Everyone |
| **3. OpSec Basics** | Don't discuss holdings publicly | Everyone |
| **4. Passphrase** | Add 25th word | Meaningful holdings |
| **5. DIY Seed** | Generate your own entropy | High security needs |
| **6. Physical Security** | Secure storage, home security | Significant holdings |
| **7. Multisig** | Multiple keys required | Large holdings |

---

## Common Security Mistakes

### 1. Security Theater
Focusing on exotic threats while ignoring basics. Your threat isn't the NSA—it's phishing, malware, and social engineering.

### 2. Complexity Beyond Competence
Implementing security you don't understand. If you can't recover your own setup, it's not secure—it's a trap.

### 3. Single Points of Failure
One seed, one location, one device. Redundancy matters.

### 4. Trusting Without Verifying
"The website said it was safe." Verify addresses on your device. Verify software signatures. Verify everything.

### 5. Talking Too Much
The more people know you have Bitcoin, the larger your attack surface.

---

## Related Guides

After hardening your security:

- **[Run Your Own Node](/docs/bitcoin-node/)** — Verify transactions yourself
- **[UTXO Management](/docs/privacy/utxo-management/)** — Privacy through coin control
- **[Multisig Setup](/docs/advanced/multisig/)** — Eliminate single points of failure
- **[Air-Gapped Computer](/docs/advanced/air-gapped-computer/)** — Maximum isolation

---

## Security Resources

### Threat Modeling
- [Assess Your Threat Model](/docs/learn/fundamentals/threat-models) — What level do you need?

### Recovery Planning
- [What If You Lose Your Seed?](/docs/reference/faq/lost-seed) — Understanding the stakes
- [Recovery Scam Warning](/docs/reference/faq/recovery-scams) — Protect yourself from fraud

### Pre-Deposit Checklist
- [Before You Deposit](/docs/wallet-setup/before-you-deposit) — Final verification steps
