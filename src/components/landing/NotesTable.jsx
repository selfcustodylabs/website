import React from "react";
import Link from "@docusaurus/Link";

import { formatDate } from "@site/src/data/guideFacts";
import styles from "./landing.module.css";

/**
 * Field notes as a dated list: date, then the title and its description.
 * Used by /notes/ and by the homepage.
 *
 * @param {object} props
 * @param {{ permalink: string, title: string, description: string, date: string }[]} props.notes
 */
export default function NotesTable({ notes }) {
  return (
    <table className={`${styles.table} ${styles.notesTable}`}>
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Note</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note) => (
          <tr key={note.permalink}>
            <td>
              <time dateTime={note.date}>{formatDate(note.date)}</time>
            </td>
            <th scope="row">
              <Link to={note.permalink} className={styles.rowLink}>
                {note.title}
              </Link>
              <span className={styles.rowNote}>{note.description}</span>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
