/*
 *
 * Pass Triangle - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var triangle = [];
var result = [];
var max = 0;

var addAdjacent = function(depth, pos, value){
	if(depth == triangle.length){
		if(max < value)
			max = value;
		//result.push(value);
		return;
	}

	//console.log(depth + " : " + pos);
	// add left
	addAdjacent(depth+1, pos, parseInt(triangle[depth][pos]) + value);

	if(typeof triangle[depth][pos+1] == "undefined")
		return;

	// add right
	addAdjacent(depth+1, pos+1, parseInt(triangle[depth][pos+1]) + value);
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		if(line.substring(line.length - 1) == " ")
			line = line.substring(0, line.length - 1);
		
		triangle.push(line.split(" "));
	}
});

var pos = 0;
var depth = 0;

addAdjacent(depth, pos, 0);

console.log(max);


