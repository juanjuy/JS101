/* Further exploration for sumOrProduct:
  What if the input was an array of integers instead 
  of just a single integer? How would your computeSum
  and computeProduct functions change? Given taht the
  input is an array, how might you make use of the 
  Array.prototype.reduce() method? */

let readline = require('readline-sync');

console.log('Please enter a series of numbers separated by commas (no spaces).');
let input = readline.prompt().split(',');

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let calc = readline.prompt().toLowerCase();

let nums = [];

input.forEach(function(elem) {
  nums.push(Number(elem));
});

let total;

if (calc === "s") {
  total = nums.reduce(function(a, b) {
    return a + b;
  }, 0);
} else {
  total = nums.reduce(function(a, b) {
    return a * b;
  }, 1);
}

calc === "s" ? calc = "sum" : calc = "product";
console.log(`The ${calc} of the integers in your sequence is ${total}.`);
