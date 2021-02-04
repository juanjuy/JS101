/* Return a new version of this sentence that ends just before the word house.
Don't worry about spaces or puncutation: remove everything starting
from the beginning of house to the end of the sentence.
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value: 
// => 'Few things in life are as important as '

// We can start by finding the index of house.
let houseIndex = advice.indexOf("house");

// Then, we can pull out the substring up to that point.
let newAdvice = advice.slice(0,houseIndex);

console.log(newAdvice);