/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   {
  //     pattern: /from-(green|blue|gray)-(100|200|300)/,
  //     variants: ['lg', 'hover', 'focus', 'lg:hover'],
  //   },
  //   {
  //     pattern: /to-(green|blue|gray)-(100|200|300)/,
  //     variants: ['lg', 'hover', 'focus', 'lg:hover'],
  //   },

  // ],
  theme: {
    extend: {},
  },
  plugins: [],
}
