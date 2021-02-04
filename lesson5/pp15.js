/* Given the following data structure, write some code to return an array
which contains only the objects where all the numbers are even. */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

/* We need to figure out how to access the arrays within the objects.
We can definitely use .every() to check to see if every value % 2 === 0. 
I'm thinking we need to use filter at some point.*/

let newArr = [];

arr.forEach((elem) => {
  let vals = Object.values(elem);
  let flatVals = vals.flat();
  if (flatVals.every((elem => elem % 2 === 0))) {
    newArr.push(elem);
  }
});

console.log(newArr);

/* The course has a much simpler solution using filter and every.

// start by filtering the obj
arr.filter(obj => {
// we go deeper immediately with .every to check the subarrays in the object values
  return Object.values(obj).every(subArr => {
  // this expression returns a boolean, which is then passed to every.
  // if all of the values in the subArr are even, every returns true
    return subArr.every(num => num % 2 === 0);
  });
  // if every returns true, that is passed to filter, which means the filter
  takes it in. 
});

*/ 