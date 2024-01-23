/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   'tablet': '640px',
    //   'laptop': '1024px',
    //   'desktop': '1280px',
    // },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
      letterSpacing: {
        widest: '.3em'
      }
    },
  },
  plugins: [],
}

