/*
 *
 * Self Describing - Code Eval Challenge
 * Tyler Childs - 12/12/2013
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {

    	var count = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    	var good = true;

		number = line.split("");

		for(var i = 0; i < number.length; i++){
			count[number[i]]++;
		}

		for(var i = 0; i < number.length; i++){
			if(number[i] != count[i]){
				console.log(0);
				good = false;
				break;
			}
		}

		if(good == true)
			console.log(1);
	}
});


