function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;
  
  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger,currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }
  
  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  
  // steps 2 - 4
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]

// calculating the starting integer:
// Rule: First integer of row is equal to the last integer of the preceding row + 2
// Algorithm: 
// - Get the last row from the rows array
// - Get the last integer of that row
// - Add 2 to the integer
