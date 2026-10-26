# What is Bitcoin?

> Understand what Bitcoin is, how it works, and why it matters. A beginner's introduction to digital money that no one controls.

Source: https://selfcustodylabs.com/docs/learn/fundamentals/what-is-bitcoin/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Bitcoin is digital money that no person, company or government controls. It runs on a worldwide network of computers that anyone can join, its supply is capped at 21 million coins by rules every participant enforces, and a payment, once confirmed, cannot be reversed or blocked by anyone. It was launched in 2009 by someone using the name Satoshi Nakamoto, whose identity has never been confirmed.

Irreversibility is the property that makes bitcoin feel strange at first. A payment that leaves your wallet is gone for good: there is no chargeback and no support line that can undo it. The same property means nobody else can undo or stop a payment either.

## How is bitcoin different from the money in a bank?

Bank money is created by central banks without a fixed ceiling, and banks and payment companies sit in the middle of every transfer. That is why a card can be declined, an account frozen and a wire clawed back days later.

| | Bank money | Bitcoin |
|---|---|---|
| Who issues it | Central banks and commercial banks | The network, on a fixed schedule written into the software |
| Supply | No fixed limit | 21 million, enforced by every node |
| Who approves a payment | The banks and payment networks involved | Nobody: a correctly signed transaction is valid |
| Can a payment be reversed? | Often, for days or weeks | No, once it is confirmed in a block |
| Can an account be frozen? | Yes | Not when you hold your own keys |

This is what "permissionless" means: you need nobody's approval to receive, hold or send bitcoin.

## How does a bitcoin transaction work?

Every participant keeps a copy of the same ledger, and every payment is added to all the copies. Nobody can quietly change an old entry, because everyone else's copy would stop matching. That shared ledger is the **blockchain**.

When Maya in Mexico City sends 0.1 BTC to her cousin Daniel in Buenos Aires, her wallet builds and signs the payment, the network passes it around, a miner includes it in a block, and Daniel's wallet checks it himself.

<div class="doc-diagram">

![The path of a 0.1 BTC payment from Maya to Daniel: her wallet builds and signs the transaction, the network broadcasts it, miners verify every rule and include it in a block, and Daniel verifies his money himself](https://selfcustodylabs.com/img/diagrams/fundamentals/tx-path.svg)

</div>

No bank, card network, wire service or currency desk takes part. The network does the job those institutions normally do, and that is the core invention.

## What do miners do, and why can't the history be rewritten?

Miners are computers that compete to add the next block of transactions to the blockchain. To win, a miner has to find a solution to a puzzle that can only be found by trying enormous numbers of guesses, which costs real electricity. The winner publishes the block and receives newly created bitcoin plus the fees of the transactions in it; that reward is how new coins enter circulation.

That cost is what protects the history. To change an old block, an attacker would have to redo the work for that block and every block since, faster than the rest of the network adds new ones. It has never been done to bitcoin, and each new block makes the ones beneath it harder to change, which is why a transaction becomes more settled the deeper it sits.

## Why is the supply fixed at 21 million?

Bitcoin's rules allow at most 21 million coins, and every node on the network rejects a block that would create more, so the limit is not a policy anyone can quietly change. As of October 2026, a little over 20.1 million have been created. The amount created per block halves every 210,000 blocks, roughly every four years (the last halving was in April 2024, the next is due around 2028), and the last fraction of a coin will be created around the year 2140.

A central bank that issues more money makes every existing unit a smaller share of the total. Bitcoin cannot do that, because the total is fixed and anyone can check it. That fixed, verifiable supply is why people call bitcoin "digital gold".

## Why does bitcoin matter to you?

- It moves money without permission. A payment to another country works the same as one next door, on any day of the week, without a bank on either side.
- Its supply cannot be inflated. The bitcoin you hold today is the same share of the total in ten years. In a country with a stable currency that may feel abstract; where inflation runs into double digits, it is not.
- It can be owned outright. Bank and brokerage accounts can be frozen or seized by anyone with enough authority over the institution. Bitcoin whose keys you hold has no such institution.

## What are the common misconceptions about bitcoin?

| Claim | What is actually true |
|---|---|
| Bitcoin is anonymous | Bitcoin is pseudonymous. Every transaction is public and permanent, and analysis firms can often trace coins between addresses. Privacy takes deliberate effort; see the [privacy section](https://selfcustodylabs.com/docs/learn/privacy/why-privacy-matters/). |
| Bitcoin is mainly for criminals | The public ledger is a poor hiding place: once one address is linked to a person, its whole history can be followed. Chainalysis, an analysis firm, has put illicit activity at under 1% of on-chain volume in its recent annual reports. |
| Bitcoin has no real value | Its value rests on what it does (moving money across borders without permission) and on its fixed supply. Whether that is worth something is a judgement each person makes. |
| Bitcoin is too volatile to be useful | Its price moves a lot over days and months. People who hold it as savings measure it over years; people who spend it often convert at the moment of payment. |

## What is a satoshi?

A satoshi is the smallest unit of bitcoin: one hundred-millionth of a bitcoin (0.00000001 BTC), named after its creator and usually shortened to "sat". Because amounts are stored to eight decimal places, you never need to buy or send a whole coin.

<div class="fixed-width-table">

| Unit | Value in BTC | Symbol |
|------|--------------|--------|
| Bitcoin | 1 | BTC |
| Millibitcoin | 0.001 | mBTC |
| Microbitcoin | 0.000001 | μBTC |
| Satoshi | 0.00000001 | sat |

</div>

Most wallets today show amounts in bitcoin or in sats; millibitcoin and microbitcoin are rarely used.

## How do people get bitcoin?

1. Buying it on an exchange, a platform that trades ordinary currency for bitcoin. This is the usual starting point, and it works much like opening a brokerage account.
2. Being paid in it for goods or services, as many freelancers and small businesses are.
3. Trading peer to peer, with someone you know or through a peer-to-peer marketplace, which avoids an exchange at the cost of checking who you are dealing with.
4. Earning it as salary from an employer who pays in bitcoin.
5. Mining it with specialised hardware. Anyone can, but the hardware and electricity make it a business, not a hobby.

Bitcoin bought on an exchange stays in the exchange's custody until you withdraw it. If the exchange is hacked, goes bankrupt or freezes your account, you can lose access even though the balance is yours on paper; [why holding your own bitcoin matters](https://selfcustodylabs.com/docs/learn/fundamentals/holding-bitcoin/) covers the exchanges where that happened.

## Why is self-custody the point?

A bitcoin balance on an exchange is like a gift card: it shows a balance, but you are trusting the store to honour it. Self-custody means holding your own private keys, the secret that authorises spending. With the keys in your hands, no exchange failure can take your coins, no account freeze can stop you spending them, and nobody can refuse a payment on your behalf. The cost is that nobody can fix a mistake for you either, which is what the rest of this site is about. [What is self-custody?](https://selfcustodylabs.com/docs/learn/fundamentals/what-is-self-custody/) is the next page.
