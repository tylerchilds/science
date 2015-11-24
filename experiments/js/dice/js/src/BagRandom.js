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