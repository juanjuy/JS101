/* Log all even numbers from 1 to 99, inclusive, to the
  console, with each number on a separate line
  */
  
for (let i = 2; i < 100; i += 2) {
  console.log(i);
}

/* The course uses a different solution where it iterates
  through all numbers, not just even ones. It uses an
  if statement to see if a number's remainder of 2 is 
  equal to 1 (this means it's odd). If so, then it uses the
  continue statement to skip to the next iteration. If not,
  it logs the number (which would be an even number)
  */