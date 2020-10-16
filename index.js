#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');

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
    const answers = await setup();
    console.log(answers);
  } catch(err) {
    console.log(err);
  }
}

run();