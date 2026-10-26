# Wallet Recovery Troubleshooting

> Common problems when recovering a Bitcoin wallet and how to solve them. Empty wallet after recovery, wrong addresses, and other troubleshooting steps.

Source: https://selfcustodylabs.com/docs/reference/faq/recovery-troubleshooting/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

When a wallet restored from a seed phrase shows a zero balance or unfamiliar addresses, the bitcoin is almost always still there: the restoring wallet is looking in the wrong place. Check, in this order, that it uses the same script type and derivation path as the original (the first characters of your old addresses tell you which), the same passphrase if you used one, the same account number, and a large enough gap limit, and that the seed is a BIP39 seed rather than Electrum's own format. Only if all of that fails is the seed itself likely to be wrong.

## Why does a restored wallet show a zero balance?

### The derivation path or script type is different

Wallets derive addresses along a [derivation path](https://selfcustodylabs.com/docs/learn/keys/derivation-path/), and the path depends on the address type. Restoring with a different one shows a different, empty set of addresses.

| Your old addresses started with | Script type to choose | Derivation path |
|--------------------------------|----------------------|---|
| `1` | Legacy (P2PKH, BIP44) | `m/44'/0'/0'` |
| `3` | Nested segwit (P2SH-P2WPKH, BIP49) | `m/49'/0'/0'` |
| `bc1q` | Native segwit (P2WPKH, BIP84) | `m/84'/0'/0'` |
| `bc1p` | Taproot (P2TR, BIP86) | `m/86'/0'/0'` |

In Sparrow, create a new wallet, enter the seed, and choose the script type that matches; if it is still empty, try the others. Most current wallets, including Trezor Suite and Electrum (for BIP39 seeds), default to native segwit (`bc1q`); older wallets often used legacy.

### A passphrase was used

If you set a passphrase, the seed phrase alone opens a different, empty wallet. Restore again with the passphrase enabled (in Sparrow, tick the passphrase option when entering the seed). Passphrases are case-sensitive and every space counts: `MyPassphrase` and `mypassphrase` open different wallets. See [what counts as a different passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/#what-exactly-counts-as-a-different-passphrase).

### A word is wrong

One wrong word gives a completely different wallet, and occasionally a wrong word still passes the checksum. Check each word against the [BIP39 word list](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt). Misspellings such as "advise" for "advice" or "latter" for "letter" are easy to spot, because every word on the list is identified by its first four letters and the near-misses are not on it.

### The wallet has not looked far enough

Wallets stop scanning after a run of unused addresses, usually 20, called the gap limit. If you generated many addresses without using them, later funds may not be found. Raise the gap limit (in Sparrow, in the wallet's settings under Advanced) to 100 or more and rescan.

### The seed is an Electrum seed

Electrum creates its own kind of seed by default, from the same word list but with a different checksum, and it does not restore in BIP39 wallets (they reject it as invalid, or the result is empty). If the seed came from Electrum, restore it in Electrum, choosing its own seed type rather than BIP39.

## Why are the addresses different from the ones you expected?

Check the script type first, using the table above. Then check the account number: some wallets use several accounts under one seed, at `m/84'/0'/0'`, `m/84'/0'/1'`, `m/84'/0'/2'` and so on, and restoring account 0 shows none of account 1's addresses. When importing, set the account number (the third number in the path) to the one you used.

## Why does the wallet reject the seed phrase?

A rejected seed has failed its checksum, which means at least one word is wrong or in the wrong place. Check each word against the list, check the order, and check the number of words, which must be 12, 15, 18, 21 or 24. Check the language too: BIP39 has word lists in several languages, and a seed made in a Spanish or Japanese wallet needs the same language to restore. An Electrum seed is also rejected by BIP39 wallets (see above).

## Why were only some of the funds found?

You may have received bitcoin to more than one address type, for example some to legacy addresses and some to native segwit ones, or used more than one account. In Sparrow, create a wallet for each script type, and for accounts 0, 1 and 2, from the same seed, and check each balance. Funds from transactions that have not confirmed appear only once they confirm; check their status on [mempool.space](https://mempool.space).

## What if the hardware wallet shows a different address from the software?

Treat it as a security problem until proven otherwise, and never send to an address the hardware wallet does not display. The cause may be malware altering the address on the computer, a different derivation path in the software, or a hardware wallet holding a different seed from the one you expect. Check you have the right wallet file, check the paths match, and pair the device with the software again. If the addresses still differ, do not transact.

## How do you recover a multisig wallet?

A multisig needs more than seed phrases: the wallet descriptor (or configuration file), which records every key's xpub and the M-of-N rule. Find your descriptor backup and import it; in Sparrow, use `File`, `Import Wallet`. The order of keys matters in older multisig setups, so rebuild from the original descriptor rather than by hand. [Multisig backup and recovery](https://selfcustodylabs.com/docs/learn/wallets/multisig/backup-recovery/) covers the whole process.

## What should you check, in order?

1. Every word against the BIP39 list, and the word count.
2. Whether a passphrase was used.
3. Each script type: legacy, nested segwit, native segwit, Taproot.
4. Account numbers 0, 1 and 2.
5. A gap limit of 100 or more.
6. Whether the seed is an Electrum seed.
7. A second wallet program, to rule out the first.
8. For multisig, the wallet descriptor.

## When should you get help?

Ask for help only after working through the checklist, and only from people and tools that never need your seed phrase: open-source tools you run yourself, or the community forums of your wallet. Most "bitcoin recovery services" are scams; read [recovery scams](https://selfcustodylabs.com/docs/reference/faq/recovery-scams/) before contacting anyone.

To avoid all of this next time, write down which wallet software you used, which script type and derivation path, and whether you used a passphrase, keep that note with your backup, and [test the backup](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) before relying on it.

## Common questions

### Why does a recovered wallet show a zero balance?

The usual cause is a different derivation path or address type from the original wallet. Restore with the path and script type that match your old addresses (legacy, nested segwit, native segwit or Taproot). If you used a passphrase, you must enter exactly the same one to reach the original wallet.

### Why does a recovered wallet show different addresses than expected?

Different wallets use different default derivation paths, so restoring a seed in another wallet can produce valid addresses you do not recognise. Check the derivation path and script type, and match them to what your original wallet used.

### What if a recovery finds only some of your funds?

The rest may be under a different account number, derivation path or passphrase. Check every standard path, raise the gap limit above the default of 20, and make sure you have not used more than one passphrase with the same seed.

### When should you get professional help with wallet recovery?

Only after checking derivation paths, address types, gap limits and passphrases yourself. Use reputable open-source tools, and avoid any service that asks for your seed phrase. For a multisig, use the original wallet software and your own backups before contacting anyone.
