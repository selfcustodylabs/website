import React from "react";
import Content from "@theme-original/Navbar/Content";

import ScrollProgress from "@site/src/components/ScrollProgress";

/**
 * Wraps the stock navbar content to put the reading-progress line inside the
 * <nav>, where it rides the navbar's bottom rule and moves with the navbar
 * (including while the announcement bar above it is still on screen).
 *
 * @param {object} props - forwarded verbatim to the original Navbar/Content
 */
export default function NavbarContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <ScrollProgress />
    </>
  );
}
