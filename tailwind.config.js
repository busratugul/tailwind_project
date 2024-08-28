/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'main-red': '#BC1A45',
        'main-melon': '#FFD369',
        'main-grey': '#DDDDDD',
        'main-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}
