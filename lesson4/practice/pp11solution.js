// This is the course's solution

let statement = "The Flintstones Rock";

// This line converts the string into an array of characters, but exclude any spaces
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  // if result[char] has no value, it returns undefined, so the
  // statement will assign it 0. then it adds 1
  result[char] = result[char] || 0;
  result[char] += 1;
});

result;

// Second course solution, without ||
/*
charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});


// Third course solution, using for loop

let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;
  
  result[char] = result[char] || 0;
  result[char] += 1;
}

*/