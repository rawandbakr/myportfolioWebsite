/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'homeP1': "url('../public/home.jpg')",
        'homeP2': "url('../public/home1.jpg')",
      },
      colors:{
        'accent':'#2c698d',
        'secondary2':'#bae8e8',
        'secondary1':'#e3f6f5',
        'primary2':'#ffffff',
        'primary1':'#272643',
      },
      screens: {
        'sm': '350px',
        // => @media (min-width: 350px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
