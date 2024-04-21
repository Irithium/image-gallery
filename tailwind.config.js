/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dark_cyan: {
          DEFAULT: "#25938f",
          100: "#071d1d",
          200: "#0f3b39",
          300: "#165856",
          400: "#1d7673",
          500: "#25938f",
          600: "#32c7c2",
          700: "#62d8d4",
          800: "#97e5e2",
          900: "#cbf2f1",
        },
        sunset: {
          DEFAULT: "#ffdaad",
          100: "#562f00",
          200: "#ab5e00",
          300: "#ff8d02",
          400: "#ffb458",
          500: "#ffdaad",
          600: "#ffe2be",
          700: "#ffe9ce",
          800: "#fff0de",
          900: "#fff8ef",
        },
        ash_gray: {
          DEFAULT: "#a2b9ad",
          100: "#1e2823",
          200: "#3c4f45",
          300: "#597768",
          400: "#7a9b8a",
          500: "#a2b9ad",
          600: "#b5c7bd",
          700: "#c7d5ce",
          800: "#dae3de",
          900: "#ecf1ef",
        },
        cream: {
          DEFAULT: "#f7ffd6",
          100: "#485a00",
          200: "#90b400",
          300: "#cfff0e",
          400: "#e1ff68",
          500: "#f3ffc2",
          600: "#f5ffce",
          700: "#f8ffda",
          800: "#faffe7",
          900: "#fdfff3",
        },
        jet: {
          DEFAULT: "#2e2f2f",
          100: "#090909",
          200: "#121313",
          300: "#1b1c1c",
          400: "#242525",
          500: "#2e2f2f",
          600: "#575959",
          700: "#808383",
          800: "#abacac",
          900: "#d5d6d6",
        },
        yinmn_blue: {
          DEFAULT: "#374a67",
          100: "#0b0f15",
          200: "#161e29",
          300: "#212d3e",
          400: "#2c3b52",
          500: "#374a67",
          600: "#506b95",
          700: "#768fb5",
          800: "#a4b4ce",
          900: "#d1dae6",
        },
        ultra_violet: {
          DEFAULT: "#616283",
          100: "#14141a",
          200: "#272735",
          300: "#3b3b4f",
          400: "#4e4f6a",
          500: "#616283",
          600: "#7e7fa0",
          700: "#9e9fb7",
          800: "#bebfcf",
          900: "#dfdfe7",
        },
        wisteria: {
          DEFAULT: "#cb9cf2",
          100: "#2b0946",
          200: "#56128d",
          300: "#811bd3",
          400: "#a755e9",
          500: "#cb9cf2",
          600: "#d6b0f5",
          700: "#e0c3f7",
          800: "#ead7fa",
          900: "#f5ebfc",
        },
        mountbatten_pink: {
          DEFAULT: "#9e7b9b",
          100: "#201820",
          200: "#41303f",
          300: "#61485f",
          400: "#815f7e",
          500: "#9e7b9b",
          600: "#b195af",
          700: "#c4b0c3",
          800: "#d8cad7",
          900: "#ebe5eb",
        },
        rich_black: {
          DEFAULT: "#0e1116",
          100: "#030304",
          200: "#060709",
          300: "#080a0d",
          400: "#0b0d11",
          500: "#0e1116",
          600: "#333d50",
          700: "#586a8a",
          800: "#8b9bb5",
          900: "#c5cdda",
        },
        berkeley_blue: {
          DEFAULT: "#0F2E5C",
          100: "#030912",
          200: "#061225",
          300: "#091c37",
          400: "#0c254a",
          500: "#0f2e5c",
          600: "#1a50a1",
          700: "#2f75dd",
          800: "#74a3e8",
          900: "#bad1f4",
        },
        glaucous: {
          DEFAULT: "#6B7CAA",
          100: "#141823",
          200: "#283046",
          300: "#3c4869",
          400: "#50608c",
          500: "#6b7caa",
          600: "#8895ba",
          700: "#a6b0cc",
          800: "#c3cadd",
          900: "#e1e5ee",
        },
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
