/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ enables manual dark mode using class="dark"
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
};
