import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { formatDate } from "@site/src/data/guideFacts";
import styles from "./lists.module.css";

/**
 * The latest field notes for the homepage, each with its OG card's band. The
 * full dated list is /notes/ (NotesTable).
 *
 * @param {object} props
 * @param {Array<{ permalink: string, title: string, description: string, date: string, band: string }>} props.notes
 */
export default function NoteCards({ notes }) {
  return (
    <ul className={styles.notes}>
      {notes.map((note) => (
        <NoteCard key={note.permalink} note={note} />
      ))}
    </ul>
  );
}

function NoteCard({ note }) {
  return (
    <li className={styles.note}>
      <img
        src={useBaseUrl(note.band)}
        alt=""
        width="451"
        height="630"
        loading="lazy"
        decoding="async"
      />
      <div>
        <time className={styles.noteDate} dateTime={note.date}>
          {formatDate(note.date)}
        </time>
        <h3 className={styles.noteName}>
          <Link to={note.permalink}>{note.title}</Link>
        </h3>
        <p className={styles.noteText}>{note.description}</p>
      </div>
    </li>
  );
}
