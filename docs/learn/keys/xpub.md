---
sidebar_position: 4
title: "Extended Public Key (XPUB)"
description: "What a Bitcoin extended public key (xpub) is: it lets a watch-only wallet see every address and balance without spending, so it still needs protecting."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "extended", "public", "xpub"]
tags: ["private keys", "xpub", "bip39", "seed"]
---

# Extended public key (xpub)

An extended public key, or xpub, is the public counterpart of an extended private key: it generates every address in an account, in the same order, but cannot sign transactions. A wallet loaded with only the xpub shows the same addresses, balance and history as the real wallet and can produce new receive addresses, but cannot spend. That makes it safe for an online computer, and also sensitive: anyone with your xpub can see everything the account has ever done.

## What is a watch-only wallet?

A watch-only wallet is a wallet loaded with an xpub instead of private keys. You can run one on an everyday computer or phone to check your balance and generate receive addresses, while the private keys stay on a hardware wallet. Sparrow uses exactly this arrangement: it holds your hardware wallet's xpub and asks the device to sign.

| | Wallet from the xprv | Wallet from the xpub |
|---|---|---|
| Shows every address, in order | Yes | Yes |
| Shows balance and history | Yes | Yes |
| Generates new receive addresses | Yes | Yes |
| Can spend | Yes | No |

## Why should you keep your xpub private?

Anyone who has your xpub can see every address in the account, your current balance, your full transaction history and every future transaction. It is like handing someone your bank statements: they cannot take your money, but they know how much you have and where it goes. Share individual receive addresses, not the xpub, unless you are deliberately setting up a watch-only wallet or a multisig with someone you trust.

It also matters for safety. With ordinary (non-hardened) derivation, an xpub plus any single private key from the same account is enough to compute every private key in it; see [extended private keys](/docs/learn/keys/xprv/#can-one-leaked-private-key-expose-the-others).

## What does an xpub look like?

```text
xpub6CUtym4EsH2Ws4oWYVHiea5cUvgHZuULvMdEFwJoC22P984zee57gpM7v9AhiLh3mVS4Ai5YTYxGibMUpZpdmpkrVAGjT9ydvurTtFm5Azy
```

The prefix records the intended address type:

| Prefix | Address type | Addresses start with |
|---|---|---|
| `xpub` | Legacy (BIP44), and also used for Taproot (BIP86) | `1`, or `bc1p` for Taproot |
| `ypub` | Nested segwit (BIP49) | `3` |
| `zpub` | Native segwit (BIP84) | `bc1q` |
| `Ypub`, `Zpub` | Multisig, nested or native segwit | `3`, `bc1q` |
| `tpub` | Any type, on testnet | Testnet addresses |

Newer wallets increasingly show an output descriptor instead, which wraps the xpub with the script type and derivation path so that nothing has to be inferred from the prefix.
