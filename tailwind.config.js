/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0b0b0c',
          surface: '#0f0f10',
          raised: '#141416',
          inset: 'rgba(18,18,20,0.85)',
        },
        line: {
          soft: 'rgba(255,255,255,0.06)',
          DEFAULT: 'rgba(255,255,255,0.10)',
          strong: 'rgba(255,255,255,0.18)',
          amber: 'rgba(245,158,11,0.22)',
          amberStrong: 'rgba(245,158,11,0.38)',
        },
        ink: {
          primary: 'rgba(255,255,255,0.94)',
          secondary: 'rgba(255,255,255,0.68)',
          muted: 'rgba(255,255,255,0.48)',
          faint: 'rgba(255,255,255,0.30)',
        },
        amber: {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd888',
          300: '#ffbe4a',
          400: '#fba420',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        brand: {
          DEFAULT: '#f59e0b',
          deep: '#f97316',
          glow: 'rgba(245,158,11,0.35)',
        },
      },
      fontFamily: {
        display: [
          '"Inter"',
          '"SF Pro Display"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245,158,11,0.35), 0 16px 48px -8px rgba(245,158,11,0.30)',
        'glow-strong':
          '0 0 0 1px rgba(245,158,11,0.55), 0 24px 64px -12px rgba(245,158,11,0.45)',
        card: '0 20px 60px -20px rgba(0,0,0,0.6)',
        'card-hover': '0 26px 80px -20px rgba(0,0,0,0.7)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(245,158,11,0.35), 0 16px 48px -8px rgba(245,158,11,0.25)',
          },
          '50%': {
            boxShadow: '0 0 0 4px rgba(245,158,11,0.12), 0 24px 72px -8px rgba(245,158,11,0.45)',
          },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 600ms ease-out both',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'soft-float': 'softFloat 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
