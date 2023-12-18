/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('images/homepage/hero-bg-mobile.jpg')"
      },
      fontFamily: {
        "spartan": "league spartan"
      }
    },
  },
  plugins: [],
}