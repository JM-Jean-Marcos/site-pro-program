/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile-max': {'max': '475px'},   
        'tablet-max': {'max': '1023px'},  
        'laptop-max': {'max': '1279px'},
      }
    },
  },
  plugins: [],
}

