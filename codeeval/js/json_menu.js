/*
 *
 * JSON Menu IDs - Code Eval Challenge
 * Tyler Childs - 12/9/2013
 *
 * */

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var sum = 0;
		json = JSON.parse(line);

		var item = json.menu.items;

		for( var i = 0; i < item.length; i++){

			if (typeof item[i] !== "undefined" && item[i] != null){
				if(typeof item[i].label !== "undefined") {
					sum += item[i].id;
				}
			} 
		}

		console.log(sum);
	}
});