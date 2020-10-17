//executed for bottom to top!
module.exports = {
  plugins: [
    require('cssnano'),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('precss'),
    require('postcss-nested'),
  ],
};
