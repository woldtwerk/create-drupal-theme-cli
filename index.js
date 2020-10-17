#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const files = require('./lib/files');
const inquirer = require('./lib/inquirer');
const dependencies = require('./lib/dependencies');

const tailwind = require('./config/tailwind');
const typescript = require('./config/typescript');

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
    // const answers = await setup();
    // console.log(answers);
    console.log({...tailwind.dependencies,...typescript.dependencies});
    dependencies.add({...tailwind.dependencies,...typescript.dependencies});
  } catch(err) {
    console.log(err);
  }
}

run();