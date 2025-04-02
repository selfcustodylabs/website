---
sidebar_position: 1
title: Introduction
slug: /basics/private-keys/intro
tags: [private keys]
---

# Private Keys

One of the key components in the Self custody world is the private key. But what exactly is a private key, and why is it so important?

![](/img/basics/diagram.png)


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