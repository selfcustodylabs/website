# Bitcoin Wallets: Hardware, Software, Air-Gapped, Multisig

> Bitcoin wallet types compared: hardware wallets, software wallets, air-gapped setups, and multisig vaults. Pick the right security model for your needs.

Source: https://selfcustodylabs.com/docs/learn/wallets/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

A bitcoin wallet does not hold bitcoin: the coins are recorded on the blockchain, and the wallet holds the keys that can spend them. Wallet types differ in where those keys live and what can reach them. A software wallet keeps keys on a phone or computer; a hardware wallet keeps them on a dedicated device that signs; an air-gapped wallet keeps them on a device that never connects to a network; a multisig wallet spreads them across several devices so that no single one can spend.

## Which wallet type fits which situation?

| Wallet type | Where the keys live | Suits | Read |
|---|---|---|---|
| Software wallet | A phone or computer app | Learning and small amounts | [Software wallets](https://selfcustodylabs.com/docs/learn/wallets/software-wallets/) |
| Hardware wallet | A dedicated signing device | Savings you would miss; most people | [Hardware wallets](https://selfcustodylabs.com/docs/learn/wallets/hardware-wallets/) |
| Air-gapped wallet | A device that never touches a network | Larger holdings, higher threat levels | [Air-gapped wallets](https://selfcustodylabs.com/docs/learn/wallets/air-gapped-wallets/) |
| Multisig | Several devices, any M of N needed to spend | Life-changing amounts, inheritance | [Multisig](https://selfcustodylabs.com/docs/learn/wallets/multisig/) |

Pick the model that matches your [threat model](https://selfcustodylabs.com/docs/learn/fundamentals/threat-models/), not the most impressive one: the right wallet for $500 is rarely the right wallet for $50,000. Two related pages cover what went wrong for one vendor in 2026, the [Coldcard entropy incident](https://selfcustodylabs.com/docs/learn/wallets/coldcard-entropy-incident/), and the [hardware wallet comparison](https://selfcustodylabs.com/docs/reference/hardware-wallet-comparison/) for choosing a device.
