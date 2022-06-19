/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // checkbox style setting https://benborgers.com/posts/tailwind-checkbox
  plugins: [require("@tailwindcss/forms")],
};
