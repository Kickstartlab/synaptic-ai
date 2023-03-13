/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      seagreen: {
        "50": "#EBF5FF",
        "100": "#19d0e0",
      },
      blue: {
        "50": "#2128BD",
        "100": "#130F49",
      },
      white: {
        "100": "#fff",
        "50": "#f5f5f5"
      },
      purple: {
        "50": "#3776c2",
        "100": "#4F86FF",
      },
       pink: {
        "50": "#FEDDCF",
        "100": "#FECFF6",
        "200": "#FFEEAB",
      },
       gray: {
        "100": "#1A1A1B",
      },
      
    },
    fontFamily: {
      'spartan': ["'League Spartan', sans-serif;"],
      'work': ["'Work Sans', sans-serif;"],
    }
  },
  plugins: [],
}
