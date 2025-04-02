---
sidebar_position: 7
title: Extended Public Key (XPUB)
slug: /basics/private-keys/xpub
tags: [private keys, xpub, bip39, seed]
---

# Extended Public Key (XPUB)

![](/img/basics/diagram.png)

The purpose of the extended public key (xpub) might not be immediately obvious. Looking at the bottom section of the diagram, you’ll see that possessing the extended public key allows wallet software to generate **all** the same Bitcoin addresses as the extended private key—**in the same order**. This means the wallet will look identical in terms of addresses and transaction history. But what’s the key difference?

- A wallet created with the **extended private key** has the power to **spend** Bitcoin.
- A wallet created with the **extended public key** can **only view** transactions and addresses—it **cannot spend** Bitcoin.

:::tip Watch only Wallet
This type of public-key-only wallet is often called a **watch-only wallet**. You can safely use it on an insecure or internet-connected computer without risking your private keys. It allows you to monitor your balance and generate addresses to receive payments.
:::


## Security Considerations

Even though an extended public key cannot be used to spend Bitcoin, you should still **protect it**. Anyone who has access to your xpub can:
- View your entire transaction history.
- See your current Bitcoin balance.
- Track your future transactions.

It’s similar to handing someone your **bank statement**—they can’t take your money, but they can see how much you have and where it moves. To maintain financial privacy, **keep your xpub secure** and only share individual addresses when necessary.


## Identifying Extended Public Keys

Extended public keys look like this:

```text
xpub6CUtym4EsH2Ws4oWYVHiea5cUvgHZuULvMdEFwJoC22P984zee57gpM7v9AhiLh3mVS4Ai5YTYxGibMUpZpdmpkrVAGjT9ydvurTtFm5Azy
```

Instead of starting with **“xprv”**, extended public keys start with:
- **“xpub”** for legacy (P2PKH) wallets
- **“ypub”** for P2SH (Pay-to-Script-Hash) wallets
- **“zpub”** for native SegWit (Bech32) wallets
- **“Xpub”**, **“Ypub”**, and **“Zpub”** for multisignature wallets (uppercase letters indicate multisig setups)


## Final Thoughts

Guard your **financial privacy** carefully, and protect your **Bitcoin private keys** even more. While an xpub alone cannot spend funds, it still reveals sensitive information about your wallet’s activity, so treat it with care.