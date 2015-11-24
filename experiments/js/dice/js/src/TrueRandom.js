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
