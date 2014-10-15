/*
 *
 * Remove Characters - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		while(line.substring(line.length - 1) == " ")
			line = line.substring(0, line.length - 1);

		while(line.substring(0, 1) == " ")
			line = line.substring(1, line.length);
		
		args = line.split(", ");

		output = "";

		for(var i = 0; i < args[0].length; i++){
			var good = true;
			for(var j = 0; j < args[0].length; j++){
				if(args[0][i] == args[1][j])
					good = false;
			}
			
			if(good)
				output += args[0][i];	
		}
			

		console.log(output);
	}
});


