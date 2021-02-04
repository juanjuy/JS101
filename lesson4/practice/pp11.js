// Create an object that expresses the frequency with
// which each letter occurs in this string:

let statement = "The flintstones Rock";

let obj = {};

statement.split('').forEach(char => {
  if (obj.hasOwnProperty(char)) {
    obj[char] += 1;
  } else if (char === " ") {
    
  } else {
    obj[char] = 1;
  }
});

console.log(obj);