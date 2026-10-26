import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Boxes, Checklist, Circle, Field, Fields } from "@site/src/components/worksheet/parts";

export default function BackupCheckWorksheet() {
  return (
    <Worksheet slug="backup-check">
      <Block>
        <Fields>
          <Field label="Date" />
          <Field label="Wallet and device" />
        </Fields>
      </Block>
      <Block title="1. Before the restore: what the wallet shows now">
        <Fields>
          <Field label="Script type" hint="Usually native segwit (bc1q)" />
          <Field label="Derivation path" hint="Usually m/84'/0'/0'" />
          <Boxes label="First receive address: first 8" count={8} />
          <Boxes label="Last 8" count={8} />
          <Boxes label="Account xpub: first 8" count={8} />
          <Boxes label="Last 8" count={8} />
        </Fields>
      </Block>
      <Block title="2. The wallet restored from the written backup alone">
        <Fields>
          <Field label="Restored on" hint="A wiped device, a second device, or an air-gapped app" />
          <Circle label="Words entered as written, not as remembered" />
          <Boxes label="First receive address: first 8" count={8} />
          <Boxes label="Last 8" count={8} />
          <Circle label="Address matches section 1" />
          <Circle label="Xpub matches section 1" options={["Yes", "No", "Not recorded"]} />
        </Fields>
      </Block>
      <Block title="3. Passphrase wallet, if you use one">
        <Fields>
          <Boxes label="Seed only: first address, first 8" count={8} />
          <Boxes label="With passphrase: first address, first 8" count={8} />
          <Circle label="The two differ" />
          <Circle label="With passphrase matches your real wallet" />
        </Fields>
      </Block>
      <Block title="4. Before you put the backup away">
        <Checklist
          items={[
            "The seed phrase is legible, and all 12 or 24 words are present, spelled correctly and in order.",
            "A wallet restored from the backup alone shows the same first receive address (and xpub) as the original.",
            "The passphrase wallet has been tested, if you use one.",
            "The metal copy has been tested, not only the paper.",
            "Any test device has been wiped.",
            "The backup is back in its secure place.",
          ]}
        />
      </Block>
      <Block title="Next test">
        <Fields>
          <Field label="Next check due" hint="Every 6 to 12 months, and after any change to the backup" />
        </Fields>
      </Block>
    </Worksheet>
  );
}
