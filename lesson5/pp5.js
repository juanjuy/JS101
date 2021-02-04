let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of this family

let arr = Object.entries(munsters);

let maleTotalAge = arr.reduce((accumulator, currentValue) => {
  if (currentValue[1].gender === 'male') {
    return accumulator += currentValue[1].age;
  } else {
    return accumulator;
  }
}, 0);

console.log(maleTotalAge);

/* The course doesn't try to use reduce. It uses a for...in method that checks to see
if the current member is a male, and if so, adds the age to a previously declared
totalMaleAge variable. 

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge);
----
Another solution it has is using forEach, and it uses Object.values(munsters) instead of
total entries, because we don't actually need all of the information. Just their age and gender.

let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});
*/