/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/constants/theme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

