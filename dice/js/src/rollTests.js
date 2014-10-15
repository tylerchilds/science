
// create various dice
var pr6 = new ProbableRandom(6);
var sr6 = new ShuffleRandom(6);
var br6 = new BagRandom(6);
var tr6 = new TrueRandom(6);

var pr12 = new ProbableRandom(12);
var sr12 = new ShuffleRandom(12);
var br12 = new BagRandom(12);
var tr12 = new TrueRandom(12);

var pr20 = new ProbableRandom(20);
var sr20 = new ShuffleRandom(20);
var br20 = new BagRandom(20);
var tr20 = new TrueRandom(20);

// roll the dice
for (var i=0; i < 1000; i++)
{ 
  pr6.roll();
  sr6.roll();
  br6.roll();
  tr6.roll();

  pr12.roll();
  sr12.roll();
  br12.roll();
  tr12.roll();

  pr20.roll();
  sr20.roll();
  br20.roll();
  tr20.roll();
}

// output stats to log
console.log('\n\nSTATISTICS\n');

console.log('\n6 Sided Die');
pr6.logStats();
sr6.logStats();
br6.logStats();
tr6.logStats();

console.log('\n12 Sided Die');
pr12.logStats();
sr12.logStats();
br12.logStats();
tr12.logStats();

console.log('\n20 Sided Die');
pr20.logStats();
sr20.logStats();
br20.logStats();
tr20.logStats();

// output range
console.log('\n\nRANGES\n');

console.log('\n6 Sided Die');
pr6.logRange();
sr6.logRange();
br6.logRange();
tr6.logRange();

console.log('\n12 Sided Die');
pr12.logRange();
sr12.logRange();
br12.logRange();
tr12.logRange();

console.log('\n20 Sided Die');
pr20.logRange();
sr20.logRange();
br20.logRange();
tr20.logRange();


