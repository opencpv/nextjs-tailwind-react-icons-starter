/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      colors: {},
      fontFamily: {},
    },
  },
  plugins: [],
};
