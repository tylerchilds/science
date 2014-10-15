/*
 *
 * Find a Writer - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var find = function(line){

	var arr = line.split("| ");
	var enc = arr[0];
	var keys = arr[1].split(" ");
	var name = "";

	for(var i = 0; i < keys.length; i++){
		name += enc[keys[i] - 1];
	}

	return name;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(find(line));

	}
});

