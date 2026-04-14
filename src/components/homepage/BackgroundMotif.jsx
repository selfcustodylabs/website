import React from 'react';

export default function BackgroundMotif({ intensity = 'default', className = '' }) {
  const glowOpacity = intensity === 'strong' ? 'opacity-[0.55]' : 'opacity-40';
  const gridOpacity = intensity === 'strong' ? 'opacity-[0.09]' : 'opacity-[0.06]';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`absolute inset-0 ${gridOpacity}`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 85%)',
        }}
      />

      <div
        className={`absolute left-1/2 top-1/3 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glowOpacity}`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(245,158,11,0.55) 0%, rgba(249,115,22,0.18) 40%, transparent 70%)',
        }}
      />

      <div
        className="absolute -left-32 top-20 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(245,158,11,0.30) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
