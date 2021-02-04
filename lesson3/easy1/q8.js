// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

//

//flintstones.push("Dino");

console.log(flintstones);

// alternatively, you can go with adding a new index to the end.

flintstones[flintstones.length] = "Dino";

console.log(flintstones);

// The course also offers using .concat(), which is the same effect.

flintstones = flintstones.concat("Dino");

// Note that this returns a new array and does not mutate the original array
// So you need to set flintstones equal to the return value of the method.
