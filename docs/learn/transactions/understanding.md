# How Bitcoin Transactions Work

> Understand how Bitcoin transactions work: inputs, outputs, change, fees, and the complete lifecycle from creation to confirmation.

Source: https://selfcustodylabs.com/docs/learn/transactions/understanding/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A bitcoin transaction spends earlier outputs you control (its inputs) and creates new ones (its outputs): usually one for the person you pay and one returning the remainder to you as change. Whatever the inputs add up to beyond the outputs is the fee, which goes to the miner who includes the transaction in a block. Once signed, the transaction is broadcast to the network, waits in the mempool, and is confirmed when a miner puts it in a block; every block after that adds a confirmation and makes it harder to reverse.

## What are inputs and outputs?

Bitcoin does not keep account balances. It keeps unspent transaction outputs, or [UTXOs](https://selfcustodylabs.com/docs/learn/transactions/utxos/), and a transaction consumes some and creates others:

- An input is a UTXO you previously received, which the transaction spends.
- An output is a new UTXO the transaction creates, for the recipient or as change for you.

In effect a transaction says: "consume these outputs I received earlier, and create these new ones."

## Why does change come back to you?

Because an input is always spent whole. If you need only part of it, the rest returns to you as change, usually to a new address your wallet controls:

- You have an input worth 0.01 BTC.
- You send 0.008 BTC to a friend.
- 0.0019 BTC comes back to you as change, on a new address.

Your wallet does this automatically.

## How is the fee paid?

The fee is not a separate line: it is the difference between what the inputs are worth and what the outputs pay. In the example, 0.01 BTC goes in, 0.008 BTC plus 0.0019 BTC comes out, and the missing 0.0001 BTC is the fee.

<div class="doc-diagram">

![Anatomy of a transaction: a 0.01 BTC input becomes 0.008 BTC to a friend and 0.0019 BTC change to a new address you control; the missing 0.0001 BTC is the fee, which is just the difference between inputs and outputs](https://selfcustodylabs.com/img/diagrams/transactions/tx-anatomy.svg)

</div>

Fees depend on a transaction's size in bytes, not on the amount sent, and each extra input adds size. [Transaction fees](https://selfcustodylabs.com/docs/learn/transactions/fees/) covers how to set them.

## What happens after you press send?

### Creating and signing

You enter the recipient's address and the amount. The wallet chooses which UTXOs to spend, adds the outputs including change, sets a fee for current conditions, and signs the transaction with your private key, which proves you are allowed to spend those inputs.

### Broadcasting

The wallet sends the signed transaction to one or more Bitcoin nodes. Each checks it against the rules and relays it to its peers, and within seconds it has spread across the network.

### Waiting in the mempool

Every node keeps a mempool, a holding area for valid transactions not yet in a block. Miners choose from it, mostly by fee rate (satoshis per virtual byte). A transaction with too low a fee can wait for a long time; [creating transactions](https://selfcustodylabs.com/docs/learn/transactions/create/#what-if-a-transaction-is-stuck) covers how to speed one up.

### Confirmation

About every ten minutes a miner finds a new block and includes a set of transactions from the mempool. Once yours is in a block it has one confirmation, and each later block adds another.

<div class="fixed-width-table">

| Confirmations | Status | Typical use |
|---------------|--------|-------------|
| 0 | Unconfirmed: broadcast, not yet in a block | Do not treat as paid |
| 1 | In a block | Small payments |
| 3 | Harder to reverse | Medium amounts |
| 6 | Very hard to reverse | Large amounts; the common standard |

</div>

<div class="doc-diagram">

![The transaction pipeline: the wallet creates it, the key signs it, nodes relay the broadcast, it waits in the mempool until a miner includes it in a block, and every following block adds a confirmation](https://selfcustodylabs.com/img/diagrams/transactions/tx-pipeline.svg)

</div>
