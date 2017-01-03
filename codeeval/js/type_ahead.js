/*
 *
 * Clean Up The Words - Code Eval Challenge
 * Tyler Childs - 1/03/2017
 *
 * */

var string = 'Mary had a little lamb its fleece was white as snow; And everywhere that Mary went, the lamb was sure to go. It followed her to school one day, which was against the rule; It made the children laugh and play, to see a lamb at school. And so the teacher turned it out, but still it lingered near, And waited patiently about till Mary did appear. "Why does the lamb love Mary so?" the eager children cry; "Why, Mary loves the lamb, you know" the teacher did reply."'

var fs  = require("fs");

function Predictor(dictionary){
  this.brain = dictionary.replace(/([^A-Za-z ])+/g, ' ').replace(/\s+/g, ' ').toLowerCase().trim();
}

Predictor.prototype.guess = function(grams, input){
  var guesses = {};
  var total = 0;

  var matches = this.brain.match(new RegExp(input + ' ([a-z]+)', 'g'));

  for(var match of matches){
    var key = match.split(' ')[grams - 1];

    guesses[key] = ++guesses[key] || 1;
    total++;
  }

  return this.probability(guesses, total);
}

Predictor.prototype.probability = function(guesses, total){
  var pairs = [];

  for(var key in guesses){
    var percent = (guesses[key] / total).toFixed(3);
    pairs.push([key, percent])
  }

  return this.sort(pairs);
}

Predictor.prototype.sort = function(pairs){
  pairs.sort(function(a, b){
    if(a[1] < b[1]) return 1;
    if(a[1] > b[1]) return -1;
    if(a[0] > b[0]) return 1;
    if(a[0] < b[0]) return -1;

    return 0;
  })

  return this.print(pairs);
}

Predictor.prototype.print = function(pairs){
  var result = [];

  for(var pair of pairs){
    result.push(pair.join(','));
  }

  return result.join(';');
}

var predictor = new Predictor(string);

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {

    var grams = line.split(',')[0];
    var input = line.split(',')[1].toLowerCase();

    console.log(predictor.guess(grams, input));
  }
});
