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

const writeTemplate = () => {
  let file = `postcss.config.js`;
  let contents = files.readFile(`${__dirname}/config/config/${file}`);
  contents = ejs.render(contents, { tailwind: false });
  files.writeFile(`${file}`, contents);
}

const run = async () => {
  try {
    // Run questiions.
    const answers = await setup();
    console.log(answers);

    // Create Theme directory.
    files.createDirectory(`${answers.themePath}/${answers.themeName}`);

    // Install node packages
    dependencies.add({...packages.tailwind});

    writeTemplate();
  } catch(err) {
    console.log(err);
  }
}

run();