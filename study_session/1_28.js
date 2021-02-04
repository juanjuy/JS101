// Colletion manipulaton JS
// 
// Filter (Selecting set of elements that meet a criteria, Return Array), Map(Transformation, Returns array), forEach (Iteration, return undefined)
// Sort

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// odd numbers, new array with all the odd numbers.
function getOdd(elem) {
  return elem % 2 === 1;
}

let oddArr = arr.filter(getOdd);
                      
console.log(oddArr);

// the odd numbers * 1000.
let multOddArr = arr.map((elem) => {
  return getOdd(elem) ? elem * 1000 : elem;
});

console.log(multOddArr);

// Both things with the reduce method.
// reduce the collection into something, primitive, obj, []
function filterOdd(accumulator, current) {
  if (getOdd(current)) {
    accumulator.push(current);
  }
  
  return accumulator;
} 

let filterWithRduce = arr.reduce(filterOdd, []);

function mapOddTimesThousand(accArr, curr, idx, arr) {
  // is it a odd? yes or not.
  // if yes... multiply by 1000 and push into acc
  // if not leave it be and push into acc
  
  
  return accArr; // []
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mapWithReduce = arr.reduce((acc, current) => {
  if (getOdd(current)) current *= 1000;
  acc.push(current);
  
  return acc;
}, []);


//console.log(filterWithRduce);
console.log(mapWithReduce);

/*
arr = [1,2,3]

arr.inject do |sum, n|
  sum + n
end

arr.inject(10) { |sum, n| sum + n }

arr = ['hello', 'low', 'lilly']

word_with_most_l = arr.inject do |result, word|
  if word.count('l') > result.count('l')
    word
  else
    result
  end
end

p word_with_most_l

arr = [ 99, 1, 2, 3 ]

min = arr.inject do |minimum, number|
  minimum < number ? minimum : number
end

p min

animals = ["cats", "dogs", "lizards"]

sentence = animals.inject("My favourite animals are: ") do |result, animal|
  result << animal + " "
end

p sentence
*/


// async
// closure
// hoisting 
// function delayLog() {
  
//   for (let delay = 1; delay <= 10; delay += 1) {
//     let delay = 2;
//     global.setTimeout(() => console.log(delay), delay * 1000);
//   }
//   // 11
//   //  out scope...
//   // execution...
// }

// no hoisting
// no closure
function delayLog() {
  function log(str) { console.log(str) }

  for (var delay = 1 ; delay <= 10 ; delay++) {
    global.setTimeout(log, delay * 1000,  delay);
  }  
}

// ex

delayLog();
