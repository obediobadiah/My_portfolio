/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        primaryLight: "#F8F8F8",
        secondary: "rgb(187, 27, 27)",
        secondaryDark: "rgb(187, 27, 27)",
        accent: "#112240",
        accentLight: "#E6E6E6",
        textLight: "#CCD6F6",
        textDark: "#1E293B",
        textBase: "#8892B0",
        textBaseLight: "#4A556C",
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        cardLight: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        slideRight: 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
} 