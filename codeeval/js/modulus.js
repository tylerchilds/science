/*
 *
 * Modulus - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var mod = function(line){
	var arr = line.split(",");
	return arr[0] - (Math.floor(arr[0] / arr[1]) * arr[1]);
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(mod(line));

	}
});

