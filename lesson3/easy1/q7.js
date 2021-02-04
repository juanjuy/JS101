// Determine whether the name Dino appears in the strings below 
// Check each string separately.

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

//

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

// I also tried using match, but ended up with a huge output. 
// But the important thing is that if it doesn't have a match, you get null.
// This means that getting null means no match, so you can use this as
// a comparison and get true or false that way.

console.log(str1.match("Dino") !== null);
console.log(str2.match("Dino") !== null);

// The course also has the solution of using indexOf. 
// If indexOf() has a value of -1, it means it did not find a match
// Any other value means it did have a match.

console.log(str1.indexOf('Dino') > -1);
console.log(str2.indexOf('Dino') > -1);