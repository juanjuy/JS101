/* Given the following data structure, write some code
that returns an object where the key is the first item
in each subarray, and the value is the second */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// Expected return:
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//let obj = Object.fromEntries(arr);

let obj = {};

arr.forEach((elem) => {
  obj[elem[0]] = elem[1];
});

console.log(obj);

// Course uses a different solution.