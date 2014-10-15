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