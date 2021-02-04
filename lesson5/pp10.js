/* Perform the same transformation of sorting the subarrays we did
in the previous exercise with one difference: sort the elements in
descending order */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map((sub) => {
  if (typeof sub[0] === 'string') {
    return sub.slice().sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  } else {
    return sub.slice().sort((a, b) => b - a);
  }
});

console.log(arr);
console.log(sortedArr);

/* While this solution works, I don't think it's that great because we're not sorting the strings
properly, it's only checking the first character. So if blue and black were switched, it
wouldn't properly sort them alphabetically. 

Course solution:
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 3, 2, 1 ], [ 'green', 'blue', 'black' ] ]

So it starts with an entire slice().sort() on the subarray, passed into the map.
It checks to see if the first element is a number. If so, it simply returns b - a.

If it's not a number, it moves down to the next if statement. It compares strings a and b
and returns either 1, -1, or 0 accordingly. This is most likely the way to go since a and
b are actually being compared in their entirety, not just their first character. */