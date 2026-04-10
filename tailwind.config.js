/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#6d28d9',
          900: '#4c1d95'
        },
        soft: {
          bg: '#fffaf5',
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
