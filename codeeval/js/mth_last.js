/*
 *
 * Mth to Last Element - Code Eval Challenge
 * Tyler Childs - 12/13/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		
		var vals = line.split(" ");

		if(vals[vals.length - 1] < vals.length){
			vals = vals.reverse();
			console.log(vals[vals[0]]);
		}
			
	}
});


