/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./page-modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
        avenirLt: ["Avenir Next LT Pro", "sans-serif"],
      },
      colors: {
        "otaku-blue-1": "#00AEEF",
        "otaku-red-1": "#ED1C24",
        "otaku-gray-1": "#D9D9D9",
        "otaku-gray-2": "#6F6F6F",
        "otaku-red-2": "#ED4424",
        "otaku-black-1": "#231F20",
      },
      backgroundImage: {
        "otaku-home-hero": "url('/assets/imgs/hero.png')",
        "about-bg": "url('/assets/imgs/about-bg.png')",
        "kakashi" : "url('/assets/imgs/kakashi-bg.png')",
      },
    },
  },
  plugins: [],
};
