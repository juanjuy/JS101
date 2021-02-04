/* Build a program that asks the user to enter the 
  length and width of a room in meters, and then logs
  the area of the room to the console in both square 
  meters and square feet
  Note: 1 square meter == 10.7639 square feet
  Don't worry about validating the input at this time
  Use the readlineSync.prompt method to collect user input
  */

let readline = require('readline-sync');

console.log('Will you be using meters or feet?');
let measure = readline.prompt().toLowerCase();

while (!['meters','feet'].includes(measure)) {
  console.log('Please enter meters or feet');
  measure = readline.prompt().toLowerCase();
}

let otherMeasure;

if (measure === 'meters') {
  otherMeasure = 'feet';
} else {
  otherMeasure = 'meters';
}

console.log(`Enter the length of the room in ${measure}:`);
let length = readline.prompt();

console.log(`Enter the width of the room in ${measure}`);
let width = readline.prompt();


let area = (length * width).toFixed(2);

let conversion;

if (measure === 'meters') {
  conversion = (area * 10.7639).toFixed(2);
} else {
  conversion = (area / 10.7639).toFixed(2);
}

console.log(`The area of the room is ${area} square ${measure} (${conversion} square ${otherMeasure}).`);

/* The course does a few things differently. It declares
  a const for the square feet conversion. It also calls
  parseInt on each of the inputs with a 10 in the second
  argument (this represents base 10 system). parseInt
  will take a number out of a string (as long as the string
  starts with a number), and converts it to base 10. It's
  already presumably being input as base 10 anyway, but
  this just makes sure.
  */

// Further Exploration:
/* Modify the program so that it asks the user for the
  input type (meters or feet). Compute for the area
  accordingly, and log it and its conversion in parentheses
  */

