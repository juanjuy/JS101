/* Create a simple tip calculator. The program should
  prompt for a bill amount and a tip rate. The program
  must compute the tip, and then log both the tip and
  the total amount of the bill to the console. You can
  ignore input validation and assume that the user will
  enter numbers. */

let readline = require('readline-sync');

console.log('What is the bill?');
let bill = Number(readline.prompt());

console.log('What is the tip percentage?');
let tipPercent = Number(readline.prompt()) / 100;

let tip = bill * tipPercent;

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total bill is $${total.toFixed(2)}`);

/* The course uses parseFloat() on the input instead of number
  This would return a floating point number. While it would
  usually return the same thing as Number(), parseFloat would
  be able to look through strings with alphabetical characters
  and parse out the numbers, making it more useful.
  */