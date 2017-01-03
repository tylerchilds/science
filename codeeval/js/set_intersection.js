/*
 *
 * Set Intersection - Code Eval Challenge
 * Tyler Childs - 1/03/2017
 *
 * */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var intersection = [];
		
    var sets = line.split(';');
    var a = sets[0].split(',');
    var b = sets[1].split(',');

    for(var i of a)
      for(var j of b)
        if(i === j) intersection.push(i)

		console.log(intersection.join(','))
  }
});
