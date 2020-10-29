const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  createDirectory: (filePath) => {
    fs.mkdirSync(`${filePath}`, { recursive: true });
  },

  writeFile: (path, file, contents) => {
    fs.writeFileSync(`${path}/${file}`, contents, 'utf8');
  },

  readFile: (file) => {
    return fs.readFileSync(file, 'utf8');
  },

  renderTemplate: (file, data) => {
    let template = fs.readFileSync(file, 'utf8');
    return ejs.render(template, data);
  }
};