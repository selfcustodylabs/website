# What is a Bitcoin Node

> Understand what a Bitcoin node does, how it differs from a wallet, and its role in the network. Essential knowledge before running your own node.

Source: https://selfcustodylabs.com/docs/learn/nodes/what-is-node/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A **Bitcoin node** is a computer running software, usually Bitcoin Core, that keeps a copy of the blockchain, checks every block and transaction against bitcoin's rules, relays them to other nodes, and answers wallets' questions. Every wallet depends on a node to see its balance and send transactions; the only question is whose. With someone else's node, its operator learns your addresses and you trust its answers. With your own, you verify everything yourself and your queries go nowhere.

## What does a node do?

### It stores the blockchain

A full node downloads and keeps the complete blockchain: every transaction since the first block was mined in January 2009. That was about 770 GB in September 2026, growing by roughly 75 GB a year.

<div class="doc-diagram">

![A full node stores the complete chain of blocks from block 1 in January 2009 to block 970,000 and beyond, about 770 GB in September 2026, so it can verify any claim about any transaction locally](https://selfcustodylabs.com/img/diagrams/nodes/block-chain-copy.svg)

</div>

Having the complete history means the node can verify any claim about any transaction itself, without trusting anyone.

### It verifies everything

A node believes nothing it is told. For every new block and transaction it checks every rule itself: whether the signatures are valid, whether the coins being spent exist and are unspent, whether the block follows the consensus rules. A block that breaks any rule, even by one satoshi, is rejected, whatever other nodes do. Your node enforces the rules you chose to run.

### It relays transactions and blocks

Nodes communicate with each other in a peer-to-peer mesh, sharing new transactions as they're created, propagating new blocks as they're mined, and helping new nodes synchronize with the current state. When you broadcast a transaction, your node sends it to its peers, who send it to their peers, until it reaches miners who can include it in a block.

### It keeps a mempool

Before transactions are confirmed in blocks, they wait in the **mempool**, a holding area of pending transactions. Each node keeps its own, deciding which unconfirmed transactions to hold on the basis of validity and fee rate.

### It answers wallets

When your wallet needs to check your balance, see if a payment arrived, or broadcast a transaction you've signed, it asks a node. That node sees exactly what your wallet is asking about: your addresses, your transactions, your financial activity.

## How is a node different from a wallet?

<div class="fixed-width-table">

| Node | Wallet |
|------|--------|
| Stores the full blockchain | Stores only your keys |
| Verifies every transaction | Creates your transactions |
| Serves data to wallets | Needs a node to function |
| No private keys | Contains private keys |
| Anyone can run one | Personal to you |

</div>

A wallet cannot work without a node; the question is whose.

<div class="doc-diagram">

![A wallet holds keys but must ask a node for balances, incoming payments and broadcasting; every question reveals the wallet's addresses to whichever node answers](https://selfcustodylabs.com/img/diagrams/nodes/wallet-asks-node.svg)

</div>

## Why does it matter whose node your wallet uses?

A wallet's questions reveal your addresses, your transaction history, your balance and when you are online to whichever node answers them. Someone else's node learns all of it, and "someone else" could be a careful volunteer, a chain analysis company or anything in between.

### Random public nodes

Many wallets connect to public servers by default. It works without any setup, but every query tells an unknown operator which addresses belong to your wallet:

<div class="doc-diagram">

![A wallet's queries can go to a random public node, whose unknown operator logs the addresses and builds a profile, or to your own node, where the queries never leave your home](https://selfcustodylabs.com/img/diagrams/nodes/who-answers.svg)

</div>

Combined with timing and transaction patterns, that builds a detailed profile.

### Your own node

With your own node, the leak disappears: the wallet asks your node, and the questions never leave your control. That makes running a node a basic privacy measure, not a hobby for enthusiasts.

## What kinds of node are there?

### Full node

A **full node** downloads and verifies the whole blockchain, every block and transaction from the first to the latest, and is what people usually mean by running a node. It gives full verification and the best privacy, since queries stay local. The cost is storage (about 770 GB as of September 2026, growing by roughly 75 GB a year) plus an initial sync that can take hours to days depending on your hardware.

### Pruned node

A **pruned node** is a full node that deletes old block data once it has verified it. It still checks everything, but needs only about 10 GB of storage; in exchange it cannot serve old blocks to other nodes or run an Electrum server, which needs the full history.

### Light client (SPV)

A **light client** downloads only block headers, small summaries that show whether a transaction is in a block, and asks full nodes for everything else. It is fast and needs almost no storage, but it trusts the nodes it asks, which is acceptable for small amounts and not for serious holdings or privacy.

### Bitcoin Core

Bitcoin Core is the reference implementation, the original Bitcoin software maintained by the community since Satoshi's initial release. When people say "run a node," they usually mean running Bitcoin Core.

Alternatives such as Bitcoin Knots exist, but Bitcoin Core is the most widely used and the usual choice.

## What does "don't trust, verify" mean?

"Don't trust, verify" is the design principle that separates bitcoin from earlier financial systems. Traditional finance requires trust at every layer: trust that banks are solvent, trust that ledgers are accurate, trust that institutions follow the rules. Bitcoin replaces that trust with verification.

Without your own node, you're reintroducing trust. You trust someone else to tell you your correct balance. You trust them to accurately report whether transactions are valid. You trust them not to lie about the blockchain state.

With your own node, that trust becomes unnecessary. You verify everything yourself. You can't be deceived about your balance because you've independently confirmed it. You enforce Bitcoin's rules directly because you check every rule on every transaction.

## What does running your own node give you?

**Privacy.** When your wallet talks to your node, no third party learns which addresses belong to you, what your balance is, or what transactions you're making. This is the single biggest privacy upgrade most Bitcoiners can make.

**Security.** You verify your own transactions against your own copy of the blockchain. No one can fool you with fake confirmations or misleading balance information. What your node says is what's true, because your node has verified it independently.

**Sovereignty.** You're not just using Bitcoin. You're participating in it. Your node validates the consensus rules, and by running it, you're part of the decentralized enforcement mechanism that keeps Bitcoin working.

**Network health.** Every node makes Bitcoin stronger. The more nodes exist, the more copies of the blockchain exist, the harder it becomes to attack or censor the network. Running a node isn't just self-interested: it's a contribution to Bitcoin's resilience.

## What do people get wrong about nodes?

### Do you need a node to hold bitcoin?

No. Your wallet holds bitcoin via private keys. A node is for verification and privacy. You can absolutely hold bitcoin without running a node; you'll just be trusting someone else's node for information about your holdings.

### Does running a node earn bitcoin?

No. Nodes don't earn rewards. Mining earns rewards. Nodes verify transactions and propagate blocks, but this service is provided for free. The reward is the security and privacy benefits to the node operator.

### Do you need technical skills to run a node?

Much less than you used to. Modern node software (especially user-friendly distributions like Umbrel or RaspiBlitz) has made running a node accessible to anyone who can follow basic instructions. If you can set up a Raspberry Pi or install software on a computer, you can run a node.

### Is your hardware wallet a node?

No. Hardware wallets store keys and sign transactions. That's it. They have no blockchain data and can't verify anything independently. When you check your balance on a hardware wallet setup, that information is coming from a node somewhere, either yours or someone else's.
