let advice = "Few things in life are as important as house training your pet dinosaur.";

// expected return value:
// => 'Few things in life are as important as '

let houseIndex = advice.indexOf("house");

console.log(advice.slice(0,houseIndex - 1));