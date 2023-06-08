/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontSize: {
      lg: ['25px', {lineHeight: '20px'}],
      md: ['16px', {lineHeight: '24px'}],
      sm: ['14px', {lineHeight: '20px'}]
    },

    extend: {
      colors: {
        primary: '#3538CD',
        secondary: 'hsla(224, 96%, 82%, 0.38)',
      }
    },
  },
  plugins: [],
}

