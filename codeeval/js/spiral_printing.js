/*
 *
 * Spiral Printing - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

var print = function(data){

	// short hand grid
	g = data.grid;

	// result array
	r = [];

	var dir = 0;

	while(data.c_min != data.c_max && data.r_min != data.r_max){
		switch(dir++){

			// right
			case 0:
				for(var j = data.c_min; j < data.c_max; j++)
					r.push(g[data.r_min][j]);

				data.r_min += 1;
				break;

			// down
			case 1:
				for(var j = data.r_min; j < data.r_max; j++)
					r.push(g[j][data.c_max - 1]);

				data.c_max -= 1;
				break;

			// left
			case 2:
				for(var j = data.c_max - 1; j >= data.c_min; j--)
					r.push(g[data.r_max - 1][j]);

				data.r_max -= 1;
				break;

			// up
			case 3:
				for(var j = data.r_max - 1; j >= data.r_min; j--)
					r.push(g[j][data.c_min]);

				data.c_min += 1;
				dir = 0;
				break;
		}
	}

	return r;

};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (test) {
    if (test != "") {

		// initialize data object
		data = {};

		// get args
		args = test.split(';');

		// vals from args
		data.vals = args[2].split(" ");

		// row min/max
		data.r_min = 0;
		data.r_max = args[0];

		// col min/max
		data.c_min = 0;
		data.c_max = args[1];

		// initilize grid
		data.grid = [];

		var pos = 0;

		// populate grid
		for(var i = 0; i < data.r_max; i++){

			// create row
			data.grid[i] = [];

			for(var j = 0; j < data.c_max; j++){

				// populate columns
				data.grid[i].push(data.vals[pos++]);
			}
		}

		console.log(print(data).join(" "));
				
	}
});

