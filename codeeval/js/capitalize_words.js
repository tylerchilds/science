/*
 *
 * Capitalize Words - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var cap = function(s){
	for(var i=0;i < s.length; i++){
		letter = s[i][0].toUpperCase();

		s[i] = letter + s[i].substring(1);
	}

	return s;
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        words = line.split(' ');

        s = cap(words);

        console.log(words.join(' '));
    }
});