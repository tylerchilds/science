/*
 *
 * Pangrams - Code Eval Challenge
 * Tyler Childs - 12/13/2013
 *
 * */

var fs  = require("fs");
var linenum = 1;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		var jumps = {};
		var good = true;

		//console.log("\n\n" + (linenum++) + "-------------------------------\n\n" );

		var vals = line.split(" ");
		for(var x=0; x<vals.length; x++) { vals[x] = +vals[x]; }

		for(var i=0; i < vals.length - 1; i++){
			var diff = Math.abs(vals[i] - vals[i+1]);

			//console.log(i + ": " + " diff: " + diff + " length: " + vals.length + " slot: " + jumps[diff]);

			// less than 1, greater than n - 1, already set
			if(diff === 0 || diff >= vals.length || jumps[diff] == 1){
				console.log("Not Jolly");
				good = false;
				break;
			} else {
				jumps[diff] = 1;
			}
		}

		//console.log(jumps);

		if(good === true){
			console.log("Jolly");
		}
	}
});


