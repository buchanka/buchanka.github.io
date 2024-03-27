/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    container:{
      center:true,
      padding:'2rem',
    },
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
        dusty:"#696984",
        pinkish_lilac:"#A203CA",
        plumy:'#5D0873',
        lilac:'#F5E0FE',
        black:'#0C0B0B',

      },
    },
  },
  plugins: [],
  }

