function selectFruit(obj) {
  let arr = Object.keys(obj);
  let newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 'Fruit') {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  
  return newObj;
}

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce));