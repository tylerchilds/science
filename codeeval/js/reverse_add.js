/*
 *
 * Array Absurdity - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var reverse = function(str){
	var rev = [];
	for(var i = 0; i < str.length; i++)
		rev.unshift(str[i]);
	
	return rev.join("");
}

var palindrome = function(str, count){

	var rev = reverse(str);

	if(str == rev){
		console.log(count + " " + str)
		return;
	} else if (count == 100){
		return;
	}

	line = (parseInt(str) + parseInt(rev)).toString();
	palindrome(line, count+1)

};

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {

		var count = 0;
		palindrome(line, count);
	}
});


