---
sidebar_position: 1
title: "Software Wallets Explained"
description: "Understand software wallets for Bitcoin: what they are, when to use them, recommended options, and security best practices."
keywords: ["bitcoin", "self custody", "security", "privacy", "software wallet", "hot wallet", "mobile wallet", "desktop wallet"]
tags: ["bitcoin", "software", "wallet", "hot wallet"]
---

# Software wallets

A software wallet is an app on your phone or computer that creates your bitcoin keys, stores them on that device and signs transactions with them. It is free and convenient, which makes it the right tool for learning and for spending money, but the keys sit on an internet-connected device that also runs a browser, email and other apps, so malware or a fake app can reach them. Keep in a software wallet only what you would carry as cash, about $100 to $1,000, and move savings to a [hardware wallet](/docs/learn/wallets/hardware-wallets/).

## How does a software wallet work?

The app generates a seed phrase (the 12 or 24 words you back up), derives your private keys from it and stores them on the device. To send bitcoin, it signs the transaction with those keys and broadcasts it. Because the keys live on a connected device, software wallets are also called hot wallets.

<div class="doc-diagram">

![A software wallet stores the private key and signs transactions on the same online phone or computer that runs the browser and apps, then broadcasts to the network; convenient for spending, the wrong place for savings](/img/diagrams/wallets/software-wallet-flow.svg)

</div>

## When is a software wallet the right choice?

<div class="fixed-width-table">

| Use | Why a software wallet suits it |
|----------|---------------------------|
| Learning bitcoin | Free, and mistakes with $50 teach as much as mistakes with $50,000 |
| Small amounts | An acceptable risk for pocket money |
| Everyday spending | Quick to open and pay from |
| Receiving payments | A new address is always to hand |
| Lightning payments | Most self-custodial Lightning wallets are phone apps |

</div>

Treat it like the cash in your pocket: carrying $100 makes sense, carrying $10,000 does not.

## What are the risks?

A phone or computer runs dozens of apps, visits countless websites and opens files from anywhere, and each of those is a way in. The main threats are:

- Malware that logs keystrokes, records the screen, reads the wallet's storage, or swaps a bitcoin address you have copied for the attacker's.
- Fake wallet apps with the right name and logo, which send the seed phrase to the attacker the moment it is created; the bitcoin vanishes weeks later, after the victim has deposited more.
- Phishing sites and messages that ask you to "verify" or "restore" your seed phrase.
- Theft of an unlocked phone.
- Bugs in the wallet app or the operating system.

:::warning Keep only spending money in a software wallet
Never hold more in a software wallet than you would be willing to carry as cash. For most people that is between $100 and $1,000, not savings.
:::

## Which software wallets do we recommend?

### Phone wallets

<div class="fixed-width-table">

| Wallet | Platform | Suits | Notes |
|--------|----------|----------|--------------|
| BlueWallet | iOS, Android | Beginners | Simple; works with hardware wallets and watch-only wallets. Its hosted Lightning service closed in 2023 |
| Nunchuk | iOS, Android | Security-minded users | Multisig, and hardware wallet support |
| Blockstream app (formerly Green) | iOS, Android | Privacy | Tor support, optional two-factor multisig, Liquid |
| Phoenix | iOS, Android | Lightning | Self-custodial Lightning with a simple interface; withdrawn from US app stores in May 2024 |
| Muun | iOS, Android | One balance | Combines on-chain bitcoin and Lightning |

</div>

For a first phone wallet, BlueWallet balances simplicity and capability; Nunchuk is the step up when you want multisig or hardware wallet support.

### Desktop wallets

<div class="fixed-width-table">

| Wallet | Platform | Suits | Notes |
|--------|----------|----------|--------------|
| [Sparrow](https://sparrowwallet.com/) | Windows, macOS, Linux | Everyone, beginners to experts | Coin control, connects to your own node, works with every major hardware wallet |
| Electrum | Windows, macOS, Linux | Technical users | The longest track record of any desktop wallet |
| Wasabi | Windows, macOS, Linux | Privacy | Built-in CoinJoin through independent coordinators, Tor by default |

</div>

We recommend Sparrow. Its interface shows what each transaction actually does, which makes it a good teacher, and it grows with you to hardware wallets, your own node and multisig. For CoinJoin we recommend [JoinMarket with Jam](/docs/learn/privacy/coinjoin-tutorial/) rather than Wasabi; the [CoinJoin page](/docs/learn/privacy/coinjoin/) explains why.

## How do you set up a software wallet safely?

1. Download from the official source only: the app store listing published by the developer, or links on the developer's own website. Fake apps copy names and logos. If the developer publishes signatures or checksums for desktop downloads, check them.
2. Create a new wallet and write the seed phrase on paper as it appears, in order. Never screenshot it, copy and paste it, or type it anywhere except the wallet itself.
3. Store the paper away from the device, so one theft does not take both, and consider a [metal backup](/docs/learn/keys/random/#step-6-back-up-on-metal) for the long term.
4. Set a PIN or password you use nowhere else.
5. Send a small test amount in, then a little back out, before trusting the wallet with more.

## What habits keep a software wallet safe?

- Keep the app and the operating system updated; old versions have known holes.
- Use the simplest wallet that does what you need, since more features mean more code.
- Turn on every protection the app offers: PIN, biometrics, two-factor where available.
- Check the first and last several characters of every address before sending, because clipboard malware swaps addresses.
- Never use a wallet on a rooted or jailbroken phone, and never enter the seed phrase on a computer except when restoring into that same wallet app.

## Should a software wallet use your own node?

By default most wallets ask servers run by the wallet's developer, or public servers, for your balance and history, and each query tells that server your addresses, balance and when you are online. Connecting the wallet to your own node keeps those queries on your own hardware.

<div class="fixed-width-table">

| Wallet | How it connects to your node |
|--------|-----------------|
| Sparrow | Your own Electrum server, or Bitcoin Core directly |
| Electrum | Your own Electrum server |
| BlueWallet | Your own Electrum server |
| Blockstream app | Your own Electrum server |

</div>

Running a node is a project for later; the [node guide](/docs/bitcoin-node/) covers it.

## When should you move to a hardware wallet?

Move to a [hardware wallet](/docs/learn/wallets/hardware-wallets/) when the balance is more than you would carry as cash, roughly a month's expenses or over $1,000, or when you are holding for the long term rather than spending. A hardware wallet asks a little more care (a device to look after, a backup to protect), and in return no malware on your phone or computer can reach the keys. Keep the software wallet as the spending wallet alongside it.
