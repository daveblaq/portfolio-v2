/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-hero": "./src/assets/images/home-hero.png",
        "footer": "./src/assets/images/footer.png",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        anon: ["Anonymous Pro", "sans-serif"],
        play: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
