import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import InlineLinks from "@site/src/components/InlineLinks";
import { formatDate } from "@site/src/data/guideFacts";
import { positions } from "@site/src/data/positions";
import { BandArt, CardTitle, Chips, CopyButton, Cta, Pill, Shell, Tile, Win } from "./Bento";
import { guideSteps, needsOf, pageCount } from "./guideData";
import LevelGauge from "./LevelGauge";
import Section from "./Section";
import { allGuides, getDoc, notes, sidebars } from "./siteIndex";
import styles from "./bento.module.css";

import dicePhoto from "./img/casino-dice.webp";
import t480sPhoto from "./img/t480s-libreboot.webp";

/*
 * The homepage below the starting-point flow: four numbered sections in the
 * order you do them (understand, make your keys, hold them, verify), then the
 * standing positions and the latest field notes. The layout follows the Feryx
 * docs homepage; names and text are each page's H1 and opening sentence
 * (siteIndex), and facts, steps and commands come from the guides' own data.
 */

/**
 * Names and years only: the losses are in the tables on the canonical page,
 * holding-bitcoin (CLAUDE.md: each story is told once).
 */
const EXCHANGES = [
  ["Mt. Gox", "2014", "Bankrupt"],
  ["Bitfinex", "2016", "Hacked"],
  ["Binance", "2026", "Hacked"],
];

function Spec({ guide }) {
  return (
    <p className={styles.spec}>
      {guide.time}
      <span aria-hidden="true">·</span>
      {guide.level}
    </p>
  );
}

function Understand() {
  const start = getDoc("/docs/learn/fundamentals/");
  const group = sidebars.learn.find((g) => g.link === start.permalink);
  if (!group) throw new Error(`[home] no learn sidebar category links to ${start.permalink}`);
  const holding = getDoc("/docs/learn/fundamentals/holding-bitcoin/");
  const threats = getDoc("/docs/learn/fundamentals/threat-models/");

  return (
    <Section
      id="understand"
      number="01"
      eyebrow="Understand"
      title="What self-custody is"
      description="What holding your own keys means, what happens to coins left on an exchange, and what you are defending against."
    >
      <div className={styles.bento}>
        <article className={clsx(styles.card, styles.feature)}>
          <div className={styles.featureBody}>
            <Pill>Start here</Pill>
            <CardTitle to={start.permalink} size="large">
              {start.name}
            </CardTitle>
            <p className={clsx(styles.text, styles.lead)}>{start.lead}</p>
            <ol className={styles.toc}>
              {group.items.map((p, i) => (
                <li key={p}>
                  <span className={styles.tocNo}>{String(i + 1).padStart(2, "0")}</span>
                  <Link to={p}>{getDoc(p).name}</Link>
                </li>
              ))}
            </ol>
            <Cta>Read from the start</Cta>
          </div>
          <BandArt band={start.band} />
        </article>

        <article className={clsx(styles.card, styles.side, styles.sideWin)}>
          <div className={styles.sideBody}>
            <span className={styles.label}>Exchanges</span>
            <CardTitle to={holding.permalink}>{holding.name}</CardTitle>
            <p className={styles.text}>{holding.brief}</p>
          </div>
          <div className={styles.sideWinBox}>
            <Win label="Exchange failures" tag={`${EXCHANGES.length} cases`}>
              <dl className={clsx(styles.kv, styles.kv3)}>
                {EXCHANGES.map(([name, year, what]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd className={styles.year}>{year}</dd>
                    <dd>{what}</dd>
                  </div>
                ))}
              </dl>
            </Win>
          </div>
        </article>

        <article className={clsx(styles.card, styles.side)}>
          <div className={styles.sideBody}>
            <span className={styles.label}>Three questions</span>
            <CardTitle to={threats.permalink}>{threats.name}</CardTitle>
            <p className={styles.text}>{threats.brief}</p>
            <Chips items={["What you protect", "Who from", "How much effort"]} ordered />
          </div>
          <BandArt band={threats.band} />
        </article>
      </div>
    </Section>
  );
}

function MakeKeys() {
  const dice = getDoc("/docs/learn/keys/random/");
  const passphrase = getDoc("/docs/learn/keys/passphrase/");
  const backup = getDoc("/docs/wallet-setup/backup-verification/");
  const addresses = [78, 54, 66];
  const column = (head) => (
    <div className={styles.bvCol}>
      <span className={styles.bvHead}>{head}</span>
      {addresses.map((w, i) => (
        <span key={i} className={styles.bvRow}>
          #{i}
          <i style={{ width: `${w}%` }} />
        </span>
      ))}
    </div>
  );

  return (
    <Section
      id="keys"
      number="02"
      eyebrow="Make your keys"
      title="A seed you made yourself"
      description="Roll the seed with dice, add a passphrase if it suits you, and test the backup before any bitcoin goes on it."
    >
      <div className={styles.row}>
        <article className={styles.card}>
          <div className={styles.media}>
            <img
              className={styles.mediaPhoto}
              src={dicePhoto}
              alt=""
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <span className={styles.badge}>Casino dice: every face weighs the same</span>
          </div>
          <div className={styles.mediaBody}>
            <CardTitle to={dice.permalink}>{dice.name}</CardTitle>
            <p className={styles.text}>{dice.brief}</p>
            <Chips items={guideSteps(dice)} ordered small />
            <Spec guide={dice.guide} />
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.media} aria-hidden="true">
            <div className={styles.pp}>
              <div className={styles.ppRow}>
                <span>24 words</span>
                <i>+</i>
                <span className={styles.ppNone}>no passphrase</span>
                <i>→</i>
                <span>Wallet A</span>
              </div>
              <div className={clsx(styles.ppRow, styles.ppLit)}>
                <span>24 words</span>
                <i>+</i>
                <span>• • • • • • •</span>
                <i>→</i>
                <span>Wallet B</span>
              </div>
            </div>
          </div>
          <div className={styles.mediaBody}>
            <CardTitle to={passphrase.permalink}>{passphrase.name}</CardTitle>
            <p className={styles.text}>{passphrase.brief}</p>
            <Chips items={needsOf(passphrase.guide)} small />
            <Spec guide={passphrase.guide} />
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.media} aria-hidden="true">
            <div className={styles.bv}>
              {column("Your wallet")}
              {column("Restored backup")}
              <span className={styles.bvOk}>Same addresses</span>
            </div>
          </div>
          <div className={styles.mediaBody}>
            <CardTitle to={backup.permalink}>{backup.name}</CardTitle>
            <p className={styles.text}>{backup.brief}</p>
            <Chips items={[backup.guide.cost, ...needsOf(backup.guide)].filter(Boolean)} small />
            <Spec guide={backup.guide} />
          </div>
        </article>
      </div>
    </Section>
  );
}

function HoldKeys() {
  const setup = getDoc("/docs/wallet-setup/hardware-wallet/");
  const devices = allGuides().filter(
    (g) => g.permalink.startsWith(setup.permalink) && g.permalink !== setup.permalink
  );
  const reviewed = devices.every((d) => d.guide.reviewed)
    ? formatDate(devices.map((d) => String(d.guide.reviewed)).sort()[0])
    : null;
  const multisig = getDoc("/docs/learn/wallets/multisig/");
  const seedsigner = getDoc("/docs/seedsigner/");
  const comparison = getDoc("/docs/reference/hardware-wallet-comparison/");

  return (
    <Section
      id="hold"
      number="03"
      eyebrow="Hold them"
      title="Where the keys live"
      description="A hardware wallet bought from its maker, a SeedSigner you build, or several devices in a multisig."
    >
      <div className={styles.bento}>
        <article className={clsx(styles.card, styles.stack, styles.span2, styles.tall)}>
          <div className={styles.stackHead}>
            <Tile band={setup.band} />
            <Pill>{pageCount(setup.permalink)} pages</Pill>
          </div>
          <CardTitle to={setup.permalink} size="large">
            {setup.name}
          </CardTitle>
          <p className={clsx(styles.text, styles.lead)}>{setup.brief}</p>
          <Chips items={guideSteps(setup)} ordered small />
          <Win
            className={styles.stackWin}
            label="Device guides, with a dice seed"
            tag={reviewed ? `reviewed ${reviewed}` : null}
          >
            <ul className={styles.devices}>
              {devices.map((d) => (
                <li key={d.permalink}>
                  <Link to={d.permalink}>{d.label ?? d.name}</Link>
                  <span className={styles.devCost}>
                    {String(d.guide.cost).replace(/\s*\(device\)$/, "")}
                  </span>
                  <span className={styles.devLevel}>
                    <LevelGauge level={d.guide.level} />
                  </span>
                </li>
              ))}
            </ul>
          </Win>
        </article>

        <article className={clsx(styles.card, styles.side)}>
          <div className={styles.sideBody}>
            <span className={styles.label}>{pageCount(multisig.permalink)} pages</span>
            <CardTitle to={multisig.permalink}>{multisig.name}</CardTitle>
            <p className={styles.text}>{multisig.brief}</p>
            <Chips items={guideSteps(multisig)} ordered small />
          </div>
          <BandArt band={multisig.band} />
        </article>

        <article className={clsx(styles.card, styles.small)}>
          <Pill>Our favourite</Pill>
          <CardTitle to={seedsigner.permalink} size="small">
            {seedsigner.name}
          </CardTitle>
          <p className={styles.text}>{seedsigner.brief}</p>
          <Chips items={["Not for beginners", seedsigner.guide.cost]} small />
        </article>

        <article className={clsx(styles.card, styles.small)}>
          <p className={styles.strip}>
            <span className={styles.stripKey}>Updated</span>
            {formatDate(comparison.updated) ?? "–"}
          </p>
          <CardTitle to={comparison.permalink} size="small">
            {comparison.name}
          </CardTitle>
          <p className={styles.text}>{comparison.brief}</p>
          <Chips items={["Price", "Air-gap", "Dice", "Open source"]} small />
        </article>
      </div>
    </Section>
  );
}

function Verify() {
  const node = getDoc("/docs/bitcoin-node/");
  const parmanode = getDoc("/docs/bitcoin-node/parmanode-setup/");
  if (!parmanode.command) {
    throw new Error(
      `[home] ${parmanode.permalink} has no one-line shell block for the install window`
    );
  }
  const libreboot = getDoc("/docs/libreboot/");
  const coinjoin = getDoc("/docs/learn/privacy/coinjoin-tutorial/");
  const computer = getDoc("/docs/advanced/bitcoin-computer/");

  return (
    <Section
      id="verify"
      number="04"
      eyebrow="Verify"
      title="Check it yourself"
      description="Run your own node, keep your coins private, and replace laptop firmware you cannot read."
    >
      <div className={styles.bento}>
        <article className={clsx(styles.card, styles.stack, styles.span2, styles.tall)}>
          <div className={styles.stackHead}>
            <Tile band={node.band} />
            <Pill>{pageCount(node.permalink)} pages</Pill>
          </div>
          <CardTitle to={node.permalink} size="large">
            {node.name}
          </CardTitle>
          <p className={clsx(styles.text, styles.lead)}>{node.brief}</p>
          <Chips items={guideSteps(node)} ordered small />
          <Win
            className={styles.stackWin}
            label={<Link to={parmanode.permalink}>{parmanode.name}</Link>}
            action={<CopyButton text={parmanode.command} label="Copy the install command" />}
          >
            <Shell commands={[parmanode.command]} />
          </Win>
        </article>

        <article className={clsx(styles.card, styles.side)}>
          <div className={styles.sideBody}>
            <span className={styles.label}>
              {pageCount(libreboot.permalink)} pages · {libreboot.guide.level}
            </span>
            <CardTitle to={libreboot.permalink}>{libreboot.name}</CardTitle>
            <p className={styles.text}>{libreboot.brief}</p>
            <Chips items={needsOf(libreboot.guide)} small />
          </div>
          <div className={clsx(styles.art, styles.photo)} aria-hidden="true">
            <img src={t480sPhoto} alt="" width="800" height="600" loading="lazy" decoding="async" />
          </div>
        </article>

        <article className={clsx(styles.card, styles.small)}>
          <p className={styles.strip}>
            <span className={styles.stripKey}>Level</span>
            <LevelGauge level={coinjoin.guide.level} />
          </p>
          <CardTitle to={coinjoin.permalink} size="small">
            {coinjoin.name}
          </CardTitle>
          <p className={styles.text}>{coinjoin.brief}</p>
          <Chips items={["JoinMarket NG", "Jam"]} small />
        </article>

        <article className={clsx(styles.card, styles.small)}>
          <p className={styles.strip}>
            <span className={styles.stripKey}>Time</span>
            {computer.guide.time}
          </p>
          <CardTitle to={computer.permalink} size="small">
            {computer.name}
          </CardTitle>
          <p className={styles.text}>{computer.brief}</p>
          <Chips items={needsOf(computer.guide)} small />
        </article>
      </div>
    </Section>
  );
}

function Positions() {
  const [lead, ...rest] = positions;
  return (
    <Section
      id="positions"
      eyebrow={`Positions · ${positions.length}`}
      title="Where we stand"
      description={
        <>
          Our standing recommendations, each with the page that gives the reasons.{" "}
          <Link to="/about/">Why, and how we decide</Link>
        </>
      }
    >
      <div className={styles.bento}>
        <article className={clsx(styles.card, styles.positionLead, styles.span2, styles.tall)}>
          <span className={styles.label}>{lead.subject}</span>
          <h3 className={clsx(styles.title, styles.titleLarge, styles.stance)}>{lead.stance}</h3>
          <p className={clsx(styles.text, styles.lead, styles.prose)}>
            <InlineLinks text={lead.text} />
          </p>
          {lead.figures ? (
            <Win className={styles.figures} label="In figures">
              <dl className={styles.kv}>
                {lead.figures.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </Win>
          ) : null}
        </article>
        {rest.map((p) => (
          <article key={p.subject} className={clsx(styles.card, styles.small, styles.position)}>
            <span className={styles.label}>{p.subject}</span>
            <h3 className={clsx(styles.title, styles.titleSmall, styles.stance)}>{p.stance}</h3>
            <p className={clsx(styles.text, styles.prose)}>
              <InlineLinks text={p.text} />
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function NoteCard({ note }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          className={styles.mediaPlate}
          src={useBaseUrl(note.band)}
          alt=""
          width="451"
          height="630"
          loading="lazy"
          decoding="async"
        />
        <time className={styles.badge} dateTime={note.date}>
          {formatDate(note.date)}
        </time>
      </div>
      <div className={styles.mediaBody}>
        <CardTitle to={note.permalink}>{note.title}</CardTitle>
        <p className={styles.text}>{note.description}</p>
      </div>
    </article>
  );
}

function Notes() {
  if (notes.length === 0) return null;
  return (
    <Section
      id="notes"
      eyebrow={`Field notes · ${notes.length}`}
      title="What changed, and why"
      description={
        <>
          Dated posts on recommendations dropped and guides rewritten.{" "}
          <Link to="/notes/">All {notes.length} notes</Link>
        </>
      }
    >
      <div className={styles.row}>
        {notes.slice(0, 3).map((note) => (
          <NoteCard key={note.permalink} note={note} />
        ))}
      </div>
    </Section>
  );
}

export default function HomeBento() {
  return (
    <>
      <Understand />
      <MakeKeys />
      <HoldKeys />
      <Verify />
      <Positions />
      <Notes />
    </>
  );
}
