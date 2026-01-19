/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5fa',
          100: '#e1eaf5',
          200: '#c2d5eb',
          300: '#94b5e0',
          400: '#5f8fd4',
          500: '#366bc9',
          600: '#042e68',
          700: '#032554',
          800: '#021b3d',
          900: '#011126',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}