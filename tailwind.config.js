/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "hsl(45, 59%, 64%)",
        linkColor_primary: "rgb(63, 61, 55)",
        linkColor_secondary: "rgb(167,167,170)",
      },
    },
  },
  plugins: [],
};
