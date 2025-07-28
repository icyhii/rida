/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Teal & Cream Palette
        primary: {
          50: '#f0f8f8',
          100: '#e0f1f1',
          200: '#c1e3e3',
          300: '#94d1d1',
          400: '#5eb8b8',
          500: '#2E4E4E', // Primary Teal
          600: '#264343', // Accent Deep Blue Teal
          700: '#1f3a3a',
          800: '#1a3030',
          900: '#152626',
        },
        // Secondary & Background Colors
        secondary: {
          50: '#fefefe',
          100: '#F8F6F2', // Ivory/Cream Background
          200: '#f5f2ed',
          300: '#f0ede6',
          400: '#ebe6dd',
          500: '#e6dfd4',
          600: '#d9d0c3',
          700: '#cbc0b1',
          800: '#bdb09f',
          900: '#afa08d',
        },
        // Text Colors
        text: {
          primary: '#1E1E1E',   // Primary text
          secondary: '#6B6B6B', // Muted grey for subheadings
          light: '#F8F6F2',     // Light text for dark backgrounds
        },
        // Accent & Highlight
        accent: {
          50: '#faf9f7',
          100: '#f5f2ef',
          200: '#ebe5de',
          300: '#e1d8cd',
          400: '#d7cbbc',
          500: '#D2B48C', // Soft Gold/Sand
          600: '#c8a67a',
          700: '#be9868',
          800: '#b48a56',
          900: '#aa7c44',
        },
        // Updated dark theme
        dark: {
          50: '#f8fafe',
          100: '#f1f5f9',
          800: '#264343', // Deep Blue Teal
          900: '#1E1E1E', // Primary text color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translate3d(-20px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translate3d(20px, 0, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'transform-opacity': 'transform, opacity',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.will-change-opacity': {
          'will-change': 'opacity',
        },
        '.will-change-transform-opacity': {
          'will-change': 'transform, opacity',
        },
        '.will-change-auto': {
          'will-change': 'auto',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-gpu': {
          'transform': 'translate3d(0, 0, 0)',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-style': {
          'contain': 'style',
        },
        '.contain-size': {
          'contain': 'size',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-strict': {
          'contain': 'strict',
        },
        '.content-visibility-auto': {
          'content-visibility': 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
