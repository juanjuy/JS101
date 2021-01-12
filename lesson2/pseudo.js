// a function that returns the sum of two numbers

// declare a function that takes two values
// return the value of both values added together

function sum (num1, num2) {
  return num1 + num2;
}

console.log(sum(5, 8));

// a function that takes an array of strings, and returns a string that is all those strings concatenated together

// declare a function that takes an array as an argument
// join the array elements together into a single string and return it
function arrayConcat(arr) {
  return arr.join('');
}

let arr1 = ['dog', 'cat', 'mouse'];
console.log(arrayConcat(arr1));

// a function that takes an array of integers, and returns a new array with every other element

// declare a function that takes an array as an argument
// declare a new empty array
//iterate through the argument array, and for each one, check to see if the index is odd or even by using %
  //if it is even (starting with 0, then 2, etc), push the value to the new array
  //if it is odd, proceed to the next value
// return the new array

function everyOther(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

let arr2 = ['cat', 'mouse', 'dog', 'frog', 'beaver'];
console.log(everyOther(arr2));

// for this third one, you can do the same but increment i by 2 instead of 1, and you can remove the conditional logic

function everyOther2(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    newArray.push(arr[i]);
  }
}

console.log(everyOther(arr2));