/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'january': "url('/images/1.jpg')",
        'february': "url('/images/2.jpg')",
        'march': "url('/images/3.jpg')",
        'april': "url('/images/4.jpg')",
        'may': "url('/images/5.jpg')",
        'june': "url('/images/6.jpg')",
        'july': "url('/images/7.jpg')",
        'august': "url('/images/8.jpg')",
        'september': "url('/images/9.jpg')",
        'october': "url('/images/10.jpg')",
        'november': "url('/images/11.jpg')",
        'december': "url('/images/12.jpg')",
      }),
      fontSize: {
        '40': '40px',
        '44': '44px',
      },
      colors: {
        'spring-yellow': '#fff500',
        'dark-gray': 'rgb(11,45,47)',
      },
      spacing: {
        '9/16': '56.25%', 
      },
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}
