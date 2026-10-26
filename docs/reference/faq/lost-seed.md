# What Happens If You Lose Your Seed Phrase?

> The hard truth about losing your Bitcoin seed phrase. What you can do, what you can't do, and how to prevent this from happening to you.

Source: https://selfcustodylabs.com/docs/reference/faq/lost-seed/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

If you lose your seed phrase but your wallet device still works, nothing is lost yet: create a new wallet with a new seed, back it up properly, and move everything to it now. If you have lost the seed phrase and the device is also lost, broken or wiped, the bitcoin is almost certainly gone for good. There is no backdoor, support line or recovery service that can bring it back, and anyone who offers to is very likely a scammer. A few words missing from a seed you still mostly have is the one case that can sometimes be recovered, with open-source tools on your own computer.

## Why can't a lost seed phrase be recovered?

A seed phrase is not a password to an account held somewhere; it is the source of the private keys themselves. Those keys are the only thing that can sign a transaction moving your bitcoin, and nobody else has them: not Trezor, not Ledger, not an exchange. The network does not know who you are, only whether a signature is valid. The property that stops anyone taking your bitcoin without your keys is the same one that stops anyone recovering it for you.

## What can you do in each situation?

### The seed is lost, but the device still works

1. Create a new wallet with a new seed phrase straight away.
2. Back the new seed up properly, and test it.
3. Move all the bitcoin from the old wallet to the new one.
4. Never use the old seed again, even if you find it later; while it was lost, someone else may have found it.

Do it now, because the device could fail at any time.

### The seed and the device are both lost

The bitcoin is almost certainly unrecoverable. Before accepting that:

1. Search thoroughly: other copies you may have made, a safe deposit box, family, another property.
2. Look for partial backups: do you have some of the words (see below)? Did you ever type the seed somewhere you should not have, on an old device or in notes?
3. Check software wallet backups: some software wallets keep encrypted backups, sometimes in cloud storage. This does not apply to hardware wallets.

If none of that works, the loss is permanent.

### Some words are missing or unreadable

A partly remembered seed can sometimes be recovered by trying every possible word in the gaps. How feasible that is depends on how many words are missing, whether you know their positions, and whether you know one of the wallet's addresses to test candidates against:

| Missing words (positions known) | Candidates | Realistic? |
|---------------|------------|------------|
| 1 | 2,048 | Yes, in seconds |
| 2 | About 4.2 million | Yes, in minutes to hours on a home computer |
| 3 | About 8.6 billion | Possibly, with days of graphics-card time |
| 4 or more | 17.6 trillion and up | Not for most people |

The checksum cuts the candidates that need full testing by 16 times for a 12-word phrase and 256 times for a 24-word one. Unknown positions, or no known address to test against, make each row much harder. BTCRecover is an open-source tool for this, run on your own computer. Never give a partial seed to anyone offering to do it for you.

### You forgot the passphrase

A passphrase opens a completely different wallet, and one wrong character gives a different one. If you remember roughly what it was, trying variations (with BTCRecover, for example) can work; if you have no idea, recovery is effectively impossible, for the same reason guessing missing words is.

## How do recovery scams work?

**Danger: Almost every bitcoin "recovery service" is a scam**
They ask for your partial seed phrase and take whatever is left, or ask for a fee up front and vanish. They claim special technology they do not have and show testimonials they invented. No service can recover a fully lost seed phrase.

If someone contacts you offering recovery, they found you because you posted about your loss, which scammers watch for, and they will sound professional and sympathetic. Legitimate help looks different: open-source tools that you run yourself, honesty about the limits, and no request for your seed phrase. [Recovery scams](https://selfcustodylabs.com/docs/reference/faq/recovery-scams/) covers the tactics.

## How do people lose seed phrases?

| Cause | Examples |
|---|---|
| Poor backups | Paper that was damaged or thrown away, a single copy, a backup never tested, a photo on a phone that was later lost |
| Life events | A fire or flood, theft, moving house and losing track, the death of a relative who held a copy |
| Habits of mind | "I'll remember where I put it", "I'll make a proper backup later", too many wallets to keep track of |

## What should you do now to avoid it?

1. Find your seed backup today, check it is complete and legible, and [test a recovery](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) on a separate device.
2. Make copies, on [metal](https://selfcustodylabs.com/docs/learn/keys/random/#step-6-back-up-on-metal), and keep them in separate places.
3. Keep a secure record of where the backups are, plan for [inheritance](https://selfcustodylabs.com/docs/advanced/inheritance-planning/), and do not hide them so well that you forget them.
4. Keep the setup simple enough to manage; complexity creates its own ways to fail.

If you have already lost bitcoin, do not chase it through "recovery" services. Many early bitcoiners lost coins to poor backups; it is a hard lesson, and the practices above stop it happening again.

## Common questions

### Can you recover your bitcoin if you lost your seed phrase?

If your seed phrase is lost and your hardware wallet is also lost, broken or wiped, your bitcoin is permanently inaccessible. There is no backdoor, no customer support and no recovery service that can recover funds without the seed phrase. The only routes are finding the original backup, or an unwiped device that still holds the keys.

### Why is it impossible to guess a lost seed phrase?

A 24-word BIP39 seed holds 256 bits of entropy, so guessing it means trying up to 2^256 combinations, more than the number of atoms in the observable universe. No computer can do that in any practical time, and quantum computers would at best halve the effective bits, which still leaves an impossible search.

### Are seed phrase recovery services legitimate?

No. Any service claiming to recover a lost seed phrase from a hardware wallet, an exchange or an address is a scam, because recovery without the seed is impossible. Legitimate help is limited to cases such as finding a few missing words or a partly remembered passphrase with open-source tools you run yourself, or repairing a damaged device that still holds the keys.

### What should you do now to avoid losing your seed phrase?

Write it on metal rather than paper, keep copies in at least two separate places, test a recovery before depositing significant funds, and never store it digitally. If you cannot afford to lose access through a single lost backup, consider a 2-of-3 multisig.
