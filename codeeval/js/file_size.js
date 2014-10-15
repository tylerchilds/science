/*
 *
 * File Size - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var fs  = require("fs");

stats = fs.statSync(process.argv[2]);

console.log(stats.size);


