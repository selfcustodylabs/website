---
sidebar_position: 0
sidebar_label: "Overview"
title: "Bitcoin Keys: Private Keys, Seeds, Derivation Paths"
description: "Learn how Bitcoin keys work: private keys, seed phrases (BIP39), extended keys (xpub/xprv), and derivation paths. The foundation of Bitcoin ownership."
keywords: ["bitcoin keys", "private key", "seed phrase", "BIP39", "xpub", "xprv", "derivation path", "bitcoin ownership", "self custody"]
tags: ["keys", "seed", "bitcoin", "fundamentals"]
slug: /learn/keys
date: "2026-01-16"
---

# Understanding Bitcoin keys

Owning bitcoin means controlling the private keys that can spend it: the network does not know your name, only whether a transaction is signed by the right key. In a modern wallet every key comes from one source, the seed phrase, which is turned into a master key and then, along a derivation path, into as many keys and addresses as the wallet needs. That is why the 12 or 24 words restore everything, why one backup covers unlimited addresses, and why anyone who sees them can take everything.

<div class="doc-diagram">

![The key hierarchy: entropy becomes a 24-word BIP39 seed phrase, which derives the master private key, which the derivation path expands into unlimited child keys and addresses; the seed at the root restores everything](/img/diagrams/keys/key-hierarchy.svg)

</div>

## What does this section cover?

The pages build from the simplest idea to the most technical; read them in order, or go straight to the one you need.

| Page | What it explains |
|---|---|
| [Private keys](/docs/learn/keys/intro/) | The random number that controls bitcoin, and how public keys and addresses come from it |
| [Seed phrases](/docs/learn/keys/seed/) | How that randomness becomes 12 or 24 words under the BIP39 standard, and why their order matters |
| [Extended private keys (xprv)](/docs/learn/keys/xprv/) | How one master key produces every key in the wallet |
| [Extended public keys (xpub)](/docs/learn/keys/xpub/) | Watch-only wallets: seeing every address and balance without being able to spend |
| [Derivation paths](/docs/learn/keys/derivation-path/) | The route from the master key to a particular address, and why it matters at recovery |
| [Passphrases](/docs/learn/keys/passphrase/) | An optional extra secret that turns the same seed phrase into a different wallet |
| [Seed generation with dice](/docs/learn/keys/random/) | Making the seed's randomness yourself, step by step |
| [Number systems](/docs/learn/keys/number-systems/) | Binary, decimal and hexadecimal, for the dice guide's arithmetic |

## Which principles matter most?

- **Keys are everything.** Your bitcoin is recorded on the blockchain; the private key is the only proof that you may move it. Without the key, there is no bitcoin.
- **The seed phrase is the key.** It is not a backup of your key but the same secret in another form: anyone who has it controls the bitcoin.
- **One seed, many keys.** A single seed phrase can produce billions of addresses, and the wallet uses a new one for each payment automatically.
- **Public is not harmless.** An extended public key (xpub) cannot spend, but it reveals every address and the whole transaction history of the account.

## How deep do you need to go?

| If you are | You need to know |
|---|---|
| Using a wallet | That the seed phrase is the bitcoin, that it restores the wallet anywhere, and how to back it up |
| Doing serious self-custody | Derivation paths (they matter at recovery), xpub versus xprv, and whether a passphrase suits you |
| Verifying everything yourself | How randomness affects security, how keys are derived, and how to generate and check a seed independently |
