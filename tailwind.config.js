/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // 'sans' como fuente principal
      },
      colors: {
        "primary": "#2D303D",
        "secondary": "#60CFFA",
        "system-success": "#00B37E",
        "system-warnig": "#F75A68",
        "primaryGray": "#CED4DA",
        "secondaryGray": "#212529"
      }
    },
  },
  plugins: [],
}

