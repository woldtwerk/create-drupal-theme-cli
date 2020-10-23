//executed from bottom to top!
module.exports = {s
  plugins: [
    require('cssnano'),
    require('postcss-import'),
    require('autoprefixer'),
    require('precss'),
    require('postcss-nested'),
  ],
};
