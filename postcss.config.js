/** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: [
//     require('autoprefixer'),
//     // require('postcss-nested'),
//     require('tailwindcss/nesting'
//     require("postcss-import"),
//     require("tailwindcss"),
//   ],
// }
const config = {
  plugins: {
    "postcss-import": {},
    'tailwindcss/nesting': {},
    "tailwindcss": {},
    'autoprefixer': {},
  },
}

module.exports = config
