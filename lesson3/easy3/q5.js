function isColorValid(color) {
  return (color === "blue" || color === "green");
}


function isColorValid2(color) {
  return !(color !== "blue" && color !== "green")
}

let fave = "green";

console.log(isColorValid(fave));
console.log(isColorValid2(fave));