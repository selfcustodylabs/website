---
sidebar_position: 2
title: "Hardware Wallets Explained"
description: "Understand hardware wallets for Bitcoin self-custody: how they work, why they're secure, popular options compared, and how to choose the right one."
keywords: ["bitcoin", "hardware wallet", "cold storage", "coldcard", "trezor", "ledger", "self custody", "security"]
tags: ["bitcoin", "hardware wallet", "cold storage", "security"]
date: "2025-12-29"
---

# Hardware wallets

A hardware wallet is a small dedicated device that creates your bitcoin private keys, stores them and signs transactions with them, without the keys ever leaving it. Because it shows each payment on its own screen and needs a button press to sign, malware on the computer it connects to can neither steal the keys nor change a payment unseen. What it cannot do is prove that the keys it created were unpredictable: the 2026 Coldcard incident drained $116 million from working, air-gapped devices whose seeds were guessable. So use one with your own dice entropy, and check addresses on its screen.

## Why do hardware wallets exist?

A phone or laptop runs a browser, email, an app store and whatever you have downloaded, and every one of those is a way in for malicious software. A device built to do everything is not built to protect a secret worth a life-changing sum. A hardware wallet does one job, holding keys and signing with them, and has no browser, email or app store to attack.

<div class="doc-diagram">

![The security difference: a software wallet keeps keys on an online device shared with a browser and possible malware, while a hardware wallet keeps keys on a dedicated offline chip that signs in isolation and does exactly one job](/img/diagrams/wallets/hot-vs-cold.svg)

</div>

## How does a hardware wallet sign a transaction?

Your wallet software (Sparrow, for example) builds an unsigned transaction, which says "move this much bitcoin to this address", and sends it to the hardware wallet. The device shows the recipient and amount on its own screen. You check them there, not on the computer, and press the button. The device signs internally and returns only the signature; the private key never leaves it.

<div class="doc-diagram">

![Hardware wallet signing: the computer builds an unsigned transaction, the device shows the recipient and amount on its own screen, you verify and press the button, it signs internally and returns only the signature for broadcast; the private key never leaves](/img/diagrams/wallets/hw-signing-flow.svg)

</div>

So even if the computer is fully compromised, with a keylogger and an attacker watching the screen, the attacker cannot extract the key, cannot sign without your button press, and cannot change what the device's screen shows.

## What can't a hardware wallet protect against?

A hardware wallet protects whatever key it holds, but the key is only safe if nobody can predict it. If a key can be guessed, the attacker needs neither the device, the PIN nor the computer: the blockchain is enough.

When a device creates a seed, it draws randomness from its own generator, and you have no way to see whether the words came from good hardware randomness or from something an attacker could reproduce. For more than five years, a firmware bug made Coldcard devices use a predictable software generator instead of their hardware one, and in July 2026 attackers brute-forced those seeds and drained roughly $116 million from devices that were air-gapped and working exactly as intended. The [incident write-up](/docs/learn/wallets/coldcard-entropy-incident/) has the details.

Two habits close the gap:

- Supply the randomness yourself. Every device we recommend can take a seed you [made by hand from dice](/docs/learn/keys/random/), by restoring it, and a few take the rolls on the device (99 rolls cover a 24-word seed even if the device's generator is broken).
- Check what the device did with it. A buggy or malicious device could ignore your rolls; re-deriving the seed from the same rolls on an independent device and comparing the words catches that, as the dice guide explains.

A [passphrase](/docs/learn/keys/passphrase/) on top means no single secret has to be perfect. In July 2026 that layering was the line between drained and untouched.

## What is the difference between connected and air-gapped hardware wallets?

| | Connected | Air-gapped |
|---|---|---|
| How it talks to the computer | USB cable or Bluetooth | QR codes or a microSD card carried between devices |
| Examples | Trezor Safe 5 and 7, BitBox02 Nova | Jade Plus, Passport Prime, Keystone 3 Pro, [SeedSigner](/docs/seedsigner/), Krux |
| Convenience | Close to a software wallet | Slower: data is carried across by hand |
| What it removes | Nothing beyond the device's own isolation | Any cable or radio path between the device and an infected computer |

For most people a connected hardware wallet is plenty. An air gap removes the last physical path between the device and a compromised computer, which suits larger holdings. Be precise about what that buys, though: an air gap stops malware reaching the device and key material leaking out, and it does nothing about a key that was predictable from the start. The Coldcards drained in 2026 belonged disproportionately to air-gap enthusiasts, and their discipline was irrelevant because the seeds were guessable.

## Which features actually matter?

The [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) lists every device we cover with prices and our recommendations. These are the features worth understanding before reading it.

### Secure element

A **secure element** is a tamper-resistant chip designed to keep secrets from someone who has the device in their hands; a thief cannot simply desolder a memory chip and read the key. Trezor's Safe series, the BitBox02 Nova, Passport Prime, Keystone and Coldcard have one. The Jade uses a "blind oracle" instead, in which a server (Blockstream's or your own) limits PIN guesses, and SeedSigner and Krux store nothing, so there is nothing to extract. The Trezor Safe 7's TROPIC01 is the first secure element whose design anyone can audit. Keep it in proportion: the 2026 Coldcard incident happened on devices with two secure elements, because the firmware never asked them for randomness.

### Open source

**Open-source** firmware can be read and audited by anyone; closed firmware has to be taken on the company's word. Trezor, BitBox02, Jade, Passport, Keystone, SeedSigner and Krux are open source; Coldcard's code is visible under a restrictive licence; Ledger's secure element firmware is closed. 2026 added a correction: open source means someone can check, not that someone did. The Coldcard bug sat in readable code for five years, and the researcher who questioned it in 2025 was dismissed. Reproducible builds, independent audits of what actually ships, and how a vendor responds to a report matter as much as the licence.

### Bitcoin-only firmware

Firmware that supports only bitcoin has less code, and so fewer places for bugs. Passport, Coldcard and SeedSigner are bitcoin-only by design; BitBox02, Trezor and Keystone offer a bitcoin-only edition; the Jade supports bitcoin and Liquid.

### Your own dice entropy

After 2026, supplying your own randomness is a requirement rather than a feature. As of October 2026 the Keystone 3 Pro, SeedSigner, Krux and Coldcard take dice rolls on the device; BitBox, Blockstream (Jade) and Foundation document procedures for choosing the words yourself; on the Trezor Safe you make the seed with dice and restore it. Bitkey shows no seed phrase, so none of these is possible with it. Fifty rolls protect a 12-word seed even if the device's generator is completely broken, and 99 cover a 24-word seed, which is exactly what kept dice-generated Coldcard seeds safe.

## What habits keep a hardware wallet safe?

| Do | Why |
|---|---|
| Buy from the manufacturer or a reseller listed on its site | Tampered devices have been sold on eBay, Amazon and look-alike shops |
| Run the maker's authenticity check | It confirms the device is genuine before you trust it |
| Create the seed with your own dice | It removes the failure that cost Coldcard owners $116 million |
| Follow the vendor's security advisories and update firmware | Updates fix flaws, though no update can repair a seed that was made weak |
| Check every address on the device's screen | Malware can change an address on the computer, not on the device |
| Use a random PIN, kept separately from the device and seed | A guessable PIN makes a stolen device a stolen wallet |
| Keep the seed backup somewhere other than the device | A thief or fire should not get both |

| Never | Why |
|---|---|
| Buy a used hardware wallet | You cannot know what the previous owner did to it |
| Type the seed phrase into a computer, website or app | The only place it is ever entered is the hardware wallet itself, during recovery |
| Store the device and the seed backup together | One theft or fire would take both |

## Where do hardware wallets fit among the options?

<div class="fixed-width-table">

| Method | Security | Convenience | Cost | Suits |
|--------|----------|-------------|------|----------|
| Exchange account | Low | High | Free | Not self-custody |
| Software wallet | Medium | High | Free | Small amounts |
| Hardware wallet | High | Medium | About $80 to $250 | Most people |
| Air-gapped computer | Very high | Low | $50 to $200 | Advanced users |
| Multisig | Highest | Low | $200 to $750 | Large holdings |

</div>

For most people a hardware wallet is the right balance: far safer than a software wallet, far more practical than an air-gapped computer, and without the coordination multisig needs.

## What do people get wrong about hardware wallets?

### Does losing the device lose the bitcoin?

No. The bitcoin is on the blockchain, not in the device. With the seed phrase you can restore the wallet on a new device of the same brand, a different brand, or even a software wallet in an emergency. The device is replaceable; the seed phrase is what matters.

### Are hardware wallets hackproof?

No. Physical attacks, tampered supply chains and firmware flaws have all happened, and the 2026 Coldcard incident showed a hardware wallet can be emptied without anyone touching it, because the keys it created were guessable. Hence the layers: your own entropy, a passphrase, a strong PIN, current firmware, addresses checked on the device, and a backup stored separately.

### Do you need to check addresses on the device?

Yes, every time. Malware can show one address on the computer while the software sends to another that the attacker controls. The device's screen is the one to believe, and checking it takes seconds.

### Does air-gapped mean it cannot be hacked?

No. An air gap blocks malware and key leakage, but says nothing about the device's internals. The 2026 victims kept fully air-gapped devices in safes, and lost their bitcoin through the blockchain because their keys were predictable. Isolation and unpredictability are separate properties, and you need both.

### Are all hardware wallets equally secure?

No. Design and firmware transparency differ, and so does how vendors behave: Coinkite was warned about its random number generator fourteen months before the exploit and dismissed it. Compare vendors on their disclosure history and crisis response as well as their specifications; the [comparison page](/docs/reference/hardware-wallet-comparison/#how-did-each-vendor-respond-in-2026) tracks both.

## When should you move to multisig?

A single hardware wallet used well is strong security, but it is still a single point of failure: a compromised device, a stolen seed backup or physical coercion can each reach everything. [Multisig](/docs/learn/wallets/multisig/) removes that by requiring several keys on separate devices. Consider it when the amount is significant for you, when you want protection against theft from one location or one compromised device, or when you are planning for inheritance. It is more complex to set up and use, which is a fair price for long-term holdings of that size.
