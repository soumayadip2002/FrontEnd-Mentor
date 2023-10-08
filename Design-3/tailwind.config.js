/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Railway : ['Raleway', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      }
    },

    screens: {
      'sm': {'min': '250px', 'max': '600px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
    },
  },
  plugins: [],
}

