import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f3f0f8',
          100: '#e7e1f1',
          200: '#d0c3e3',
          300: '#b8a5d5',
          400: '#9f87c7',
          500: '#8769b9',
          600: '#695192', // brand purple
          700: '#5a4480',
          800: '#4a376e',
          900: '#3b2b5c',
        },
        cream: '#F7F3EF',
        sand:  '#E8E0D5',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:     ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
