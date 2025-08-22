import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00C2FF',
        accent: '#7BB9E8',
        neutral: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1f1f1f',
          700: '#2d2d2d',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#a3a3a3',
          200: '#d4d4d4',
          100: '#e5e5e5',
          50:  '#f5f5f5'
        },
        overlay: {
          60: 'rgba(0,0,0,0.6)',
          40: 'rgba(0,0,0,0.4)',
          25: 'rgba(0,0,0,0.25)'
        }
      },
      fontFamily: {
        display: ['var(--font-oswald)'],
        sans: ['var(--font-inter)']
      },
      backgroundImage: {
        'diag-dark': 'linear-gradient(135deg, rgba(10,10,10,0.9), rgba(10,10,10,0.6))',
        'soft-light': 'linear-gradient(180deg, rgba(255,255,255,0), rgba(0,0,0,0.45))'
      },
      letterSpacing: {
        wide2: '0.12em'
      }
    }
  },
  plugins: [typography],
} satisfies Config;
