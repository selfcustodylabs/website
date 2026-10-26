---
sidebar_position: 4
title: "Coldcard vs Trezor vs Jade vs Passport: 2026 Compared"
description: "Compare Bitcoin hardware wallets after the 2026 Coldcard incident: Trezor Safe 7, BitBox02 Nova, Jade Plus, Passport, SeedSigner, Bitkey, and more."
keywords: ["hardware wallet comparison", "coldcard", "trezor safe 7", "bitbox02 nova", "jade plus", "passport prime", "keystone", "seedsigner", "bitkey", "bitcoin wallet 2026"]
tags: ["hardware wallet", "comparison", "coldcard", "trezor", "security"]
slug: /reference/hardware-wallet-comparison
date: "2026-01-15"
---

# Hardware wallet comparison

For a first Bitcoin hardware wallet in October 2026, the BitBox02 Nova (€175) and the Trezor Safe 5 ($129) are the easiest devices to use safely. For security you can verify yourself rather than take on trust, the Blockstream Jade Plus ($149) signs over QR codes without a cable and is fully open source. Our favourite is the [SeedSigner](/docs/seedsigner/), a stateless signer you build yourself, for anyone comfortable with the assembly; it is not a beginner's device. Coldcard is not recommended after the 2026 entropy incident, and Ledger and Bitkey are not recommended because their critical parts cannot be verified. Which device you buy matters less than three habits: supply your own dice entropy when the seed is created, add a passphrase, and split keys across vendors once the balance is significant.

This comparison weighs devices differently from most. In July 2026, attackers drained about $116 million from wallets whose seeds had been generated on Coldcards running firmware with a five-year-old flaw: the devices were air-gapped and worked as designed, but their seeds were guessable. [What happened and who is affected](/docs/learn/wallets/coldcard-entropy-incident/) is the full account. Since then, whether you can check a device's randomness, and how its maker behaves when something goes wrong, count for as much as its screen and chips.

## Quick comparison table

Prices are the makers' own store prices in US dollars, checked on 26 October 2026, except where marked "Aug": those were last confirmed in August 2026.

<div class="fixed-width-table">

| Wallet | Price | Air-gapped | Open source | Secure element | Your own dice entropy | Best for |
|--------|-------|---------|-------------|----------------|---------------------|----------|
| Trezor Safe 5 | $129 | No | Yes | Yes, EAL6+ | Import only | Beginners |
| Trezor Safe 7 | $249 | No | Yes | Yes, two (including the auditable TROPIC01) | Import only | Transparency with polish |
| BitBox02 Nova | €175 (Aug) | No | Yes | Yes, EAL6+ | Vendor procedure | Simplicity |
| Jade | $79 | Yes, QR with the optional camera | Yes | No: virtual, "blind oracle" | Import only | Budget |
| Jade Plus | $149 ($169 metal) | Yes, QR | Yes | No: virtual, "blind oracle" | Import only | Verifiable security |
| Passport Prime | $565 | Yes, QR, plus encrypted Bluetooth | Yes | Yes | Vendor procedure | Premium air-gap |
| Keystone 3 Pro | $149 (Aug) | Yes, QR only | Yes | Yes, three chips | On the device | QR air-gap value |
| SeedSigner or Krux | About $50-80 in parts | Yes, stateless QR | Yes | None: stateless | On the device | Building your own |
| Coldcard Mk5 or Q | $219 or $319 | Yes, microSD (and QR on the Q) | Source visible, not open licence | Yes, two | On the device | Not recommended for new purchases |
| Ledger (Nano, Flex, Stax) | $79-399 (Aug) | No | No: secure element firmware is closed | Yes | Import only | Not recommended |
| Bitkey | $250 (Aug) | No | Partly: source published, not reproducible | Yes, secure enclave | No | Not recommended |

</div>

The Coldcard prices are the store's reduced prices on 26 October 2026; the list prices are $269 and $369. In the dice column, "on the device" means you enter dice rolls on the device itself; "vendor procedure" means the maker documents a way to choose the words yourself and enter them; "import only" means you make the seed with [dice](/docs/learn/keys/random/) yourself and restore it onto the device, which works on every device here except Bitkey.

## How should you choose? Practices before devices

The 2026 incident made one thing measurable: the practices around a device protected people better than the device itself. Coldcard owners who had used dice entropy, a strong passphrase or multisig lost nothing; owners who trusted the device's defaults lost everything. Decide on the practices first:

1. Supply your own entropy. A seed you [make yourself with dice](/docs/learn/keys/random/) and then restore onto the device works with every device we recommend, and it removes the exact failure that cost Coldcard users $116 million. The Keystone 3 Pro and SeedSigner also take dice rolls on the device, and BitBox and Foundation document procedures of their own; the entropy table below lists each.
2. Add a [passphrase](/docs/learn/keys/passphrase/) for any balance you would miss. In July 2026 it was the difference between drained and untouched.
3. Use [multisig](/docs/learn/wallets/multisig/) across vendors for significant holdings, so that no single vendor's mistake can reach your funds.

With those in place, the choice of device comes down to how easy it makes verification (screen size, buttons, QR or USB), how much you trust its supply chain, and how its maker has behaved when things went wrong.

## How do the devices compare in detail?

### Trezor Safe 5

The Trezor Safe 5 is the beginner default: a polished, open-source device with a certified secure chip.

| Aspect | Details |
|--------|---------|
| Price | $129 |
| Screen | 1.54-inch colour touchscreen, Gorilla Glass 3 |
| Connectivity | USB-C |
| Open source | Yes: firmware and hardware designs |
| Secure element | Yes, EAL6+ (Infineon Optiga) |
| Dice entropy | Not on the device as of October 2026: restore a seed you made with [dice](/docs/learn/keys/random/). Trezor Suite's entropy check confirms the device used the computer's randomness too |
| Bitcoin-only firmware | Available |
| Strengths | Polished setup and documentation, good Sparrow support, a secure element under open firmware, a security team with a long disclosure record |
| Weaknesses | No air-gap option (USB only); Trezor Suite nudges you toward its own ecosystem; a shipping provider's breach, disclosed in 2026, leaked customers' shipping details (choose a pickup point where you can) |
| Best for | A first hardware wallet, for amounts that do not yet justify multisig |

### Trezor Safe 7

The Trezor Safe 7 is Trezor's flagship, built around a secure element whose design can be audited.

| Aspect | Details |
|--------|---------|
| Price | $249 |
| Screen | 2.5-inch colour touchscreen |
| Connectivity | USB-C and encrypted Bluetooth |
| Open source | Yes, including the design of the TROPIC01 secure element |
| Secure element | Two: TROPIC01 (auditable) and an EAL6+ Optiga |
| Dice entropy | Not on the device as of October 2026: restore a seed you made with [dice](/docs/learn/keys/random/) |
| Bitcoin-only firmware | Available |
| Strengths | Auditable secure chip, a large screen for checking addresses, quantum-resistant firmware signing, a Bitcoin-only variant |
| Weaknesses | Premium price; Bluetooth is a radio you may not want (it can stay off); no QR air-gap mode |
| Best for | People who want the most transparency available with mainstream polish |

The TROPIC01 is the first secure element whose design anyone can audit; until it, a secure element meant accepting a chip whose internals were under non-disclosure agreements. After a year in which a silent firmware flaw cost users nine figures, being able to audit the whole stack is no longer a purist's luxury.

### BitBox02 Nova

The BitBox02 Nova is the Swiss-made BitBox02 with an EAL6+ secure chip and the smoothest backup flow of any device here.

| Aspect | Details |
|--------|---------|
| Price | €175 (August 2026); the classic BitBox02 is €149 |
| Screen | Glass OLED with touch sliders |
| Connectivity | USB-C, and Bluetooth for iPhone and iPad |
| Open source | Yes, fully |
| Secure element | Yes, EAL6+, in a two-chip design |
| Dice entropy | BitBox's own diceware procedure (documented for the BitBox02), or restore a seed you made with dice |
| Bitcoin-only edition | Available |
| Strengths | Backup to microSD as well as on paper; the open main chip cross-checks the secure chip; fast, open communication during the 2026 crisis, followed by expanded audits |
| Weaknesses | No air-gap mode; the small screen means more scrolling to check an address; the touch sliders divide opinion |
| Best for | Beginners, and anyone who values a clean, fast workflow; the classic BitBox02 is fine if Bluetooth does not matter to you |

### Blockstream Jade and Jade Plus

The Jade and Jade Plus are the verifiable-security pick: fully open source, able to sign over QR codes, and designed so the device cannot leak key material.

| Aspect | Details |
|--------|---------|
| Price | Jade $79; Jade Plus $149 in plastic, $169 in metal |
| Screen | Colour LCD (the Plus has a larger screen and a better camera) |
| Connectivity | USB, Bluetooth, and a camera for QR air-gapping |
| Open source | Yes, fully |
| Secure element | No: a virtual "blind oracle" model |
| Dice entropy | Not on the device: restore a seed you made with dice. By default it mixes several entropy sources, and wallet apps can add their own |
| Coins | Bitcoin and Liquid |
| Strengths | A real QR air-gap at a low price, anti-exfiltration signing, several entropy sources, an exemplary response to the 2026 incident |
| Weaknesses | No hardware secure element, so the oracle model needs understanding; the camera workflow is slower than USB |
| Best for | Security-focused users on any budget; the Plus's better camera makes it the nicer daily device |

The Jade differs from most devices in two ways that both proved wise in 2026. Its anti-exfiltration signing protocol stops a malicious device from leaking key material through its signatures. And instead of one random number generator it mixes several entropy sources, a design Blockstream documented in detail within hours of the Coldcard news, together with a migration guide for affected users.

The trade-off is the missing secure element. Jade's "blind oracle" splits PIN protection with a Blockstream server, or one you host yourself, that limits how many PIN guesses a thief can make. It is a sound model, but understand it before relying on it.

In April 2026 Blockstream added the Jade Core ($99), which has no camera and therefore no QR air-gap. We have not reviewed it.

### Passport Prime

The Passport Prime is the premium air-gapped device, and the most expensive one here.

| Aspect | Details |
|--------|---------|
| Price | $565 |
| Screen | Large colour touchscreen |
| Connectivity | QR codes, and QuantumLink encrypted Bluetooth |
| Open source | Yes, fully (KeyOS, with sandboxed apps) |
| Secure element | Yes |
| Dice entropy | Supported by drawing seed words yourself and importing them; ships an app for testing the device's entropy |
| Bitcoin-only | Yes, by design |
| Strengths | A verification-first interface, US assembly, sandboxed apps, entropy you can test yourself |
| Weaknesses | Far the most expensive device here; more device than most people need; the extra features (2FA codes, file storage) widen what it has to protect |
| Best for | People who want air-gapped, verification-friendly hardware and will pay for it |

Foundation responded to the 2026 incident faster than almost anyone, confirming its entropy paths the same night, and then shipped an entropy-testing app so owners can check the distribution of the random number generator's output themselves.

### Keystone 3 Pro

The Keystone 3 Pro is a QR-only air-gapped device at a mid-range price.

| Aspect | Details |
|--------|---------|
| Price | $149 (August 2026) |
| Screen | 4-inch colour touchscreen, fingerprint reader |
| Connectivity | QR codes and microSD only |
| Open source | Yes, fully |
| Secure element | Three chips |
| Dice entropy | Dice rolls on the device (firmware 1.2.6 or later); 99 rolls for a 24-word seed |
| Bitcoin-only firmware | Available |
| Strengths | A true air-gap with a big screen for checking addresses, three secure elements, good Sparrow multisig support, erases itself if tampered with |
| Weaknesses | Multi-coin firmware by default (install the Bitcoin-only build); a younger company than Trezor or Blockstream; a battery to keep charged |
| Best for | Air-gapped use without the Passport's price, and as one key in a multisig |

### SeedSigner & Krux (DIY)

SeedSigner and Krux are stateless signers you assemble yourself from commodity parts. SeedSigner is our favourite signing device, and the [SeedSigner section](/docs/seedsigner/) covers why, how to build one and how to use it; it is not the right choice for most beginners, for the reasons given there.

| Aspect | Details |
|--------|---------|
| Price | SeedSigner about $50-80 in parts; Krux about $30-80 (K210-based devices) |
| Screen | Small LCD (SeedSigner: 1.3-inch, with a camera for QR codes) |
| Connectivity | QR codes only, fully air-gapped |
| Open source | Yes, fully, community-built and reproducible |
| Secure element | None: the device stores nothing, so there is nothing to protect |
| Dice entropy | Required: you bring the entropy |
| Bitcoin-only | Yes, by design |
| Best for | Technical users, multisig quorums, and anyone who has built a [coreboot](/docs/coreboot/) laptop and enjoyed it |

SeedSigner (built on a Raspberry Pi Zero) and Krux take the 2026 lesson furthest: the device never stores a seed. You bring the seed to each signing session, usually as a [SeedQR](/docs/seedsigner/using-seedsigner/) or by typing it in, and the device forgets everything when it is switched off. Because you generate the seed yourself ([with dice, and verified](/docs/learn/keys/random/)), there is no vendor random number generator to trust, and because the parts are commodity hardware, there is no wallet-specific supply chain to intercept. The cost is convenience: every signing session takes longer, and keeping the seed safe is entirely on you. Start with the [build guide](/docs/seedsigner/build-guide/).

### Coldcard Mk5 & Q

Coldcard is not currently recommended for new purchases. For years it was this site's security pick. Then came the [entropy incident](/docs/learn/wallets/coldcard-entropy-incident/): a 2021 firmware bug silently replaced hardware randomness with a predictable software generator, about $116 million was stolen from more than 5,200 wallets, and, decisively for us, a developer had warned Coinkite about that exact code in May 2025 and been dismissed. As of October 2026, no compensation has been offered.

The current hardware (Mk5 $219, Q $319 at the store's October 2026 prices) is capable, the fixed firmware has been independently reviewed, and seeds generated with dice rolls were never affected. If you already own one, update the firmware, [check whether your seed needs moving](/docs/learn/wallets/coldcard-entropy-incident/#am-i-affected), and make any new seed with dice. For new buyers, we do not recommend rewarding a vendor whose handling of a credible warning cost its users nine figures, at least until a longer record rebuilds that trust.

### Ledger

Ledger devices (Nano S Plus and X, Flex, Stax; $79 to $399 as of August 2026) have strong secure elements and came through 2026 without an entropy incident; the company was quick to point to its certified hardware random number generator. Our concerns are unchanged. The secure element firmware is closed source; the 2023 Ledger Recover service showed the firmware can export seed material, split into shares; and the 2020 customer-data breach exposed buyers to years of phishing. You cannot verify the parts that matter most, and 2026 showed how much silent trust that asks for. Ledger suits people committed to its multi-coin ecosystem; for bitcoin self-custody, the open devices above are stronger choices.

### Bitkey

Bitkey, from Block, uses a different trust model entirely, and one you cannot verify.

| Aspect | Details |
|--------|---------|
| Price | $250 (August 2026; the 2026 model with a touchscreen; the original was $150) |
| Screen | Touchscreen for checking transactions on the device (2026 model) |
| Connectivity | Bluetooth, with a companion phone app; no air-gap |
| Open source | Partly: source is published, but it cannot be built, because the fingerprint library is closed |
| Secure element | Yes, a secure enclave, unlocked by fingerprint |
| Dice entropy | No; there is no seed phrase shown to the user at all |
| Bitcoin-only | Yes |

Bitkey ships as a 2-of-3 multisig by default (your phone, the device and a recovery server held by Block), with no seed phrase shown to the user and a fingerprint instead of a PIN. It was untouched by the 2026 incident, since by design no single random number generator failure can spend funds, and its communication that night was among the best.

We still do not recommend it, because you cannot verify it. The published firmware cannot be reproduced by outsiders because the proprietary fingerprint-matching library is missing from the repository; WalletScrutiny rates it "nosource". There is no seed phrase to check, no dice entropy to supply, and most recovery paths run through Block's servers. That is the "trust the vendor" posture that cost Coldcard users nine figures; Block has a clean record, but so did Coinkite until July 2026.

Bitkey's fair niche is someone leaving an exchange who would otherwise never hold their own keys: its 2-of-3 design with an Emergency Exit Kit is far better than custody by an exchange. If you can follow a setup guide, a [BitBox02 Nova or Trezor Safe 5](#recommendations-by-use-case) gives you a portable, [standard BIP39 seed](/docs/learn/keys/seed/) that you can verify and recover anywhere.

## How do their security designs compare?

### Secure elements

| Wallet | Secure element | Notes |
|--------|---------------|-------|
| Trezor Safe 5 | One Optiga (EAL6+) | Open firmware around a certified chip |
| Trezor Safe 7 | TROPIC01 and Optiga | TROPIC01's design is auditable, with no non-disclosure agreement |
| BitBox02 Nova | One, EAL6+ | Two-chip design: the open main chip cross-checks the secure element |
| Passport Prime | Yes | Sandboxed KeyOS on top |
| Keystone 3 Pro | Three chips | Erases itself if tampered with |
| Coldcard Mk5 and Q | Two, from different vendors | The secure elements were not the 2026 failure; the firmware was |
| Jade and Jade Plus | Virtual (blind oracle) | A server limits PIN guesses; you can host it yourself |
| SeedSigner and Krux | None | Stateless: nothing stored to protect |
| Ledger | One ST33 | Certified, but the firmware is closed |
| Bitkey | Secure enclave | Firmware not reproducible because of a closed fingerprint library |

### Entropy: who lets you verify?

This table is the lesson of 2026: where the randomness in your seed comes from, and how you can check it. As of October 2026 only a few devices take dice rolls on the device; every device except Bitkey can take a seed you made yourself from dice, by restoring it.

| Wallet | Your own entropy | How to verify |
|--------|-------------|---------------|
| SeedSigner and Krux | Dice rolls on the device | Re-derive on a second device; stateless by design |
| Keystone 3 Pro | Dice rolls on the device, firmware 1.2.6 or later | Enter the same rolls in a second tool and compare the words |
| BitBox02 and Nova | BitBox's diceware procedure: dice pick 23 words from a table, the device offers valid last words | You chose the words; documented for the BitBox02 |
| Passport Prime | Draw words yourself and import them; an app tests the device's own generator | You chose the words |
| Jade and Jade Plus | Restore a seed you made with dice; by default several internal sources are mixed | Your dice seed is checked by the [dice guide](/docs/learn/keys/random/); the firmware is open |
| Trezor Safe 5 and 7 | Restore a seed you made with dice; no dice entry on the device | Trezor Suite's entropy check confirms the device mixed in the computer's randomness |
| Coldcard Mk5 and Q | Dice rolls on the device (the dice path was never affected) | Compare against a manual derivation |
| Ledger | Restore a seed you made with dice | Otherwise, trust the certification |
| Bitkey | None (no seed phrase is shown) | Cannot be verified; you trust Block's 2-of-3 design |

Whatever you buy, a device could in theory ignore your dice. The check that catches it is re-deriving the seed from the same rolls independently, which the [dice guide](/docs/learn/keys/random/) shows how to do.

### How did each vendor respond in 2026?

When the Coldcard news broke, the speed and honesty of each vendor's response varied enormously, and it is a fair guide to how they will behave next time.

| Vendor | Response to the 2026 incident | Earlier history |
|--------|---------------------|---------|
| Blockstream (Jade) | Entropy design documented the same night, with a migration guide | Clean |
| Foundation (Passport) | Confirmation the same night; entropy-testing app afterwards | Clean |
| Block (Bitkey) | Technical analysis the same night | Clean |
| Trezor | Published statement on 5 August, sustained follow-ups; considering support for user-supplied entropy, with no commitment yet | A third-party shipping provider's data breach (disclosed 2026); glitch attacks on older models, addressed with the secure element |
| BitBox | Statement the next day; announced expanded audits | Clean |
| Keystone | Confirmed it was unaffected | Clean |
| Coinkite (Coldcard) | Fast patch and advisory, but see the [dismissed 2025 warning](/docs/learn/wallets/coldcard-entropy-incident/) | The incident itself |
| Ledger | Brief statement about 14 hours later | Ledger Recover controversy (2023), customer-data breach (2020) |

## Recommendations by use case

| Use case | Our pick | Why |
|---|---|---|
| First hardware wallet | BitBox02 Nova (Bitcoin-only) or Trezor Safe 5 | Polished, open source, secure element; both restore a seed you made with dice |
| Verifiable security | Jade Plus or Passport Prime, seeded with [dice](/docs/learn/keys/random/) | Air-gapped workflows from vendors that treat verification, including of their own randomness, as a feature |
| Budget | Blockstream Jade ($79) | Nothing else at this price is open source, air-gap capable and backed by this response record |
| Building your own, maximum verification | [SeedSigner](/docs/seedsigner/) (our favourite) or Krux | Stateless, assembled from commodity parts, with the entropy fully in your hands; see the [build guide](/docs/seedsigner/build-guide/) |
| Significant holdings | Multisig across vendors, for example Jade Plus, Keystone 3 Pro and Trezor Safe 5 | Three designs, three supply chains, three firmware teams. Multisig users with a weak Coldcard key lost nothing in July 2026; see the [multisig guide](/docs/learn/wallets/multisig/) |

For most people: start with a BitBox02 Nova or Trezor Safe 5, generate the seed with your own dice, and move to multisig as the holdings grow.

## Where should you buy a hardware wallet?

Buy from the manufacturer's own store, or a reseller listed on the manufacturer's site.

| Wallet | Official store |
|--------|---------------|
| Trezor | [trezor.io](https://trezor.io) |
| BitBox | [bitbox.swiss](https://bitbox.swiss) |
| Jade | [store.blockstream.com](https://store.blockstream.com) |
| Passport | [foundation.xyz](https://foundation.xyz) |
| Keystone | [keyst.one](https://keyst.one) |
| SeedSigner (parts list) | [seedsigner.com](https://seedsigner.com) |
| Krux (build guide) | [selfcustody.github.io/krux](https://selfcustody.github.io/krux/) |
| Coldcard | [coldcard.com](https://coldcard.com) |
| Ledger | [ledger.com](https://ledger.com) |
| Bitkey | [bitkey.world](https://bitkey.world) |

:::danger Never buy from marketplaces, and never accept a pre-made seed
Amazon, eBay and other marketplace sellers have been sources of tampered devices. Whatever the vendor, set the device up yourself: a "pre-configured" wallet, or a seed phrase card in the box, is always a scam.
:::

## Common questions

### What is the best Bitcoin hardware wallet in 2026?

There is no single best device, and after the 2026 Coldcard entropy incident the practices matter more than the hardware. For beginners, the Trezor Safe 5 ($129) or the BitBox02 Nova (€175) is the easiest to use safely. For verifiable security on a budget, the Blockstream Jade Plus ($149) signs over QR codes. SeedSigner is our favourite for people comfortable building their own device, though it is not for beginners. Whichever you choose, supply your own dice entropy when the seed is created, add a passphrase, and use multisig across vendors for significant holdings.

### Is Coldcard still safe to use in 2026?

We do not currently recommend Coldcard. A build error meant Coldcards generated seeds with a software pseudo-random generator instead of the hardware random number generator between March 2021 and July 2026, and roughly 1,816 BTC was drained from more than 5,200 addresses. Coinkite shipped fixes quickly once the draining began, but it had dismissed a developer's warning about the same code in May 2025. The devices are safe to use with a seed generated from dice or elsewhere, but we point new buyers to other devices.

### Do you need a secure element in a hardware wallet?

Not necessarily. A secure element resists someone physically extracting the seed from a stolen device, which matters if theft is part of your threat model. Devices without one, such as the Blockstream Jade Plus, use a blind oracle design instead and are fully open source and verifiable. The 2026 Coldcard incident is the reminder that a secure element does not help if the seed was weak to begin with.

### Should you use dice to generate your Bitcoin seed phrase?

Yes, for any amount you would be upset to lose. Every hardware wallet we recommend can take a seed you made from dice, by restoring it, and a few take the rolls directly. Coldcard owners who used dice lost nothing in the 2026 incident, while owners who trusted the device's default lost everything. Dice remove your dependence on the vendor's random number generator being correct.
