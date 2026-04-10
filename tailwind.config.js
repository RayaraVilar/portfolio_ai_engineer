/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1eb',
          100: '#ffdacc',
          200: '#ffb79d',
          300: '#ff8f70',
          400: '#f86d47',
          500: '#f15a24',
          600: '#d94b1c',
          700: '#b53e1a',
          800: '#6d28d9',
          900: '#4c1d95'
        },
        soft: {
          bg: '#fff8f6',
          card: '#ffffff',
          darkBg: '#120f1d',
          darkCard: '#1d1930',
          text: '#2f243f',
          darkText: '#f8f4ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      borderRadius: { '4xl': '2rem' }
    }
  },
  plugins: []
};
