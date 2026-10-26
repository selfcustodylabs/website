import React from "react";
import Link from "@docusaurus/Link";

import styles from "./doc/AuthorByline.module.css";

/**
 * The colophon under every doc: who publishes it, the independence claim, and
 * where corrections go. Plain text; the Organization itself is described once,
 * in the site-wide JSON-LD.
 */
export default function AuthorByline() {
  return (
    <aside className={styles.colophon} data-pagefind-ignore="all">
      <span className={styles.mark}>Self Custody Labs</span>
      <span>
        Independent: no affiliate links, no sponsors. Found a mistake?{" "}
        <a href="mailto:selfcustodylabs@proton.me">Tell us</a> and we will fix it and say what
        changed. <Link to="/about/">How we work</Link>.
      </span>
    </aside>
  );
}
