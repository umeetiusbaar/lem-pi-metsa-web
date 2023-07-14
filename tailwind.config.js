/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '40': '40px',
        '44': '44px',
      },
      colors: {
        'spring-yellow': '#fff500',
        'dark-gray': 'rgb(11,45,47)',
      }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}
