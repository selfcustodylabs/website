# Choose Your Bitcoin Computer

> How to choose the right laptop for Bitcoin self-custody. Hardware recommendations and security precautions for your dedicated Bitcoin machine.

Source: https://selfcustodylabs.com/docs/advanced/bitcoin-computer/choice/
Last updated: 2026-10-26
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Any modest laptop is powerful enough to be a Bitcoin computer, so choose by firmware rather than speed: we recommend a ThinkPad that [Libreboot](https://selfcustodylabs.com/docs/libreboot/) supports, so that the proprietary BIOS can be replaced with open-source firmware. The ThinkPad X230 or T430 suits a small budget, and the T480s a medium one. Second-hand is fine, with a new SSD and new USB sticks.

## Why choose a laptop Libreboot supports?

Some people suggest buying a brand-new laptop for security, but a new laptop still ships with proprietary firmware that you cannot inspect. That is why we recommend a laptop on which you can install open-source firmware, and our choice is [Libreboot](https://selfcustodylabs.com/docs/libreboot/). Flashing it is not the easiest process, but it is worth the effort.

## Which laptop fits your budget?

- Low budget: the Lenovo ThinkPad [X230](https://psref.lenovo.com/syspool/Sys/PDF/withdrawnbook/ThinkPad_X230.pdf) or [T430](https://psref.lenovo.com/syspool/sys/pdf/withdrawnbook/thinkpad_t430.pdf). Both are cheap second-hand, sturdy and easy to work on.
- Medium budget: the Lenovo ThinkPad [T480s](https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_T480s/ThinkPad_T480s_Spec.pdf). Supported by Libreboot since its December 2024 release, it takes NVMe SSDs and up to 24 GB of memory, and is fast enough for other bitcoin work too. It needs Lenovo's firmware updated before flashing; see the [requirements](https://selfcustodylabs.com/docs/libreboot/requirements/).

## What precautions does a second-hand laptop need?

These laptops are usually bought second-hand, so before turning one into a Bitcoin computer:

- Fit a new SSD. If you cannot, at least wipe the existing drive and encrypt it with LUKS during installation.
- Use new USB sticks for installation and backups, not old or unknown ones.
