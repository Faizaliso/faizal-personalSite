/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        darkblue: {
          500: "#22252D",
          600: "#1F2128",
        },
        oren: {
          500: "#E96034",
        },
      },
    },
  },
  plugins: [],
};
