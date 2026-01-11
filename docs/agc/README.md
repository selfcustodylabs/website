---
sidebar_position: 1
title: "AGC Basics"
description: "Practical guide: AGC Basics. Covers Why you Need an AGC, Why an AGC is better than a SeedSigner, bitcoin."
keywords: ["bitcoin", "self custody", "security", "privacy", "agc", "basics", "air-gapped", "offline signing", "cold storage"]
slug: "/air-gapped-computer"
tags: ["air-gapped", "computer", "AGC", "seedsigner", "seed", "wallet"]
---
# Air-Gapped Computer (AGC)

Let’s get straight to the point:

:::tip
You absolutely need an Air-Gapped Computer!
:::

As explained in the [air‑gapped wallet](/docs/basics/wallets/air-gapped-wallets) section, having an air‑gapped setup is crucial because it takes security to the next level. The device that holds your private keys is physically isolated from the internet and any other network, which means it cannot be accessed or attacked remotely.

To achieve this, key components such as Wi‑Fi and Bluetooth are physically removed. Ideally, the Ethernet port should also be disabled or permanently damaged, so that even if someone steals the device, they cannot connect it to the internet.


This is the highest level of self custody security. althought this is not a setup recommended for the regular user.



## Why you Need an AGC

- **To create your own seed** ([see my guide here](/docs/seed)) – An air-gapped computer (AGC) lets you securely generate Bitcoin seeds **from true randomness**, like dice rolls. The randomness comes from the dice rolls, not from the laptop itself. The AGC's role is to help you convert that randomness into the correct BIP39 words, ensuring your seed is created securely offline.
- **To verify your hardware wallet** (HWW) – When your HWW generates a private key, how do you know it’s truly random? You’re trusting the device. A compromised HWW could show fake addresses, even with a real seed. To verify, you’d need to input the seed into other software, like Electrum or Ian Coleman’s BIP39 tool, and compare the generated addresses.
- **To sign transactions** – An AGC allows you to sign Bitcoin transactions offline, keeping your private keys completely isolated from the internet.  Essentially, it acts as a hardware wallet, but with enhanced security.
- **For Inheritance** – You may want to write an encrypted message for your heirs using GPG with a password. Store it on one or more mediums, with clear instructions not to open the file unless it’s on an AGC computer.

Now that you understand what an AGC is and why you need one, let's explore the options that best suit your needs.


## Why an AGC is better than a SeedSigner

An AGC provides several advantages over a SeedSigner, making it a more versatile and secure choice for managing Bitcoin keys. Here’s why:

- **Better Encryption Support** – Unlike SeedSigner, which is stateless and requires storing keys on paper or metal plate (unencrypted), an AGC allows you to store wallet backups in encrypted files, adding an extra layer of security.
- **Multiple Wallet Verification** – With an AGC you can generate wallets using multiple open-source wallets and cross-check the results. This ensures the wallet derivation is correct without having to trust a single software, reducing the need for manual code verification.
- **Improved User Experience** – While SeedSigner relies on a small screen and a camera for QR codes, an AGC offers a full keyboard, larger display, and better input methods, making it easier to use for tasks like signing transactions, verifying addresses, or managing wallets.
- **Greater Discretion** – A SeedSigner is a known Bitcoin device and could attract attention if discovered. In contrast, an AGC looks like an ordinary computer, making it far less suspicious and more discreet in various environments.
- **More Functionality** – Beyond signing transactions, an AGC can handle other Bitcoin-related tasks, such as encrypting and decrypting messages, securely storing additional sensitive information, or running advanced scripts. This makes it a more powerful tool compared to a SeedSigner, which is limited in scope.

While SeedSigner is a great option for certain use cases, an AGC offers better encryption, more verification options, an easier interface, greater privacy, and expanded functionalit, making it the superior choice for Bitcoin self-custody.