---
sidebar_position: 6
title: "Connect Sparrow Wallet to Your Node"
description: "Connect Sparrow Wallet to your own Bitcoin node and Electrum server for private, self-sovereign Bitcoin transactions."
keywords: ["sparrow wallet", "bitcoin node", "electrum server", "self custody", "private transactions"]
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