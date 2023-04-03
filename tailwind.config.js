/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'darkTheme': 'linear-gradient(90deg ,#181717 0%, #242424 25%, #333333 50%, #242424 75%, #181717 100%)'
      },
      gradientColorStopPositions: {
        
      }
    },
  },
  plugins: [],
}

