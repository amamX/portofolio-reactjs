/** @type {import('tailwindcss').Config} */

export default {
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
      }
    },
  },
  plugins: [],
}

