const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  createDirectory: (filePath) => {
    fs.mkdirSync(`${filePath}`);
  },

  writeFile: (dir, contents) => {
    fs.writeFileSync(dir, contents, 'utf8');
  },

  readFile: (file) => {
    return fs.readFileSync(file, 'utf8');
  }
};