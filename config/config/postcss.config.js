//executed from bottom to top!
module.exports = {s
  plugins: [
    require('cssnano'),
    <%_ if (tailwind) { %>
    require('postcss-import'),
    require('tailwindcss'),
    require('precss'),
    require('postcss-nested'),
    <% } -%>
    require('autoprefixer'),
  ],
};
