/*
 *
 * Email Validation - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		if(/^[a-zA-Z0-9.+-_]*@[a-zA-Z0-9.-]*\.[a-zA-Z0-9]{2,4}$/.test(line))
			console.log("true");
		else
			console.log("false");
	}
});


