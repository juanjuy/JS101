let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

/* Write a program that uses this array to create an object
where the names are the keys and the values are the
positions in the array. */

let obj = {};

flintstones.forEach((elem, i) => {
  obj[elem] = i;
});

console.log(obj);