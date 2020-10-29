#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const ejs = require('ejs');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const dependencies = require('./lib/dependencies');

const packages = require('./config/packages');

const CURR_DIR = files.getCurrentDirectoryBase();

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Drupal FE CLI', { horizontalLayout: 'full' })
  )
);

const setup = async () => {
  let answers = await inquirer.askSetup();
  return answers;
};

const writeTemplate = (file, data) => {
  contents = files.renderTemplate(file, data);
  files.writeFile(path, file, contents);
}

const run = async () => {
  try {
    // Run questiions.
    const answers = await setup();
    console.log(answers);

    // Create Theme directory.
    files.createDirectory(`${answers.themePath}/${answers.themeName}`);

    // Install common node packages
    // dependencies.add({...packages.common});
    // // Install typescript specific node packages
    // if(answers.typescript) dependencies.add({...packages.typescript});
    // // Install common framework specific packages
    // dependencies.add({...packages[answers.framework]});

    writeTemplate('', `${__dirname}/config/config/${postcss.config.js}`, answers);
  } catch(err) {
    console.log(err);
  }
}

run();