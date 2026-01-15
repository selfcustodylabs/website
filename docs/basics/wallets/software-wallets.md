---
sidebar_position: 1
title: "Software Wallets Explained"
description: "Understand software wallets for Bitcoin: what they are, when to use them, recommended options, and security best practices."
keywords: ["bitcoin", "self custody", "security", "privacy", "software wallet", "hot wallet", "mobile wallet", "desktop wallet"]
tags: ["bitcoin", "software", "wallet", "hot wallet"]
---

# Software Wallets

Remember the first time you downloaded a banking app on your phone? A software wallet feels similar—except there's no bank on the other end. It's just you, your device, and the Bitcoin network.

A software wallet is an app on your phone or computer that lets you hold and use Bitcoin. It creates and stores your private keys on the same device where the app runs. For most people, this is their first real taste of financial sovereignty—the moment you realize you're holding actual Bitcoin that no company or government controls.

That said, software wallets come with an important trade-off. They're incredibly convenient, but because they live on devices connected to the internet, they're also more vulnerable than dedicated hardware solutions. Think of it this way: a software wallet is your Bitcoin checking account, not your savings vault.

Let's understand how they work, when to use them, and how to use them safely.


## How Software Wallets Work

The mechanics are straightforward, even if the implications are profound. When you install a software wallet, you're essentially creating a tiny, personal bank inside your phone or computer—one that only you control.

Here's what happens behind the scenes: the app generates a seed phrase (those 12 or 24 words you'll need to protect carefully), derives your private keys from that seed, and stores everything on your device. When you want to send Bitcoin, the wallet uses those keys to sign the transaction, proving to the network that you're the rightful owner.

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

Software wallets shine in situations where convenience matters more than Fort Knox-level security. If you're just starting your Bitcoin journey, there's no better way to learn. You'll make small mistakes—sending to wrong addresses, fumbling with fees—and it's far better to learn these lessons with $50 than with your life savings.

<div class="fixed-width-table">

| Use Case | Why Software Wallet Works |
|----------|---------------------------|
| **Learning Bitcoin** | Low barrier to entry, free to use |
| **Small amounts** | Acceptable risk for pocket money |
| **Daily spending** | Convenient for frequent transactions |
| **Receiving payments** | Quick access to addresses |
| **Lightning Network** | Many Lightning wallets are software-based |

</div>

Here's a mental model that helps: think of a software wallet like **cash in your pocket**. You wouldn't walk around with $10,000 in your jeans, but having $100 for coffee and emergencies makes perfect sense. The same logic applies here.


## Security Considerations

### The Uncomfortable Truth About Software Wallets

Let's be honest about what you're dealing with. Your phone or computer is a busy place. It runs dozens of apps, connects to countless websites, and processes files from who-knows-where. Every one of those interactions is a potential doorway for someone who wants your Bitcoin.

This isn't meant to scare you—it's meant to help you make informed decisions. The threats are real but manageable:

- **Malware** can log your keystrokes, hijack your clipboard, or record your screen
- **Phishing** tricks you into downloading fake wallet apps or entering your seed on fraudulent websites
- **Physical theft** means someone walks away with your unlocked phone
- **Software bugs** in the wallet itself could expose your keys
- **Operating system exploits** give attackers access at the deepest level

### When Things Go Wrong

Here's a scenario that plays out more often than anyone likes to admit: someone downloads what they think is a legitimate wallet app. They create a wallet, write down their seed, and deposit some Bitcoin. Weeks later, the Bitcoin vanishes.

What happened? The app was a counterfeit. It looked perfect—same logo, same interface—but it was designed to steal. The moment that seed phrase was generated, it was also sent to the attacker.

If malware gains access to your device, it can read your seed phrase from storage, intercept your PIN or password, replace destination addresses when you copy and paste, and even sign transactions without your knowledge.

:::warning Rule of Thumb
Never store more Bitcoin in a software wallet than you'd be willing to carry as cash in your pocket. For most people, that's somewhere between $100 and $1,000—not their retirement savings.
:::


## Recommended Software Wallets

Not all software wallets are created equal. Some prioritize simplicity, others focus on advanced features, and a few put privacy above everything else. After testing dozens of options, here are the ones worth your time.

### Mobile Wallets

For most beginners, a mobile wallet is the natural starting point. Your phone is always with you, and these apps make Bitcoin feel as natural as sending a text message.

<div class="fixed-width-table">

| Wallet | Platform | Best For | Key Features |
|--------|----------|----------|--------------|
| **BlueWallet** | iOS, Android | Beginners | Simple, supports hardware wallets, Lightning |
| **Nunchuk** | iOS, Android | Security-focused | Multisig support, hardware wallet integration |
| **Green (Blockstream)** | iOS, Android | Privacy | Tor support, 2FA option, multisig |
| **Phoenix** | iOS, Android | Lightning | Self-custodial Lightning, simple UX |
| **Muun** | iOS, Android | Unified balance | Combines on-chain and Lightning |

</div>

**My recommendation for mobile:** Start with BlueWallet if you're new—it strikes the perfect balance between simplicity and capability. Once you're comfortable and want more security features, Nunchuk is an excellent step up.

### Desktop Wallets

Desktop wallets typically offer more features and better visibility into what's happening with your Bitcoin. If you want to understand the technical details—like coin control, fee estimation, and transaction structure—a desktop wallet is invaluable.

<div class="fixed-width-table">

| Wallet | Platform | Best For | Key Features |
|--------|----------|----------|--------------|
| **Sparrow** | Win/Mac/Linux | Power users | Coin control, full node support, PSBT |
| **Electrum** | Win/Mac/Linux | Technical users | Advanced features, long track record |
| **Wasabi** | Win/Mac/Linux | Privacy | Built-in CoinJoin, Tor by default |
| **Specter** | Win/Mac/Linux | Node operators | Designed for node integration |

</div>

**My recommendation for desktop:** Sparrow Wallet, hands down. It's what I use for teaching and what I recommend to everyone from curious beginners to experienced Bitcoiners. The interface reveals exactly what Bitcoin is doing under the hood, which makes it an incredible learning tool—and it scales beautifully as your needs grow.


## Setting Up a Software Wallet

Setting up a software wallet takes about ten minutes, but those ten minutes deserve your full attention. Find a quiet moment, put your phone on do-not-disturb, and follow these steps carefully.

### The Setup Process

**First, download from official sources only.** This is worth repeating: only download wallet apps from official app stores or the developer's website. Scammers create convincing fake apps with similar names and logos. When in doubt, navigate to the wallet's official website and use the links there. If the wallet provides checksums, verify them—it takes two minutes and could save you everything.

**Next, create your wallet.** Let the app generate a new seed phrase. The moment those words appear on your screen, write them down immediately—on paper, with a pen, in the exact order shown. Never screenshot your seed. Never copy and paste it. Never type it into anything except the wallet app itself. These words are the keys to your Bitcoin; treat them accordingly.

**Secure the backup properly.** Your seed phrase written on paper is vulnerable to fire, water, and curious eyes. Store it somewhere safe, and consider a [metal backup](/docs/seed/backup) for long-term durability. Whatever you do, keep the backup separate from your device. If someone steals your phone and your seed backup is in the same bag, you've lost everything.

**Set a strong PIN or password.** Most wallets let you add an extra layer of protection. Use it. Don't reuse passwords from other services—if your email password leaks, you don't want it to also unlock your Bitcoin.

**Finally, verify everything works.** Send a small test amount to your new wallet. Watch it arrive. Send a tiny bit back. This confirms your setup is correct before you trust it with anything meaningful.


## Software Wallet Best Practices

Once your wallet is running, these habits will keep you safe:

**Keep the app updated.** Security vulnerabilities are discovered regularly, and updates patch them. An outdated wallet is a vulnerable wallet.

**Simpler is safer.** Use the simplest wallet that meets your needs. More features mean more code, and more code means more potential bugs. You don't need advanced trading features for basic self-custody.

**Enable all available security features.** PIN, biometrics, 2FA if the app offers it—turn it all on. These layers won't stop sophisticated attackers, but they'll stop opportunistic theft.

**Run your own node when possible.** This sounds advanced, but it's increasingly accessible. When your wallet connects to someone else's server, they learn your addresses and balance. Connecting to your own node keeps that information private. (See our [Bitcoin Node Guide](/docs/bitcoin-node) when you're ready.)

**Verify addresses before every transaction.** Clipboard malware can replace the address you copied with an attacker's address. Always double-check the first and last several characters before sending.

And the things to avoid:

**Never store large amounts in a software wallet.** That's what hardware wallets are for.

**Never enter your seed phrase on a computer** unless you're recovering your wallet on that specific wallet app.

**Never use wallets on rooted or jailbroken devices.** The security modifications that allow rooting also create vulnerabilities.

**Never skip updates.** Old versions have known vulnerabilities that attackers actively exploit.


## Connecting to Your Own Node

Here's something most beginners don't realize: when you use a software wallet, it needs to talk to the Bitcoin network somehow. By default, most wallets connect to servers run by the wallet developer or random public nodes scattered around the internet.

This works, but it comes at a cost. Every time your wallet checks your balance or broadcasts a transaction, the server on the other end learns something about you—your addresses, your transaction history, your balance, when you're online. You're trading privacy for convenience.

The solution is running your own Bitcoin node and connecting your wallet to it. Then those queries stay between you and your own infrastructure. It's like the difference between asking a stranger to check your bank balance versus checking it yourself.

<div class="fixed-width-table">

| Wallet | Node Connection |
|--------|-----------------|
| Sparrow | Built-in Electrum server support |
| Electrum | Electrum server connection |
| BlueWallet | Electrum server or Umbrel |
| Green | Personal Electrum server |

</div>

Don't worry if this sounds complicated right now. Running a node is a project for later, once you're comfortable with the basics. When you're ready, our [Bitcoin Node Guide](/docs/bitcoin-node) will walk you through it.


## When to Graduate to a Hardware Wallet

A software wallet is a fantastic starting point, but at some point, you'll feel the pull toward something more secure. Here are the signs you're ready to upgrade:

**Your Bitcoin holdings exceed a month's expenses.** When the amount at stake becomes meaningful, the inconvenience of a hardware wallet becomes worthwhile.

**You're holding for the long term.** If you're not planning to spend this Bitcoin anytime soon, it deserves better protection than a software wallet provides.

**You want peace of mind.** There's something deeply reassuring about knowing your keys are stored on a device that can't be hacked remotely. Once you experience that peace of mind, it's hard to go back.

**You're ready for more responsibility.** Hardware wallets require more care—maintaining the device, protecting additional backups, following proper security procedures. If that sounds appealing rather than annoying, you're ready.

A software wallet is a great learning tool and a perfectly reasonable choice for everyday spending money. But for significant savings—the Bitcoin you're holding for years or decades—a [hardware wallet](/docs/basics/wallets/hardware-wallets) is essential.


---

## Key Takeaways

Software wallets occupy an important place in your Bitcoin toolkit. They're your on-ramp to self-custody, your spending wallet, and your learning laboratory. Just remember their limitations:

- They're **convenient but less secure** than hardware alternatives
- Use them for **small amounts and daily spending**
- Your keys exist on an **internet-connected device**—that's an inherent risk
- **Never store more than you'd carry as cash** in your pocket
- When your holdings grow, **graduate to hardware wallets** for long-term savings

---

## Continue Learning

→ **Next:** [Hardware Wallets](/docs/basics/wallets/hardware-wallets) — For serious savings

→ **Setup Guide:** [Hardware Wallet Setup](/docs/hardware-wallet-setup) — Get started with hardware

→ **Privacy:** [Why Privacy Matters](/docs/basics/privacy/why-privacy-matters) — Understand the risks