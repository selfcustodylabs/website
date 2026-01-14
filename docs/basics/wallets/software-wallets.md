---
sidebar_position: 1
title: "Software Wallets Explained"
description: "Understand software wallets for Bitcoin: what they are, when to use them, recommended options, and security best practices."
keywords: ["bitcoin", "self custody", "security", "privacy", "software wallet", "hot wallet", "mobile wallet", "desktop wallet"]
tags: ["bitcoin", "software", "wallet", "hot wallet"]
---

# Software Wallets

A software wallet is an app on your phone or computer that lets you hold and use Bitcoin. It creates and stores your private keys on the same device where the app runs.

For most people, this is their first step into self-custody—and it's a great way to learn before graduating to more secure setups.


## How Software Wallets Work

When you install a software wallet:

1. The app generates a seed phrase (or lets you import one)
2. Private keys are derived from the seed and stored on your device
3. When you send Bitcoin, the wallet signs transactions using those keys
4. The signed transaction is broadcast to the Bitcoin network

```
SOFTWARE WALLET FLOW:
─────────────────────────────────────────────────────────
Your Device (Phone/Computer)
┌─────────────────────────────────────────────────┐
│  Wallet App                                      │
│  ┌─────────────┐    ┌──────────────────────┐   │
│  │ Private Key │───►│ Sign Transaction     │   │
│  │ (stored)    │    │                      │   │
│  └─────────────┘    └──────────┬───────────┘   │
│                                │               │
└────────────────────────────────┼───────────────┘
                                 │
                                 ▼
                        Bitcoin Network
```

The key difference from hardware wallets: **your private keys exist on an internet-connected device**, which is why software wallets are also called "hot wallets."


## When to Use a Software Wallet

Software wallets are ideal for:

<div class="fixed-width-table">

| Use Case | Why Software Wallet Works |
|----------|---------------------------|
| **Learning Bitcoin** | Low barrier to entry, free to use |
| **Small amounts** | Acceptable risk for pocket money |
| **Daily spending** | Convenient for frequent transactions |
| **Receiving payments** | Quick access to addresses |
| **Lightning Network** | Many Lightning wallets are software-based |

</div>

Think of a software wallet like **cash in your pocket**—convenient for daily use, but not where you'd store your life savings.


## Security Considerations

### Why Software Wallets Are Less Secure

Your device is exposed to many threats:

- **Malware** — Keyloggers, clipboard hijackers, screen recorders
- **Phishing** — Fake apps or websites stealing your seed
- **Physical theft** — Someone steals your unlocked phone
- **App vulnerabilities** — Bugs in the wallet software itself
- **Operating system exploits** — Compromises at the OS level

### The Risk is Real

If malware gains access to your device, it can:
- Read your seed phrase from storage
- Intercept your PIN/password
- Replace destination addresses when you copy/paste
- Sign transactions without your knowledge

:::warning Rule of Thumb
Never store more Bitcoin in a software wallet than you'd be willing to carry as cash in your pocket.
:::


## Recommended Software Wallets

### Mobile Wallets

<div class="fixed-width-table">

| Wallet | Platform | Best For | Key Features |
|--------|----------|----------|--------------|
| **BlueWallet** | iOS, Android | Beginners | Simple, supports hardware wallets, Lightning |
| **Nunchuk** | iOS, Android | Security-focused | Multisig support, hardware wallet integration |
| **Green (Blockstream)** | iOS, Android | Privacy | Tor support, 2FA option, multisig |
| **Phoenix** | iOS, Android | Lightning | Self-custodial Lightning, simple UX |
| **Muun** | iOS, Android | Unified balance | Combines on-chain and Lightning |

</div>

**My recommendation for mobile:** BlueWallet for beginners, Nunchuk for those wanting more security.

### Desktop Wallets

<div class="fixed-width-table">

| Wallet | Platform | Best For | Key Features |
|--------|----------|----------|--------------|
| **Sparrow** | Win/Mac/Linux | Power users | Coin control, full node support, PSBT |
| **Electrum** | Win/Mac/Linux | Technical users | Advanced features, long track record |
| **Wasabi** | Win/Mac/Linux | Privacy | Built-in CoinJoin, Tor by default |
| **Specter** | Win/Mac/Linux | Node operators | Designed for node integration |

</div>

**My recommendation for desktop:** Sparrow Wallet—excellent for both learning and advanced use.


## Setting Up a Software Wallet

### Basic Security Steps

1. **Download from official sources only**
   - Use official app stores or developer websites
   - Verify checksums when available
   - Never download wallet APKs from random websites

2. **Create your wallet**
   - Let the app generate a new seed phrase
   - Write down all 12/24 words immediately
   - Never screenshot or copy/paste your seed

3. **Secure the backup**
   - Store your seed phrase offline
   - Consider a [metal backup](/docs/seed/backup) for durability
   - Keep it separate from your device

4. **Set a strong PIN/password**
   - Use the app's built-in protection
   - Don't reuse passwords from other services

5. **Verify receive addresses**
   - Send a small test amount first
   - Confirm the transaction arrives


## Software Wallet Best Practices

### Do's ✅

- **Keep the app updated** — Security patches matter
- **Use the simplest wallet that meets your needs** — Fewer features = fewer bugs
- **Enable additional security** — PIN, biometrics, 2FA if available
- **Run your own node** — Avoid leaking addresses to third parties
- **Verify addresses before sending** — Clipboard malware is real

### Don'ts ❌

- **Don't store large amounts** — Use hardware wallet for savings
- **Don't enter seed on other devices** — Keep it offline
- **Don't use on rooted/jailbroken devices** — Security is compromised
- **Don't skip updates** — Old versions have known vulnerabilities
- **Don't trust, verify** — Check addresses carefully


## Connecting to Your Own Node

By default, most software wallets connect to the developer's servers or random public nodes. This reveals:

- All your addresses
- Your transaction history
- Your balance
- When you're online

For privacy, connect your wallet to your own node:

<div class="fixed-width-table">

| Wallet | Node Connection |
|--------|-----------------|
| Sparrow | Built-in Electrum server support |
| Electrum | Electrum server connection |
| BlueWallet | Electrum server or Umbrel |
| Green | Personal Electrum server |

</div>

See our [Bitcoin Node Guide](/docs/bitcoin-node) to set up your own.


## When to Graduate to Hardware Wallet

Consider upgrading when:

- Your Bitcoin holdings exceed a month's expenses
- You're holding long-term (not just for spending)
- You want peace of mind
- You're ready for more security responsibility

A software wallet is a great learning tool, but for significant savings, a [hardware wallet](/docs/basics/wallets/hardware-wallets) is essential.


---

## Key Takeaways

- Software wallets are **convenient but less secure**
- Use them for **small amounts and daily spending**
- Your keys exist on an **internet-connected device** (risk!)
- **Never store more than you'd carry as cash**
- Graduate to **hardware wallets for savings**

---

## Continue Learning

→ **Next:** [Hardware Wallets](/docs/basics/wallets/hardware-wallets) — For serious savings

→ **Setup Guide:** [Hardware Wallet Setup](/docs/hardware-wallet-setup) — Get started with hardware

→ **Privacy:** [Why Privacy Matters](/docs/basics/privacy/why-privacy-matters) — Understand the risks