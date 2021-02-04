/* Log all odd numbers from 1 to 99, inclusive, to the
  console, with each number on a separate line
  */
  
// for (let i = 1; i < 100; i = i + 2) {
//   console.log(i);
// }

// Further exploration
/* Repeat this exercise with a different technique
  from the one you used, and different from the one
  provided. Also consider adding a way for the user 
  to specify the limits of the odd numbers logged
  to the console. 
  */ 

let readline = require('readline-sync');
let limit = readline.question('How high would you like to go?\n');

let ii = 1;
while (ii <= limit) {
  console.log(ii);
  ii += 2;
}