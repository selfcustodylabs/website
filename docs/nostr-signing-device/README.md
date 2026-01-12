---
sidebar_position: 1
title: "Build a Nostr Signing Device (NSD)"
description: "Build your own Nostr Signing Device to keep your private key secure. Hardware-based signing for Nostr using LILYGO T-Display and Horse extension."
keywords: ["nostr signing device", "NSD", "LILYGO", "hardware signer", "nostr security", "Horse extension"]
tags: ["nostr", "signing device", "hardware", "security"]
---
# Nostr Signing Device (NSD)

:::note Bonus Project
This guide is a bonus project for Bitcoiners interested in Nostr. The same security principles that apply to Bitcoin private keys—keeping them offline and isolated—apply to your Nostr identity. Building an NSD teaches hardware signing concepts that transfer directly to Bitcoin security.
:::

The LNbits Nostr Signing Device (NSD) serves as a secure alternative to storing private keys on a computer. Your private key is stored on the NSD and signs nostr messages on the device. The NSD works with a Chrome based browser and the Horse extension.

:::info What You'll Learn
In this guide, you will:
- Set up Arduino IDE for ESP32 development
- Flash firmware to a LILYGO T-Display
- Install the Horse browser extension
- Connect to Nostr clients securely

**⏱️ Time required:** 1-2 hours  
**📊 Difficulty:** Intermediate  
**🔧 Prerequisites:** LILYGO T-Display, USB cable, Chrome-based browser
:::


## Why a NSD

A Nostr Signing Device (NSD) enhances security by keeping your private key isolated from your computer, reducing the risk of exposure to malware or keyloggers. Instead of storing your private key in a browser extension or software wallet, the NSD signs messages directly on the device, ensuring that sensitive cryptographic operations never leave the secure environment. This approach adds an extra layer of protection for your Nostr identity while maintaining ease of use through seamless integration with Chrome-based browsers and the Horse extension.


## NSD Setup Requirements

Here's a quick overview of how everything connects:

`NSD → Horse Browser Extension → Nostr Client`

You will need:

- **LILYGO® TTGO T-Display 1.14**: This is the physical device that will act as your NSD. You can get it on AliExpress [here](https://www.aliexpress.com/item/33048962331.html?spm=a2g0o.order_list.order_list_main.5.3d471802y3Drvt).
- **Arduino IDE**: You’ll use this to build and upload the NSD firmware to the device.
- **Horse Extension**: A Chromium-only browser extension that connects your NSD to your Nostr client. It ensures your private key (`nsec...`) stays secure and never leaves the device.
- **A Nostr client**: This is the software you’ll use to interact with the Nostr network. In this guide, we’ll be using [Coracle](https://coracle.social/) as an example.

Let’s now proceed with the setup.