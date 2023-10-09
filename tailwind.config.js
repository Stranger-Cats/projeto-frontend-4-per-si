/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-md': '500px',
        'm-600': '600px',
      }
    },
  },
  plugins: [],
}

