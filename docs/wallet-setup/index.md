---
sidebar_position: 1
title: "Wallet Setup Guides"
description: "Step-by-step guides for setting up your first Bitcoin wallet. Hardware wallet setup, backup verification, and essential security practices."
keywords: ["bitcoin wallet setup", "hardware wallet", "bitcoin backup", "self custody setup", "wallet security"]
tags: ["wallet", "setup", "hardware wallet", "backup"]
slug: /wallet-setup
---

# Wallet Setup Guides

Everything you need to set up secure Bitcoin self-custody.

:::tip Before You Begin
If you're new to Bitcoin, start with [Getting Started](/docs/getting-started/) to understand the fundamentals first.
:::

## Setup Path

Follow these guides in order for a secure setup:

```
1. Hardware Wallet Setup    →  Get your device configured
2. Backup Verification      →  Test that your backup works
3. Before You Deposit       →  Final checklist before funding
```

---

## 📦 Hardware Wallet Setup

<div class="guide-card">

### [Hardware Wallet Setup Guide](/docs/wallet-setup/hardware-wallet/)

**Time:** 30-60 minutes | **Difficulty:** Beginner

Set up a hardware wallet from scratch. Covers:
- Choosing and purchasing a hardware wallet
- Initial device setup and PIN configuration
- Generating your seed phrase securely
- Installing and connecting wallet software (Sparrow)
- Receiving your first transaction

**Prerequisites:** None — this is where most people should start.

</div>

---

## ✅ Backup Verification

<div class="guide-card">

### [Backup Verification Guide](/docs/wallet-setup/backup-verification/)

**Time:** 30-60 minutes | **Difficulty:** Beginner

Verify your seed backup actually works before trusting it with significant funds.

- Why verification is critical
- Multiple verification methods
- Testing recovery on a second device
- What to do if verification fails

**Prerequisites:** Completed hardware wallet setup with seed backup written down.

</div>

---

## 🚦 Before You Deposit

<div class="guide-card">

### [Before You Deposit Checklist](/docs/getting-started/before-you-deposit)

**Time:** 15-30 minutes | **Difficulty:** Beginner

Critical checklist to complete before moving significant Bitcoin to your wallet.

- Seed phrase verification
- Backup recovery test confirmation
- Address verification on device
- Test transaction completion

**Prerequisites:** Completed hardware wallet setup AND backup verification.

</div>

---

## Which Wallet Should I Use?

Not sure which hardware wallet to buy? See our [Choose Your Setup](/docs/getting-started/choosing-your-path) guide for recommendations based on your situation.

**Quick recommendations:**

| Situation | Recommendation |
|-----------|----------------|
| Budget-conscious | Trezor Safe 3 (~$80) |
| Simplicity priority | BitBox02 Bitcoin-only (~$150) |
| Maximum security | Coldcard Mk4 (~$150) |
| Open-source priority | Trezor Model T (~$180) |

---

## Software Wallet Option

For small amounts while learning, a software wallet is acceptable:

### [Software Wallets Overview](/docs/learn/wallets/software-wallets)

Software wallets store keys on your phone or computer. They're free and convenient but less secure than hardware wallets.

**Recommended for:**
- Amounts under $500
- Learning and experimentation
- Daily spending wallet (alongside hardware wallet for savings)

**Not recommended for:**
- Significant savings
- Long-term holdings
- Anyone who can afford a hardware wallet

---

## After Setup: Next Steps

Once your wallet is set up and verified:

1. **[Run Your Own Node](/docs/bitcoin-node/)** — Verify transactions yourself
2. **[UTXO Management](/docs/privacy/utxo-management/)** — Manage privacy and fees
3. **[Add a Passphrase](/docs/security/passphrase/)** — Extra security layer
4. **[Multisig Setup](/docs/advanced/multisig/)** — Eliminate single points of failure (for larger holdings)

---

## Common Questions

**"Do I need to buy a hardware wallet?"**

For anything more than pocket change, yes. Hardware wallets are the minimum security standard for meaningful amounts.

**"Which is better: Trezor, Ledger, or Coldcard?"**

All are reputable. Trezor and Coldcard are Bitcoin-focused and fully open source. Ledger has a secure element but closed-source firmware. See [hardware wallet comparison](/docs/getting-started/choosing-your-path#hardware-wallet-comparison).

**"Can I use the same seed on multiple devices?"**

Yes, but generally not recommended. If you need redundancy, consider multisig instead.

**"What if I already have a hardware wallet set up?"**

Skip to [Backup Verification](/docs/wallet-setup/backup-verification/) to ensure your existing setup is secure.
