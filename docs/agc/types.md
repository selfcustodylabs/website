---
sidebar_position: 2
title: Types of AGCs
slug: /air-gapped-computer/types/
tags: [air-gapped, computer, laptop, raspberry, desktop, wi-fi]
---

# Types of Air-Gapped Computers

When choosing an Air-Gapped Computer (AGC), there are a few options to consider:


## Laptop (Recommended)

An older laptop is often the best choice for air-gapping. I recommend the Lenovo ThinkPad X230, as it's affordable and easy to modify. You can remove the Wi-Fi and Bluetooth modules to ensure no wireless connectivity.

If you’re particularly concerned about theft, consider:
- **Physically disabling the Ethernet** port (e.g., by damaging it or desoldering it from the motherboard)
- **Encrypting the hard drive** with full disk encryption. Keep in mind that you're likely buying a used laptop, unless you already own one. If so, you might want to install a fresh, unused hard drive for added security.


## Raspberry Pi Zero 1.3

This older, harder-to-find device does not have built-in Wi-Fi, Bluetooth or Ethernet port, so it cannot access the internet. One downside is that it only has 512MB of memory, making it difficult to run a full operating system with a graphical user interface (GUI). However, if you're comfortable using the command line and setting up offline devices, I recommend using [DietPi](https://dietpi.com/) for a lightweight OS.


## Desktop Computer

A desktop computer is an excellent choice for use as a dedicated "seed generator" because of its superior speed and performance compared to devices like a Laptop or a Raspberry Pi Zero. You have the option to either assemble the computer yourself, which gives you more control over the components, or have the store build it for you, depending on your preference and expertise. When selecting parts, it's crucial to ensure that the components do not include Wi-Fi or Bluetooth capabilities, as these features could introduce potential security risks. Ideally, you should also choose parts that lack Ethernet ports to maintain a completely isolated setup. This ensures that the computer remains air-gapped, offering the highest level of security when generating your Bitcoin seeds.