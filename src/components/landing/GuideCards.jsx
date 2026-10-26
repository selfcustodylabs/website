import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { Dates, FactList, pageCount } from "./GuideSpec";
import styles from "./lists.module.css";

/**
 * Guides as cards, each carrying its OG card's band, eyebrow and plate mark, so
 * a guide looks the same on the homepage as it does when someone shares it.
 * The first card is set large.
 *
 * Names are each page's H1 and the text is the first sentence of its opening
 * answer (plugins/site-index), not the SEO title and description.
 *
 * @param {object} props
 * @param {Array<object>} props.guides - siteIndex entries with a `guide` block
 */
export default function GuideCards({ guides }) {
  return (
    <ul className={styles.cards}>
      {guides.map((guide, i) => (
        <GuideCard key={guide.permalink} guide={guide} feature={i === 0} />
      ))}
    </ul>
  );
}

function GuideCard({ guide, feature }) {
  const pages = pageCount(guide.permalink);
  return (
    <li className={`${styles.card} ${feature ? styles.feature : ""}`}>
      <div className={styles.cardMedia}>
        <img
          src={useBaseUrl(guide.band)}
          alt=""
          width="451"
          height="630"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.eyebrow}>
          {guide.eyebrow}
          {pages ? ` · ${pages} pages` : ""}
        </p>
        <h3 className={styles.cardName}>
          {/* The link covers the card (::after), so the card has one link with a short name. */}
          <Link to={guide.permalink}>{guide.name}</Link>
        </h3>
        <p className={styles.cardText}>{feature ? guide.lead : guide.brief}</p>
        <FactList guide={guide.guide} className={styles.cardFacts} />
        <p className={styles.cardFoot}>
          <span className={styles.cardDate}>
            Updated <Dates page={guide} />
          </span>
          <span className={styles.plate}>{guide.plate}</span>
        </p>
      </div>
    </li>
  );
}
