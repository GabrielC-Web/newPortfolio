/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'angel-green': '#19E003',
        'dark-theme': '#333',
        'dark-components': '#161515',
        'dark-contrast': '#fff',
        'light-contrast': '#303030'
      }
    },
  },
  plugins: [],
}

