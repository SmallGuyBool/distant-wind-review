/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
        width: {
            '800': '800px',
            '600': '600px',
        },
        
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

