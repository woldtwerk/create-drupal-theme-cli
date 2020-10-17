const cprocess = require('child_process');
const os = require('os');
const path = require('path');
const fse = require('fs-extra');

const temp = path.join(os.tmpdir(), `drupal-fe-cli`);

module.exports = {
  add: (dependencies) => {
    const descriptors = Object.keys(dependencies).map(
      dep => `${dep}@${dependencies[dep]}`
    );
    
    cprocess.execFileSync('yarn', ['add', ...descriptors]);
  }
}
