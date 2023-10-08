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
        
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

