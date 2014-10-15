/*
 *
 * Primes to N - Code Eval Challenge
 * Tyler Childs - 12/9/2013
 *
 * */

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var i = 2;
		var primes = "";

		while (i < line){

			j = 2;

			while(j <= i){
				if(i == j){
					primes += i + ",";
					break;
				}
				
				if(i % j == 0)
					break;

				j++;
			}

			i++;
		}

		console.log(primes.substring(0, primes.length - 1));
	}
});