/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "jp/index.html",
    "spidermine/freya.html",
    "spidermine/freyaJP.html",
    "spidermine/error.html",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      animation: {
        "spin-slow": "spin 360s",
        goyang: "goyang 1s ease-in-out infinite",
      },
      keyframes: {
        goyang: {
          "0, 100%": { tranform: "rotate (-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      colors: {
        primary: "#FEE3EC",
        secondary: "#F9C5D5",
        judul: "#F2789F",
        dark: "#6968AC",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
