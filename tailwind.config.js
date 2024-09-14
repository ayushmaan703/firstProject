/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customBlue: '#143F6B',
        customOffwhite: '#EEE2DC',
        customLightGray: '#A771FD',
        customLightPurple: '#0677A1',
        customYellow:"#FAC213",
        customOrange:"#F76C6C"
      },
    },
  },
  plugins: [],
};
