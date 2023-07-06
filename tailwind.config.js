/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'primary-green': '#59ff00',
        'secondary-green': '#0fcc1c',
        'tertiary-green': '#02170a',
        'primary-text': '#e8fcfd',
        'primary-bg': '#0b0f0a',
      }
    },
  },
  plugins: [],
}