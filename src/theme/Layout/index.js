import React, { useEffect } from "react";
import Layout from "@theme-original/Layout";

/**
 * Wraps the stock Layout to open every collapsed <details> before printing so
 * a printed guide carries every step (src/css/print.css cannot reveal closed
 * <details> on its own).
 *
 * @param {object} props - forwarded verbatim to the original Layout
 */
export default function LayoutWrapper(props) {
  useEffect(() => {
    const opened = [];
    const before = () => {
      document.querySelectorAll("details:not([open])").forEach((d) => {
        d.setAttribute("open", "");
        opened.push(d);
      });
    };
    const after = () => {
      opened.splice(0).forEach((d) => d.removeAttribute("open"));
    };
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  return <Layout {...props} />;
}
