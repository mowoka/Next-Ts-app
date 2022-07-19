module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Montserrat'", 'sans-serif'],
        secondary: ["'Inter'", 'sans-serif'],
        paperpillar: ["'Poppins'", 'sans-serif'],
      },
      colors: {
        primary: '#e85e27',
        darkOrange: '#ce3a12',
        secondary: '#ce3a12',
        pink: '#fff9f7',
        pink2: '#ffe4ca',
        grey: '#f8f8f8',
        grey2: '#444',
        black: '#111',
        white: '#fffcfb',
      },
    },
  },
  plugins: [],
};
