/* Write a function that computes the sum of all 
numbers between 1 and some other number, inclusive,
that are multiples of 3 or 5. For instance, if the
supplied number is 20, the result should be
98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an 
integer greater than 1.
*/

function multisum(num) {
  let total = 0;
  for (let i = 3; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

/* My solution works, but the course uses a different
approach by writing out a function to check if a number
is a multiple. It takes the input of a number and the 
divisor to check against. It makes the code more readable,
but it's not entirely necessary.*/