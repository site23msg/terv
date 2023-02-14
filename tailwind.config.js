module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.png')",
      },
      boxShadow: {
        '3xl': '-0px 30px 60px 20px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}