---
sidebar_position: 1
title: "Nostr Signing Device (NSD)"
description: "Practical guide: Nostr Signing Device (NSD). Covers Why a NSD, NSD Setup Requirements, bitcoin."
keywords: ["bitcoin", "self custody", "security", "privacy", "nsd", "nostr", "signing", "device"]
slug: "/nostr-signing-device"
tags: ["nostr", "nsd", "signing device", "lilygo"]
---
# Nostr Signing Device (NSD)

The LNbits Nostr Signing Device (NSD) serves as a secure alternative to storing private keys on a computer. Your private key is stored on the NSD and signs nostr messages on the device. The NSD works with a Chrome based browser and the Horse extension.


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