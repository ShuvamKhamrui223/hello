/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "hsl(45, 59%, 64%)",
        black_primary: "rgb(63, 61, 55)",
        black_secondary: "rgb(167,167,170)",
        // purple: "rgb(43 1 120)",
        // purple_shade: "rgb(69 1 172)",
      },
      // backgroundImage: { btnGradient: "bg-gradient-to-r from-purple-700 to-pink-500" },
    },
  },
  plugins: [],
};
