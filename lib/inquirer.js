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
        default: ['web/themes/custom']
      },
      {
        type: 'list',
        name: 'typescript',
        message: 'Do you want typescript Support?',
        choices: [
          { name: 'yes', value: true },
          { name: 'no', value: false }
        ],
        default: ['yes']
      },
      {
        type: 'list',
        name: 'framework',
        message: 'Choose a Framework',
        choices: ['none',
          { name: 'Bootstrap v5', value: 'bootstrap' },
          { name: 'Foundation Sites 6', value: 'foundation' },
          { name: 'Tailwind', value: 'tailwind' }],
        default: ['none']
      }
    ];
    return inquirer.prompt(questions);
  },
}