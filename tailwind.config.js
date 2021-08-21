module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Archivo: ["Archivo", "sans-serif"],
    },
    extend: {
      colors: {
        body: "#595959",
        headline: "#1C2321",
        accent: "#4D13D1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
