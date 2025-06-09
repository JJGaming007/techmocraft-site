/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-grid': "url('/bg-pattern.png')",
      },
    },
  },
  plugins: [],
};

