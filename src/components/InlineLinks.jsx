import React from "react";
import Link from "@docusaurus/Link";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Plain text with Markdown-style `[label](/path/)` links, for prose kept in
 * data files (src/data/positions.js). Internal links go through Docusaurus
 * Link, so the build's broken-link check covers them.
 *
 * @param {object} props
 * @param {string} props.text
 */
export default function InlineLinks({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} to={match[2]}>
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
