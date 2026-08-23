import { useEffect, useState } from 'react';

/**
 * Tracks how far the document has been scrolled, as a 0-1 fraction.
 *
 * Reads are throttled to one per animation frame so a fast scroll can't queue
 * up more work than the compositor can drain.
 *
 * @returns {number} scroll progress from 0 (top) to 1 (bottom)
 */
export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // A page shorter than the viewport has nothing to report.
      setProgress(scrollable <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / scrollable)));
    };

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return progress;
}
