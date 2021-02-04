/* Write a program that asks the user to enter an integer
  greater than 0, then asks whether the user wants to determine 
  the sum or the product of all integers between 1 and the
  entered integer, inclusive */

let readline = require('readline-sync');

console.log('Please enter an integer greater than 0:\n');
let input = parseInt(readline.prompt());

while (isNaN(input) || input <= 0) {
  console.log('Invalid input, pelase enter an integer greater than 0:');
  input = parseInt(readline.prompt());
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let calc = readline.prompt().toLowerCase();

while (!["s","p"].includes(calc)) {
  console.log('Please enter "s" or "p"');
  calc = readline.prompt().toLowerCase();
}

let final = input;

for (let i = 1; i < input; i++) {
  if (calc === "s") {
    final = i + final;
  } else {
    final = i * final;
  }
}

calc === "s" ? calc = "sum" : calc = "product";
console.log(`The ${calc} of the integers between 1 and ${input} is ${final}.`);

/* The course uses a similar solution but breaks out
  the sum and product calculations into functions.
  It ends the program with an if statement to see what
  operation to use, calls the appropriate function,
  and logs the final line. */