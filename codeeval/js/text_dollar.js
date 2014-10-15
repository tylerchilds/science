/*
 *
 * Text Dollar - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var units = ["Dollars","Hundred","Thousand","Hundred","Million","Hundred"];

var singles = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
var doubles = ["","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

var fs  = require("fs");

var convert = function(line){
	var pos = 0;
	var odd = false;
	line = parseInt(line);

	string = [];

	while(line > 0){
		string.unshift(units[pos++]);

		if(odd === true){
			var ones = line % 10;
			line = Math.floor(line / 10);
			string.unshift(singles[ones]);

			odd = false;
		} else {
			var digits = line % 100;
			var tens = Math.floor(digits / 10);
			var ones = digits % 10;

			line = Math.floor(line / 100);

			string.unshift(singles[ones]);
			string.unshift(doubles[tens]);

			odd = true;
		}
	}

	return string.join('')
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

		console.log(convert(line));

	}
});

