module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        auto0: "0 auto",
      },
      screens: {
        base: "320px",
        w925: "925px",
      },
      maxWidth: {
        maxScreen: "1536px",
      },
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
