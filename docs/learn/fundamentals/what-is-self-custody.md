# What is Bitcoin Self-Custody?

> Learn what Bitcoin self-custody means: controlling your own private keys, seed phrases, and taking full ownership of your Bitcoin without third parties.

Source: https://selfcustodylabs.com/docs/learn/fundamentals/what-is-self-custody/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Bitcoin self-custody means holding the private keys to your own bitcoin yourself, so that no bank, exchange or company can freeze it, block a payment or lose it on your behalf. If you hold the keys, you hold the coins. If someone else holds the keys, what you hold is their promise to pay you, and "not your keys, not your coins" is a literal description of that arrangement rather than a slogan.

Most people who say they own bitcoin hold a balance on an exchange's website. That balance is a number on the exchange's computer, and it is worth what the company's promise is worth: if the company freezes the account, is hacked or goes bankrupt, the number becomes a claim in a bankruptcy. [Why holding your own bitcoin matters](https://selfcustodylabs.com/docs/learn/fundamentals/holding-bitcoin/) goes through the exchanges where that happened.

Self-custody also differs from a bank account. A bank legally controls the money in your account, so it can freeze it, delay a transfer, block a payment or comply with a court order without asking you. With self-custodied bitcoin there is nobody in the middle to ask: the network accepts a transaction signed with the right key and nothing else.

## What are private keys and seed phrases?

A private key is a very large random number that proves ownership of a particular amount of bitcoin. Anyone who knows the number can spend those coins, and nobody who lacks it can.

A seed phrase is a list of 12 or 24 ordinary words that encodes the number every private key in a wallet is derived from. Wallets use it because a raw key is too long to write down reliably, while words can be backed up with a pencil and paper. The seed phrase is the thing to protect: whoever holds it holds the bitcoin, losing it (along with the device) loses the bitcoin for good, and nobody runs a password reset or a support line that could undo either. [Private keys explained](https://selfcustodylabs.com/docs/learn/keys/intro/) and [seed phrases](https://selfcustodylabs.com/docs/learn/keys/seed/) cover how both work.

## What are the ways to self-custody bitcoin?

There are three common setups, and the right one depends on how much you hold and how much effort you will put into protecting it. Most people start with the first and move up as their holdings grow.

<div class="fixed-width-table">

| Setup | Best for | Protection | Cost (October 2026) |
|--------|----------|----------|------|
| Software wallet | Learning, small amounts, spending | Keys live on a phone or computer that also runs other software | Free |
| Hardware wallet | Savings you would miss | Keys stay on a dedicated device, which signs transactions itself | About $80 to $250 |
| Air-gapped setup | Large holdings | Keys stay on a device that never connects to a network | From about $50 for a DIY [SeedSigner](https://selfcustodylabs.com/docs/seedsigner/) |

</div>

A **software wallet** is an app on your phone or computer. It is free and easy to use, and it is fine for learning or for holding what you would carry in a physical wallet. Its weakness is that the keys sit on a device that also runs a browser, email and every other app, so malware on that device can reach them.

A **hardware wallet** is a small device built for one job: holding keys and signing transactions with them. The keys never leave the device, and the device shows you what it is signing on its own screen, so an infected computer cannot change the payment without you seeing it. For any amount you would be upset to lose, a hardware wallet is the minimum we recommend. [Hardware wallets explained](https://selfcustodylabs.com/docs/learn/wallets/hardware-wallets/) covers how they work and the [comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/) covers which to buy.

An **air-gapped setup** keeps the keys on a device that has never been connected to the internet. Transactions move to and from it as QR codes or files on an SD card, so there is no cable or radio an attacker could use. It costs more effort than a USB hardware wallet, and it is a setup to grow into rather than start with; see [air-gapped wallets](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/).

## What responsibility comes with self-custody?

**Danger: A lost seed phrase cannot be recovered**
If you lose your seed phrase and your wallet device fails, the bitcoin is gone. No support desk, password reset or court order can retrieve it, because the blockchain is not a company that can be asked or sued.

The features that stop anyone helping you recover lost bitcoin are the same features that stop anyone taking it without your consent. They come from the same design, so you cannot have one without the other. That is why backing up the seed phrase, storing the backup safely and testing a recovery matter as much as buying the bitcoin: the [backup verification guide](https://selfcustodylabs.com/docs/wallet-setup/backup-verification/) walks through the test.

## Do you need self-custody for a small amount?

Not immediately. Learning with a small amount on a well-known exchange is a reasonable start, and [why holding your own bitcoin matters](https://selfcustodylabs.com/docs/learn/fundamentals/holding-bitcoin/#when-should-you-move-bitcoin-off-an-exchange) sets out the amounts at which we would move it. The short rule: if losing the bitcoin would upset you, it belongs in a wallet whose keys you hold, and once it is more than the price of a hardware wallet, that wallet should be one.
