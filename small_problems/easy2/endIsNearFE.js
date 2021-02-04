/* Suppose we need a function that retrieves the middle word 
of a phrase/sentence. What edge cases need to be considered? 
How would you handle those edge cases without ignoring them? 
Write a function that returns the middle word of a phrase or 
sentence. It should handle all of the edge cases you thought of. */

/* pseudocode:
1. split the string into arrays by space
2. if the string has an odd number of elements, return the middle one
(it should be the length divided by 2)
3. If the string has an even number of elements, return both middle ones
(length divided by 2 would be a decimal, so we would use ceil and floor
to return both)

*/
function middleWord(str) {
  let arr = str.split(' ');
  if (arr.length < 3) {
    return 'Please enter at least 3 words.';
  } else if (arr.length % 2 === 1) {
    return arr[(arr.length - 1) / 2];
  } else {
    return arr[Math.floor((arr.length - 1) / 2)] + ' ' + arr[Math.ceil((arr.length - 1) / 2)];
  }
}

console.log(middleWord(' ')); // 'Please enter at least 3 words.'
console.log(middleWord('Hey.')); // 'Please enter at least 3 words.'
console.log(middleWord('I Love You')); // 'Love'
console.log(middleWord('How do you do?')); // 'do you'
console.log(middleWord("Here's to all the fools who stifled me")); // 'the fools'
console.log(middleWord('You need to stop trying to escape the underworld.')); // 'trying'