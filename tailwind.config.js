/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
      '*.html',
      '*/**.{html,css,js}'
    ],
    darkMode: 'class',
    mode: 'jit',
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem'
        }
      },
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00ADB5',
            black: '#222831',
            gray: '#393E46',
            white: '#EEEEEE',
            'orange': '#ff7849',
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            "color-primary-dark": "#010417",
            "color-secondary": "#ff7d3b",
            "color-gray": "#333",
            "color-white": "#fff",
            "color-blob": "01051e"
  
          }
        }
      },
    },
    plugins: [],
  }