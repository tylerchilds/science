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