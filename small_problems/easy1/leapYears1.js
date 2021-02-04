/* In the modern era under the Gregorian Calendar, 
  leap years occur in every year that's evenly
  divisible by 4, unless the year is also divisible
  by 100. If the year is evenly divisible by 100, then
  it's not a leap year, unless the year is also divisible 
  by 400. 
  Assume this rule is valid for any year greater than year 0.
  Write a function that takes any year greater than 0 as input,
  and returns true if the year is a leap year, or false if it's not
  a leap year.
  */

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

/* The course uses a much more succinct solution,
  starting from 400 remainder check. It also offers
  a shorter solution than that. */

/* 
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
} */

/* shorter solution
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
} */

// Further exploration
/* The order in which you perform tests for a leap
  year calculation is important. For what years will
  isLeapYear fail if you rewrite it as shown below?
  
  function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}
  This would fail for any years that are divisible by 400
  because they pass the % 100 test first and return false.
  Can you rewrite isLeapYear to perform its tests in the
  opposite order of the above solution? That is, test
  whether the year is divisible by 4 first, then, if necessary,
  test whether it is divisible by 100, and finally, if 
  necessary, test whether it is divisible by 400. Is this solution
  simpler or more complex than the original solution?
  
  -> This is actually exactly what I did in my solution, but
  it's not as simple as the course's solution.*/