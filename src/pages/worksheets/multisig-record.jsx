import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Boxes, Circle, Field, Fields } from "@site/src/components/worksheet/parts";

const KEYS = [1, 2, 3];

export default function MultisigRecordWorksheet() {
  return (
    <Worksheet slug="multisig-record">
      <Block title="The wallet">
        <Fields>
          <Field label="Wallet name in Sparrow" />
          <Field label="Quorum" hint="Keys needed to spend, of the total: 2 of 3" />
          <Field label="Script type" hint="Sparrow's multisig default is native segwit (P2WSH)" />
          <Field label="Derivation path" hint="Usually m/48'/0'/0'/2' for native segwit" />
          <Boxes label="First receive address: first 8" count={8} />
          <Boxes label="Last 8" count={8} />
        </Fields>
      </Block>
      <Block title="Wallet descriptor copies">
        <Fields>
          <Field label="Copy 1 kept at" />
          <Field label="Copy 2 kept at" />
          <Field label="Copy 3 kept at" />
          <Field label="Last checked that every copy gives the same first address" />
        </Fields>
      </Block>
      {KEYS.map((k) => (
        <Block key={k} title={`Key ${k}`}>
          <Fields>
            <Field label="Make and model" />
            <Boxes label="Master fingerprint" count={8} />
            <Field label="Firmware version" />
            <Circle label="Seed length" options={["12 words", "24 words"]} />
            <Field label="Device kept at" />
            <Field label="Seed backup kept at" hint="Never the same place as this key's device" />
            <Field label="Backup last tested on" />
          </Fields>
        </Block>
      ))}
    </Worksheet>
  );
}
