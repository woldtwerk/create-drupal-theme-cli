//executed for bottom to top!
module.exports = {
  plugins: [
    require('cssnano'),
    require('postcss-import'),
    <% if (tailwind) { %>
    require('tailwindcss'),
    <% } %>
    require('autoprefixer'),
    require('precss'),
    require('postcss-nested'),
  ],
};
