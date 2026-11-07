---
sidebar_position: 4
title: "Why Holding Your Own Bitcoin Matters"
description: "What happens to bitcoin left on an exchange, from Mt. Gox and FTX to the Bitfinex hack and the $6.3 billion Binance hack of 2026, and when to withdraw yours."
keywords: ["hold bitcoin", "exchange risk", "not your keys", "self custody", "bitcoin ownership", "binance hack", "bitfinex hack", "exchange hack"]
tags: ["self custody", "bitcoin", "exchange", "getting started"]
slug: /learn/fundamentals/holding-bitcoin
date: "2026-01-15"
---

# Why holding your own bitcoin matters

Bitcoin left on an exchange belongs to the exchange in every way that counts: the exchange holds the private keys, so it decides when you can withdraw, and if it fails you become one of its creditors. Holding your own bitcoin, in a wallet whose keys only you control, is the only arrangement in which an exchange's freeze, hack or bankruptcy cannot touch your coins. Move bitcoin off the exchange once it is an amount you would be upset to lose, and into a hardware wallet once it is worth more than the device.

"Not your keys, not your coins" describes this exactly. An exchange balance is the company's promise to give you bitcoin when you ask. While the promise holds, a balance and real bitcoin look identical on screen; when it fails, the difference is the only thing that matters.

## What happens to bitcoin you leave on an exchange?

The exchange holds the keys, so the exchange signs every transaction that moves the coins, and nothing moves without it. That means:

- A withdrawal can be paused at any time, for any reason the exchange considers good enough.
- An account can be frozen by a compliance team, a court order or a fraud review that takes weeks to clear.
- [A hack of the exchange](#what-happens-when-an-exchange-is-hacked) takes customer coins with it, however careful the customer was.
- A bankruptcy turns every balance into a claim that takes years to settle and is usually paid in dollars.

None of this requires bad intent. It is how a custodial platform works.

## Which exchanges have failed with their customers' bitcoin?

These were large, well-known platforms, trusted by hundreds of thousands of customers or more on the day they stopped paying out.

<div class="fixed-width-table">

| Platform | Year | What happened | What customers lost |
|----------|------|---------------|-------------|
| Mt. Gox | 2014 | The largest bitcoin exchange of its time halted withdrawals and filed for bankruptcy after years of theft it had not detected | About 850,000 BTC reported missing; repayments began in 2024 |
| QuadrigaCX | 2019 | Canada's largest exchange collapsed after its founder died. The Ontario Securities Commission found in 2020 that he had run it as a fraud and that its wallets had been empty since April 2018 | At least C$169 million of the C$215 million owed to 76,000 clients |
| Celsius | 2022 | The lending platform froze withdrawals in June and filed for bankruptcy in July | About $4.7 billion owed to customers |
| FTX | 2022 | Customer deposits had been used by its sister trading firm, Alameda Research; its founder was convicted of fraud in 2023 | About $8 billion missing |
| BlockFi | 2022 | Paused withdrawals when FTX collapsed and filed for bankruptcy later that month | Liabilities of $1 billion to $10 billion, by its own filing |

</div>

Every customer of these platforms had one thing in common: none of them held their own keys. Bitcoin they had withdrawn to their own wallets was untouched by any of these collapses.

## What does a bankruptcy pay back?

Usually dollars, at the price on the day the company filed. The FTX bankruptcy valued customers' crypto at its price on 11 November 2022, when bitcoin traded at about $17,000, and paid those dollar amounts back from 2025, when bitcoin was worth several times as much. Celsius, BlockFi and Voyager used the same petition-date method. A customer who is "repaid in full" can still end up with a fraction of the bitcoin they had.

## What happens when an exchange is hacked?

When an exchange is hacked, the thief takes coins from wallets the exchange controls, and the exchange then decides who carries the loss: it can pay it from its own money, spread it across every customer's balance, or fail, as Mt. Gox did in 2014. Customers get no say, and cannot withdraw while the decision is made. Bitfinex spread its 2016 loss across its customers; Binance paid its 2026 loss itself. Bitcoin that customers had already withdrawn to their own wallets was beyond the reach of both thieves.

<div class="fixed-width-table">

| Exchange | Date | What was stolen | Who carried the loss |
|----------|------|-----------------|----------------------|
| Bitfinex | 2 Aug 2016 | 119,754 BTC, about $72 million at the time | Every customer: each account was cut by 36%, including accounts the thief never touched, and repaid in dollars or company shares by April 2017 |
| Binance | 29 Oct 2026 | About $6.3 billion, including 18,270 BTC | Binance, from its own funds; withdrawals stopped until 1 November |

</div>

## What happened in the 2026 Binance hack?

On 29 October 2026 attackers took about $6.3 billion in cryptocurrency from Binance's hot wallets, the online wallets that pay out withdrawals, in the largest cryptocurrency theft on record: about four times the $1.5 billion taken from Bybit in February 2025. TRM Labs, a blockchain analysis firm, found that most of it left on ten blockchains in about 20 minutes from 20:05 UTC, including 18,270 BTC sent from a single Binance bitcoin hot wallet. On 31 October the FBI attributed the theft to TraderTraitor, a North Korean state hacking group; North Korea denies it.

The attackers broke no cryptography and, on the evidence published so far, stole no private keys: they made Binance's own signing service sign their transactions. Binance's account, given on 3 November, is that they reached that service through its staff over several months. In June an engineer on the wallet team, searching the web for a popular AI coding tool, installed a tampered copy. In September attackers posing as recruiters put another engineer through job interviews that ended in a "coding exercise" carrying malware. From there they moved between engineers' machines through an internal AI tool until they reached the system that authorises Binance's wallet transactions.

Binance stopped withdrawals the same day, said it would cover every loss from its SAFU fund and company funds, and reopened withdrawals on 1 November. As of 3 November 2026 it said it had replaced 98% of the stolen assets. Token issuers and other services froze or seized about $2.85 billion of what was taken, according to Elliptic. None of it was bitcoin, because bitcoin has no issuer that can freeze it, the same property that means nobody can freeze bitcoin you hold yourself. As of 6 November 2026 the 18,270 BTC sat unmoved in 19 addresses.

Binance's customers were spared because Binance chose to pay and could afford $6.3 billion. A customer could check neither in advance, and none of them could withdraw until 1 November.

Sources: [TRM Labs](https://www.trmlabs.com/resources/blog/north-korea-steals-usd-6-36-billion-from-binance-in-the-largest-hack-in-history), [Elliptic](https://www.elliptic.co/insights/how-north-korea-is-laundering-the-6-4-billion-stolen-from-binance/), [FBI](https://www.fbi.gov/investigate/cyber/alerts/2026/north-korea-responsible-for-6-billion-binance-attack), [CNBC interview with Binance co-CEO Richard Teng](https://www.cnbc.com/2026/11/03/binance-co-ceo-teng-says-hackers-used-fake-job-interviews-to-steal-6point3-billion-in-crypto.html)

## What happened in the 2016 Bitfinex hack?

On 2 August 2016 a hacker who had broken into Bitfinex's servers used the exchange's own keys and credentials to send 119,754 BTC out of its wallets in more than 2,000 transactions. The coins were worth about $72 million at the time, roughly $600 each, and were about 36% of everything Bitfinex held. Ilya Lichtenstein admitted in 2023 that he carried out the hack, and was sentenced to five years in prison in November 2024.

Bitfinex could not absorb the loss, so it spread it over every customer: each account was cut by 36%, including accounts the thief never touched, and each customer received one BFX token, worth $1, for every dollar taken off. Some customers swapped their tokens for shares in Bitfinex's parent company; Bitfinex bought back the rest at $1 each, the last of them on 3 April 2017.

Bitfinex's customers were made whole in dollars, valued at the time of the hack, not in bitcoin. US investigators seized 94,643 of the stolen bitcoin in February 2022, and because Bitfinex had already repaid its customers, the government, the defendants and the exchange agreed that Bitfinex was the only victim. In January 2025 the government asked the court to return the coins, then worth about $9.3 billion, to Bitfinex. A customer whose balance was cut in 2016 got dollars back; the bitcoin itself is claimed by the exchange.

Sources: [Bitfinex's restitution letter in US v. Lichtenstein](https://storage.courtlistener.com/recap/gov.uscourts.dcd.257738/gov.uscourts.dcd.257738.175.1.pdf), [US Department of Justice](https://www.justice.gov/usao-dc/pr/bitfinex-hacker-sentenced-money-laundering-conspiracy-involving-billions-stolen)

## Does exchange insurance protect your bitcoin?

Only partly, and rarely against the failures that have cost customers most. Where exchanges publish their insurance terms, the cover is a fraction of customer holdings and is typically for theft from the exchange's online wallets, not for internal fraud, mismanagement or bankruptcy. A successful claim is paid in money, at the price on the day of the incident, after a process that can take years. Insurance is a partial cushion for one kind of failure, not a replacement for holding the keys.

## Isn't losing your own keys a bigger risk?

It is the one objection to self-custody that deserves a serious answer. People do lose bitcoin they hold themselves, almost always by storing the seed phrase somewhere fragile and losing it, or by writing it down wrongly and never checking.

The answer is a handful of backup habits, not handing the keys to someone else:

1. Write the seed phrase down carefully, word by word, and copy it onto something durable; a stamped steel plate survives the fire and water that destroy paper.
2. Keep the backup where only you can reach it, and for larger amounts keep a second copy in a separate place, so a single fire or flood cannot take both.
3. Test the backup by restoring the wallet from it before putting in any significant amount. The [backup verification guide](/docs/wallet-setup/backup-verification/) walks through it.

With those three in place, self-custody is safer than leaving bitcoin on even a well-run exchange, because the remaining risks are ones you control.

## Why does self-custody matter for bitcoin as a whole?

Bitcoin was designed to work without trusted intermediaries. The first sentence of the 2008 whitepaper says so:

> "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."
>
> Satoshi Nakamoto, *Bitcoin: A Peer-to-Peer Electronic Cash System*

When most bitcoin sits on exchanges, the system re-creates the structure it was built to avoid: a few companies between users and their money, each of which can be regulated, hacked or pressured like a bank. Every coin held in self-custody is one that no such company controls.

## When should you move bitcoin off an exchange?

There is no fixed threshold, but these are the points at which we would act:

| What you hold | What to do |
|---|---|
| A small amount, bought to learn how bitcoin works | Leaving it on a well-known exchange for a short time is a defensible start |
| A few hundred dollars or more | Learn self-custody now and move it to a wallet you control |
| An amount you would be upset to lose | Move it, and once it is worth more than the device, use a hardware wallet |
| A life-changing amount | A hardware wallet with a tested backup at minimum, and consider [multisig](/docs/learn/wallets/multisig/) |

Learn it before you need it. Waiting for an exchange to fail is the one way of learning this that costs money.

## How do you move bitcoin into self-custody?

1. [Assess your threat model](/docs/learn/fundamentals/threat-models/) to decide how much security you need.
2. [Choose your setup](/docs/learn/fundamentals/choosing-your-path/) to match it without overbuilding.
3. Follow the [hardware wallet setup guide](/docs/wallet-setup/hardware-wallet/).
4. [Verify the backup](/docs/wallet-setup/backup-verification/) by restoring from it.
5. Run the [before you deposit checklist](/docs/wallet-setup/before-you-deposit/), then withdraw a small test amount before the rest.
