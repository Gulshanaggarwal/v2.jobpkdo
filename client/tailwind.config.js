/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          main: '#554994'
        },
        orange: {
          main: '#F29393',
          light: '#EBC4C4'
        },
        black: {
          main: '#0D0223',
          secondary: '#2E2934',
        },
        grey: {
          main: '#F5F5F5',
          secondary: '#D9D9D9',
          tertiary: '#F0EEEE'
        },
        twitter: '#1DA1F2',
        twitter_light: '#D2E4EF',
        footer: '#0D0223'
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('daisyui')]
}