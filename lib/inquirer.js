const inquirer = require('inquirer');

module.exports = {
  askSetup: () => {
    const questions = [
      {
        type: 'input',
        name: 'themeName',
        message: 'Name of theme',
        default: ['yes']
      },
      {
        type: 'input',
        name: 'themePath',
        message: 'Theme Path',
        default: ['/web/themes/custom']
      },
      {
        type: 'list',
        name: 'typescript',
        message: 'Do you want typescript Support?',
        choices: ['yes', 'no'],
        default: ['yes']
      },
      {
        type: 'list',
        name: 'framework',
        message: 'Choose a Framework',
        choices: ['none', 'Bootstrap v5', 'Foundation Sites 6', 'Tailwind'],
        default: ['none']
      }
    ];
    return inquirer.prompt(questions);
  },
}