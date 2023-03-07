/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", //white color
        secondary: "#4B4141", //brown color
        accent: "#ED7D31", //orange color
        black: "#1E1E1E", //black color for text
        verylightbrown: "rgba(75, 65, 65, 0.1)",
        pictureMobile: "rgba(255, 255, 255, 0.6)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow:{
        normal: '0px 2px 60px rgba(0, 0, 0, 0.25)',
      }
    },
    screens: {
      xs: {'max':"480px"},
      xsmin: {'min':"480px"},
      ss: {'max':"620px"},
      ssmin: {'min':"620px"},
      sm: {'max':"768px"},
      smmin:{'min': "768px"},
      smmiddle: {'max':"900px"},
      md: {'max': "1060px"},
      mdmin: {'min': "1060px"},
      lg: {'max': "1200px"},
      lgmin: {'min': "1200px"},
      xl: {'max': "1700px"},
    },
  },
  plugins: [],
};