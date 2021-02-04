let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);

console.log(flintstones);

let flintstonesFlat = flintstones.flat();

//console.log(flintstonesFlat);

let newFlintstones = [...flintstones].concat(["Barney", "Betty"],["Bambam", "Pebbles"]);

//console.log(newFlintstones);