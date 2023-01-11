/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        accent: '#AD9263',
        accent_light: '#BAA47C',
        accent_dark: '#91784C',
        accent_darkest: '#b58544',
        darkest: '#222222',
        dark_border: '#0a0c0d'
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'poppins':	['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'lora': ['Lora', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      keyframes: {
        fade_in: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        fade_in: 'fade_in 5s ease-in',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}