/* Given the following data structure write some code to return an array
containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized. */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// should return the following:
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], "Orange"], "LARGE"];

let vals = Object.values(obj);

let filteredVals = vals.map((elem) => {
  if (elem.type === 'fruit') {
    return elem.colors.map((col) => {
      return col[0].toUpperCase().concat(col.slice(1));
    });
  } else {
    return elem.size.toUpperCase();
  }
});

console.log(filteredVals);

/* This returns the intended solution, but is once again a bit more
convoluted than the course's solution.

let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

--
The course declares a function to do the capitalization, using essentially
the same expression we used. Then, they used map in a similar way, splitting
by reading the 'type' property to decide which value to pull. In the case of
'fruit', it returns everything in a single line: 
attributes['colors'].map(char => capitalize(char));
So it takes the colors array and maps the values to a new array with capitalized
values, and that is returned to the main map. 
If not fruit, then it simply uppercases the entire thing. */