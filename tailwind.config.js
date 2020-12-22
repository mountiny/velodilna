module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'primary': "#00FFBC",
        'secondary': "#CF2C60"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
