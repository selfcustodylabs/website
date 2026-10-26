import React, { useEffect, useRef } from "react";

import styles from "./ScrollProgress.module.css";

/**
 * A 1px reading-progress line drawn over the navbar's bottom rule, rendered
 * inside the <nav> by src/theme/Navbar/Content.
 *
 * Where the browser supports scroll-driven animations the bar is pure CSS
 * (animation-timeline: scroll()); otherwise a requestAnimationFrame-throttled
 * scroll listener sets the same transform. On a page too short to scroll it
 * stays at zero width, which is invisible.
 */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: scroll()"))
      return undefined;
    const bar = ref.current;
    if (!bar) return undefined;
    let frame = null;
    const measure = () => {
      frame = null;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max));
      bar.style.transform = `scaleX(${p})`;
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <div ref={ref} aria-hidden="true" className={styles.bar} />;
}
