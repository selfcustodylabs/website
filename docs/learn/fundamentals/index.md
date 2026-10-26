---
sidebar_label: "Overview"
title: "Start Here: Bitcoin Self-Custody"
description: "New to Bitcoin self-custody? Start here. Learn what self-custody means, assess your needs, and find the right path for your situation."
keywords: ["bitcoin self custody", "getting started", "beginner bitcoin", "start here", "bitcoin basics"]
tags: ["getting started", "beginner", "self custody"]
slug: /learn/fundamentals
sidebar_position: 1
---

# Start here: Bitcoin self-custody

Self-custody means holding the private keys to your own bitcoin, so that no exchange, bank or company can freeze it, lose it or spend it. This site shows how to do that safely: understanding what you are protecting against, making a seed phrase, setting up a hardware wallet, testing the backup, and then adding a passphrase, multisig or your own node when the amount justifies it. If your bitcoin is on an exchange today, the [hardware wallet setup guide](/docs/wallet-setup/hardware-wallet/) is the step that matters most; if you are new to bitcoin, read the pages below in order.

## What is self-custody?

Self-custody is holding bitcoin by controlling its private keys yourself, instead of holding a claim on bitcoin that an exchange keeps for you. An exchange balance is the company's promise to pay you bitcoin when you ask. On the blockchain, the bitcoin belongs to whoever controls the keys, and on an exchange that is the exchange.

| | Exchange account | Self-custody |
|---|---|---|
| Who holds the keys | The exchange | You |
| Can the funds be frozen? | Yes, by the company or by a court order served on it | No |
| Withdrawing or sending | Needs the company's approval | Needs nobody's approval |
| If the company fails or is hacked | You become one of its creditors | Your bitcoin is unaffected |
| If you lose your password or backup | Support can reset the password | The bitcoin is gone |

The last row is the price of self-custody: there is no password reset and no way to reverse a payment. [What is self-custody?](/docs/learn/fundamentals/what-is-self-custody/) covers it in full, including the exchange failures that made the case for it.

## What can go wrong with self-custody?

Self-custody moves the risk from a company to the way you handle your seed phrase, the 12 or 24 words that back up the wallet. The mistakes that lose bitcoin are permanent:

- Losing the seed phrase and the device together. Nobody can restore the wallet.
- Showing the seed phrase to anyone, including "support staff" or a website that asks for it. Whoever has the words can spend the bitcoin.
- Trusting a backup that was never tested. A miswritten word is discovered only when the device fails, which is too late.

The setup guides are written to prevent all three, and [backup verification](/docs/wallet-setup/backup-verification/) exists for the last one.

## Where should you start?

| Your situation | Start with |
|---|---|
| New to bitcoin | [What is Bitcoin?](/docs/learn/fundamentals/what-is-bitcoin/) |
| Your bitcoin is on an exchange | [What is self-custody?](/docs/learn/fundamentals/what-is-self-custody/), then [set up a hardware wallet](/docs/wallet-setup/hardware-wallet/) |
| You already use a hardware wallet | [Verify your backup](/docs/wallet-setup/backup-verification/), then consider [running a node](/docs/bitcoin-node/) |
| You hold a life-changing amount | [Multisig](/docs/learn/wallets/multisig/) and [air-gapped signing](/docs/learn/wallets/air-gapped-wallets/) |
| You need privacy, or face a higher risk | [Why privacy matters](/docs/learn/privacy/why-privacy-matters/) |

## How much security do you need?

The right setup depends on how much you hold, who might come after it, and how much technical work you are willing to do. Most people need one hardware wallet with a tested backup; the rest is for larger amounts or specific threats.

| If you are protecting | Start with |
|---|---|
| An amount you could lose without real harm | A software wallet on your phone |
| Savings you would miss | A hardware wallet |
| A life-changing amount | Multisig, with keys on two or three devices kept in different places |

| If the threat is | Add |
|---|---|
| Malware, phishing or an exchange failing | Nothing: a hardware wallet covers these |
| Someone targeting you personally | Air-gapped signing, multisig, and not telling people what you hold |
| A government or an attacker with similar resources | All of the above, plus [operational security](/docs/security/operational-security/) |

If you are not technical, start with one hardware wallet and add layers as you learn; nothing on the advanced pages needs doing on the first day. [Assess your threat model](/docs/learn/fundamentals/threat-models/) works through these questions in detail.

## Which reading path fits you?

Each path is a short list of pages in order. Pick the one that matches where you are now.

### Path 1: new to bitcoin

For someone who wants to understand bitcoin before holding any. About two to three hours of reading.

1. [What is Bitcoin?](/docs/learn/fundamentals/what-is-bitcoin/): what it is and why it works without a company behind it
2. [What is self-custody?](/docs/learn/fundamentals/what-is-self-custody/): why the keys are what you own
3. [Why holding your own bitcoin matters](/docs/learn/fundamentals/holding-bitcoin/): the risks of leaving it on an exchange
4. [Private keys explained](/docs/learn/keys/intro/): the number that controls the bitcoin
5. [Seed phrases](/docs/learn/keys/seed/): how that number becomes words you can write down

### Path 2: your first wallet

For someone who understands the basics and is setting up a first wallet. Two to four hours, including the setup.

1. [Hardware wallets explained](/docs/learn/wallets/hardware-wallets/): what the device protects you from
2. [Hardware wallet setup](/docs/wallet-setup/hardware-wallet/): the setup, step by step
3. [Backup verification](/docs/wallet-setup/backup-verification/): prove the backup restores the wallet
4. [Before you deposit](/docs/wallet-setup/before-you-deposit/): the checks to run before sending real money

### Path 3: stronger security

For someone already holding their own keys who wants to take more trust out of the setup. One to two days of projects.

1. [Seed generation with dice](/docs/learn/keys/random/): make a seed whose randomness you can check
2. [Passphrases](/docs/learn/keys/passphrase/): protect the seed phrase against being found
3. [Run your own node](/docs/bitcoin-node/): check your own transactions instead of asking someone else's server
4. [UTXO management](/docs/learn/privacy/utxo-management/): keep fees and address links under control

### Path 4: maximum security

For large holdings or a higher threat level. Several days to a few weeks.

1. [Why privacy matters](/docs/learn/privacy/why-privacy-matters/): what an observer can learn from the blockchain
2. [Multisig](/docs/learn/wallets/multisig/): remove the single point of failure
3. [Air-gapped wallets](/docs/learn/wallets/air-gapped-wallets/): sign on a device that never touches a network
4. [CoinJoin](/docs/learn/privacy/coinjoin/): break the link between your coins' past and present

## What principles hold across every guide?

### Verify instead of trusting

Check every receive address on the hardware wallet's own screen, not on the computer's. Check firmware signatures before installing. Compare what this site says with the vendor's documentation and other sources; we get things wrong too.

### Go slowly

Mistakes with bitcoin are usually permanent, and the deadlines that push people into them are usually invented. Read a guide through before starting it, send a small test amount first, and treat anyone hurrying you as a warning sign.

### Assume your computer is compromised

A hardware wallet is designed for the case where the computer or phone it connects to is controlled by an attacker: the device shows the transaction on its own screen and signs it there. That protection only holds if the seed phrase never touches a connected device, so never type it, photograph it or store it in a password manager.

### Avoid single points of failure

One backup in one place can burn, flood or be found. Backups in separate places, and for larger amounts [multisig](/docs/learn/wallets/multisig/), mean that no single loss empties the wallet.

### Practise recovery

A backup you have never restored from is untested. Restore it once before depositing anything significant, using the [backup verification guide](/docs/wallet-setup/backup-verification/).

## Where can you ask a question?

The [glossary](/docs/reference/glossary/) defines the terms used across the site, and the [FAQ](/docs/reference/faq/) answers the common questions about seed phrases and recovery. If a guide is unclear or wrong, tell us on [Nostr](https://primal.net/p/nprofile1qqspxh8lqez8f9kt2cv7626rfax0phl8lu8tgt0jjjkwa6n8lhmt9qgxf4ey5) or [X](https://x.com/selfcustodylabs) and the page gets corrected.
