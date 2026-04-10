/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc',
          400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf',
        },
        soft: {
          bg: '#fafaf9',       // Warm white
          card: '#ffffff',
          darkBg: '#0f172a',   // Slate 900
          darkCard: '#1e293b', // Slate 800
          text: '#334155',     // Slate 700
          darkText: '#e2e8f0', // Slate 200
          accent: '#fb7185',   // Soft coral
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' }
    },
  },
  plugins: [],
}