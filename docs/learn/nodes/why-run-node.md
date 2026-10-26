---
sidebar_position: 2
title: "Why Run Your Own Node"
description: "Understand why running your own Bitcoin node matters for privacy, security, and true self-custody. Learn the risks of using third-party nodes."
keywords: ["bitcoin node", "privacy", "security", "self custody", "verification", "third party"]
tags: ["node", "privacy", "security", "bitcoin"]
---

# Why run your own node

Running your own Bitcoin node is not required to hold bitcoin, but it completes self-custody: your keys sign, and your own node verifies. Without one, your wallet tells someone else's server all your addresses, balances and history, and trusts that server to tell the truth about payments and confirmations. With one, nobody learns what you own and nobody can fool you about whether you were paid. It costs a small computer, a 2 TB SSD and a few days of syncing.

## What does a third-party node learn about you?

Every time your wallet connects to someone else's node or server, it reveals:

<div class="fixed-width-table">

| What is revealed | What the operator can do with it |
|---------------------|------|
| All your addresses | Map your whole wallet |
| Your balances | Know how much bitcoin you have |
| Your transaction history | Build a financial profile |
| Your IP address | Link your addresses to your location |
| When you are online | Learn your patterns of activity |
| Addresses you have not used yet | Wallets often ask about these in advance |

</div>

Public servers can be run by anyone: analysis companies building databases of who owns which address, exchanges following what customers do after withdrawing, governments monitoring finances, or thieves looking for targets. You cannot know who runs the ones your wallet connects to.

## Can someone else's node lie to you?

Yes. Without your own node, you trust others to tell you the truth about the blockchain.

### Fake confirmations

A skilled attacker who can control which node your wallet talks to can show it a payment that does not exist on the real blockchain, and the wallet will display it as confirmed.

<div class="doc-diagram">

![The fake confirmation attack: an attacker's node tells your wallet a 10 BTC payment is confirmed while no such transaction exists on the real chain, and the loss surfaces later; your own node verifies blocks itself, making the lie impossible](/img/diagrams/nodes/fake-confirmation.svg)

</div>

It is difficult to pull off, but not impossible in a targeted attack.

### The wrong chain

If bitcoin splits into competing versions, as Bitcoin and Bitcoin Cash did in 2017, a wallet can end up connected to a node following the other one, and you may believe you received bitcoin when you received a different coin with different rules and value. Your own node follows the rules you chose to run.

## What does your own node verify?

Your node checks for itself that every transaction is valid, that every block follows every rule, and that your balance is real. Your security then rests on your wallet and your own verification, instead of your wallet and a node of unknown honesty, and a payment counts as confirmed only when your node has verified the block it is in.

## How does a node complete self-custody?

Self-custody has three parts: you control the keys (a hardware wallet), you verify the transactions (your own node), and you depend on no third party. A hardware wallet alone covers the first; the node covers the other two.

<div class="doc-diagram">

![Complete self-custody stands on three legs: a hardware wallet that signs, your own node that verifies, and your own connection that broadcasts; together they give full control with no third party in the loop](/img/diagrams/nodes/self-custody-trio.svg)

</div>

## What else does a node give you?

- It strengthens the network: more nodes make bitcoin harder to attack and more decentralised, and running one is taking part in enforcing its rules.
- It teaches you how bitcoin works: how transactions spread, how blocks are checked, how the mempool fills and empties.
- It powers other services: your own Electrum server, a Lightning node, a block explorer or payment processing.

## What are the common objections?

### Isn't it too technical?

Not any more. If you can install an app and wait for it to sync, you can run a node, and packages such as Umbrel and RaspiBlitz make it easier still.

### Isn't the storage too much?

A pruned node needs only about 10 GB. A full node needs about 770 GB as of September 2026, and a 2 TB SSD costs far less than the bitcoin it protects.

### What if you don't leave your computer on?

A node only needs to be running when you use your wallet, and it catches up when switched on. A dedicated small computer or old laptop left running is more convenient.

### What if you're not a target?

You may not be today. But privacy is easier to keep than to recover, and you cannot know who is logging data for later use.

## Who should run a node?

| | Who |
|---|---|
| Strongly recommended | Anyone holding significant bitcoin, valuing financial privacy, regularly receiving bitcoin, or using self-custodial Lightning |
| Worth doing | Anyone who wants to learn how bitcoin works, support the network, or depend less on others |
| Can wait | Complete beginners, people holding very small amounts, and people who only use custodial services |

The [node guide](/docs/bitcoin-node/) sets one up.
