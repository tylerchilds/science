/*
 *
 * Array Absurdity - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

 var Count = function(length, vals){

 	this.entries = {};

 	for(var i = 0; i < length; i++){
		this.entries[vals[i]] = 0;
	}

};

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		
		var args = line.split(";");

		var vals = args[1].split(",");
		var length = parseInt(args[0]);

		var data = new Count(length, vals);

		for(var i = 0; i < vals.length; i++){
			data.entries[vals[i]]++;

			if(data.entries[vals[i]] == 2){
				console.log(vals[i]);
				break;
			}
		}
	}
});


