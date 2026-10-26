---
sidebar_position: 5
title: "Choose Your Self-Custody Setup"
description: "Which Bitcoin self-custody setup fits what you hold: four tiers from a phone wallet to multisig, with the hardware, cost and effort each tier takes."
keywords: ["bitcoin wallet choice", "self custody setup", "hardware wallet comparison", "bitcoin security decision"]
tags: ["getting started", "wallet", "decision", "setup"]
slug: /learn/fundamentals/choosing-your-path
date: "2026-01-15"
---

import SetupChooser from "@site/src/components/SetupChooser";

# Choose your self-custody setup

Choose the setup by how much bitcoin you hold now and expect to hold in the next year or two. Under about $1,000, a free wallet app on your phone is enough while you learn. From $1,000, use a hardware wallet with a metal backup. From $10,000, add a seed made with dice, a passphrase and your own node. Above $100,000, move to multisig, with keys on devices from different makers kept in different places. If you are unsure, the hardware wallet setup is right for most people, and the choice between reputable devices matters far less than getting off the exchange.

<div class="fixed-width-table">

| Tier | Holdings | Core setup | Hardware cost (October 2026) |
|------|----------|-----------|------------------|
| Starter | Under $1,000 | Phone wallet app | Free |
| Standard | $1,000 to $10,000 | Hardware wallet and metal backup | About $80 to $200 |
| Enhanced | $10,000 to $100,000 | Standard, plus a dice-generated seed, a passphrase and your own node | About $300 to $500 |
| Maximum | Over $100,000 | Multisig across devices from different vendors, in different places | $500 or more |

</div>

The bands are the same as on [assess your threat model](/docs/learn/fundamentals/threat-models/), which also covers the factors that move you up a tier regardless of amount: being publicly known to hold bitcoin, living under capital controls or an unstable government, or facing someone who has singled you out. Your technical comfort matters less than you might expect. If you are new, start at a lower tier and move up; most of these setups take a weekend of careful work, and testing each step is worth the extra time.

<SetupChooser />

## What is the starter setup, for under $1,000?

The starter setup is a wallet app on your phone, a paper copy of its seed phrase and the public servers the app uses by default. It is for learning with small amounts: moving bitcoin around is the fastest way to understand how wallets, addresses and backups behave, and a mistake at this size will not hurt.

Two free, bitcoin-focused apps that suit it are [BlueWallet](https://bluewallet.io/) and [Muun](https://muun.com/). Running your own node at this stage adds work without much benefit.

| Strengths | Limits |
|---|---|
| Free, and running in about ten minutes | The keys live on an internet-connected phone |
| Mistakes cost little | The public servers the app talks to can see your balance and addresses |
| Teaches the real mechanics | Not built to hold savings |

To set it up:

1. Install the app from the official app store listing, checking the developer's name.
2. Create a new wallet inside the app.
3. Write the seed phrase on paper, carefully, and store it somewhere only you can reach.
4. Send a small amount from an exchange and check it arrives.

Move to the standard setup once the balance passes about $1,000, or sooner if you want better security. [Software wallets](/docs/learn/wallets/software-wallets/) covers the category in more detail.

## What is the standard setup, for $1,000 to $10,000?

The standard setup is a hardware wallet, a metal copy of its seed phrase and a desktop app to drive it. A hardware wallet is a small device that keeps the private keys offline and signs transactions on the device itself, so malware on your computer cannot reach the keys or change a payment without the device's screen showing it.

Any of the devices the [comparison](/docs/reference/hardware-wallet-comparison/) recommends works at this tier. As of October 2026 they cost from $79 (Blockstream Jade) to $249 (Trezor Safe 7), and a steel backup plate adds $20 to $50 so that the seed phrase survives a fire or flood. [Sparrow Wallet](https://sparrowwallet.com/), free, runs the device from a computer; it can start on Sparrow's default public servers, and your own node can come later, because the hardware wallet does the security work either way.

| Strengths | Limits |
|---|---|
| Keys never leave the device | Costs the price of the device and plate |
| Every payment is checked on a screen you control | A short learning curve |
| Malware on the computer cannot sign anything | One device and one seed phrase are still a single point of failure |

To set it up:

1. Buy the device from the manufacturer's own store, not a marketplace, because tampered devices are sold.
2. Follow the [hardware wallet setup guide](/docs/wallet-setup/hardware-wallet/).
3. Copy the seed phrase onto the metal plate.
4. Test the backup with [backup verification](/docs/wallet-setup/backup-verification/).
5. Run the [before you deposit checklist](/docs/wallet-setup/before-you-deposit/) before moving a serious amount.

## What is the enhanced setup, for $10,000 to $100,000?

The enhanced setup is the standard setup plus three things: a seed made from your own dice rolls, a passphrase, and your own node. At this amount the work pays for itself in privacy and in a second secret protecting the seed phrase.

The seed comes from [dice rolls](/docs/learn/keys/random/) rather than the device's random number generator alone; the [2026 Coldcard incident](/docs/learn/wallets/coldcard-entropy-incident/) showed what trusting a device's randomness can cost. A [passphrase](/docs/learn/keys/passphrase/), sometimes called the "25th word", makes the seed phrase a two-part secret: whoever finds the words still cannot spend without the passphrase, which is stored separately. Your [own node](/docs/bitcoin-node/), on a small dedicated computer (about $100 to $300 with a disk), answers your wallet's questions instead of a public server that could log them. And [UTXO management](/docs/learn/privacy/utxo-management/) lets you choose which coins each payment spends.

A device with a camera for QR codes, such as the Jade Plus ($149), suits this tier; any recommended device works.

| Strengths | Limits |
|---|---|
| Two separate secrets protect the keys | The passphrase is a second thing you can lose |
| Wallet queries go to your own node | The node is hardware you have to keep running |
| You check every rule of the network yourself | Coin control takes time to learn |

To set it up:

1. Complete the standard setup first, if you have not.
2. Make the seed with the [dice guide](/docs/learn/keys/random/).
3. Add a passphrase with the [passphrase guide](/docs/learn/keys/passphrase/).
4. Set up a node with the [node guide](/docs/bitcoin-node/) and connect Sparrow to it.
5. Learn [UTXO management](/docs/learn/privacy/utxo-management/), and read [why privacy matters](/docs/learn/privacy/why-privacy-matters/) for the threats this setup is built against.

## What is the maximum setup, for over $100,000?

The maximum setup is multisig: a wallet that needs several independent keys to spend, typically any two of three (2-of-3), or three of five for larger holdings. It suits large amounts, public figures, anyone worried about their government and families planning to pass bitcoin on.

The parts are hardware wallets from different manufacturers, so one vendor's flaw cannot take everything; a metal backup of each seed phrase and copies of the wallet descriptor, the file that tells software how the multisig is built; and all of it spread across locations, so one fire, flood or burglary cannot reach every key. The node runs over [Tor](/docs/bitcoin-node/tor/), the most sensitive signing happens on an [air-gapped computer](/docs/learn/wallets/air-gapped-wallets/), and [CoinJoin](/docs/learn/privacy/coinjoin/) is part of the routine if privacy is part of your threat model. Expect $250 to $750 for the devices, $100 to $200 for backups and $100 to $300 for the node. Multisig transactions are larger on chain, so fees are somewhat higher.

| Strengths | Limits |
|---|---|
| A stolen device does not lose the coins | Every spend needs coordination between keys |
| A lost backup does not lose the coins | Recovery needs the descriptor as well as the seed phrases |
| One manufacturer's flaw does not lose the coins | You have to understand it, not only follow a checklist |

To set it up:

1. Be fully comfortable with the standard setup first; an advanced setup you do not understand is a risk.
2. Read [multisig explained](/docs/learn/wallets/multisig/), then follow the [Sparrow multisig setup](/docs/learn/wallets/multisig/sparrow-setup/).
3. Plan where each key and backup will live before you fund the wallet.
4. Consider an [air-gapped computer](/docs/learn/wallets/air-gapped-wallets/) for signing and [CoinJoin](/docs/learn/privacy/coinjoin/) for privacy.

Collaborative custody services such as Unchained and Casa hold one key of a multisig for you and help with recovery. Sharing the work with a professional this way is a legitimate choice, not a failure.

## Which hardware wallet should you buy?

For a first device, the BitBox02 Nova (Bitcoin-only edition) or the Trezor Safe 5 is the easiest to use safely. For the strongest practical security, a Jade Plus with a [dice-generated seed](/docs/learn/keys/random/). To verify as much as possible yourself, the Trezor Safe 7 or a [SeedSigner](/docs/seedsigner/) you build. Coldcard is not on the list: after the [2026 entropy incident](/docs/learn/wallets/coldcard-entropy-incident/) we no longer recommend it for new purchases. The [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) has prices, features and the reasoning for each device, and [hardware wallets explained](/docs/learn/wallets/hardware-wallets/) covers how the category works.

## Common questions

### Can you use more than one setup at once?

Yes, and many people do. A common pattern is a phone wallet for spending money and a hardware wallet for savings, which gives convenience where it is needed and security where it matters.

### Should you wait for a better wallet to come out?

No. Secure your bitcoin now with the best setup you can run today. Waiting leaves the coins exposed to exchange risk, and moving to a newer device later only takes a transaction to a fresh wallet.

### Is a wallet you have heard of safe?

The devices on the [comparison page](/docs/reference/hardware-wallet-comparison/) are reputable, with the warnings it states. Among them, what decides your safety is whether you set the device up correctly and tested the backup, not which brand you chose.

### What about paper wallets?

We do not recommend them. A paper wallet, a single private key printed on paper, was an early answer to self-custody, but it adds more ways to fail than it removes: the key is exposed on the computer that generates it, spending part of the balance sends the change to an address the paper does not cover, and paper degrades. Hardware wallets have replaced them for every practical purpose.
