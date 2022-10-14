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
        poppins: ["Poppins"],
      },
      colors: {
        "otaku-blue-1": "#00AEEF",
        "otaku-red-1": "#ED1C24",
        "otaku-gray-1": "#D9D9D9",
        "otaku-gray-2": "#6F6F6F",
        "otaku-red-2": "#ED4424",
        "otaku-black-1": "#231F20",
      },
    },
  },
  plugins: [],
};
