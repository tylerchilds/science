/*
 *
 * Clean Up The Words - Code Eval Challenge
 * Tyler Childs - 1/03/2017
 *
 * */

function Cleaner(str){
  this.string = str;
}

Cleaner.prototype.lower = function(){
  this.string = this.string.toLowerCase();

  return this;
}

Cleaner.prototype.alpha = function(){
  this.string = this.string.replace(/[^A-Za-z]+/g, ' ');

  return this;
}

Cleaner.prototype.print = function(){
  return this.string.trim();
}

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    console.log(new Cleaner(line).lower().alpha().print());
  }
});
