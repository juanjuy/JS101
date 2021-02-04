function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4 ) {
    return false;
  }
  
  for (let i = 0; i < dotSeparatedWords.length; i++) {
    if (dotSeparatedWords[i].length === 0) {
      return false;
    }
    dotSeparatedWords[i] = Number(dotSeparatedWords[i]);
    if (!isAnIpNumber(dotSeparatedWords[i])) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("0.1.8"));