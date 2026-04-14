import React from 'react';

import BackgroundMotif from './BackgroundMotif';
import useReveal from '@site/src/hooks/useReveal';

export default function PageHeader({ eyebrow, title, subtitle }) {
  const ref = useReveal();

  return (
    <header
      ref={ref}
      className="reveal relative isolate overflow-hidden px-6 pb-16 pt-24 md:pb-20 md:pt-32"
    >
      <BackgroundMotif />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">
          <span className="h-px w-8 bg-amber-400/50" />
          {eyebrow}
          <span className="h-px w-8 bg-amber-400/50" />
        </div>
        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
