function doubleOddIndices(numbers) {
  let doubledIndices = [];
  
  for (let counter = 0; counter < numbers.length; counter++) {
    if (counter % 2 === 1) {
      doubledIndices.push(numbers[counter] * 2);
    } else {
      doubledIndices.push(numbers[counter]);
    }
  }
  
  return doubledIndices;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleOddIndices(myNumbers));

console.log(myNumbers);