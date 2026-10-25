import React from "react";

import styles from "./Shelf.module.css";

/**
 * A short list of outside things we recommend (books, podcasts): cover,
 * title linking out, description, and the host the link goes to, so the
 * reader knows where they are being sent.
 *
 * Covers in static/img/books and static/img/podcasts are stored at the size
 * passed here, so the box is reserved before the image loads.
 *
 * @param {object} props
 * @param {Array<{title: string, image: string, href: string, description: string}>} props.items
 * @param {number} props.width - cover width in px
 * @param {number} props.height - cover height in px
 */
export default function Shelf({ items, width, height }) {
  return (
    <ol className={styles.shelf}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <img
            src={item.image}
            alt=""
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className={styles.cover}
            style={{ aspectRatio: `${width} / ${height}` }}
          />
          <div>
            <h2 className={styles.title}>
              <a href={item.href} rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.host}>{new URL(item.href).hostname.replace(/^www\./, "")}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
