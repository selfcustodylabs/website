---
sidebar_position: 1
title: "Frequently Asked Questions"
description: "Common questions about Bitcoin self-custody, seed phrases, recovery, and security. Get answers to the questions that could save your Bitcoin."
keywords: ["bitcoin faq", "self custody questions", "bitcoin help", "seed phrase questions"]
tags: ["faq", "questions", "help"]
slug: /reference/faq
---

# Frequently asked questions

These are short answers to the questions people ask most about bitcoin self-custody, each linking to the page that covers it in full. The most urgent: if you lose your seed phrase and your device, the bitcoin is almost certainly gone; anyone offering to recover it for a fee is almost certainly a scammer; and a restored wallet showing zero is usually a settings problem, not lost funds.

## Common questions

### What happens if you lose your seed phrase?

If you lose your seed phrase and your hardware wallet is also lost, broken or wiped, your bitcoin is lost for good: there is no recovery mechanism. If the device still works, move the funds to a new wallet with a new seed straight away. That is why a backup is tested before money goes in; see [what if you lose your seed phrase](/docs/reference/faq/lost-seed/).

### Are bitcoin recovery services legitimate?

Almost never. Services that promise to recover lost or stolen bitcoin for a fee target people who have just lost money, and they take an upfront payment, or your seed phrase, and disappear. Legitimate help never needs your seed phrase. See [recovery scams](/docs/reference/faq/recovery-scams/).

### Why does a restored wallet show a zero balance?

Usually because the restoring wallet uses a different derivation path, address type or passphrase from the original, not because the bitcoin is gone. Check those settings first; [recovery troubleshooting](/docs/reference/faq/recovery-troubleshooting/) goes through them in order.

### Is your Coldcard seed affected by the 2026 entropy flaw?

If a Coldcard generated your seed between March 2021 and July 2026 without dice, treat it as compromised and move the funds to a new seed; updating the firmware does not fix an existing seed. Seeds made with 50 or more dice rolls, and seeds imported from elsewhere, were not affected. The [incident page](/docs/learn/wallets/coldcard-entropy-incident/) has the full table.

### Can someone steal your bitcoin if they know your address?

No. An address only lets people send you bitcoin; spending needs the private key, which comes from your seed phrase. An address does reveal its balance and history, though, which is why a new one is used for every payment.

### Do you need to run your own Bitcoin node?

It is not required, but it is recommended for privacy and verification. Without your own node, your wallet trusts a third-party server for blockchain data and tells it your addresses. See [why run your own node](/docs/learn/nodes/why-run-node/).

### What is a passphrase, and should you use one?

A passphrase, sometimes called the 25th word, is an optional extra secret combined with your seed phrase that opens a completely different wallet, so someone who finds the words alone finds nothing. If you forget it, the funds behind it are unrecoverable. It suits holdings of roughly $10,000 and more, once you are comfortable with your device; see the [passphrase guide](/docs/learn/keys/passphrase/).

### Which hardware wallet should you buy?

For a first device, the BitBox02 Nova or the Trezor Safe 5, which are the easiest to use safely. For security you can verify more of, the Jade Plus or Passport Prime, with a seed made from dice. Coldcard is not currently recommended after the 2026 entropy incident. Any of them is far safer than leaving bitcoin on an exchange; see the [comparison](/docs/reference/hardware-wallet-comparison/).

### Is it safe to buy a hardware wallet on Amazon?

Buy from the manufacturer, or a reseller listed on the manufacturer's site. Tampered devices have been sold through marketplaces. If you bought elsewhere, run the maker's authenticity check, look for signs of tampering, and never accept a device that arrives with a seed phrase already set up.

### How do you know your hardware wallet is genuine?

Check the packaging for signs of opening and run the manufacturer's authenticity check during setup; Trezor Suite and the BitBoxApp, for example, check the device's attestation. A device that fails the check, or arrives already set up, should not be used. See [hardware wallet setup](/docs/wallet-setup/hardware-wallet/#step-1-verify-the-device-is-genuine).

### How much bitcoin justifies self-custody?

Any amount you would be upset to lose. A hardware wallet costs about $80 to $250, which is worth it for holdings above roughly $1,000; below that, a phone wallet is fine while you learn. See [choose your setup](/docs/learn/fundamentals/choosing-your-path/).

### What is multisig, and do you need it?

Multisig requires several keys to spend, such as any two of three, which removes single points of failure but adds complexity. We recommend it for holdings over about $100,000 or for people with higher security concerns; see [multisig](/docs/learn/wallets/multisig/).

### What if you sent bitcoin to the wrong address?

Bitcoin transactions cannot be reversed. If the address belongs to someone you know, ask them to send it back; otherwise the funds are almost certainly gone. That is why every address is checked on the hardware wallet's screen before sending.

### How often should you verify your backup?

Fully when you set up a wallet, again after making a metal copy, after any change to the backup, and before major life changes; check it is still readable every 6 to 12 months. See [backup verification](/docs/wallet-setup/backup-verification/).

### How do you pass bitcoin on to your family?

With a plan your heirs can follow: where the backups are, what is needed to recover (including any passphrase or multisig descriptor), and instructions written for someone who is not technical. Bitcoin whose owner dies without sharing access is lost for good. See [inheritance planning](/docs/advanced/inheritance-planning/).
