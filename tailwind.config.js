/** @type {import('tailwindcss').Config} */
export default {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
        login: ["noto-sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
