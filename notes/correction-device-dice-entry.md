---
title: "Correction: which hardware wallets take dice rolls"
description: "We said every device we recommend takes your own dice rolls. The Trezor Safe cannot, and most others take them off the device. What is true in October 2026."
keywords: ["dice entropy", "trezor dice", "jade dice", "bitbox diceware", "keystone dice", "correction"]
date: "2026-10-26"
---

From August to October 2026 several pages on this site said that every hardware wallet we recommend can mix your own dice rolls into seed creation. That was wrong for the Trezor Safe 5 and 7, which as of October 2026 have no dice path at all, and loose for most of the rest: only the Keystone 3 Pro, SeedSigner and Krux take dice rolls on the device, while BitBox, Blockstream and Foundation document ways to choose the words with dice and enter them. Every recommended device can still use a seed you made yourself from dice, by restoring it, so the advice to supply your own randomness stands; what changes is how you do it on each device.

<!-- truncate -->

## What is true as of October 2026?

| Device | Your own dice entropy |
|---|---|
| Keystone 3 Pro | Dice rolls on the device, firmware 1.2.6 or later |
| SeedSigner and Krux | Dice rolls on the device |
| BitBox02 | BitBox's own diceware procedure: dice pick the words from a printed table, and the device offers valid last words |
| Passport Prime | Draw the words yourself and import them, as Foundation's documentation describes |
| Trezor Safe 5 and 7 | No dice entry. Make the seed with dice and restore it. Trezor said on 5 August 2026 that it is considering user-supplied entropy, without committing to it |
| Jade and Jade Plus | Blockstream's own dice methods: dice pick the words from its table, and the device calculates valid last words. By default the Jade also mixes several entropy sources |

We found the error while researching device setup guides, by reading each maker's documentation rather than our own earlier summary of it.

## What changed on the site?

The [hardware wallet comparison](/docs/reference/hardware-wallet-comparison/) now says, for each device, whether dice go in on the device, through a maker's procedure, or by restoring a seed you made, and its entropy table says how you can check each. The [dice guide](/docs/learn/keys/random/), the [hardware wallet setup guide](/docs/wallet-setup/hardware-wallet/), [hardware wallets explained](/docs/learn/wallets/hardware-wallets/) and the [multisig hardware setup](/docs/learn/wallets/multisig/hardware-setup/) say the same.

## What if you followed the old advice?

If you set up a Trezor or a Jade looking for a dice option on the device and did not find one, the device generated the seed itself from its own sources. Neither maker's generator is known to be flawed, and both said in August 2026 that their devices were not affected by the Coldcard bug. If you want the seed to rest on your own dice instead, [make one with dice](/docs/learn/keys/random/) (on a Jade, Blockstream's dice method does the same and the device supplies the last word), restore it onto the device as a new wallet, test it with [backup verification](/docs/wallet-setup/backup-verification/), and then move the funds across.
