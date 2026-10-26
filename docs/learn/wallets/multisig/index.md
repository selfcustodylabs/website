---
sidebar_position: 1
title: "Bitcoin Multisig: Complete Guide"
description: "Understand and set up a Bitcoin multisig wallet. Concepts, 2-of-3 configurations, hardware devices, and a full step-by-step setup guide."
keywords: ["multisig", "multi-signature", "bitcoin security", "2-of-3", "hardware wallet", "self custody", "sparrow"]
tags: ["multisig", "security", "wallet", "bitcoin", "hardware wallet", "advanced"]
slug: /learn/wallets/multisig
guide:
  time: "2-3 hours"
  level: "Intermediate to advanced"
  cost: "$200-450 (3 hardware wallets) + $30-60 (metal seed backups)"
---

# Multisig: multi-signature wallets

A **multisig** (multi-signature) wallet is a bitcoin wallet that needs more than one key to spend, written as M-of-N: M signatures out of N keys. For an individual the usual choice is 2-of-3, where any two of three keys can move the funds, so losing one key does not lose your bitcoin and stealing one key does not steal it. Each key lives on a separate hardware wallet, ideally from a different manufacturer and in a different place. The cost is complexity: besides the seed phrases you must back up the wallet descriptor, and recovery has to be rehearsed before the wallet holds anything significant.

<GuideFacts />

An ordinary wallet has a single point of failure: one seed phrase controls everything, so if it is stolen or lost, so is the bitcoin. Multisig removes that by spreading control across several keys, none of which can spend alone.

## How does M-of-N work?

N is the total number of keys in the wallet and M is the number of signatures needed to spend.

<div class="doc-diagram">

![A 2-of-3 multisig: three keys exist at home, office and safe, and any two signatures spend; no single key ever can, so one key can be lost or stolen without losing the funds](/img/diagrams/wallets/multisig-quorum.svg)

</div>

<div class="fixed-width-table">

| Setup | Signatures needed | Keys | Use |
|-------|----------|-------|----------|
| 2-of-3 | 2 | 3 | Individual self-custody, the most common choice |
| 3-of-5 | 3 | 5 | Very large holdings, organisations, families |
| 2-of-2 | 2 | 2 | Shared control, with no room for losing a key |
| 1-of-2 | 1 | 2 | Easy access from two places, with no theft protection |

</div>

## How is a multisig wallet created and spent from?

To create one:

1. Generate three separate seeds, usually one on each of three hardware wallets.
2. Export the extended public key (xpub) from each device.
3. Combine the three xpubs in coordinator software such as Sparrow, which creates the multisig wallet and its descriptor.
4. Register the wallet on each hardware wallet, so each device can check addresses and change itself.

To spend:

1. The coordinator creates an unsigned transaction, a PSBT (partially signed bitcoin transaction).
2. Device 1 signs it; the transaction is still incomplete.
3. Device 2 signs it; it now has the two signatures it needs.
4. The coordinator broadcasts the complete transaction.

<div class="doc-diagram">

![Multisig signing flow: an unsigned PSBT goes to device 1 and device 2, each signs independently, the signatures combine into a fully signed transaction and it is broadcast; no single machine ever holds two keys](/img/diagrams/wallets/multisig-signing.svg)

</div>

## What does multisig protect against?

<div class="fixed-width-table">

| What happens | Single-signature wallet | 2-of-3 multisig |
|----------|------------|-----------------|
| One key is stolen | Funds lost | Safe: the thief needs a second key |
| One key is lost | Funds lost for good | Safe: the other two keys still spend |
| A fire destroys one backup | Funds lost, if it was the only backup | Safe: the other keys are elsewhere |
| You are forced to hand over a key | Funds lost | Safe: one key cannot spend, and the others are not in the room |
| One hardware wallet's firmware is flawed | Funds at risk | Safe: the other vendors' keys still hold |

</div>

<div class="doc-diagram">

![Single-sig puts full control on one seed phrase, one point of failure; a 2-of-3 multisig spreads control over three keys where any two spend, so one key compromised or lost leaves the funds safe](/img/diagrams/wallets/multisig-vs-single.svg)

</div>

The last row stopped being hypothetical in July 2026. The [Coldcard entropy flaw](/docs/learn/wallets/coldcard-entropy-incident/) made single-signature Coldcard wallets brute-forceable and about $116 million was drained, while multisig wallets with one weak Coldcard key lost nothing, because the other vendors' keys held.

## What does multisig cost you?

| Advantages | Disadvantages |
|---|---|
| A thief needs more than one key | More to back up and look after: several seeds plus the descriptor |
| One key can be lost without losing the funds | Larger transactions, so higher fees |
| Keys can be placed for inheritance | Spending needs two devices, so it is slower |
| Several people can be required to agree on a spend | Recovery needs the descriptor as well as the seeds |

:::danger Multisig can lose funds if it is mismanaged
Back up the wallet descriptor, not only the seed phrases, and test a full recovery before depositing anything significant. If you are not yet comfortable with a single-signature hardware wallet, master that first.
:::

## When is multisig worth it?

Multisig suits significant holdings you would be devastated to lose, long-term storage you rarely spend from, business funds that need several approvals, and inheritance planning, and it assumes you have several secure places to keep keys. It is unnecessary for amounts under roughly $10,000, for spending money, and for anyone still learning basic self-custody, where the added complexity is itself a risk. [Choose your setup](/docs/learn/fundamentals/choosing-your-path/) puts the threshold for recommending it at about $100,000.

## What are the parts of a multisig setup?

### Hardware wallets

Each key lives on its own hardware wallet. Use devices from different manufacturers (for example Jade Plus, Keystone 3 Pro and Trezor Safe 5) so that one vendor's flaw cannot reach the funds; the [comparison](/docs/reference/hardware-wallet-comparison/) covers which devices suit multisig.

### Coordinator software

Coordinator software, such as [Sparrow](https://sparrowwallet.com/) or Nunchuk, holds no private keys. It creates the multisig wallet from the devices' xpubs, generates receive addresses, builds unsigned transactions and combines the signatures.

### The wallet descriptor

The **wallet descriptor** is a line of text that defines the multisig wallet: every key's xpub and fingerprint, the M-of-N rule, the script type and the derivation paths. Without it you cannot rebuild the wallet, even with every seed phrase, because a seed alone does not say which other keys it was combined with. Store a copy of the descriptor with each seed backup; it is not secret enough to spend with, but it does reveal your balance and history to whoever reads it.

## Which configuration should you choose? {#choosing-your-configuration}

For most individuals, 2-of-3 is the right balance: any one key can be lost or stolen without losing the funds, there are three devices and three backups to manage, and fees are lower than for larger quorums.

3-of-5 suits very large holdings, organisations and families spread across places. Two keys can be lost or stolen without losing the funds, but there are five devices to buy, five seed phrases to secure, higher fees and more coordination for every spend.

2-of-2 is not recommended for most people. It has no redundancy: lose one key and the funds are gone. Use it only for specific shared-control arrangements where both parties will always be available.

## Should you run multisig yourself or use collaborative custody?

Collaborative custody services hold one key of a multisig for you, while you hold the others, so they cannot spend without you but can help you recover or pass the funds on.

<div class="fixed-width-table">

| Service | Model | You hold | They hold |
|---------|-------|----------|-----------|
| Unchained | 2-of-3 | 2 keys | 1 key |
| Casa | 2-of-3 or 3-of-5 | 2 or more keys | 1 key |
| Nunchuk | Flexible | Your choice | Optional |

</div>

All three charge for their services; check their current pricing.

<div class="fixed-width-table">

| | Running it yourself | Collaborative custody |
|--------|--------------|----------------------|
| Technical skill needed | High | Low to medium |
| Privacy | Full | The provider sees your balances |
| Help available | Community forums | Professional support |
| Cost | The hardware, once | A subscription |
| Recovery | Entirely on you | The provider can help |
| Suits | Technical users | Beginners and busy people |

</div>

If you are new to multisig, collaborative custody is a reasonable way to learn it. If you are technical and value privacy, run it yourself with Sparrow. If the holdings are significant and you are not technical, collaborative custody is worth what it costs.

## What mistakes do people make with multisig?

| Mistake | What goes wrong | What to do instead |
|---|---|---|
| Not backing up the wallet descriptor | All three seed phrases survive, but the wallet cannot be rebuilt | Keep a copy of the descriptor, printed or on a file, with each seed backup |
| Storing several seeds together | One theft or fire reaches two keys | Keep each seed in a different place |
| Using one hardware wallet brand for every key | One firmware flaw affects every key | Mix manufacturers, for example Jade, Trezor and Keystone |
| Not testing recovery | The backup turns out to be incomplete when it is needed | Rehearse a full recovery with a small amount first |
| Overcomplicating it | A 5-of-7 across three continents with timelocks that nobody can operate | Start with 2-of-3 |
| Not checking addresses on the devices | Malware shows a fake address on the computer | Check every receive address on at least two hardware wallets' screens |

## What should you check before depositing?

- Each hardware wallet is from a different manufacturer (recommended).
- Each seed phrase is backed up on metal.
- The seed phrases are stored in separate places.
- The wallet descriptor is backed up, with copies in different places.
- A receive address has been checked on at least two of the hardware wallets.
- A test transaction has been received and sent.
- A full recovery from the backups has been rehearsed.
- Every hardware wallet has the multisig wallet registered.

The setup itself is covered in three guides: [hardware setup](/docs/learn/wallets/multisig/hardware-setup/), [the Sparrow setup](/docs/learn/wallets/multisig/sparrow-setup/) and [backup and recovery](/docs/learn/wallets/multisig/backup-recovery/).

## Common questions

### What is a Bitcoin multisig wallet?

A multisig wallet requires more than one key to spend, written as M-of-N: M signatures out of N total keys. A 2-of-3 wallet has three keys and any two can authorise a spend, so losing one key does not lose the funds and stealing one key does not steal them. Each key normally lives on a separate hardware wallet in a separate location.

### Do you need multisig for your bitcoin?

Not for everything. Multisig suits significant holdings you would be devastated to lose, long-term storage, business funds needing several approvals and inheritance planning, and it assumes you have several secure storage locations. It is unnecessary for amounts under roughly $10,000, for spending money and for anyone still learning basic self-custody, where the added complexity is itself a risk of loss.

### What multisig configuration should you use?

2-of-3 is the most popular choice for individual self-custody: it tolerates the loss of any single key while requiring an attacker to compromise two. 3-of-5 suits very large holdings and organisations. 2-of-2 gives shared control with no fault tolerance, so a single lost key is fatal. Use hardware wallets from different manufacturers so that no single vendor's mistake can reach your funds.

### Does multisig protect against a hardware wallet vulnerability?

Yes, and the 2026 Coldcard entropy incident demonstrated it. Where one key in a 2-of-3 wallet was a weak Coldcard seed, the attacker still could not spend, because a second signature was needed. This is the failure multisig exists for. The weak key should still be replaced, but the funds were never at risk.
