# Bitcoin Wallet Setup: Hardware Wallet & Backup Guides

> Step-by-step Bitcoin wallet setup guides. Learn to configure hardware wallets, verify backups, and complete the pre-deposit security checklist.

Source: https://selfcustodylabs.com/docs/wallet-setup/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Setting up self-custody takes three guides, done in order: [set up a hardware wallet](https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/), [verify that the backup restores it](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/), then work through the [before you deposit checklist](https://selfcustodylabs.com/docs/wallet-setup/before-you-deposit/). Together they take two to three hours, and nothing significant should go into the wallet until all three are done. If bitcoin itself is new to you, read [Start here](https://selfcustodylabs.com/docs/learn/fundamentals/) first.

<div class="doc-diagram">

![The wallet setup path in order: configure the hardware wallet, verify the backup actually restores it, then run the final pre-deposit checks; nothing gets funded until all three steps pass](https://selfcustodylabs.com/img/diagrams/wallet-setup/setup-path.svg)

</div>

## What does each guide cover?

| Guide | Time | What it covers | Do it after |
|---|---|---|---|
| [Hardware wallet setup](https://selfcustodylabs.com/docs/wallet-setup/hardware-wallet/) | 1-2 hours | Buying and checking the device, firmware and PIN, a seed made with your own dice, wallet software (Sparrow), checking a receive address | Nothing: most people start here |
| [Backup verification](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) | 30-60 minutes | Restoring the wallet from the written backup alone and comparing addresses, testing a passphrase, what to do if it fails | Hardware wallet setup |
| [Before you deposit](https://selfcustodylabs.com/docs/wallet-setup/before-you-deposit/) | 15-30 minutes | The final checks: seed, recovery test, passphrase, address on the device, genuine software, a test transaction | Backup verification |

If you already have a hardware wallet, start with [backup verification](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/).

## Which hardware wallet should you use?

| Situation | Recommendation (prices October 2026) |
|-----------|----------------|
| Budget | Blockstream Jade ($79) |
| Simplicity | BitBox02 Nova, Bitcoin-only edition (€175) or Trezor Safe 5 ($129) |
| Verifiable security | Jade Plus ($149) with a [dice-generated seed](https://selfcustodylabs.com/docs/learn/keys/random/) |
| Full transparency | Trezor Safe 7 ($249, with an auditable secure element) |

The [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/) covers every device and why Coldcard, Ledger and Bitkey are not on this list, and [choose your setup](https://selfcustodylabs.com/docs/learn/fundamentals/choosing-your-path/) matches a setup to how much you hold.

## When is a software wallet enough?

A [software wallet](https://selfcustodylabs.com/docs/learn/wallets/software-wallets/) keeps the keys on your phone or computer. It is free and convenient, and acceptable for amounts under about $1,000, for learning, and as a spending wallet alongside a hardware wallet for savings. It is not the place for significant savings or long-term holdings, because the keys sit on a device that also runs everything else.

## What comes after setup?

1. [Run your own node](https://selfcustodylabs.com/docs/bitcoin-node/), so your wallet checks transactions itself.
2. Learn [UTXO management](https://selfcustodylabs.com/docs/learn/privacy/utxo-management/), for privacy and lower fees.
3. [Add a passphrase](https://selfcustodylabs.com/docs/learn/keys/passphrase/), as a second secret protecting the seed phrase.
4. Move to [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) for larger holdings.

## Common questions

### Do you need to buy a hardware wallet?

For anything more than pocket money, yes. A hardware wallet is the minimum we recommend for any amount you would be upset to lose, because it keeps the keys off the computer and phone that malware can reach.

### Which is better: Trezor, Ledger or Coldcard?

As of October 2026, Trezor is the one of the three we recommend: open source, with a long security record. Coldcard is not currently recommended, because its [2026 entropy incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/) cost users about $116 million after a warning about the flaw had been dismissed. Ledger's secure element firmware is closed source, which means trusting what you cannot verify. Jade, BitBox02 Nova and Passport are also worth considering; the [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/) covers them all.

### Can you use the same seed on several devices?

You can, but it is rarely a good idea: every device holding the seed is another place it can be stolen from, and none of them adds protection against losing it. If you want redundancy, [multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) gives it without copying one seed around.

### What if you already have a hardware wallet set up?

Start with [backup verification](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) to confirm your existing backup restores the wallet, then work through the [before you deposit checklist](https://selfcustodylabs.com/docs/wallet-setup/before-you-deposit/).
