/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-md': '500px',
        'm-700': '700px',
      }
    },
  },
  plugins: [],
}

