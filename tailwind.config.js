/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: [
    "./widgets/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'main': ['Manrope']
    }
  },
  plugins: [],
}

