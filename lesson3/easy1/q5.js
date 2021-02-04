// What will the following code output?

console.log(false == '0');
console.log(false === '0');

// Line 3 will output true, line 4 will output false. 
// Line 3 is using the non-strict equality operator, so it tries to coerce the values.
// false gets coerced to 0, and '0' gets coerced to 0. So they match and are true.
// Line 4 is using strict equality, so it does not coerce anything.