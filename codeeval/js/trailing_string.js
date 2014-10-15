/*
 *
 * Remove Characters - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {		
		args = line.split(",");

		output = 0;

		var good = true;
		var j = 0;
		for(var i = args[0].length - args[1].length; i < args[0].length; i++){
			
			if(args[0][i] != args[1][j]){
				good = false;
				break;
			}

			j++;
		}

		if(good)
			output = 1;	
			
		console.log(output);
	}
});


