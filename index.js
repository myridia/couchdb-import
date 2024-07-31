#!/usr/bin/env node                                                                                                                                                          'use strict';

var fs = require('fs');
var pouchdb = require('pouchdb');
pouchdb.plugin(require('pouchdb-load'));


/* Catch the Args */
  var yargs = require('yargs')
  .boolean('h')
  .alias('h', 'help')
  .describe('h', 'this help message')
  .alias('i', 'imput-file')
  .describe('i', 'imput file')
  .alias('u', 'username')
  .describe('u', 'username for the CouchDB database (if it\'s protected)')
  .alias('p', 'password')
  .describe('p', 'password for the CouchDB database (if it\'s protected)')
  .example('$0 http://foo:5984/mydb -i foo.txt', 'import from file foot.txt to the database')
  .example('$0 http://foo:5984/mydb -i foo.txt -u user -p pass', 'import with authenfication');

let argv = yargs.argv;
let target_url = argv._[0];
let db_name = argv.o;

if(argv.h)
{
  yargs.showHelp();
  return process.exit(0);
}

if(!target_url)
{
  console.error('You need to supply a target database URL. -h for help');
  return process.exit(1);
}

if(!argv.i)
{
  console.error('You need to supply a import file -h for help');
  return process.exit(1);
}


if(argv.u && argv.p)
{
  console.log('authenticate with user:' + argv.u);
  console.log('authenticate with pass:' + argv.p);
  var db = new pouchdb(target_url,{
      auth: {
          username: argv.u,
          password: argv.p
      }
  });
}
else
{
  var db = new pouchdb(target_url);
}


let st = fs.readFileSync(argv.i).toString();
db.load(st, {
}).then(function () {
  console.log('...successfully imported');
}).catch(function (err) {
  console.log(err)
});







