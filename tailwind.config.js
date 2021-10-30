const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.trueGray,
    //   indigo: colors.indigo,
    //   red: colors.rose,
    //   yellow: colors.amber
    // },
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        primary: {
          DEFAULT: "#24292E",
        },
      },
      /*boxShadow: {
        default: "0px 10px 20px rgba(150, 150, 187, 0.1)",
      },
      fontSize: {
        "2rem": "2rem",
      },*/
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
