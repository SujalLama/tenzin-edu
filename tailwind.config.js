/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      display: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: '#1455E1',
          DEFAULT: '#0F40A9',
          dark: '#071E51'
        },
        secondary: {
          DEFAULT: '#EF105D'
        }
      },
      container: false,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

