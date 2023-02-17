module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Cabin': ["Cabin", 'sans-serif'],
        'Josefin': ["Josefin", 'sans-serif'],

      },
      backgroundImage: {
        'hero-pattern': "url('/assets/headerimg1.png')",
        'loremimg': "url('/assets/services.png')",
        'background-img': "url('/assets/background.png)",
      },
      boxShadow: {
        'planetag': '0px 0px 25px 10px #fff, 0px 0px 50px 30px rgb(107 114 128), 0px 0px 75px 0px rgb(156 163 175)',
        'planetgold': '0px 0px 25px 10px #fff, 0px 0px 50px 30px rgba(218,165,32), 0px 0px 75px 0px rgba(218,165,32)'
      },
      keyframes: {
        'zoom-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        'moving': {
          '0%': {
            transform: 'translateX(0)'
          },
          '25%':{
            transform: 'translateX(50px)'
          },
          '50%': {
            transform: 'translateY(50px)'
          },
          '75%': {
            transform: '-translateX(50px)'
          },
          '100%': {
            transform: '-translateY(50px)'
          }
        }
      },
      animation: {
        'zoom-in': 'zoom-in 0.3s ease-out',
        'moving': 'moving 20s ease-in-out infinite'
      },
    }, 
  },
  plugins: [],
}