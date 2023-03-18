// tailwind.config.js
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-mode': "url('/images/background/dark-mode.png')",
        'light-mode': "url('/images/background/light-mode.png')",

      },
      colors: {
        'blue-title' : '#62FEFB',
        'purple-title': '#510154'
      },
      spacing: {
        'fit': 'fit-content',
        '1/2-screen': '50vh'
      }
      
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      backgroundImage: ['dark'],
      borderColor: ['dark'],
      display: ['dark']
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  // ...
}
