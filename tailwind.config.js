const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./stories/**/*.{ts,tsx}",
  ],
  theme: {
    // extends: {
    //   colors: {
    //     primary: colors.blue,
    //   },
    // },
  },
  plugins: [],
};
