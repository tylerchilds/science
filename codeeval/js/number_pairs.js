/*
 *
 * Number Pairs - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {

		var args = line.split(";");
		var vals = args[0].split(",");
		var sum = parseInt(args[1]);


		var pairs = "";

		for(var i = 0; i < vals.length; i++){
			for(var j = i; j < vals.length; j++){

				if(parseInt(vals[i]) + parseInt(vals[j]) == args[1]){
					pairs += vals[i] + "," + vals[j] + ";";
				}
			}
		}

		pairs = pairs.substring(0, pairs.length - 1);
		
		if(pairs === "")
			pairs = "NULL";

		console.log(pairs);
	}
});


