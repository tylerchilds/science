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