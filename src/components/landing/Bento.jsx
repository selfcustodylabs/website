import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { formatDate } from "@site/src/data/guideFacts";
import LevelGauge from "./LevelGauge";
import styles from "./bento.module.css";

/*
 * The parts the homepage and /guides/ cards are built from: a card is one link
 * (its title's link is stretched over it), with windows that show what the
 * page holds (a command, a guide's facts, a list of devices) in the grammar of
 * a terminal. Icons are drawn here in the diagrams' stroke, not taken from a set.
 */

/** Arrow for the cover's primary action and the cards' call to action. */
export function Arrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M2.5 8h10M8.75 4.25 12.5 8l-3.75 3.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect
        x="5.5"
        y="5.5"
        width="8"
        height="8"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10.5 3.5v-.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        d="M3 8.5 6.5 12 13 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TITLE_SIZES = { large: styles.titleLarge, small: styles.titleSmall };

/**
 * A card's heading. Its link covers the whole card (::after), so the card is
 * one link with a short name, and anything that must stay clickable inside it
 * sits above that layer (`styles.over`).
 *
 * @param {object} props
 * @param {string} props.to
 * @param {"large" | "small"} [props.size]
 * @param {React.ReactNode} props.children
 */
export function CardTitle({ to, size, children }) {
  return (
    <h3 className={clsx(styles.title, TITLE_SIZES[size])}>
      <Link to={to} className={styles.cardLink}>
        {children}
      </Link>
    </h3>
  );
}

/** The card's action, drawn as a button; the title's link already covers it. */
export function Cta({ children }) {
  return (
    <span className={styles.cta} aria-hidden="true">
      {children}
      <Arrow />
    </span>
  );
}

/** Amber mono caps tag: what is first or special about the card. */
export function Pill({ children }) {
  return <span className={styles.pill}>{children}</span>;
}

/**
 * @param {object} props
 * @param {string[]} props.items
 * @param {boolean} [props.ordered] - numbered, for steps done in order
 * @param {boolean} [props.small]
 */
export function Chips({ items, ordered = false, small = false }) {
  if (!items || items.length === 0) return null;
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={clsx(styles.chips, small && styles.chipsSmall)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

/**
 * A window: a bar with a label (and a tag or an action on the right) over
 * whatever it shows.
 *
 * @param {object} props
 * @param {React.ReactNode} props.label
 * @param {React.ReactNode} [props.tag]
 * @param {React.ReactNode} [props.action]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export function Win({ label, tag, action, className, children }) {
  return (
    <div className={clsx(styles.win, className)} data-win="">
      <div className={styles.winBar}>
        <span>{label}</span>
        {tag ? <span className={styles.winTag}>{tag}</span> : null}
        {action}
      </div>
      {children}
    </div>
  );
}

/** Shell lines with a prompt that copy-paste leaves behind. */
export function Shell({ commands }) {
  return (
    <pre className={styles.code}>
      {commands.map((command, i) => (
        <React.Fragment key={command}>
          <span className={styles.prompt}>$ </span>
          {command}
          {i < commands.length - 1 ? "\n" : null}
        </React.Fragment>
      ))}
    </pre>
  );
}

/**
 * Copies `text`; where the clipboard is refused, selects the window's command
 * instead so it can be copied by hand.
 *
 * @param {object} props
 * @param {string} props.text
 * @param {string} props.label - accessible name, e.g. "Copy the install command"
 */
export function CopyButton({ text, label }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (!state) return undefined;
    const timer = setTimeout(() => setState(null), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  const onClick = (event) => {
    const pre = event.currentTarget.closest("[data-win]")?.querySelector("pre");
    const select = () => {
      if (!pre) return;
      const range = document.createRange();
      range.selectNodeContents(pre);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setState("Selected");
    };
    if (!navigator.clipboard) {
      select();
      return;
    }
    navigator.clipboard.writeText(text).then(() => setState("Copied"), select);
  };

  return (
    <button type="button" className={styles.copy} aria-label={state ?? label} onClick={onClick}>
      {state === "Copied" ? <CheckIcon /> : <CopyIcon />}
      <span aria-live="polite">{state ?? "Copy"}</span>
    </button>
  );
}

/** A page's OG band, small and square: the card's icon. */
export function Tile({ band }) {
  return (
    <span className={styles.tile} aria-hidden="true">
      <img src={useBaseUrl(band)} alt="" width="451" height="630" loading="lazy" decoding="async" />
    </span>
  );
}

/** A page's OG band at full height beside a card's words, as on the share card. */
export function BandArt({ band }) {
  return (
    <div className={styles.art} aria-hidden="true">
      <img src={useBaseUrl(band)} alt="" width="451" height="630" loading="lazy" decoding="async" />
    </div>
  );
}

// A field the guide does not state. Never fill in a guess (a missing cost is not "Free").
const NONE = <span className={styles.none}>–</span>;

/**
 * A guide's facts for a window: time, cost and level from its `guide:` block,
 * the verified or reviewed date when it has one, and the date it last changed.
 *
 * @param {object} props
 * @param {object} props.page - a siteIndex entry with a `guide` block
 */
export function GuideFactRows({ page }) {
  const { guide } = page;
  const verified = guide.verified && formatDate(guide.verified.date);
  const reviewed = formatDate(guide.reviewed);
  return (
    <dl className={styles.kv}>
      <div>
        <dt>Time</dt>
        <dd>{guide.time ?? NONE}</dd>
      </div>
      <div>
        <dt>Cost</dt>
        <dd>{guide.cost ?? NONE}</dd>
      </div>
      <div>
        <dt>Level</dt>
        <dd>{guide.level ? <LevelGauge level={guide.level} /> : NONE}</dd>
      </div>
      {verified ? (
        <div>
          <dt>Verified</dt>
          <dd className={styles.ok}>
            {guide.verified.on ? `${verified}, ${guide.verified.on}` : verified}
          </dd>
        </div>
      ) : null}
      {!verified && reviewed ? (
        <div>
          <dt>Reviewed</dt>
          <dd className={styles.ok}>{reviewed}</dd>
        </div>
      ) : null}
      <div>
        <dt>Updated</dt>
        <dd>{formatDate(page.updated) ?? NONE}</dd>
      </div>
    </dl>
  );
}
