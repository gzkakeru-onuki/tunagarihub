/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /* Static neutrals (palette-agnostic functional grays) */
        ink: {
          900: '#0c0a09',
          800: '#1c1917',
          700: '#292524',
          600: '#44403c',
          500: '#57534e',
          400: '#78716c',
          300: '#a8a29e',
          200: '#d6d3d1',
          100: '#e7e5e4',
          50: '#f5f5f4',
        },

        /* Themed tokens — switch via [data-theme] on <html> */
        brand: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          dark: 'rgb(var(--primary-deep) / <alpha-value>)',
          soft: 'rgb(var(--primary-soft) / <alpha-value>)',
          light: 'rgb(var(--primary-pale) / <alpha-value>)',
          accent: 'rgb(var(--accent-deep) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          deep: 'rgb(var(--accent-deep) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
          light: 'rgb(var(--accent-pale) / <alpha-value>)',
        },
        page: 'rgb(var(--page) / <alpha-value>)',
        tint: 'rgb(var(--tint) / <alpha-value>)',
        surface: {
          dark: 'rgb(var(--surface-dark) / <alpha-value>)',
        },
        hero: {
          from: 'rgb(var(--hero-from) / <alpha-value>)',
          to: 'rgb(var(--hero-to) / <alpha-value>)',
          fg: 'rgb(var(--hero-fg) / <alpha-value>)',
          cta: 'rgb(var(--hero-cta) / <alpha-value>)',
          'cta-hover': 'rgb(var(--hero-cta-hover) / <alpha-value>)',
          'cta-text': 'rgb(var(--hero-cta-text) / <alpha-value>)',
          accent: 'rgb(var(--hero-accent) / <alpha-value>)',
          'orb-1': 'rgb(var(--hero-orb-1) / <alpha-value>)',
          'orb-2': 'rgb(var(--hero-orb-2) / <alpha-value>)',
        },
      },
      fontFamily: {
        /* Legacy aliases (kept for backward compatibility with components
           that have not yet migrated to the role-based stacks below). */
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          'sans-serif',
        ],
        serif: [
          '"Noto Serif JP"',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          'serif',
        ],

        /* Editorial × Civic Modernism — role-based typography stacks.
           OS-bundled 游明朝 / 游ゴシック are placed first so that local
           rendering is preferred; Google Fonts families act as fallbacks. */
        mincho: [
          '"Yu Mincho"',
          '"游明朝"',
          'YuMincho',
          '"Hiragino Mincho ProN"',
          '"Shippori Mincho B1"',
          'serif',
        ],
        gothic: [
          '"Yu Gothic"',
          '"游ゴシック"',
          'YuGothic',
          '"Hiragino Kaku Gothic ProN"',
          '"Zen Kaku Gothic Antique"',
          'sans-serif',
        ],
        'serif-en': ['"Fraunces"', '"Yu Mincho"', 'Georgia', 'serif'],
        'sans-en': ['"Tenor Sans"', '"Yu Gothic"', 'sans-serif'],
      },
      maxWidth: {
        prose: '42rem',
        editorial: '1440px',
      },
      gridTemplateColumns: {
        editorial: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        /* Section rhythm — `clamp()` で PC 120〜200px / 強調セクション 120〜240px。
           モバイルでも下限 80px / 120px を確保し、PC 比率 60% 以上を維持する。 */
        'section-y': 'clamp(80px, 12vw, 200px)',
        'section-y-lg': 'clamp(120px, 16vw, 240px)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
