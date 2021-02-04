/* Given the following data structure, use the map method to
return a new array identical in structure to the original but, 
with each number incremented by 1. Do not modify the original
data structure */

let arr = [{ a: 1}, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map((obj) => {
  let entries = Object.entries(obj);
  entries.forEach((sub) => {
    sub[1] += 1;
  });
  return Object.fromEntries(entries);
});

console.log(arr);
console.log(newArr);

/* I felt like there was something convoluted in my code. The course
used for...in to perform this adjustment, even though we end up with
the same result. I have to remember about for...in. 

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]

Course explanation:
Here, we use map to iterate over the array. On each iteration, the callback
creates a new object, incrementedObj and then iterates through the key-value pairs
of the current object from the original array. It uses the keys and the 
current object to create a new key-value pair in incrementedObj, with a 
value that is one greater than the original value. The callback then returns
incrementedObj, and map uses it to transform each element in the array. 

*/