import React from "react";
import Link from "@docusaurus/Link";

import styles from "./SearchResults.module.css";

/**
 * A list of Pagefind results in the lab-manual style: mono section label,
 * title (plus the matching heading), and an excerpt with the match marked.
 *
 * Rendered as a listbox so the search dialog's input can drive it as a
 * combobox; on the full search page it is simply a list of links.
 *
 * @param {object} props
 * @param {string} props.id - id of the list, referenced by the input's aria-controls
 * @param {Array<object>} props.results - from usePagefind
 * @param {number} [props.active] - index of the highlighted option, -1 for none
 * @param {() => void} [props.onNavigate] - called when a result is followed
 */
export default function SearchResults({ id, results, active = -1, onNavigate }) {
  return (
    <ol id={id} role="listbox" className={styles.results}>
      {results.map((r, i) => (
        <li
          key={r.target}
          id={`${id}-${i}`}
          role="option"
          aria-selected={i === active}
          className={styles.item}
        >
          <Link to={r.target} className={styles.result} onClick={onNavigate} tabIndex={-1}>
            <span className={styles.section}>{r.section}</span>
            <span className={styles.title}>
              {r.title}
              {r.heading ? <span className={styles.heading}> · {r.heading}</span> : null}
            </span>
            {/* Pagefind escapes the page text and only adds <mark> around matches. */}
            <span className={styles.excerpt} dangerouslySetInnerHTML={{ __html: r.excerpt }} />
          </Link>
        </li>
      ))}
    </ol>
  );
}
