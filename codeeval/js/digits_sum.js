/*
 *
 * Sum of Digits- Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var sum = function(line){
	var sum = 0;
	while(line > 0){

		var ones = line % 10;
		line = Math.floor(line / 10);

		sum += ones;

	}

	return sum;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(sum(line));

	}
});

