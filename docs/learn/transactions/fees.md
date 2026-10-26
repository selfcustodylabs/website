# Bitcoin Transaction Fees Explained

> Understand how Bitcoin transaction fees work, why they vary, and how to minimize costs. Learn fee estimation, RBF, CPFP, and fee optimization strategies.

Source: https://selfcustodylabs.com/docs/learn/transactions/fees/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A bitcoin transaction fee is the amount a transaction leaves unclaimed between its inputs and outputs, which the miner who includes it in a block collects. It is set by size, not value: the fee is the transaction's size in virtual bytes (vB) times a fee rate in satoshis per virtual byte (sat/vB), so sending 0.001 BTC costs the same as sending 100 BTC in a transaction of the same size. Rates rise and fall with demand for block space; check a mempool viewer before sending, use native segwit or Taproot addresses, and if a transaction gets stuck, bump its fee.

## How is the fee calculated?

```text
fee = transaction size (vB) × fee rate (sat/vB)
```

So the amount sent does not matter; the number of inputs and outputs does, because each adds size.

<div class="doc-diagram">

![Bitcoin fees follow transaction size, not value: sending 0.001 BTC and sending 100 BTC in the same 140 vB transaction both cost 1,400 sats at 10 sat/vB, while a 10-input transaction of 1,100 vB costs 11,000 sats](https://selfcustodylabs.com/img/diagrams/transactions/fee-size-not-value.svg)

</div>

A **satoshi** (sat) is 0.00000001 BTC, and a **virtual byte** (vB) is the unit of transaction size the fee market uses, which counts segwit signature data at a discount. A typical payment from one native segwit input to two outputs (the recipient and your change) is about 140 vB.

| Transaction | Size | Fee at 2 sat/vB | Fee at 10 sat/vB | Fee at 50 sat/vB |
|------------------|------|---------------|---------------|---------------|
| 1 input, 2 outputs | About 140 vB | 280 sats | 1,400 sats | 7,000 sats |
| 3 inputs, 2 outputs | About 380 vB | 760 sats | 3,800 sats | 19,000 sats |
| 10 inputs, 2 outputs | About 1,100 vB | 2,200 sats | 11,000 sats | 55,000 sats |

To turn sats into money: 1,000 sats is $1 when bitcoin is worth $100,000, and twice that when it is worth $200,000.

## Why do fees change?

Each block has room for a limited amount of data (4 million weight units, in practice a few thousand transactions), and a new block comes about every ten minutes. When more people want to transact than the next blocks can hold, they bid against each other with higher fee rates, and miners take the highest-paying transactions first.

| Demand | Typical fee rate | Typical wait |
|--------|------------------|-------------------|
| Low | Under 1 to 5 sat/vB | The next block, or a few hours at the very lowest rates |
| Normal | 5 to 20 sat/vB | 10 minutes to an hour |
| High | 20 to 100 sat/vB | 10 to 30 minutes |
| Extreme | 100 sat/vB and more | Priority inclusion |

The floor has moved. Since Bitcoin Core 30.0 (October 2025), nodes by default relay transactions paying as little as 0.1 sat/vB, down from 1 sat/vB, though such transactions confirm only when miners have room for them.

## How does address type affect size?

| Address type | Input size | Output size | Addresses start with |
|--------------|------------|-------------|-------|
| Legacy (P2PKH) | About 148 vB | About 34 vB | `1` |
| Nested segwit (P2SH-P2WPKH) | About 91 vB | About 32 vB | `3` |
| Native segwit (P2WPKH) | About 68 vB | About 31 vB | `bc1q` |
| Taproot (P2TR) | About 57 vB | About 43 vB | `bc1p` |

Spending from native segwit or Taproot addresses costs much less than from legacy ones; moving from legacy to segwit cuts the fee for a typical payment by roughly 30 to 40%.

## How do you choose a fee?

Look at what the mempool, the queue of unconfirmed transactions, is currently accepting: [mempool.space](https://mempool.space) shows it, as do Sparrow's fee estimates and your own node. Then decide how urgent the payment is, and allow for spikes, which can come suddenly.

| What you need | What to pay |
|-----------|---------------------|
| Confirmation in the next block | The current high-priority rate |
| Confirmation within a few hours | The medium-priority rate |
| Confirmation within a day | The low-priority rate |
| Consolidating UTXOs | Wait for rates under 5 sat/vB |

The common mistakes are overpaying when demand is low because nobody checked, underpaying when demand is high so the transaction sticks, and trusting wallet defaults, which are often set high.

## What if a transaction is stuck?

### Replace-by-fee (RBF)

**Replace-by-fee** broadcasts a new version of your transaction, spending the same inputs, with a higher fee. Since Bitcoin Core 28.0 (October 2024) nodes accept a replacement for any unconfirmed transaction by default, whether or not the original was marked replaceable, so only the sender's wallet needs to support it. In Sparrow: find the unconfirmed transaction, right-click it, choose to increase the fee, set the new rate, and broadcast the replacement.

### Child pays for parent (CPFP)

**Child pays for parent** creates a new transaction that spends an output of the stuck one, with a fee high enough to make the pair worth mining together. It is the receiver's option, since the receiver cannot replace a transaction the sender signed. The child's fee has to cover the parent's shortfall as well as its own size.

## How can you pay less in fees?

### Consolidate when fees are low

Combining many small UTXOs into one, at a time when fees are 1 to 5 sat/vB, means future payments need one input instead of many.

<div class="doc-diagram">

![Consolidation: one low-fee transaction turns 50 small UTXOs into a single large one, so the next payment needs 1 input instead of 50; do it at 1-5 sat/vB and only with same-source coins, because consolidation links histories](https://selfcustodylabs.com/img/diagrams/transactions/consolidation-payoff.svg)

</div>

Consolidation links the histories of the coins combined, so only consolidate coins from the same source; [UTXO management](https://selfcustodylabs.com/docs/learn/privacy/utxo-management/) covers when it is safe.

### Batch payments

Paying several people in one transaction costs far less than separate transactions, because the inputs and change are shared.

<div class="doc-diagram">

![Batching: three separate 140 vB payments to Alice, Bob and Charlie total 420 vB, while one transaction paying all three is about 200 vB, 52% smaller and cheaper at any fee rate](https://selfcustodylabs.com/img/diagrams/transactions/batching.svg)

</div>

### Send when demand is low

Fees are often lower at weekends and higher during US business hours, though there is no reliable schedule.

### Use modern address types

Receive to native segwit (`bc1q`) or Taproot (`bc1p`) addresses, so the coins are cheaper to spend later.

## Where does Lightning fit?

For small, frequent payments, the [Lightning Network](https://lightning.network) settles almost instantly for fees often of a few sats, with no on-chain transaction per payment. It needs payment channels, which have their own on-chain costs to open and close, and it is a spending tool, not cold storage.
