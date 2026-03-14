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
        'gold-gradient': 'linear-gradient(90deg, #f0b400, #f7c948, #f0b400)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
      zIndex: {
        dropdown: '30',
        sticky: '40',
        fixed: '50',
        modal: '100',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'modal': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      animation: {
        'fade-slide-down': 'fadeSlideDown 0.3s ease-out both',
        'fade-slide-up': 'fadeSlideUp 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};
