/*
 *
 * Penultimate Word - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var rev = function(line){
	var arr = line.split(" ");
	return arr[arr.length - 2];
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(pen(line));

	}
});

