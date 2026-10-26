---
sidebar_position: 1
title: "Build a Nostr Signing Device (NSD)"
description: "Build your own Nostr Signing Device to keep your private key secure. Hardware-based signing for Nostr using LILYGO T-Display and Horse extension."
keywords: ["nostr signing device", "NSD", "LILYGO", "hardware signer", "nostr security", "Horse extension"]
tags: ["nostr", "signing device", "hardware", "security"]
guide:
  time: "1-2 hours"
  level: "Intermediate"
  cost: "$10-15 (LILYGO T-Display)"
  needs: "LILYGO T-Display, USB cable, Chrome-based browser"
---

# Nostr signing device (NSD)

A Nostr signing device is a small piece of hardware, here a LILYGO T-Display board running LNbits' open-source firmware, that holds your Nostr private key and signs your posts itself, so the key never sits in a browser or app where malware could copy it. A browser extension called Horse passes signing requests from a Nostr client to the device. It applies the rule this site teaches for bitcoin keys (keep them offline and isolated) to your Nostr identity, and it is a bonus project: an hour or two and about $15 of parts.

<GuideFacts />

## Why use a hardware signing device for Nostr?

<div class="fixed-width-table">

| Without a signing device | With one |
|-------------|----------|
| The private key is stored in a browser or app | The private key is stored on the device |
| Exposed to malware and keyloggers | Out of reach of the computer |
| Can be copied | Never leaves the device |

</div>

## How does it work?

<div class="doc-diagram">

![The NSD chain: the T-Display device holds the Nostr key and signs, the Horse browser extension bridges it to the browser, and the Nostr client only ever sees signatures, never the key](/img/diagrams/nostr-signing-device/nsd-chain.svg)

</div>

The LILYGO T-Display is the signing hardware, the Horse extension connects it to the browser, and the Nostr client (Coracle, for example) is where you read and post. The client only ever sees signatures.

## What do you need?

<div class="fixed-width-table">

| Part | What it is for | Where to get it |
|-----------|-------------|--------|
| LILYGO T-Display 1.14 | The signing hardware | [AliExpress](https://www.aliexpress.com/item/33048962331.html) |
| USB cable | Connecting and flashing the board | Usually included |
| Arduino IDE | Building and uploading the firmware | Free download |
| Horse extension | The bridge between the browser and the device | Built from source, for Chromium |

</div>

## What are the steps?

| Step | Page |
|---|---|
| 1 | [Install the Arduino IDE](/docs/nostr-signing-device/arduino-ide/) |
| 2 | [Add ESP32 board support](/docs/nostr-signing-device/esp32-module/) |
| 3 | [Flash the signing device firmware](/docs/nostr-signing-device/setup/) |
| 4 | [Build the Horse extension](/docs/nostr-signing-device/horse-extension/) |
| 5 | [Connect to a Nostr client](/docs/nostr-signing-device/client-connect/) |
