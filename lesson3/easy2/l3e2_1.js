let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice);

advice = advice.replace("important", "urgent");

console.log(advice);

// how to replace all occurrences if it shows up more than once?

let advice2 = "Few things in life are as important as house training your important pet dinosaur.";

console.log(advice2);

advice2 = advice2.replaceAll("important", "urgent");

console.log(advice2);