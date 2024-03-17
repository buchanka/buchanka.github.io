/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      height: {
        // 128: '32rem',
        160: '38rem',
      },
      colors:{
        white:'#FFFFFF',
        violet: '#760B91',
        grey: '#3F3F3F',
        darkgrey:"#252641",
        pinkish_lilac:"#A203CA"

      },
    },
  },
  plugins: [],
  }

