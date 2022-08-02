/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'badge-primary': '#1C3E74',
        'badge-primary-light': '#EBF3FE',
        'border': '#24416E',
        'copyright': '#7587A3',
        'dark': '#193766',
        'dark-light': '#2B4772',
        'muted': '#697B98',
        'muted-light': '#FAFAFA',
        'primary': '#3B82F6',
        'primary-light': '#C6DBFF',
        'secondary': '#E4EFFF',
        'tertiary': '#1DA1F2',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      }
    }
  },
  plugins: [],
}
