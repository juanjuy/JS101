/* Write a function that determines and returns the
ASCII string value of a string passed in as an
argument. The ASCII string value is the sum of the
ASCII values of every character in the string. You 
may use String.prototype.charCodeAt() to determine 
the ASCII value of a character */

function asciiValue(str) {
  let sum = 0;
  
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  
  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0