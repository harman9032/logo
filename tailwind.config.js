/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#009e00',
          cream: '#FFFAEF',
          white: '#FFFFFF',
        },
        green: {
          50: '#e6f7e6',
          100: '#ccf0cc',
          200: '#99e099',
          300: '#66d166',
          400: '#33c133',
          500: '#009e00',
          600: '#008500',
          700: '#006b00',
          800: '#005200',
          900: '#003800',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #fff7c0, #f9d976, #f7c948, #f0b400, #f7c948, #f9d976, #fff7c0)',
      },
    },
  },
  plugins: [],
};
