let munstersDescription = "The Munsters are creepy and spooky.";
let newString = "";

for (let i = 0; i < munstersDescription.length; i++) {
  if (munstersDescription[i] === munstersDescription[i].toUpperCase()) {
    newString += munstersDescription[i].toLowerCase();
  } else {
    newString += munstersDescription[i].toUpperCase();
  }
}

console.log(newString);