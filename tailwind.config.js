/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Some useful comment
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
        'Indie' : ['Indie Flower', 'cursive'],
      },
    },
  },
  plugins: [],
}