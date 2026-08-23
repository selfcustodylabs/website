# Bitcoin Transactions: How They Work

> How Bitcoin transactions work end to end: UTXOs, transaction creation, signing, broadcasting, fees, and the transaction types you will actually encounter.

Source: https://selfcustodylabs.com/docs/learn/transactions/
Last updated: 2026-08-02
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A Bitcoin transaction is not a debit from an account. It is a chain of cryptographic claims: you prove you control some unspent outputs (UTXOs), you spend them, and you create new outputs locked to whoever you are paying. Understanding this changes how you think about wallets, fees, and privacy.

## In this section

- **[Understanding Transactions](https://selfcustodylabs.com/docs/learn/transactions/understanding)**: the mental model you need before anything else
- **[UTXOs](https://selfcustodylabs.com/docs/learn/transactions/utxos)**: the building blocks every transaction consumes and produces
- **[Creating Transactions](https://selfcustodylabs.com/docs/learn/transactions/create)**: how a wallet actually assembles a transaction
- **[Signing Transactions](https://selfcustodylabs.com/docs/learn/transactions/sign)**: what signing means and how online vs offline signing differ
- **[Broadcasting Transactions](https://selfcustodylabs.com/docs/learn/transactions/broadcast)**: getting your signed transaction onto the network
- **[Fees](https://selfcustodylabs.com/docs/learn/transactions/fees)**: how miners pick which transactions to include
- **[Transaction Types](https://selfcustodylabs.com/docs/learn/transactions/types)**: pre-signed, fully signed, and partially signed (PSBT)
