module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#57BE85",
        deepGreen: "#389863",
        lightGreen: "#CFEEDD80",
        deepGray: "#323232",
        ownWhite: "#EFEFEF",
      },
      borderRadius: {
        primary: "16px",
      },
    },
  },
  plugins: [],
};
