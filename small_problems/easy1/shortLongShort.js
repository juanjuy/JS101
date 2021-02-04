/* Write a function that takes two strings as 
  arguments, determines the longer of the two
  strings, and then returns the result of concatenating
  the shorter string, the longer string, and the shorter 
  string once again. You may assume that the strings
  are of different lengths.
  */
  
// Examples:
console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));    // "xyz"

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return (str2.concat(str1, str2));
  } else {
    return (str1.concat(str2, str1));
  }
}

/* Same solution as the course, but the course uses
  + operators instead of concat, but has the same result.
  It also talks about how JS automatically coerces string
  primitives to String objects, which I don't think we've
  covered yet. */