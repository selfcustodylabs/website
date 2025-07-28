---
sidebar_position: 5
title: Passphrase
slug: /basics/private-keys/passphrase
tags: [private keys, seed, passphrase]
---

# Passphrase

A passphrase is an additional security layer. Unlike your seed phrase (which consists of predefined words from the [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) word list), a passphrase can be any combination of characters.

Your wallet (collection of addresses) is derived from both the seed phrase and passphrase. Without the passphrase, an attacker who finds your seed will generate the wrong wallet. 

For example, if you use the seed with the passphrase `Martha`, the attacker will only see Wallet A (which has no funds) when accessing the seed without the passphrase. However, you store your Bitcoin in `Wallet B`, which is only accessible with the passphrase Martha.

![](/img/basics/passphrase.png)

You can also use `Wallet A` without a passphrase as a **decoy wallet**, storing a small amount of Bitcoin in it. If you're ever forced to reveal your wallet under pressure, you can show this decoy without exposing your main holdings. And remember, never share the full extent of your Bitcoin holdings with anyone, even those you trust, as accidental leaks can make you a target.


## Risks of Using a Passphrase

Adding a passphrase to your seed offers strong security benefits, especially if you're storing a significant amount of Bitcoin. However, it also comes with risk

- **Risk of Losing Access** – If you forget or mistype your passphrase, there’s no way to recover it, and you’ll lose access to your funds.
- **More Complexity** – Managing and securely storing an extra secret can be tricky, increasing the chance of mistakes.
- **Potential for Mistakes** – Even a small typo creates an entirely new wallet, making it easy to lock yourself out.
- **Not All Wallets Support It** – Some hardware and software wallets don’t support passphrases, limiting compatibility.
- **Social Engineering Risk** – If someone knows you use a passphrase, they may assume you have hidden funds and pressure you to reveal them.


## Create your Passphrase

If you aim to use a passphrase for your Bitcoin seed phrase, I highly recommend to create your own one generating a true entropy

:::tip DIY Passphrase
This the guide [link](/docs/passphrase)
:::