# Internal Coreboot Flashing

> Flash Coreboot from inside a running system: downgrade your stock BIOS, unlock the Intel Flash Descriptor, and write the new firmware safely.

Source: https://selfcustodylabs.com/docs/coreboot/internal/
Last updated: 2026-08-02
Publisher: Self Custody Labs (https://selfcustodylabs.com)

---

Internal flashing lets you replace your laptop's stock BIOS with Coreboot from inside the running system, without opening the chassis or attaching an external SPI programmer. It only works on machines whose Intel Flash Descriptor region can be unlocked.

This path is faster than external flashing, but the prerequisites are strict: you need the right BIOS version, a writable descriptor region, and a verified ROM image to flash.

## In this section

- **[Downgrade Stock BIOS](https://selfcustodylabs.com/docs/coreboot/internal/downgrading-bios)**: install the BIOS version with an unlocked Intel ME region
- **[Unlock the BIOS Region](https://selfcustodylabs.com/docs/coreboot/internal/unlocking-bios)**: use CHIPSEC to clear the Flash Descriptor write protection
- **[Flash Coreboot](https://selfcustodylabs.com/docs/coreboot/internal/flashing-bios)**: write the new firmware and verify the result

If your laptop does not support internal flashing, see the [external flashing guide](https://selfcustodylabs.com/docs/coreboot/external-flashing) instead.
