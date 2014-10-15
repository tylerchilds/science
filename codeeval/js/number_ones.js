/*
 *
 * Number Ones - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {

		var bin = parseInt(line).toString(2);
		var count = 0;

		for(var i = 0; i < bin.length; i++){
			if(bin[i] == "1")
				count++;
		}
		
		console.log(count);
	}
});


