/*
 *
 * Decimal to Binary - Code Eval Challenge
 * Tyler Childs - 12/13/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		console.log(parseInt(line).toString(2));
	}
});


