/*
 *
 * Mixed Content - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var fs  = require("fs");

var unmix = function(line){
	var input = line.split(",");

	var nums = [];
	var words = [];

	for(var i = 0; i < input.length; i++){
		if(/[a-zA-Z]/.test(input[i])){
			words.push(input[i]);
		}
		else if(/[0-9]/.test(input[i])) {
			nums.push(input[i]);
		}
	}

	if(words.length == 0){
		str = nums.join(",");
	}
	else if(nums.length == 0){
		str = words.join(",");
	}
	else{
		str = words.join(",") +"|" + nums.join(",");
	}

	return str;
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(unmix(line));

	}
});

