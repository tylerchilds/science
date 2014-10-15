/*
 *
 * Dump Input - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (test) {
    if (test != "") {

		console.log(test);
				
	}
});

