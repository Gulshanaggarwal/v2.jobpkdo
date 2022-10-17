/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#554994'
        },
        secondary: {
          main: '#F29393',
        },
        text: {
          primary: '#0D0223',
          secondary: '#2E2934',
          twitter: '#1DA1F2',
          white: '#F5F5F5'
        },
        background: {
          default: '#F5F5F5',
          footer: '#0D0223',
          extra1: '#D9D9D9',
          extra2: '#F0EEEE'
        },
        border: {
          primary: '#D9D9D9'
        }
      }
    },
  },
  plugins: [],
}