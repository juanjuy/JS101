/* Write a function that returns the next-to-last word in the 
string passed to it as an argument. 
Words are any sequence of non-blank characters.
You may assume that the input string will always contain at least
two words. */

function penultimate(str) {
  let arr = str.split(' ');
  return arr[arr.length - 2];
}

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));