/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#0d0d0d',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#1d1d1d',
          950: '#0d0d0d',
          medium: '#252525',
          light: '#cccccc'
        },
        'secondary': '#fe4a23',
        'tertiary': '#ffcf26'
      },
      borderRadius: {
        '4xl': '4rem',
      },
      maxWidth: {
        full: '1280px',
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
}

