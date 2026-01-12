---
sidebar_position: 2
title: "Requirements"
description: "Practical guide: Requirements. Covers Casino Dice, Airgapped computer, Paper & Pen."
keywords: ["bitcoin", "self custody", "security", "privacy", "seed", "requirements"]
tags: ["seed", "airgapped", "computer"]
---
# Requirements

To create your own DIY seed phrase securely, you'll need the following tools:


## Casino Dice

Casino-grade dice are essential for generating true randomness (entropy). While it's possible to use a single dice, the process would be extremely slow. To speed things up, it's recommended to use at least 5 or 10 dice, allowing you to roll fewer times while still ensuring a high level of randomness.
But it’s also okay to just save money and just use any old dice. Even if your dice are not perfect and have some bias, as long as you use several at a time, you will achieve sufficient randomness.

That said, you don’t need to spend extra money on special dice, any standard six-sided dice will work. Even if your dice have slight imperfections or biases, rolling several at once will balance out any inconsistencies and provide enough randomness for your needs

![Dice](/img/seed/dice.webp)


## Airgapped computer

An air-gapped computer is a device that has never been connected to the internet and is physically incapable of doing so. This is crucial for securely generating and storing private keys. Suitable options include:

- **Raspberry Pi Zero 1.3** – This model is highly recommended because it lacks built-in Wi-Fi and Bluetooth, reducing attack surfaces. However, it may be difficult to find.

![RPi Zero](/img/seed/rpizero.webp)

- **Laptop or PC** – This should be a computer where the Wi-Fi and Bluetooth modules have been physically removed, and the Ethernet port has been permanently disabled or damaged. This ensures that even if the computer is stolen, an attacker cannot extract the private key by connecting it to the internet.


##  Paper & Pen

You'll need a pen and paper to document the process of generating your seed phrase. However, this paper should only be used as a temporary record and must be destroyed (e.g., burned) after securely transferring the seed phrase to a more durable storage medium.


## Metal Seed Storage

Once your seed phrase has been created, it should be permanently stored on a fireproof, waterproof, and tamper-resistant metal seed storage device. This protects your seed phrase from physical threats such as fire, water damage, and deterioration over time.

By using these tools and following best security practices, you can ensure that your seed phrase remains secure, private, and resistant to theft or loss.

![Metalseed](/img/seed/metalseed.webp)