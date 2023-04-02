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
        'my-red': '#de2a52',
        'my-teal': '#4279e4',
      },
    },
  },
  plugins: [],
}