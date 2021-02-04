function doubleNumbers(numbers) {
  let counter = 0;
  
  while (counter < numbers.length) {
    numbers[counter] = numbers[counter] * 2;
    counter += 1;
  }
  
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

doubleNumbers(myNumbers);

console.log(myNumbers);