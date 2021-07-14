module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // false, 'media', 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        secondary: '#E8ECEF',
        light: '#FFFFFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
