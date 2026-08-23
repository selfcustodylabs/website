import React from 'react';

import useScrollProgress from '@site/src/hooks/useScrollProgress';

/**
 * A hairline reading-progress bar pinned under the navbar.
 *
 * The gradient is sized to the viewport rather than to the bar, so scrolling
 * reveals it left to right instead of stretching it; the colour under any given
 * pixel stays put. Hidden at the very top of the page, which keeps it out of the
 * hero and also means it is only ever invisible during the brief window where
 * the announcement bar is still pushing the navbar down.
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      data-scroll-progress=""
      className="pointer-events-none fixed inset-x-0 z-[calc(var(--ifm-z-index-fixed)+1)] h-[3px]"
      style={{ top: 'var(--ifm-navbar-height)' }}
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-[length:100vw_100%] transition-opacity duration-300"
        style={{
          width: `${progress * 100}%`,
          opacity: progress > 0.001 ? 1 : 0,
          boxShadow: progress > 0.001 ? '0 0 12px 0 rgba(245, 158, 11, 0.55)' : 'none',
        }}
      />
    </div>
  );
}
