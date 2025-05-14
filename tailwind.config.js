/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      'bingo-red': '#e63946',
      'bingo-blue': '#457b9d',
      'bingo-yellow': '#f4a261',
      'bingo-green': '#2a9d8f',
      'bingo-purple': '#7209b7',
      'white': '#ffffff',
      'gray-dark': '#1d3557',
      'gray': '#6b7280',
      'gray-light': '#e5e7eb',
    },
    fontFamily: {
      sans: [
        'system-ui', 
        '-apple-system', 
        'BlinkMacSystemFont', 
        '"Segoe UI"', 
        'Roboto', 
        '"Helvetica Neue"', 
        'Arial', 
        '"Noto Sans"', 
        'sans-serif', 
        '"Apple Color Emoji"', 
        '"Segoe UI Emoji"', 
        '"Segoe UI Symbol"', 
        '"Noto Color Emoji"'
      ],
      serif: ['"Roboto Slab"', 'serif'],
      display: ['"Luckiest Guy"', 'cursive'],
    },
    extend: {
      spacing: {
        'bingo-card': '20rem',
        'bingo-cell': '4rem',
        'bingo-marker': '3rem',
      },
      borderRadius: {
        'bingo': '1.5rem',
        'marker': '9999px',
      },
      boxShadow: {
        'bingo-card': '0 4px 15px rgba(0, 0, 0, 0.2)',
        'bingo-button': '0 2px 10px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'bingo-pattern': "url('/assets/bingo-pattern.png')",
      },
      fontSize: {
        'bingo-number': '1.75rem',
        'bingo-title': '3rem',
      },
      animation: {
        'bingo-win': 'pulse 1s ease-in-out forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      gridTemplateColumns: {
         '15': 'repeat(15, minmax(0, 1fr))',
         'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
};

