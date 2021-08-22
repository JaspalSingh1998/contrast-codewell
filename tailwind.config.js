module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Archivo: ["Archivo", "sans-serif"],
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      custom: "80vh",
      screen: "100vh",
    },
    extend: {
      colors: {
        body: "#595959",
        headline: "#1C2321",
        accent: "#4D13D1",
        cta: "#CEC3F9",
        formBtn: "#CEC3F9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
