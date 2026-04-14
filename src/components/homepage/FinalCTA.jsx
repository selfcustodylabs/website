import React from 'react';
import Link from '@docusaurus/Link';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import BackgroundMotif from './BackgroundMotif';
import useReveal from '@site/src/hooks/useReveal';

export default function FinalCTA() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal relative mx-auto w-full max-w-6xl px-6 pb-32 pt-16">
      <div className="relative isolate overflow-hidden rounded-3xl border border-amber-500/20 bg-neutral-950 px-8 py-20 md:px-14 md:py-28">
        <BackgroundMotif intensity="strong" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl">
            Ready to be
            <br />
            <span
              className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: '200% 200%' }}
            >
              your own bank?
            </span>
          </h2>

          <p className="mt-6 text-base text-white/65 sm:text-lg">
            Start the path today. Work through each guide at your own pace, and graduate to the
            setup that fits the value you hold.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Link
              to="/learn"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-neutral-950 shadow-glow transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-strong hover:-translate-y-0.5"
            >
              Start your journey
              <ArrowForwardRoundedIcon
                sx={{ fontSize: 20 }}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            Free · Open-source · No signup
          </p>
        </div>
      </div>
    </section>
  );
}
