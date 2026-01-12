---
sidebar_position: 6
title: "Connect Sparrow Wallet"
description: "Practical guide: Connect Sparrow Wallet. Covers bitcoin, self custody, security."
keywords: ["bitcoin", "self custody", "security", "privacy", "node", "connect", "sparrow", "wallet", "hardware wallet", "bitcoin node"]
tags: ["bitcoin node", "sparrow wallet", "self custody"]
---
# Connect Sparrow Wallet

Once you've set up your node and Electrum server using the guide that best fits your needs, we can now connect Sparrow wallet to the Electrum server. This will allow the wallet to quickly retrieve your transaction history, as all the blockchain data downloaded with your node has already been fully indexed.

Here’s how to do it:

- Open Sparrow Wallet.
- Go to `File => Settings`, then click on `Server` in the bottom left.
- In the URL box, enter your node's `IP` address and port `50002`.
- Enable the `SSL` toggle and click Test Connection.
-If the test passes, enable the toggle in the bottom right to connect to your node. Once the connection is established, the color will turn blue, indicating that a private connection has been successfully made to your private Electrum server.

![Sparrow](/img/node/sparrow.webp)