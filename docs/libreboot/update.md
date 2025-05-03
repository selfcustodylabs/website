---
sidebar_position: 7
title: Update
slug: /libreboot/update/
tags: [libreboot, update, flashprog, bios]
---

# Update (internal)

Once Libreboot is already installed, you can update to new releases through internal flashing, without needing to disassemble your laptop again.


## Disable security protections before flashing

Before performing an internal flash, you need to disable the /dev/mem protections. Remember to re-enable them once you’re done.

To check if there are any issues, run:

```bash
sudo flashprog -p internal
```

If you don’t get any errors, you can proceed to the Flash Chip Size part.

If you see an error related to `/dev/mem` access, you should restart your system with the `iomem=relaxed` kernel parameter.

To do this just type:

```bash
sudo nano /etc/default/grub
```

Find the line starting with `GRUB_CMDLINE_LINUX_DEFAULT` and add `iomem=relaxed`:

```bash
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash iomem=relaxed"
```

Save the file and update grub:

```bash
sudo update-grub
```

Reboot the system:

```bash
sudo reboot
```

Additionally, use a kernel that does not have the `CONFIG_STRICT_DEVMEM` option enabled. For more detailed instructions, refer to the original guide on the Libreboot website.


## Flash Chip Size

To determine the size of your boot flash chip, use the following command:

```bash
sudo flashprog -p internal
```

This will display information about your boot flash in the output.


## Read the Current Chip Contents

To read the current contents of the flash chip, run the below command three times:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump.bin
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump2.bin
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r dump3.bin
```

Next, use `sha1sum` to compare the dumped BIOS images

```bash
sha1sum dump.bin dump2.bin dump3.bin
```

If the hashes match, you should see something like this:

```bash
f79eac66c119da200460153019d3d2d5b2c22839  dump.bin
f79eac66c119da200460153019d3d2d5b2c22839  dump2.bin
f79eac66c119da200460153019d3d2d5b2c22839  dump3.bin
```

Once you've confirmed that the hashes are the same, you can clean up any temporary dump files:

```bash
rm -fr dump2.bin dump3.bin
```

## Write the Rom to the Chip

To erase and write a new ROM to the flash chip, run:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -w libreboot.rom
```

Note: The force_I_want_a_brick option disables safety checks in flashprog. This is necessary in some cases due to changes in flashrom and coreboot over time. If you prefer to avoid this option, try the following:

1. Start with -p internal.
2. If that doesn’t work, use -p internal:boardmismatch=force.
3. If it still doesn't work, use -p internal:boardmismatch=force,laptop=force_I_want_a_brick.

As long as you are using the correct ROM for your machine, it is safe to run these commands. These options simply disable safety checks and are not inherently dangerous.

If the flashing is successful, the tool will display "VERIFIED" or indicate that the chip contents are identical to the requested image.

To double-check, you can dump the newly flashed BIOS image by running:

```bash
sudo flashprog -p internal:laptop=force_I_want_a_brick,boardmismatch=force -r new_dump.bin
```

Next, use `sha1sum` to compare the dumped BIOS image with the original Libreboot ROM file

```bash
sha1sum libreboot.rom new_dump.bin
```

If the hashes match, you should see something like this:

```bash
3019da54cea33d2d5b2c228393c009ad20046015  libreboot.rom
3019da54cea33d2d5b2c228393c009ad20046015  new_dump.bin
```

Once you've confirmed that the hashes are the same, you can clean up any temporary dump files:

```bash
sudo rm -fr new_dump.bin
```

Now you can reboot your laptop with the updated bios!