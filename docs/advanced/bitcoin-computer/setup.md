# Bitcoin Computer Setup Guide

> Set up your dedicated Bitcoin computer with Libreboot BIOS, Linux Mint, and LUKS encryption for maximum security and privacy.

Source: https://selfcustodylabs.com/docs/advanced/bitcoin-computer/setup/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Setting up a Bitcoin computer takes four steps: replace the BIOS with Libreboot, install Linux Mint, encrypt the whole disk with LUKS during installation, and route the computer's bitcoin traffic through Tor. Then install only the wallet software you need, such as Sparrow, and nothing else.

## Step 1: Replace the BIOS with Libreboot

Step 1 replaces the firmware. 
[Libreboot](https://selfcustodylabs.com/docs/libreboot/) replaces the laptop's proprietary BIOS with open-source firmware built on coreboot. On the ThinkPads it supports, it strips the Intel Management Engine down with me_cleaner and disables it, and keeps the remaining vendor code to what the board needs to boot. That does not make the machine free of closed code, but it removes most of the proprietary software that runs before your operating system, and what is left of the firmware is source you can read and rebuild. For a Bitcoin computer, whose job is to create and broadcast transactions in an environment you trust, that is a much smaller base to trust.

## Step 2: Install Linux Mint

Step 2 installs the operating system. Linux Mint balances ease of use and stability: it is light, runs few unnecessary services, inherits Ubuntu's broad hardware support, and its desktop is easy to find your way around even if you are new to Linux. Check the installer's checksum and signature before writing it to a USB stick.

## Step 3: Encrypt the disk with LUKS

Step 3 protects what is stored on the laptop if it is stolen. During installation, choose to encrypt the whole drive; Linux Mint uses LUKS (Linux Unified Key Setup), which keeps everything encrypted at rest behind a passphrase you type at start-up and supports several passphrases in separate key slots. Encryption protects the data when the laptop is off or stolen; it does not protect a running system from malware, which is what the rest of this setup is for.

## Step 4: Route bitcoin traffic through Tor

Step 4 hides where your bitcoin activity comes from. Tor encrypts your internet traffic and routes it through several relays, so nobody watching can tie your IP address to what you do. If your [node](https://selfcustodylabs.com/docs/bitcoin-node/) already runs over [Tor](https://selfcustodylabs.com/docs/bitcoin-node/tor/) on a separate device, the laptop does not strictly need to send everything through Tor, but because it is online, routing its bitcoin activity through Tor gives the most privacy. It hides your IP address from anyone trying to link your wallet or node to your location, gets around ISPs or governments that block bitcoin traffic, and keeps your connections private even when you run your own node.
