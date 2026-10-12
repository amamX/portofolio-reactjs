/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: '#0f172a',
      },
      fontFamily: {
        poppins: ['Poppins'],
        },
      screens: {
        '2xl': '1280px'
      },
      animation: {
        marquee: 'marquee var(--duration, 30s) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          to: { transform: 'translateX(0%)' },
          from: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

