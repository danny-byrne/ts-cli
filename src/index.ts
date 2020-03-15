#!/usr/bin/env node

/**
 * “This is an instance of a shebang line: the very first line in an executable 
 * plain-text file on Unix-like platforms that tells the system what 
 * interpreter to pass that file to for execution, 
 * via the command line following the magic #! prefix (called shebang).”
 * https://stackoverflow.com/a/33510581
 */

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

console.log(
  chalk.red(
    figlet.textSync('pizza-cli', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description("An example CLI for ordering pizza's")
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

  console.log('you ordered a pizza with:');
  if (program.peppers) console.log('  - peppers');
  if (program.pineapple) console.log('  - pineapple');
  if (program.bbq) console.log('  - bbq');
  const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
  console.log('  - %s cheese', cheese);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }