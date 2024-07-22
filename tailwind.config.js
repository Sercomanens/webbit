/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.rb", "./app/**/*.erb", "./app/helpers/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/forms", "@tailwindcss/typography"],
};
