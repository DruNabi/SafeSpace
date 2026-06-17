/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        burgundy: {
          50: '#fef1f4',
          100: '#fce3e9',
          200: '#f9c7d7',
          300: '#f5a4be',
          400: '#ed6a84',
          500: '#e53e63',
          600: '#d94675',
          700: '#c93f63',
          800: '#a32d4d',
          900: '#7a1f37',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
