# Connect Sparrow Wallet to Your Node

> Connect Sparrow Wallet to your own Bitcoin node and Electrum server so transactions stay private and verified by your own infrastructure.

Source: https://selfcustodylabs.com/docs/bitcoin-node/connect-sparrow-wallet/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

If you installed Sparrow through Parmanode, it is already connected to your node: open it, and the connection toggle at the bottom right turns blue, Sparrow's colour for a private Electrum server. Otherwise, open Sparrow's server settings, choose Private Electrum, enter your Electrum server's address and port (50002 with SSL, or 50001), test the connection, and switch it on. Away from home, connect to the server's Tor onion address through a Tor proxy. From then on, your balance checks and broadcasts go only to your own node.

## What if you used Parmanode?

Sparrow installed through Parmanode connects automatically. If the toggle does not turn blue, check that the Electrum server (Fulcrum or electrs) is running, that Bitcoin Core has fully synced, and that the Electrum server has finished its first index.

## Step 1: Open Sparrow's server settings

Step 1 finds the settings for a Sparrow you installed yourself. Open `File`, `Settings` (called `Preferences` on some versions and on macOS), choose `Server` in the sidebar, and pick Private Electrum as the server type.

## Step 2: Enter your server's details

Step 2 points Sparrow at your server.

<div class="fixed-width-table">

| Field | Value | Notes |
|-------|-------|-------|
| URL | Your server's address | `127.0.0.1` on the node itself; its local IP, such as `192.168.1.100`, elsewhere on your network |
| Port | `50002` with SSL, or `50001` without | 50002 is recommended |
| SSL | On, for port 50002 | |

</div>

Parmanode's Electrum server menu shows these details. Otherwise, find the node's local IP in your router's admin page or by running `ip addr` on the node.

## Step 3: Test the connection

Step 3 checks it works. Click `Test Connection`: a successful test shows the server's version and the current block height. If it fails, see [what if it does not connect](#what-if-it-does-not-connect).

## Step 4: Switch the connection on

Step 4 makes it live. Close the settings and turn on the toggle at the bottom right of the main window. It turns blue for a private Electrum server (green would mean Bitcoin Core directly, yellow a public server).

![Sparrow Wallet's main window with the server toggle at the bottom right showing blue, connected to a private Electrum server](https://selfcustodylabs.com/img/node/sparrow.webp)

## How do you connect from outside your home?

### Through Tor (recommended)

If your Electrum server has a Tor onion address:

1. Open Sparrow's server settings.
2. Turn on `Use Proxy`, set to `127.0.0.1:9050` for the Tor service or `127.0.0.1:9150` for Tor Browser.
3. Enter the onion address as the URL, with port `50001` and SSL off; Tor already encrypts the connection.

### Through a VPN

If you have a VPN into your home network, connect to it first and use the node's local address as usual.

## How do you check you are using your own node?

The server shown in Sparrow is your own address or onion address, not a public server; the block height matches your node's; and lookups in a new wallet come back quickly. Your addresses are no longer going to strangers' servers.

## Can other wallets use the same server?

Yes. One Electrum server can serve many wallets:

| Wallet | Where to set the server |
|---|---|
| Electrum | `Tools`, `Network`, `Server` |
| BlueWallet | `Settings`, `Network`, `Electrum Server`; use the onion address away from home |
| Nunchuk | `Settings`, `Network Settings` |

## What if it does not connect?

| Problem | What to check |
|---|---|
| "Connection refused" | Whether the Electrum server is running, whether Bitcoin Core has fully synced, whether indexing (12 to 48 hours) has finished, and which port you used; try both 50001 and 50002 |
| "Connection timed out" | The IP address, whether you are on the same network (local addresses do not work from outside), and whether a firewall on the node blocks the port |
| Connected, but the balance looks wrong | Let the wallet finish syncing, check the server has finished indexing, and try a rescan from the wallet's settings |
| Tor does not connect | Whether Tor is running on your computer, the onion address, and the port (usually 50001, without SSL) |
