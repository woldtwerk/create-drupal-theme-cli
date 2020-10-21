#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const dependencies = require('./lib/dependencies');

const packages = require('./config/packages');

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

const run = async () => {
  try {
    // Run questiions.
    const answers = await setup();
    console.log(answers);

    // Create Theme directory.
    files.createDirectory(`${answers.themePath}/${answers.themeName}`);

    // Install node packages
    dependencies.add({...packages.tailwind});
  } catch(err) {
    console.log(err);
  }
}

run();