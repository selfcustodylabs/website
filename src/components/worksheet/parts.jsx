import React from "react";

import styles from "./worksheet.module.css";

/**
 * Building blocks for the printable sheets. Everything here is drawn, never an
 * <input>: the sheets are filled in with a pen, and a form control would invite
 * typing a secret into a web page.
 */

/** A titled block of a sheet. */
export function Block({ title, children }) {
  return (
    <section className={styles.block}>
      {title ? <h2 className={styles.blockTitle}>{title}</h2> : null}
      {children}
    </section>
  );
}

/**
 * A label and a line to write on.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string} [props.hint] - small print under the line
 * @param {boolean} [props.wide] - spans the full width of a Fields grid
 */
export function Field({ label, hint, wide }) {
  return (
    <div className={wide ? `${styles.field} ${styles.wide}` : styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.line} />
      {hint ? <span className={styles.hint}>{hint}</span> : null}
    </div>
  );
}

/** Fields laid out in two columns on paper. */
export function Fields({ children }) {
  return <div className={styles.fields}>{children}</div>;
}

/**
 * A row of empty character boxes, for fingerprints and address fragments.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {number} props.count
 */
export function Boxes({ label, count }) {
  return (
    <div className={styles.boxes}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.boxRow} aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className={styles.box} />
        ))}
      </span>
    </div>
  );
}

/**
 * A question answered by circling one option.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {string[]} [props.options]
 */
export function Circle({ label, options = ["Yes", "No"] }) {
  return (
    <div className={styles.circle}>
      <span className={styles.fieldLabel}>{label}</span>
      <span className={styles.options}>
        {options.map((o) => (
          <span key={o}>{o}</span>
        ))}
      </span>
    </div>
  );
}

/**
 * Checklist items with a drawn square to tick.
 *
 * @param {object} props
 * @param {React.ReactNode[]} props.items
 */
export function Checklist({ items }) {
  return (
    <ul className={styles.checklist}>
      {items.map((item, i) => (
        <li key={i}>
          <span className={styles.tick} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Ruled lines for free text.
 *
 * @param {object} props
 * @param {number} props.count
 */
export function Lines({ count }) {
  return (
    <div className={styles.lines} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={styles.line} />
      ))}
    </div>
  );
}
