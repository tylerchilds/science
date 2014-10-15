/*
 *
 * Pangrams - Code Eval Challenge
 * Tyler Childs - 12/13/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {

		var letters = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0}
		var words = line.toLowerCase().split("");

		for(var i = 0; i < words.length; i++){
			if(letters[words[i]] === 0)
				delete letters[words[i]];
		}

		if(Object.keys(letters).length === 0){
			console.log("NULL");
		} else{
			var left = "";
			for(var c in letters){
				left += c;
			}
			console.log(left.toLowerCase());
		}
	}
});


