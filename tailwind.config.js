/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFA723",
        gray: "rgba(175, 175, 175, 1)",
        "white-100": "rgba(255, 255, 255, 1)",
        "white-80": "rgba(253, 253, 253, 1)",
        "white-60": "rgba(237, 237, 237, 1)",
        "off-white": "#FDFDFD",
        red: "#E14E4E",
        green: "#29C14B",
        purple: "rgba(105, 104, 216, .4)",
        "purple-100": "rgba(71, 69, 183, 1)",
        "purple-80": "#3937B7",
      },
      fontSize: {
        base: [
          "1rem",
          {
            fontWeight: 400,
          },
        ],
        "base-bold": [
          "1rem",
          {
            fontWeight: 500,
          },
        ],
        "xl-bold": [
          "1.25rem",
          {
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "0em",
          },
        ],
        "2xl-bold": [
          "1.5rem",
          {
            fontWeight: 500,
            lineHeight: "normal",
            letterSpacing: "0em",
          },
        ],
        "3xl": [
          "1.75rem",
          {
            fontWeight: 500,
            lineHeight: "4.5rem",
            letterSpacing: "0em",
          },
        ],
        "4xl-semibold": [
          "2rem",
          {
            fontWeight: 600,
            lineHeight: "normal",
            letterSpacing: "0.04em",
          },
        ],
        "7xl": [
          "4rem",
          {
            fontWeight: 600,
            lineHeight: "4.5rem",
            letterSpacing: "0em",
          },
        ],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/background.jpg')",
        arrow: "url('./src/assets/arrow-yellow.svg')",
        play: "url('./src/assets/play.svg')",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        icones: ["Icones"],
      },
      boxShadow: {
        modal: "-16px 16px 0px 0px #4D4CC5;",
      },
    },
  },
  plugins: [],
};
