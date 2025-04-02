---
sidebar_position: 3
title: Seed Phrase
slug: /basics/seed-phrase
tags: [self custody, seed phrase]
---

# Seed Phrase

When it comes to securing your Bitcoin, the seed phrase is one of the most important tools you can use. But what exactly is a seed phrase, and why is it so essential for Bitcoin security?


## What is a Seed Phrase?

A seed phrase is a series of 12 or 24 words that act as a backup for your Bitcoin wallet's private key. It’s a human-readable way to store and recover your private key, which controls access to your Bitcoin. The seed phrase is generated when you create a Bitcoin wallet and can be used to restore your wallet if you lose your device or need to set it up again.


## How Does a Seed Phrase Work?

The seed phrase is based on the [BIP39 standard](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), which means that these 12 or 24 words are not random but follow a specific order and dictionary. These words are generated from a list of 2048 words, and as long as you have the correct set of words in the correct order, you can recreate your private key and access your funds.

Because the seed phrase is tied to your private key, whoever has access to it can control your Bitcoin. Therefore, keeping it secure is critical.


## Why is a Seed Phrase Important?

A seed phrase allows you to back up your Bitcoin wallet in a secure, easy-to-remember way. Instead of storing a long private key, you can simply write down the seed phrase on paper or store it in a secure digital form. If your device is lost, stolen, or damaged, you can restore your Bitcoin wallet by entering the seed phrase into a new wallet app or hardware wallet.

In a sense, your seed phrase becomes your wallet’s master key. It’s also far more practical to store 12 or 24 words than to store a complex, long private key.


## Create your Seed Phrase

If you feel to go deep down the Seed Phrase rabbit hole, I highly recommend to create your own seed phrase generating a true entropy

:::tip DIY Seed
This the guide [link](/docs/seed)
:::

Understanding how private keys are generated from your seed

:::tip Private Keys 
This the guide [link](/docs/private-keys)
:::