/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "hsl(45, 59%, 64%)",
        black_primary: "rgb(63, 61, 55)",
        black_secondary: "rgb(167,167,170)",
      },
    },
  },
  plugins: [],
};
