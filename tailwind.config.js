/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'my-blue': '#1e41b9',
        'my-teal': '#00c5bb',
        'my-lightblue': '#4279e4',
      },
    },
  },
  plugins: [],
}