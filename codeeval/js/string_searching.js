/*
 *
 * String Searching - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var find = function(line){
	var found = false

	var arr = line.split(",");
	var pos = 0;
	var searching = found;


	for(var i = 0; i < arr[0].length; i++){
		while(arr[1][pos] == "*"){
			pos++;
		}

		if(arr[1][pos] == "\\" && arr[1][pos + 1] == "*"){
			if(arr[0][i] == arr[1][pos+1])
				pos += 2;
		}
		else if(arr[0][i] == arr[1][pos]){
			pos++;
		} else if((arr[0][i] != arr[1][pos]) && searching === true){
			// failed search
			return found;
		}

		if(pos == arr[1].length){
			// found it!
			return true;
		}
	}

	return found;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(find(line));

	}
});

