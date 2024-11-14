/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index/html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#1e2832",
        "primary-bg": "#1e28380d",
      },
      fontFamily: {
        "primary": ['"Roboto"']
      }
    },
  },
  plugins: [],
};
