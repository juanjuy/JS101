/* Given the following data structure, sort the array so that the
sub-arrays are ordered based on the sum of the odd numbers that
they contain. */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8 , 3]];

arr.sort((a, b) => {
  let aOddSum = a.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 1) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
  
  let bOddSum = b.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 1) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
  
  return aOddSum - bOddSum;
});

console.log(arr);

/* While this does work, it seems a bit convoluted. The course has a 
shorter method using filter and reduce.

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

-- 
Filter is used to return an array that only includes the odd numbers.
This is then method chained with reduce to add them all together. 
The sum is then saved to oddSumA variable. Same thing for oddSumB. 
*/ 