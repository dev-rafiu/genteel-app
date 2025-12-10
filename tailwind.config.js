/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#78F208",
        secondary: "#FF4B9E",
        accent: "#00C883",
        "text-primary": "#090A0A",
        "text-secondary": "#626565",
      },
    },
  },
  plugins: [],
};
