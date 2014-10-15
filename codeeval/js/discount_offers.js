/*
 *
 * Discount Offers - Code Eval Challenge
 * Tyler Childs - 12/11/2013
 *
 * */

// calculate common factors
var commonFactor = function(a, b){

	// swap so a i highest
	if(b > a){
		var temp = b;
		b = a;
		a = temp;
	}
	
	// check for common factor
	for(var i = 2; i <= b; i++)
		if(a % i == 0 && b % i == 0){
			//console.log(a + " and " + b + ": lcd = " + i)
			return true;
		}
			

	// not found
	return false;
};


// customer object constructor
var Customer = function(name, products){
	this.name = name;
	this.p = products;

	// calculate SS
	for(i in this.p){

		var _this = this.p[i];
		var num = 0;

		// check if even
		if(_this.num % 2 == 1){
			for(var i = 0; i < this.name.length; i++)
				if(/[aeiou]/.test(this.name[i]))
					num++;

			
			_this.ss = num * 1.5;
		} else {
			for(var i = 0; i < this.name.length; i++)
				if(/[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]/.test(this.name[i]))
					num++;

			_this.ss = num;
		}

		// check for common factor multiple
		if(commonFactor(_this.num, num))
			_this.ss *= 1.5;

		console.log(_this.ss);
	}

	console.log(" ");
};

// product object constructor
var Product = function(name){
	this.name = name;
	this.ss = 0;
	this.num = 0;
	this.used = false;

	// find odd and num of letters
	for(var i = 0; i < this.name.length; i++)
		if(/[a-zA-Z]/.test(this.name[i]))
			this.num++;
};

var match = function(data){

	var max = 0;

	max = max.toFixed();

	for(i in data.customers){
		cust = data.customers[i];
		for(j in cust.p){
			max += cust.p[j].ss;
		}
	}

	return max;
};

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (test) {
	if (test != "") {

		// get args
		var args = test.split(";");
		var n = args[0].split(",");
		var p = args[1].split(",");

		// create data object
		var data = {};

		// create products object
		var products = [];
		for(i in p){
			products.push(new Product(p[i]));
		}

		// create customers array
		data.customers = [];
		for(i in n){
			data.customers.push(new Customer(n[i], products));
		}

		console.log(match(data));
	}
});

