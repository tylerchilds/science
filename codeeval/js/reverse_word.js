/*
 *
 * Reverse Word - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var rev = function(line){
	var arr = line.split(" ");
	return arr.reverse().join(" ");
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(rev(line));

	}
});

