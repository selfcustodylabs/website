# Build a Nostr Signing Device (NSD)

> Build your own Nostr Signing Device to keep your private key secure. Hardware-based signing for Nostr using LILYGO T-Display and Horse extension.

Source: https://selfcustodylabs.com/docs/nostr-signing-device/
Last updated: 2026-08-23
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

**Note: Bonus Project**
This guide is a bonus project for Bitcoiners interested in Nostr. The same security principles that apply to Bitcoin private keys - keeping them offline and isolated - apply to your Nostr identity.

**Info: What You'll Do**
In this guide, you will:
- Set up Arduino IDE for ESP32 development
- Flash firmware to a LILYGO T-Display
- Install the Horse browser extension
- Connect to Nostr clients securely

**Time required:** 1-2 hours  
**Difficulty:** Intermediate  
**Estimated cost:** $10-15 (LILYGO T-Display)  
**Prerequisites:** LILYGO T-Display, USB cable, Chrome-based browser

## Why Use a Hardware Signing Device?

A Nostr Signing Device (NSD) keeps your private key isolated from your computer:

<div class="fixed-width-table">

| Without NSD | With NSD |
|-------------|----------|
| Private key stored in browser/software | Private key stored on hardware device |
| Exposed to malware, keyloggers | Isolated from computer threats |
| Key could be extracted | Key never leaves device |

The NSD signs messages directly on the device - your private key never touches your computer.

</div>

## How It Works

<div class="doc-diagram">

![The NSD chain: the T-Display device holds the Nostr key and signs, the Horse browser extension bridges it to the browser, and the Nostr client only ever sees signatures, never the key](https://selfcustodylabs.com/img/diagrams/nostr-signing-device/nsd-chain.svg)

</div>

**Components:**
- **LILYGO T-Display** - The physical signing device
- **Horse Extension** - Browser extension that connects NSD to clients
- **Nostr Client** - Where you interact with Nostr (e.g., Coracle)

## What You'll Need

<div class="fixed-width-table">

| Component | Description | Source |
|-----------|-------------|--------|
| LILYGO T-Display 1.14 | The signing hardware | [AliExpress](https://www.aliexpress.com/item/33048962331.html) |
| USB Cable | To connect and flash | Usually included |
| Arduino IDE | To build and upload firmware | Free download |
| Horse Extension | Browser bridge | Chrome Web Store |

</div>

Let's proceed with the setup.
