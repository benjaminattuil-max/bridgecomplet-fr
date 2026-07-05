import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette identitaire : bleu médical profond + or chaud
        brand: {
          50:  '#f0f4ff',
          100: '#dce8ff',
          200: '#b3ccff',
          500: '#3a5fc8',
          600: '#2d4fa8',
          700: '#1e3880',
          800: '#152860',
          900: '#0d1a40',
        },
        gold: {
          50:  '#fdf8ee',
          100: '#f9edcc',
          400: '#d4a54a',
          500: '#b8892e',
          600: '#9a6e1e',
        },
        neutral: {
          50:  '#f8f7f5',
          100: '#f0eeeb',
          200: '#e2ddd7',
          300: '#ccc5bb',
          400: '#a89e92',
          500: '#857a6e',
          600: '#6b6058',
          700: '#524940',
          800: '#3a332c',
          900: '#241f1a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2':      ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3':      ['1.375rem', { lineHeight: '1.3' }],
        'lead':    ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        'content': '720px',
        'wide': '1100px',
      }
    },
  },
  plugins: [],
}

export default config
