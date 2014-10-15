/*
 *
 * Beautiful Strings - Code Eval Challenge
 * Tyler Childs - 12/10/2013
 *
 * */

var lookup = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}

var sort = function(s){
    for(var i = 1; i < s.length; i++){
        val = s[i];
        j = i - 1;
        while((j >= 0) && (s[j] < val)){
            s[j+1] = s[j];
            j -= 1;
        }
        s[j+1] = val;
    }

    return s;
}

var add = function(s, total){
	val = 26

	for(var i = 1; i < s.length; i++){
		total += (s[i-1] * val);
		val -= 1;
	}

	return total;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (test) {
    if (test != "") {

		test = test.toLowerCase();

		size = 26;
		strings = [];
		while(size--) strings.push(0);

		total = 0;

		for(var i=0; i < test.length; i++){
			if(/[a-zA-Z]/.test(test[i])){
				strings[lookup[test[i]]] = strings[lookup[test[i]]] + 1;
			}
		}

		strings = sort(strings);

		total = add(strings, total);

		console.log(total);

	}

	
});

