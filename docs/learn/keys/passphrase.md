---
sidebar_position: 5
title: "Bitcoin Passphrase (25th Word) Explained"
description: "Add extra security to your Bitcoin seed with a passphrase. Understand how the 25th word creates hidden wallets and protects against theft."
keywords: ["bitcoin passphrase", "25th word", "hidden wallet", "seed security", "plausible deniability"]
tags: ["passphrase", "seed", "security"]
---
# Passphrase

A passphrase is an additional security layer. Unlike your seed phrase (which consists of predefined words from the [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) word list), a passphrase can be any combination of characters.

Your wallet (collection of addresses) is derived from both the seed phrase and passphrase. Without the passphrase, an attacker who finds your seed will generate the wrong wallet. 

For example, if you use the seed with the passphrase `Martha`, the attacker will only see Wallet A (which has no funds) when accessing the seed without the passphrase. However, you store your Bitcoin in `Wallet B`, which is only accessible with the passphrase Martha.

![Passphrase](/img/basics/passphrase.webp)

You can also use `Wallet A` without a passphrase as a **decoy wallet**, storing a small amount of Bitcoin in it. If you're ever forced to reveal your wallet under pressure, you can show this decoy without exposing your main holdings. And remember, never share the full extent of your Bitcoin holdings with anyone, even those you trust, as accidental leaks can make you a target.


## Risks of Using a Passphrase

Adding a passphrase to your seed offers strong security benefits, especially if you're storing a significant amount of Bitcoin. However, it also comes with risk

- **Risk of Losing Access** – If you forget or mistype your passphrase, there’s no way to recover it, and you’ll lose access to your funds.
- **More Complexity** – Managing and securely storing an extra secret can be tricky, increasing the chance of mistakes.
- **Potential for Mistakes** – Even a small typo creates an entirely new wallet, making it easy to lock yourself out.
- **Not All Wallets Support It** – Some hardware and software wallets don’t support passphrases, limiting compatibility.
- **Social Engineering Risk** – If someone knows you use a passphrase, they may assume you have hidden funds and pressure you to reveal them.


## Ready to Create Your Own Passphrase?

If you decide a passphrase is right for your security setup, don't just pick random words from your head—human-generated "randomness" is predictable and weak.

:::tip Next Step: DIY Passphrase Generation
Create a cryptographically strong passphrase using dice rolls and the EFF word list in our **[DIY Passphrase Guide](/docs/security/passphrase)**. True randomness means true security.
:::