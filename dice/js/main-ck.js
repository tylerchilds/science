function Random (sides) {
  this.sides = sides;
  this.stats = {};
  this.type = "rand";
  this.lastRoll;

  // intialze stats to 0
  var i = 0;
  while (i < this.sides) { 
    this.stats[i++] = 0; 
  }
}

Random.prototype.logStats = function() {
  console.log(this.type + ': ' + this.stats);
};

Random.prototype.logRange = function() {
  console.log(this.type + ': ' + this.getRange());
};

Random.prototype.getStats = function() {
  return this.stats;
};

Random.prototype.setStats = function(roll) {
  this.stats[roll - 1] += 1;
};

Random.prototype.getMax = function() {
  var max = {};
  max.val = 1;
  max.count = this.stats[0];

  for (var i=1; i < this.sides; i++)
  { 
	if(this.stats[i] > max.count){
		max.val = i+1;
		max.count = this.stats[i];
	}
  }

  return max;
};

Random.prototype.getMin = function() {
  var min = {};
  min.val = 1;
  min.count = this.stats[0];

  for (var i=1; i < this.sides; i++)
  { 
	if(this.stats[i] < min.count){
		min.val = i+1;
		min.count = this.stats[i];
	}
  }

  return min;
};

Random.prototype.getRange = function() {
  var min = this.getMin();
  var max = this.getMax();

  return max.count - min.count;
};

Random.prototype.setStats = function(roll) {
  this.stats[roll - 1] += 1;
  this.lastRoll = roll;
};

/* **********************************************
     Begin ProbableRandom.js
********************************************** */

function ProbableRandom () {
  Random.apply(this, arguments);
  this.grid = [];
  //this.roll();
  this.type = "prob";

  // generate the grid of numbers
  for (var i=0; i < this.sides; i++)
  { 
    // make array of arrayss
    this.grid[i] = [];

    // populate the arrays
    for (var j=0; j < this.sides; j++)
    { 
      this.grid[i][j] = (((i+1) + (j+1)) % this.sides) + 1;
    }
  }
}

ProbableRandom.prototype = new Random();
 
ProbableRandom.prototype.roll = function() {
  var i = Math.floor((Math.random()*this.sides));
  var j = Math.floor((Math.random()*this.sides));

  var roll = this.grid[i][j];

  this.setStats(roll);

  return roll;
};

/* **********************************************
     Begin ShuffleRandom.js
********************************************** */

function ShuffleRandom () {
  ProbableRandom.apply(this, arguments);
  this.type = "shuf";
}

ShuffleRandom.prototype = new ProbableRandom();
 
ShuffleRandom.prototype.roll = function() {
  var i = Math.floor((Math.random()*this.sides));
  var j = Math.floor((Math.random()*this.sides));

  var roll = this.grid[i][j];

  this.setStats(roll);
  this.grid[i] = this.shuffle(this.grid[i]);

  return roll;
};

ShuffleRandom.prototype.shuffle = function(arr){
  for(var j, x, i = this.sides; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};

/* **********************************************
     Begin BagRandom.js
********************************************** */

function BagRandom () {
  Random.apply(this, arguments);
  this.bag = [];
  this.RANDOM = 1000;
  this.bagSize = this.sides * this.RANDOM;
  //this.pos = 0;
  this.type = "bagr";

  this.fillBag();
}

BagRandom.prototype = new Random();
 
BagRandom.prototype.roll = function() {
  if(this.bag.length < this.sides * (this.RANDOM / 10)){
    this.fillBag();
    //this.pos = 0;
    //this.bag = this.shuffle(this.bag);
  }

  var roll = this.bag.shift();
  //var roll = this.bag[this.pos++];

  this.setStats(roll);

  return roll;
};

BagRandom.prototype.fillBag = function() {
  // generate the bag of numbers
  var i=0;
  for (var j=0; j < this.bagSize; j++)
  { 
    // increment bag
    if((i+1) > this.sides)
      i = 0;

    this.bag[j] = i+1;

    i++;
  }
  this.bag = this.shuffle(this.bag);
}

BagRandom.prototype.shuffle = function(arr){
  for(var j, x, i = this.bagSize; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
};

/* **********************************************
     Begin TrueRandom.js
********************************************** */

function TrueRandom() {
  Random.apply(this, arguments);
  this.type = "true";
}

TrueRandom.prototype = new Random();
 
TrueRandom.prototype.roll = function() {
  var roll = Math.floor((Math.random()*this.sides) + 1);

  this.setStats(roll);

  return roll;
};


/* **********************************************
     Begin dice.js
********************************************** */

function Dice($scope) {

	$scope.trCoin = new TrueRandom(2);
	$scope.srCoin = new ShuffleRandom(2);
	$scope.brCoin = new BagRandom(2);

	$scope.trStat = new TrueRandom(20);
	$scope.srStat = new ShuffleRandom(20);
	$scope.brStat = new BagRandom(20);

	$scope.br4 = new BagRandom(4);
	$scope.br6 = new BagRandom(6);
	$scope.br8 = new BagRandom(8);
	$scope.br10 = new BagRandom(10);
	$scope.br12 = new BagRandom(12);
	$scope.br20 = new BagRandom(20);

	$scope.statTest = function(){
		if($scope.testLoop > 100000 || $scope.testLoop < 0){
			$scope.testError = "Enter a value between 0 and 100,000";
			return;
		}

		for (var i=0; i < $scope.testLoop; i++)
		{ 
			$scope.trStat.roll();
			$scope.srStat.roll();
			$scope.brStat.roll();
		}
	}

	$scope.resetTest = function(){
		$scope.trStat = new TrueRandom(20);
		$scope.srStat = new ShuffleRandom(20);
		$scope.brStat = new BagRandom(20);
	}

}

/* **********************************************
     Begin main.js
********************************************** */

// @codekit-prepend "src/Random.js"
// @codekit-prepend "src/ProbableRandom.js"
// @codekit-prepend "src/ShuffleRandom.js"
// @codekit-prepend "src/BagRandom.js"
// @codekit-prepend "src/TrueRandom.js"
// @codekit- prepend "src/rollTests.js"

// @codekit-prepend "src/dice.js"