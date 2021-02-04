/* Using the forEach method, write some code to output all vowels from 
the strings in the arrays. Don't use a for or while loop. */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let objValues = Object.values(obj);
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

objValues.forEach((sub) => {
  sub.forEach((str) => {
    let splitStr = str.split('');
    splitStr.forEach((char) => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
});

/* Course solution: pretty much the same thing, but a bit more succinct. also note that
the vowels variable is just a string, not an array.

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

*/