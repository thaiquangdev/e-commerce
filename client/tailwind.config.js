/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1170: "1170px",
      },
      colors: {
        black: "#000",
        white: "#fff",
        line: "#D9DBE9",
        red: "#DB4444",
        "yellow-star": "#FFAD33",
        green: "#00FF66",
      },
    },
  },
  plugins: [],
};
