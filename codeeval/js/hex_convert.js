/*
 *
 * Hex Conversion - Code Eval Challenge
 * Tyler Childs - 12/9/2013
 *
 * */

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        console.log(parseInt(line, 16));
    }
});