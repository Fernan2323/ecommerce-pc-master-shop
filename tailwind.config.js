/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 Requerido por shadcn para dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
