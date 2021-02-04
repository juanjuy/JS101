let numbers = [1, 2, 3, 4, 5];

let numbers2 = numbers.slice().reverse();

console.log(numbers2);
console.log(numbers);

let numbers4 = [];

numbers.forEach(elem => numbers4.unshift(elem));

console.log(numbers4);
console.log(numbers);