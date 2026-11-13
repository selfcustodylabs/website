import React from "react";
import clsx from "clsx";

import { CardTitle, Chips, Cta, GuideFactRows, Pill, Tile, Win } from "./Bento";
import { guideSteps, needsOf, pageCount } from "./guideData";
import styles from "./bento.module.css";

/*
 * One group of /guides/ as a grid of three columns: the group's first guide
 * over two (or all three when it is alone), the rest one column each, and the
 * last widened to fill its row, so no row ends in a gap. Each guide's facts sit
 * in a window, as on the homepage.
 */

const pagesTag = (permalink) => {
  const pages = pageCount(permalink);
  return pages ? `${pages} pages` : "1 page";
};

/**
 * A guide over several columns: words on the left, its facts window on the
 * right. `full` adds the opening sentence in full, the steps, what it needs
 * and the action; the widened last card of a group shows only the short text.
 */
function GuideFeature({ guide, span, full }) {
  const pages = pageCount(guide.permalink);
  const needs = full ? needsOf(guide.guide) : [];
  return (
    <article
      className={clsx(styles.card, styles.guideFeature, span === 3 ? styles.span3 : styles.span2)}
    >
      <div className={styles.guideFeatureBody}>
        <div className={styles.stackHead}>
          <Tile band={guide.band} />
          {pages ? <Pill>{pages} pages</Pill> : null}
        </div>
        <CardTitle to={guide.permalink} size={full ? "large" : undefined}>
          {guide.name}
        </CardTitle>
        <p className={clsx(styles.text, full && styles.lead)}>{full ? guide.lead : guide.brief}</p>
        {full ? <Chips items={guideSteps(guide)} ordered small /> : null}
        {needs.length > 0 ? (
          <div className={styles.needs}>
            <span className={styles.label}>You need</span>
            <Chips items={needs} small />
          </div>
        ) : null}
        {full ? <Cta>Open the guide</Cta> : null}
      </div>
      <div>
        <Win label={guide.eyebrow.toLowerCase()}>
          <GuideFactRows page={guide} />
        </Win>
      </div>
    </article>
  );
}

function GuideCard({ guide }) {
  return (
    <article className={clsx(styles.card, styles.guideCard)}>
      <Win label={guide.eyebrow.toLowerCase()} tag={pagesTag(guide.permalink)}>
        <GuideFactRows page={guide} />
      </Win>
      <div className={styles.guideBody}>
        <Tile band={guide.band} />
        <div className={styles.guideText}>
          <CardTitle to={guide.permalink} size="small">
            {guide.name}
          </CardTitle>
          <p className={styles.text}>{guide.brief}</p>
        </div>
      </div>
    </article>
  );
}

/**
 * @param {object} props
 * @param {Array<object>} props.guides - siteIndex entries with a `guide` block, in reading order
 */
export default function GuideGrid({ guides }) {
  const [first, ...rest] = guides;
  // Cells the first row takes plus one per other guide; what is left over in
  // the last row decides how wide the last guide is drawn.
  const leftover = (2 + rest.length) % 3;
  return (
    <div className={styles.guides}>
      <GuideFeature guide={first} span={rest.length > 0 ? 2 : 3} full />
      {rest.map((guide, i) =>
        i === rest.length - 1 && leftover > 0 ? (
          <GuideFeature key={guide.permalink} guide={guide} span={4 - leftover} />
        ) : (
          <GuideCard key={guide.permalink} guide={guide} />
        )
      )}
    </div>
  );
}
