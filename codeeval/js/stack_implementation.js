/*
 *
 * Stack Implementation - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var fs  = require("fs");

var pop_two = function(line){
	
	// get values
	arr = line.split(" ");
	var popped = "";
	odd = true;

	for(var i = arr.length -1; 0 <= i; i--){
		if(odd){
			popped += arr[i] + " ";
			odd = false;
		} else
			odd = true;
		
	}
	
	return popped.substring(0, popped.length - 1);
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(pop_two(line));

	}
});

