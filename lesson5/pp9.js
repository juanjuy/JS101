/* Given the following data structure, return a new array with
the same structure, but with the subarrays ordered - alphabetically
or numerically as appropriate - in ascending order. */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

arr.forEach((sub) => {
  if (typeof sub[0] === 'string') {
    sub.sort();
  } else {
    sub.sort((a, b) => a - b);
  }
});

console.log(arr);

/* The solution above mutates the array, but the question asked for a
new array. Gotta be more careful about the instructions. */

let sortedArr = arr.map((sub) => {
  if (typeof sub[0] === 'string') {
    return sub.slice().sort();
  } else {
    return sub.slice().sort((a, b) => a - b);
  }
});

console.log(sortedArr);

/* Course solution is basically the same. We want each subarray to be
ordered, so sort is an obvious choice here. But since we're dealing with
two types of arrays (string and number), we'll need two versions of sort.
For the string arrays, we can use sort without arguments to sort them
alphabetically. For the numbers, we must use a callback or else the numbers
will be sorted by their UTF-16 character values.
We're using slice to obtain a copy of the subarray since sort is a destructive
operation, and we don't want to mutate the subarrays. */