---
sidebar_position: 2
title: "Bitcoin Glossary: 100+ Terms Explained"
description: "Complete glossary of Bitcoin and self-custody terminology. Definitions for UTXO, seed phrase, hardware wallet, multisig, and 100+ other terms."
keywords: ["bitcoin glossary", "bitcoin terms", "bitcoin definitions", "cryptocurrency terminology", "utxo", "seed phrase", "self custody"]
tags: ["glossary", "reference", "terminology"]
slug: /reference/glossary
---

<SectionBadge section="reference" />

# Bitcoin Glossary

A comprehensive reference for Bitcoin and self-custody terminology. Click any term to jump to its definition.

---

## Quick Navigation

[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [J](#j) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [Q](#q) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w) · [X](#x)

---

## A

### Address
A string of characters representing a destination for Bitcoin payments. Similar to an email address, but for receiving Bitcoin. Modern addresses typically start with `bc1q` (SegWit) or `bc1p` (Taproot). See [Address Types](/docs/reference/address-types).

### Air-Gapped
A security measure where a device is completely isolated from the internet and other networks. Air-gapped computers communicate only through QR codes, SD cards, or manual data entry. See [Air-Gapped Computer Guide](/docs/advanced/air-gapped-computer).

### Altcoin
Any cryptocurrency other than Bitcoin. Examples include Ethereum, Litecoin, and thousands of others.

---

## B

### Bech32
The encoding format for Native SegWit addresses (starting with `bc1q`). Uses only lowercase letters and numbers, avoiding confusing characters like `0/O` and `1/l`.

### Bech32m
An updated version of Bech32 used for Taproot addresses (starting with `bc1p`).

### BIP (Bitcoin Improvement Proposal)
A design document for introducing new features or information to Bitcoin. Important BIPs include BIP39 (seed phrases), BIP32 (HD wallets), and BIP44/49/84/86 (derivation paths).

### BIP39
The standard for mnemonic seed phrases. Defines the 2048-word list used to encode wallet seeds as human-readable words. See [Seed Phrases](/docs/learn/keys/seed).

### Bitcoin Core
The reference implementation of the Bitcoin protocol. A full node software that validates all transactions and blocks. See [Bitcoin Node Guide](/docs/bitcoin-node).

### Block
A collection of Bitcoin transactions bundled together and added to the blockchain. New blocks are created approximately every 10 minutes.

### Blockchain
A distributed ledger containing all Bitcoin transactions ever made. Each block links to the previous one, forming a chain.

### Block Explorer
A web tool that lets you view transactions, addresses, and blocks on the blockchain. Examples: Mempool.space, Blockstream.info.

### Block Height
The number of blocks in the blockchain since the genesis block (block 0). Used to identify specific points in Bitcoin's history.

### Block Reward
The amount of new bitcoin created with each block, paid to the miner who finds the block. Currently 3.125 BTC, halving approximately every 4 years.

---

## C

### Change Address
When you spend a UTXO but don't use the full amount, the remainder is sent to a change address in your own wallet. Like getting change when you pay with a $20 bill.

### Change Output
The transaction output that returns excess funds to the sender's wallet after a payment.

### Checksum
A small piece of data used to verify integrity. In seed phrases, the final word(s) include checksum data to detect errors.

### Coinjoin
A privacy technique that combines multiple users' transactions into a single transaction, making it difficult to trace which inputs correspond to which outputs. See [CoinJoin Guide](/docs/privacy/coinjoin).

### Cold Storage
Keeping Bitcoin private keys on a device that never connects to the internet. The most secure form of storage.

### Cold Wallet
A wallet that stores private keys offline. Hardware wallets and air-gapped computers are cold wallets.

### Confirmation
Each new block added after a transaction is included counts as one confirmation. More confirmations = higher certainty the transaction is permanent. 6 confirmations is traditionally considered final.

### Consensus
The agreement among Bitcoin nodes about the current state of the blockchain. Bitcoin's proof-of-work consensus ensures all honest nodes agree.

### CPFP (Child Pays for Parent)
A technique to speed up an unconfirmed transaction by creating a new transaction that spends its output with a higher fee.

### Custodial
A service where a third party holds your private keys (and thus your Bitcoin) on your behalf. Exchanges are custodial. Opposite of self-custody.

---

## D

### Derivation Path
The hierarchical path used to derive specific keys from a master seed. Example: `m/84'/0'/0'/0/0`. Different paths generate different addresses. See [Derivation Paths](/docs/learn/keys/derivation-path).

### Descriptor
A standardized way to describe how addresses are generated from keys. Used for wallet backup and recovery, especially in multisig setups.

### Difficulty
A measure of how hard it is to mine a new block. Adjusts every 2016 blocks (~2 weeks) to maintain the 10-minute block target.

### Dusting Attack
A privacy attack where tiny amounts of Bitcoin are sent to many addresses to track their future spending patterns.

---

## E

### Electrum Server
Software that indexes the Bitcoin blockchain to allow lightweight wallets to query transaction data efficiently. Examples: Electrs, Fulcrum.

### Entropy
Randomness used to generate private keys and seed phrases. High-quality entropy is essential for security. See [Why Randomness Matters](/docs/learn/keys/random).

---

## F

### Fee
The amount paid to miners to include a transaction in a block. Measured in satoshis per virtual byte (sat/vB).

### Fee Rate
The fee density of a transaction, typically measured in sat/vB. Higher fee rates result in faster confirmation.

### Full Node
Software that independently validates all Bitcoin transactions and blocks against consensus rules. See [What is a Bitcoin Node](/docs/learn/nodes/what-is-node).

---

## G

### Genesis Block
The first block in the Bitcoin blockchain, mined by Satoshi Nakamoto on January 3, 2009.

---

## H

### Halving
The event where the block reward is cut in half, occurring approximately every 4 years (210,000 blocks). Reduces Bitcoin's inflation rate.

### Hardware Wallet
A dedicated physical device designed to securely store Bitcoin private keys offline. Examples: Coldcard, Trezor, Ledger. See [Hardware Wallets](/docs/learn/wallets/hardware-wallets).

### Hash
A fixed-length output produced by running data through a cryptographic hash function. Used extensively in Bitcoin for security and verification.

### Hash Rate
The total computational power being used to mine Bitcoin, measured in hashes per second.

### HD Wallet (Hierarchical Deterministic)
A wallet that generates all addresses from a single seed phrase, allowing complete wallet recovery from just the seed words.

### Hot Wallet
A wallet connected to the internet. More convenient but less secure than cold storage. See [Software Wallets](/docs/learn/wallets/software-wallets).

---

## I

### Input
A reference to a previous transaction output being spent in a new transaction. Transactions consume inputs and create outputs.

### Intel ME (Management Engine)
A subsystem in Intel processors that operates independently and can pose security risks. See [Libreboot Guide](/docs/libreboot).

---

## J

### JSON-RPC
A protocol used to communicate with Bitcoin Core. Many wallet applications use JSON-RPC to interact with a node.

---

## K

### KYC (Know Your Customer)
Identity verification requirements imposed by exchanges and financial services. Links your identity to your Bitcoin purchases, reducing privacy.

---

## L

### Legacy Address
The original Bitcoin address format, starting with `1`. Higher transaction fees than newer formats. See [Address Types](/docs/reference/address-types).

### Lightning Network
A "Layer 2" payment network built on top of Bitcoin, enabling fast, low-fee transactions.

### Libreboot
Open-source firmware replacement for computer BIOS that removes proprietary code and potential backdoors. See [Libreboot Guide](/docs/libreboot).

---

## M

### Mempool
The collection of unconfirmed transactions waiting to be included in a block. Each node maintains its own mempool.

### Mining
The process of using computational power to validate transactions and create new blocks. Miners compete to solve a proof-of-work puzzle.

### Mnemonic
The human-readable word sequence (seed phrase) used to encode a wallet's seed. See [Seed Phrases](/docs/learn/keys/seed).

### Multisig (Multisignature)
A security setup requiring multiple private keys to authorize a transaction. Example: 2-of-3 multisig needs any 2 of 3 keys to spend. See [Multisig Setup](/docs/advanced/multisig).

---

## N

### Native SegWit
The most efficient address format for standard transactions, starting with `bc1q`. Lower fees than Legacy or Nested SegWit. See [Address Types](/docs/reference/address-types).

### Nested SegWit
A backwards-compatible SegWit format using addresses starting with `3`. A bridge between Legacy and Native SegWit.

### Node
A computer running Bitcoin software that validates and relays transactions. See [Bitcoin Node Guide](/docs/bitcoin-node).

### Non-Custodial
A wallet or service where you control your own private keys. Self-custody is non-custodial.

---

## O

### OP_RETURN
A Bitcoin script opcode that allows storing small amounts of data in a transaction without creating spendable outputs.

### Orphan Block
A valid block that is not part of the main chain, usually because another block at the same height was propagated first.

### Output
The destination(s) of a Bitcoin transaction. Each output specifies an amount and the conditions for spending it.

---

## P

### P2PKH (Pay to Public Key Hash)
The technical name for Legacy addresses (starting with `1`).

### P2SH (Pay to Script Hash)
The technical name for Script addresses (starting with `3`). Used for complex scripts including Nested SegWit.

### P2TR (Pay to Taproot)
The technical name for Taproot addresses (starting with `bc1p`).

### P2WPKH (Pay to Witness Public Key Hash)
The technical name for Native SegWit addresses (starting with `bc1q`).

### Passphrase
An optional additional word added to a seed phrase to create a separate wallet. Sometimes called the "25th word." See [Passphrases](/docs/learn/keys/passphrase).

### PayJoin
A privacy-enhancing transaction where both sender and receiver contribute inputs, breaking blockchain analysis heuristics.

### PBST
See PSBT.

### Private Key
A secret number that controls Bitcoin at a specific address. Must be kept secret. See [Private Keys](/docs/learn/keys/intro).

### Proof of Work (PoW)
The consensus mechanism Bitcoin uses to secure the network. Miners must perform computational work to create new blocks.

### PSBT (Partially Signed Bitcoin Transaction)
A format for passing unsigned or partially signed transactions between devices or parties. Essential for hardware wallets and multisig.

### Public Key
A number derived from a private key that can be shared publicly. Used to generate addresses and verify signatures.

---

## Q

### QR Code
A two-dimensional barcode often used to encode Bitcoin addresses for easy scanning.

---

## R

### RBF (Replace-By-Fee)
A feature allowing an unconfirmed transaction to be replaced with a new version paying a higher fee.

### Recovery Phrase
See Seed Phrase.

### RPC (Remote Procedure Call)
A protocol for applications to communicate with Bitcoin Core. See JSON-RPC.

---

## S

### Satoshi (sat)
The smallest unit of Bitcoin: 0.00000001 BTC. Named after Bitcoin's creator, Satoshi Nakamoto.

### Satoshi Nakamoto
The pseudonymous creator of Bitcoin who published the whitepaper in 2008 and launched the network in 2009.

### Script
Bitcoin's programming language used to define spending conditions for transactions.

### Secure Element
A tamper-resistant hardware chip that protects sensitive data (like private keys) from physical attacks.

### Seed Phrase
A sequence of 12 or 24 words that encodes your wallet's master seed. The backup that can restore your entire wallet. See [Seed Phrases](/docs/learn/keys/seed).

### SegWit (Segregated Witness)
A 2017 Bitcoin upgrade that separates transaction signatures ("witness" data) from transaction data, enabling more efficient transactions and fixing transaction malleability.

### Self-Custody
Holding your own Bitcoin private keys, rather than trusting a third party. See [What is Self-Custody](/docs/learn).

### Signature
Cryptographic proof that a transaction was authorized by the private key owner.

### Signing Device
A hardware wallet or other device used to sign Bitcoin transactions. See [Hardware Wallet Setup](/docs/wallet-setup/hardware-wallet).

### Single-Sig
A standard wallet where one private key controls the funds. Contrast with multisig.

### SOIC8
A type of chip package commonly used for BIOS flash chips. Relevant for [Libreboot](/docs/libreboot) flashing.

### Software Wallet
An application (mobile or desktop) that manages Bitcoin keys on a general-purpose device. See [Software Wallets](/docs/learn/wallets/software-wallets).

### SPV (Simplified Payment Verification)
A method for lightweight wallets to verify transactions without downloading the full blockchain.

---

## T

### Taproot
A 2021 Bitcoin upgrade enabling more efficient and private complex transactions using Schnorr signatures. Addresses start with `bc1p`.

### Testnet
A separate Bitcoin network for testing, using worthless coins. Developers use testnet to experiment without risking real Bitcoin.

### Timelock
A restriction that prevents Bitcoin from being spent until a certain time or block height.

### Tor (The Onion Router)
Privacy network that anonymizes internet traffic. Can be used with Bitcoin nodes and wallets for enhanced privacy.

### Transaction
A signed message that transfers Bitcoin from one or more inputs to one or more outputs.

### Transaction ID (TXID)
A unique identifier for a Bitcoin transaction, generated by hashing the transaction data.

---

## U

### UTXO (Unspent Transaction Output)
A Bitcoin amount that has been received but not yet spent. Your wallet balance is the sum of your UTXOs. See [UTXOs Explained](/docs/learn/transactions/utxos).

### UTXO Set
The collection of all unspent transaction outputs in the Bitcoin network. What every Bitcoin node tracks.

---

## V

### Vanity Address
A Bitcoin address containing a custom pattern (like `1Love...`). Generated by repeatedly creating addresses until a match is found.

### vByte (Virtual Byte)
The unit used to measure transaction size for fee calculation. Accounts for SegWit's different weighting of witness data.

### Verification
The process of independently confirming that data (like a transaction or software download) is valid and unmodified.

---

## W

### Wallet
Software or hardware that manages Bitcoin private keys and enables sending/receiving Bitcoin.

### Wallet Descriptor
See Descriptor.

### Watch-Only Wallet
A wallet that can monitor addresses and create unsigned transactions but cannot sign (spend) because it doesn't have the private keys.

### Whitepaper
The original Bitcoin paper published by Satoshi Nakamoto in 2008: "Bitcoin: A Peer-to-Peer Electronic Cash System."

### Witness
In SegWit transactions, the signature data that proves ownership. Separated from the main transaction for efficiency.

---

## X

### xprv (Extended Private Key)
A master private key that can derive all other private keys and addresses in an HD wallet. Must be kept secret like a seed phrase. See [Extended Private Keys](/docs/learn/keys/xprv).

### xpub (Extended Public Key)
A master public key that can derive all public keys and addresses in an HD wallet. Can be shared to generate receive addresses without exposing private keys. See [Extended Public Keys](/docs/learn/keys/xpub).

---

## Numbers & Symbols

### 2-of-3
A common multisig configuration requiring any 2 of 3 keys to spend funds. See [Multisig](/docs/advanced/multisig).

### 21 Million
The maximum supply of Bitcoin that will ever exist, enforced by Bitcoin's consensus rules.

### 51% Attack
A theoretical attack where an entity controlling more than half the network's hash rate could double-spend or censor transactions.

---

## Didn't Find What You're Looking For?

If a term is missing, [let us know](mailto:selfcustodylabs@proton.me) and we'll add it.

---

## Continue Learning

- [What is Bitcoin?](/docs/learn/fundamentals/what-is-bitcoin) — Start from the beginning
- [Learn Section](/learn) — Comprehensive Bitcoin education
- [Guides](/guides) — Hands-on tutorials
