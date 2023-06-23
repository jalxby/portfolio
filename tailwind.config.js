/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#72E2AE",
        backcolor: "#0F172A",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(.4,0,.2,1)",
      },
      // transitionDuration: {
      //   DEFAULT: "500ms",
      // },
    },
  },
  plugins: [],
  corePlugins: {
    // ...
    "@layer utilities": {},
  },
};
