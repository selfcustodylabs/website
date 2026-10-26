---
sidebar_position: 3
title: "Air-Gapped Wallets: Complete Guide"
description: "Understand and build a Bitcoin air-gapped wallet. Concepts, hardware options (laptop, Raspberry Pi, desktop), and a full step-by-step air-gapped computer setup."
keywords: ["bitcoin", "self custody", "security", "privacy", "air-gapped", "air-gapped computer", "offline signing", "cold storage", "AGC", "libreboot"]
tags: ["bitcoin", "air-gapped", "wallet", "advanced"]
slug: /learn/wallets/air-gapped-wallets
---

# Air-gapped wallets

An air-gapped wallet keeps its private keys on a device that is physically unable to connect to the internet or any other network: no Wi-Fi, no Bluetooth, no Ethernet, no cable to an online computer. Transactions cross the gap as QR codes or files on an SD card, prepared by a watch-only wallet on an online computer and signed on the offline device, so the keys never leave it. It is the most isolated form of self-custody and also the slowest to use, suited to long-term savings rather than spending. An air gap blocks malware; it does not make a weak key strong, which is why the seed itself should come from [dice](/docs/learn/keys/random/).

## How does a transaction cross the air gap?

1. A watch-only wallet on the online computer (holding only the xpub) builds an unsigned transaction, a PSBT (partially signed bitcoin transaction).
2. The PSBT crosses to the offline device as a QR code or a file on an SD card.
3. The offline device shows the transaction, you check it, and it signs.
4. The signed transaction crosses back the same way, and the online computer broadcasts it.

<div class="doc-diagram">

![The air gap: a watch-only wallet on the online computer exchanges only PSBTs with the air-gapped signer via QR codes or SD cards; the seed and private keys never cross, and neither does any cable, wifi or bluetooth](/img/diagrams/wallets/airgap-transfer.svg)

</div>

USB drives also work, but they are themselves computers with firmware, so prefer QR codes or SD cards.

## Who needs an air-gapped wallet?

Long-term holders, people protecting significant amounts and people with a higher threat level use them, because isolation removes whole categories of attack. They take longer to learn, demand more discipline and make every transaction slower. A beginner does not need one: think of it as deep cold storage, not a daily wallet.

## What does an air gap not protect against?

An air gap stops malware reaching the keys and stops keys leaking out. It cannot tell whether a device generated a weak key. In the [2026 Coldcard incident](/docs/learn/wallets/coldcard-entropy-incident/), fully air-gapped wallets were drained over the network because their seeds were predictable from the moment they were made. Independently re-deriving what a device produced is the check that catches this, and it is one of the main reasons to own an air-gapped computer at all.

## Should you use an air-gapped computer or a SeedSigner?

[SeedSigner](/docs/seedsigner/) is our favourite purpose-built signing device, and both it and an air-gapped computer give you an offline signer. They trade off differently:

<div class="fixed-width-table">

| | Air-gapped computer | SeedSigner |
|---------|---------------------|------------|
| Storage | Can keep encrypted wallet backups | Stores nothing; the seed is brought to each session |
| Cross-checking | Several wallet programs can verify each other | One program |
| Ease of use | Full keyboard and large screen | Small screen and camera |
| Discretion | Looks like an ordinary laptop | Recognisably a bitcoin device |
| What else it does | Dice seed generation, GPG, scripts | Signing only |

</div>

The two complement each other: many advanced setups use an air-gapped computer to generate and verify seeds, and a SeedSigner for routine signing.

## What is an air-gapped computer used for?

<div class="fixed-width-table">

| Use | What it involves |
|----------|-------------|
| Seed generation | Making a seed from dice rolls with the [dice guide](/docs/learn/keys/random/) |
| Hardware wallet verification | Checking that a hardware wallet used your dice rolls and derives the right addresses |
| Transaction signing | Signing PSBTs entirely offline |
| Inheritance planning | Writing encrypted letters and instructions for heirs |

</div>

## Which hardware should you use?

| Option | Strengths | Weaknesses |
|---|---|---|
| An older laptop, such as a ThinkPad X230 (recommended) | Cheap used, Wi-Fi and Bluetooth cards are removable, supported by [Libreboot](/docs/libreboot/) | Needs the wireless cards removed and Ethernet disabled |
| Raspberry Pi Zero 1.3 | Has no Wi-Fi, Bluetooth or Ethernet at all | Only 512 MB of memory, so a full desktop is hard to run (a minimal system such as [DietPi](https://dietpi.com/) works); hard to find |
| A desktop built without networking | Fast | Every part must be checked for built-in Wi-Fi, Bluetooth and Ethernet |

The steps below use a ThinkPad X230.

## Step 1: Remove the network hardware

Step 1 makes the laptop physically unable to connect. Take out the Wi-Fi, Bluetooth and mobile broadband (WWAN) cards, and remove or disable the Ethernet port, so that even someone who steals the laptop cannot put it online.

## Step 2: Replace the BIOS with Libreboot

Step 2 replaces the proprietary firmware. [Libreboot](/docs/libreboot/) replaces the laptop's BIOS with open-source firmware built on coreboot. On supported ThinkPads it strips the Intel Management Engine down with me_cleaner and disables it, and keeps other vendor code to what the board needs to boot. The machine is not free of all closed code, but far less of it runs before the operating system, and the firmware can be audited and rebuilt. If your laptop is not supported, [coreboot](/docs/coreboot/) covers more models with most of the same benefits.

## Step 3: Install Linux Mint

Step 3 installs the operating system. Linux Mint suits an air-gapped computer: it is stable, easy to use for people new to Linux, runs few background services, and inherits Ubuntu's broad hardware support. Write the installer to a USB stick on another computer, after checking its checksum and signature.

## Step 4: Encrypt the disk with LUKS

Step 4 protects what is stored on the laptop if it is stolen. During installation, choose to encrypt the whole drive; Linux Mint uses LUKS (Linux Unified Key Setup) for this, which keeps everything encrypted at rest and supports several passphrases.

## Step 5: Install the offline software

Step 5 adds the tools you will use offline. Download them on an online computer, check their signatures there, and carry them across on a USB stick or SD card:

- Seed tools such as [Ian Coleman's BIP39 tool](https://iancoleman.io/bip39/) (the standalone HTML file) or the [Bitcoiner.Guide seed tool](https://bitcoiner.guide/seed/).
- A wallet for signing, such as [Sparrow](https://sparrowwallet.com/) or [Electrum](https://electrum.org/).

With these installed, the laptop can generate seeds and sign PSBTs while staying completely isolated. Whatever the setup, the seed phrase remains the thing that matters: anyone with it controls the bitcoin, and losing it loses the bitcoin.
