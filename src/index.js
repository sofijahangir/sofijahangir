#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What you want to do?',
    choices: [
      {
        name: `Send me an ${chalk.green.bold('email')}?`,
        value: () => {
          open('mailto:jsofi502@gmail.com');
          console.log('\nDone, see you soon.\n');
        },
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('Ok, bye.\n');
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green('        Jahangir Ahmad Sofi'),
  handle: chalk.white('@jsofi'),
  work: `${chalk.white('MERN stack aspirant at')} ${chalk
    .hex('#2b82b2')
    .bold('SOAL')}`,
  blog: chalk.gray('https://medium.com/') + chalk.whiteBright('@jsofi'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('jsofi'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~jsofi'),
  github: chalk.gray('https://github.com/') + chalk.green('sofijahangir'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('jsofi'),
  // web: chalk.cyan('https://about.me/ridermansb'),
  // npx: `${chalk.red('npx')} ${chalk.white('jsofi')}`,

  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelBlog: chalk.white.bold('     Medium:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  // labelnpm: chalk.white.bold('        npm:'),
  // labelWeb: chalk.white.bold('        Web:'),
  // labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    // `${data.labelnpm}  ${data.npm}`,
    // `${data.labelWeb}  ${data.web}`,
    ``,
    // `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic and student most of the time."
    )}`,
    `${chalk.italic(
      'The rest of the time I write code that others can read.'
    )}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'green',
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
  '',
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
