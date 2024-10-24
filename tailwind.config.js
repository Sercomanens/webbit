/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.rb", "./app/**/*.erb", "./app/helpers/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
