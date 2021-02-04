/* Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those
two numbers: addition, subtraction, product, quotient, remainder, 
and power. Don't worry about validating input. */

const readline = require('readline-sync');

function arithmetic (num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

let number1 = Number(readline.question('Enter the first number:\n'));
let number2 = Number(readline.question('Enter the second number:\n'));

arithmetic(number1, number2);