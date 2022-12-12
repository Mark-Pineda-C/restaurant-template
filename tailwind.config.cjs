/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkmode: {
          item: "#191722",
          bg: "#262837",
          input: "#2D303E",
          frame: "#393C49"
        },
        lightmode: {
          item: "#ffffff",
          bg: "#f0f0f0",
          input: "#ffffff",
          frame: "#d2d2d2"
        }
      }
    },
  },
  plugins: [],
}
