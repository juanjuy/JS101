/* Write a function that takes no parameters and returns
a UUID. A UUID is a 32-hexadecimal line of characters
broken up into 5 sections in an 8-4-4-4-12 pattern, like:
'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'. */

const hexa = '0123456789abcdefghijklmnopqrstuvwxyz';

/* To solve this, we need a function that can generate the hexadec value.
I'm thinking we probably need to split it into various arrays and then
join them with dashes. */

function random32() {
  return Math.floor(Math.random() * (hexa.length));
}
function makeUUID() {
  let uuid = '';
  while (uuid.length < 36) {
    let idx = random32();
    uuid = uuid.concat(hexa[idx]);
    
    if (uuid.length === 8 || uuid.length === 13 || uuid.length === 18 ||uuid.length === 23) {
      uuid = uuid.concat('-');
    }
  }
  return uuid;
}

console.log(makeUUID());

/* I mean, this was obviously wrong because we were using strings instead
of arrays, which the whole lesson was about. But this works. 

The course goes with an array-oriented approach which is pretty interesting.

function generateUUID() {
  // it starts by declaring all of the possible characters in an array
  // This is like what I did, but I did it in a string
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  // Then, it declares a sections array that holds the number of characters
  // in each section.
  let sections = [8, 4, 4, 4, 12];
  // declares an empty string variable for uuid, like we do
  let uuid = '';
  // starts a forEach based off of the sections array - so this will
  // run 5 times, one for each of the section elements
  sections.forEach((section, sectionIndex) => {
  // from inside forEach, it then makes a for loop that runs based on
  // the current value of sections. For example, the first time will run
  // 8 times, then 4, then 4, etc. 
    for (let index = 1; index <= section; index++) {
    // the code inside the for loop is pretty similar to what i did
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }
    // after all of the code above runs, it will always add a dash,
    // except if it's the last section. 
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}