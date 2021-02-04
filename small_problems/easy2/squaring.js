/* Using the multiply() function from the mult2 problem, write a function
that computes the square of its argument */

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

console.log(square(5));
console.log(square(-8));

/* Further exploration: What if we wanted to generalize this function to a
"power to the n" type function: cubed, to the 4th power, to the 5th etc.
How would we go about doing so while still using the multiply() function? */

function power(num, exponent) {
  let total = num;
  
  if(exponent === 0) {
    total = 1;
  }
  
  for (let i = 1; i < exponent; i++) {
    total = multiply(total, num);
  }
  
  return total;
}

console.log(power(10, 2));
console.log(power(15,1));
console.log(power(5, 3));
console.log(power(2, 5));
console.log(power(10,0));