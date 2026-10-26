# Bitcoin UTXO Management: Coin Control & Consolidation Guide

> Bitcoin UTXO management for lower fees and better privacy. Coin control in Sparrow, consolidation strategies, dusting attacks, and source separation rules.

Source: https://selfcustodylabs.com/docs/learn/privacy/utxo-management/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

UTXO management means deciding which of your coins (UTXOs) each transaction spends, instead of leaving it to the wallet: keeping coins from different sources apart, labelling where each came from, merging small coins from the same source when fees are low, and freezing unexpected tiny deposits. Done well, it keeps fees down, stops payments from revealing your whole balance, and avoids linking your KYC coins to your private ones. The tool for it is coin control, which Sparrow and Electrum both offer.

Time: 40 minutes. Level: Intermediate. Updated: 26 Oct 2026.

[UTXOs](https://selfcustodylabs.com/docs/learn/transactions/utxos/), [how transactions work](https://selfcustodylabs.com/docs/learn/transactions/understanding/) and [why privacy matters](https://selfcustodylabs.com/docs/learn/privacy/why-privacy-matters/) are useful background.

## What goes wrong without UTXO management?

Leaving coin selection to the wallet leads to fees higher than they need be, privacy leaks that tie coins from different sources together (see [chain analysis](https://selfcustodylabs.com/docs/learn/privacy/chain-analysis/)), small coins that cost more to spend than they are worth, and exposure to tracking attacks that rely on you spending what you were sent.

| UTXO property | What it means for management |
|----------|------------------------|
| A UTXO is spent whole | Payments create change |
| Each UTXO spent adds bytes | More inputs mean higher fees |
| Each UTXO has a public history | Spending UTXOs together links their histories |
| Each UTXO is locked to an address | Labels are how you remember where it came from |

## Why do many small UTXOs cost more?

Fees depend on a transaction's size, not its value, and each input adds 57 to 148 vB depending on address type, against 31 to 43 vB per output. Sending 0.1 BTC at 50 sat/vB:

<div class="fixed-width-table">

| Coins spent | Inputs | Size | Fee |
|----------|--------|--------------|-----|
| One 0.1 BTC UTXO | 1 | About 140 vB | About 7,000 sats |
| Ten 0.01 BTC UTXOs | 10 | About 750 vB | About 37,500 sats |
| A hundred 0.001 BTC UTXOs | 100 | About 6,900 vB | About 345,000 sats |

</div>

The same amount sent, at fees that differ fiftyfold.

## How does spending coins together hurt privacy?

Spending several UTXOs in one transaction tells everyone they belong to the same person. Analysts call this the **common-input-ownership heuristic**, and it is one of their main tools.

<div class="doc-diagram">

![Coins from a KYC exchange, a peer-to-peer trade and mining kept in three separate compartments stay unlinked, while spending 0.05, 0.07 and 0.03 BTC from all three in one 0.15 BTC transaction links every history under the common-input-ownership heuristic](https://selfcustodylabs.com/img/diagrams/privacy/utxo-source-separation.svg)

</div>

## When does a small UTXO become dust?

A UTXO worth less than the fee to spend it is economic **dust**. At 100 sat/vB one native segwit input costs about 6,800 sats to spend, so a 5,000-sat UTXO costs more to move than it holds, and the higher fees go, the more small coins fall below the line.

## What are the rules of UTXO management?

### Keep UTXOs above about 0.01 BTC

A coin of 0.01 BTC (1,000,000 sats) or more stays worth spending across most fee conditions. The cost of spending one native segwit input, as a share of the coin:

<div class="fixed-width-table">

| Fee rate | 0.001 BTC coin | 0.01 BTC coin | 0.1 BTC coin |
|-----------------|----------------|---------------|--------------|
| Low (10 sat/vB) | 0.7% | 0.07% | 0.007% |
| Medium (50 sat/vB) | 3.4% | 0.34% | 0.03% |
| High (200 sat/vB) | 13.6% | 1.4% | 0.14% |
| Extreme (500 sat/vB) | 34% | 3.4% | 0.34% |

</div>

### Do not put everything in one UTXO

With all your bitcoin in one coin, every payment shows the recipient your whole holding through the change.

<div class="doc-diagram">

![Paying 0.01 BTC from a single 1.00 BTC UTXO creates a 0.99 BTC change output, so the recipient can see the sender held at least 1.00 BTC](https://selfcustodylabs.com/img/diagrams/privacy/utxo-change-reveal.svg)

</div>

### Keep coins from different sources apart

Never spend together coins from an exchange that has your ID (KYC coins) and coins without it, coins from different exchanges, or [mixed](https://selfcustodylabs.com/docs/learn/privacy/coinjoin/) and unmixed coins. Each combination creates a link that stays on the blockchain for good.

### Label everything

Without labels you will forget which coins came from where, which carry your identity and which have been mixed. Label each one when it arrives, for example "Exchange withdrawal, January 2026", "Repayment from a friend, no KYC", "Mixed with Jam, round 3".

## What is coin control?

**Coin control** is choosing exactly which UTXOs a transaction spends. Without it the wallet decides, often badly.

<div class="doc-diagram">

![Without coin control the wallet auto-selects a 0.03 BTC KYC coin and a 0.025 BTC non-KYC coin for a 0.05 BTC payment, linking the sources; with coin control you spend a single 0.05 BTC KYC coin and the non-KYC coin stays separate](https://selfcustodylabs.com/img/diagrams/privacy/utxo-coin-control.svg)

</div>

### How do you use coin control in Sparrow?

Sparrow's coin control is the most complete:

- To see your coins, open the wallet's `UTXOs` tab, which lists every UTXO with its amount, address, label, date and transaction.
- To spend particular coins, tick them in the `UTXOs` tab, click `Send Selected`, and enter the destination and amount.
- To label a coin, double-click it and type the label; labels are kept between sessions.
- To freeze a coin, such as unexpected dust, right-click it and choose `Freeze UTXO`; it is then left out of every transaction until you unfreeze it.

### How do you use coin control in Electrum?

Choose `View`, `Show Coins` to add a `Coins` tab. In it, right-click a coin and choose `Spend From` to build a transaction from that coin only, or `Freeze` to exclude it.

### How do you choose which coins to spend?

- Match the amount: pick a coin close to the payment so that little change is created. For a 0.048 BTC payment from coins of 0.1, 0.05 and 0.02 BTC, the 0.05 BTC coin leaves only 0.002 BTC of change.
- Combine only coins from one source: for a 0.15 BTC payment, two coins of 0.1 and 0.08 BTC from the same exchange are better than any combination that mixes in a coin from another exchange or a non-KYC coin.
- Spend older coins first: they are less likely to be linked by timing to your recent activity.

## How do you consolidate UTXOs without losing privacy?

**Consolidation** is combining several UTXOs into one larger one, so future payments need fewer inputs. Done well it saves fees; done badly it ties your coins' histories together for good.

**Danger: Consolidate coins from one source at a time**
A consolidation tells the world that every coin in it belongs to the same person. Never combine KYC with non-KYC coins, coins from different exchanges, or mixed with unmixed coins.

<div class="doc-diagram">

![Consolidating 0.01, 0.02 and 0.03 BTC that all came from Coinbase into 0.06 BTC reveals nothing new; consolidating the same amounts from Coinbase, Kraken and a non-KYC trade fuses three separate histories forever](https://selfcustodylabs.com/img/diagrams/privacy/utxo-consolidation-rule.svg)

</div>

Consolidate when you have many coins under 0.01 BTC, when recent payments have needed five or more inputs, when simple payments cost more than they should, or after months of small regular purchases. Check the fee rate at [mempool.space](https://mempool.space) first:

<div class="fixed-width-table">

| Fee rate | Consolidate? |
|----------|----------------|
| 1 to 10 sat/vB | Yes: an ideal time |
| 10 to 30 sat/vB | If you need to |
| 30 to 100 sat/vB | Wait if you can |
| Over 100 sat/vB | No |

</div>

## Step 1: Sort your UTXOs by source

Step 1 groups every coin by where it came from: each exchange, each non-KYC source, mixed coins. Labels make this quick; without them, go through your transaction history and label as you go.

## Step 2: Plan one consolidation per source

Step 2 decides which coins go together. Make a separate transaction for each source, for example:

```text
Transaction 1, coins from exchange A: 0.005 + 0.003 + 0.007 + 0.002 → 0.017 BTC, less the fee
Transaction 2, coins from exchange B: 0.008 + 0.012 + 0.004 → 0.024 BTC, less the fee
Transaction 3, non-KYC coins: 0.05 + 0.02 → 0.07 BTC, less the fee
```

## Step 3: Send each consolidation when fees are low

Step 3 makes the transactions. Wait for a low fee rate, select the coins of one source with coin control, send them to a new address in your own wallet, and set a low fee, since there is no hurry.

## Step 4: Check and label the result

Step 4 confirms the new coin arrived and the old ones are gone, and labels the new coin with its source so it is not mixed with others later.

## Is consolidation worth the fee?

Consolidating ten native segwit coins now, at 10 sat/vB:

```text
Inputs:   10 × 68 vB = 680 vB
Output:    1 × 31 vB =  31 vB
Overhead:              ~11 vB
Total:                ~722 vB  →  about 7,200 sats
```

Spending the same ten coins later at 100 sat/vB would cost about 72,200 sats, so consolidating saves about 65,000 sats. The bigger the gap between today's fees and future fees, the more it pays.

It is not worth it when the coins come from different sources, when they are already large (combining 0.5 BTC coins gains little), when fees are high, or when you are about to mix them anyway; [CoinJoin](https://selfcustodylabs.com/docs/learn/privacy/coinjoin/) does its own combining.

## What sizes should your UTXOs be?

<div class="fixed-width-table">

| Purpose | Target size | Why |
|---------|-------------|-----------|
| Long-term holding | 0.1 to 1 BTC | Cheap to spend later, even in large payments |
| Regular spending | 0.01 to 0.1 BTC | Flexible, without showing your whole holding |
| Smallest worth keeping | 0.01 BTC | Stays economical in most fee conditions |

</div>

A mix of sizes, for example one coin of 0.5 BTC, three of 0.1 BTC and five of 0.02 BTC, lets you pay most amounts without large change or revealing everything.

When withdrawing from an exchange, withdraw at least 0.01 BTC at a time, and ideally 0.05 to 0.1 BTC; many tiny withdrawals become expensive to spend. Balance that against how long coins sit on the exchange, which carries its own [risk](https://selfcustodylabs.com/docs/learn/fundamentals/holding-bitcoin/).

## Which wallets support UTXO management?

<div class="fixed-width-table">

| Wallet | Coin control | Labels | UTXO list | Platform |
|--------|--------------|----------|-----------|----------|
| Sparrow | Yes, the most complete | Yes | Yes, detailed | Desktop |
| Electrum | Yes | Yes | Yes | Desktop |
| Wasabi | Yes | Yes | Yes | Desktop |
| BlueWallet | Yes | Yes | Yes | Mobile |

</div>

Avoid wallets that show only a balance and hide the coins behind it; they make UTXO management impossible.

## What mistakes do people make with UTXOs?

| Mistake | What goes wrong | What to do instead |
|---|---|---|
| Letting the wallet choose coins | It combines sources | Use coin control every time |
| Receiving many small payments | Each becomes a small coin that is costly to spend | Use Lightning for small amounts, and consolidate when fees are low |
| Consolidating KYC with non-KYC coins | Your private coins become linked to your identity | Keep separate wallets for each kind |
| Ignoring change | Change carries part of the payment's privacy loss | Minimise change, and label it |
| Buying tiny amounts every week and withdrawing each | Dozens of small coins | Withdraw less often, in larger amounts, and consolidate when fees are low |

## What is a dusting attack?

A **dusting attack** is sending tiny amounts of bitcoin to many addresses in the hope that recipients later spend them alongside their other coins, revealing which addresses belong together:

1. The attacker sends a few hundred sats (546 is the smallest standard amount for a legacy address, 294 for a native segwit one) to thousands of addresses.
2. A recipient later spends the dust together with their other coins.
3. The attacker sees which coins moved with the dust, and links them to one owner.
4. Combined with other analysis, that can identify the owner.

<div class="doc-diagram">

![A dusting attack in three steps: the attacker sends 546 sats to thousands of addresses, the victim co-spends the dust with a real 0.4 BTC coin, and the movement of the dust links the victim's addresses into one cluster](https://selfcustodylabs.com/img/diagrams/privacy/utxo-dusting-attack.svg)

</div>

Protect yourself by freezing small coins you did not expect, never consolidating unknown dust, using coin control, and labelling incoming transactions so that unexpected tiny amounts stand out.

## What should you check before every transaction?

- You chose the coins yourself.
- Every input comes from the same kind of source: KYC, non-KYC or mixed.
- The change goes to an address in the right wallet.
- The transaction and its outputs are labelled.
- You are not consolidating coins from different sources.
- The selection is the cheapest that meets the rules above.
