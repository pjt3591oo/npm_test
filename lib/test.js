#!/usr/bin/env node

/**
 * Created by bagjeongtae on 2017. 6. 26..
 */

var commander = require('commander');

commander
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log(process.cwd());

console.log('you ordered a pizza with:');
if (commander.peppers) console.log('  - peppers');
if (commander.pineapple) console.log('  - pineapple');
if (commander.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', commander.cheese);