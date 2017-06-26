// !/usr/bin/env node
/**
 * Created by bagjeongtae on 2017. 6. 26..
 */

var commander = require('commander');
commander
    .arguments('<count>')
    .option('-u, --username <username>', 'Your Github name')
    .option('-e, --email <email>', 'Your Email Address')
    .action(function(count){

        for(var i=0;i<count;i++){
            console.log('user: %s, email: %s, print count: %s',
            commander.username,
            commander.email,
            count);
        }

    })
    .parse(process.argv);