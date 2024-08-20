/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#6aaa64",
        yellow: "#c9b558",
        grey: "#797c7f",
      },
    },
  },
  plugins: [],
};
