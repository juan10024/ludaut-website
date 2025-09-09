/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'primary': '#0D6EFD', // A modern blue for primary actions
        'secondary': '#6C757D', // A neutral gray for secondary elements
        'light-bg': '#F8F9FA',
        'dark-bg': '#121212',
        'light-text': '#212529',
        'dark-text': '#E9ECEF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern font
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-up': 'slideInUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}