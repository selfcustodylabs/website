---
sidebar_position: 1
title: "Introduction"
description: "Practical guide: Introduction. Covers What is a Private Key?, How Does a Private Key Work?, Storing Private Keys – A Challenge."
keywords: ["bitcoin", "self custody", "security", "privacy", "basics", "introduction"]
slug: "/basics/private-keys/intro"
tags: ["private keys"]
---
# Private Keys

:::warning
Private keys are essential because they give you full control over your funds, and losing or exposing them can result in loss of access or theft. I recommend following this section step by step, as it's a foundational concept, and doing so will give you a much clearer understanding.
:::

Now, take a look at this image before and while you read each section.

![Diagram](/img/basics/diagram.png)


## What is a Private Key?

A private key is a secret code that allows you to access and control the Bitcoin stored in a specific address. Bitcoin addresses have two keys:

- **Public Key:** This is like your bank account number, shared openly to receive Bitcoin.
- **Private Key:** This is the secret counterpart. It acts like a password to access and spend your Bitcoin.

Your private key proves ownership of your funds. If you lose it, you lose access to your Bitcoin, so it's critical to keep it safe and secure.


## How Does a Private Key Work?

The private key signs transactions, confirming your ownership of the Bitcoin you're trying to spend. The public key is derived from the private key, but it’s virtually impossible to reverse-engineer, ensuring your private key stays secret.


## Storing Private Keys – A Challenge

Storing private keys securely is tricky. If stored online, they can be stolen. If kept offline, they could be lost or damaged. This is why managing private keys can be difficult for many users.

This is where the Seed Phrase comes in. We'll explore this in more detail, starting with the private key and gradually working our way through how the seed phrase helps improve security.