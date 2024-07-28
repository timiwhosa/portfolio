/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "triida":{
          DEFAULT: "#ff8800",
          light: "#fff1e0"
        },
        "nerra":{
          DEFAULT: "#7a00d6",
          light:"#cdb3f4"
        },
        "seeker":{
          DEFAULT:"#4caf50",
          light:"#e7f5ea",
        }
      },
    },
  },
  plugins: [],
};
