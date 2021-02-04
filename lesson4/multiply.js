function multiply(numbers, mult) {
  let multipliedNums = [];
  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    multipliedNums.push(currentNum * mult);
  }
  
  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 8));