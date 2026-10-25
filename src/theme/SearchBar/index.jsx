import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";

import usePagefind from "@site/src/components/search/usePagefind";
import SearchResults from "@site/src/components/search/SearchResults";
import styles from "./styles.module.css";

function isTyping(target) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className={styles.icon}>
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12.5 12.5 17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}

/**
 * Navbar search: a button that opens a modal <dialog> searching the Pagefind
 * index (plugins/pagefind). "/" or Ctrl/Cmd+K opens it from anywhere that is
 * not a text field; Esc closes it (native dialog behaviour). The input is a
 * combobox driving the result listbox with the arrow keys.
 */
export default function SearchBar() {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const listId = useId().replace(/:/g, "");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(-1);
  const { status, results, total } = usePagefind(open ? query : "");

  const show = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setOpen(true);
    requestAnimationFrame(() => inputRef.current?.select());
  }, []);

  const hide = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const combo = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (
        combo ||
        (e.key === "/" && !isTyping(e.target) && !e.metaKey && !e.ctrlKey && !e.altKey)
      ) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  useEffect(() => setActive(results.length > 0 ? 0 : -1), [results]);

  const onInputKey = (e) => {
    if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length > 0) {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter" && active >= 0 && results[active]) {
      e.preventDefault();
      history.push(results[active].target);
      hide();
    }
  };

  let status_line = null;
  if (status === "loading" && results.length === 0) status_line = "Searching";
  else if (status === "done" && total === 0)
    status_line = "Nothing matches that. Try a shorter word.";
  else if (status === "unavailable")
    status_line =
      "The search index is built with the site (npm run build); it is not available in the dev server.";

  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={show}
        aria-label="Search the guides"
      >
        <SearchIcon />
        <span className={styles.triggerLabel}>Search</span>
        <kbd className={styles.kbd}>/</kbd>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Search"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) hide();
        }}
      >
        <div className={styles.panel}>
          <div className={styles.field}>
            <SearchIcon />
            <input
              ref={inputRef}
              type="search"
              className={styles.input}
              placeholder="Search the guides"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKey}
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls={listId}
              aria-activedescendant={active >= 0 ? `${listId}-${active}` : undefined}
              aria-autocomplete="list"
              autoComplete="off"
              spellCheck="false"
            />
            <button type="button" className={styles.close} onClick={hide}>
              Esc
            </button>
          </div>

          <div className={styles.body}>
            {status_line ? <p className={styles.status}>{status_line}</p> : null}
            {results.length > 0 ? (
              <SearchResults id={listId} results={results} active={active} onNavigate={hide} />
            ) : null}
          </div>

          <div className={styles.foot}>
            <span>Search runs in your browser; your query is not sent anywhere.</span>
            {query.trim() && total > results.length ? (
              <Link to={`/search/?q=${encodeURIComponent(query.trim())}`} onClick={hide}>
                All {total} results
              </Link>
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
