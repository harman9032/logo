/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#cd1c18',
          cream: '#FFFAEF',
          white: '#FFFFFF',
        },
        gold: {
          50: '#FFFAEF',
          100: '#FFFAEF',
          200: '#FFF5E0',
          300: '#FFE4B5',
          400: '#cd1c18',
          500: '#cd1c18',
          600: '#b01814',
          700: '#931410',
          800: '#76100c',
          900: '#590c09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
