/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
        width: {
            '800': '800px',
            '600': '600px',
            '400': '400px',
        },
        height: {
            '800': '800px',
            '600': '600px',
            '400': '400px',
        },
        minWidth: {
            '600': '600px',
        },
        maxWidth: {
            '1/2': '50%',
        }
        
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

