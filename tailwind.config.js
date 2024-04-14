module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
}