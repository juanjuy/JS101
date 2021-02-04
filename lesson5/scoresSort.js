let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let aTotal = 0;
  let bTotal = 0;
  a.forEach(elem => aTotal = elem + aTotal);
  b.forEach(elem => bTotal = elem + bTotal);
  return aTotal - bTotal;
});

console.log(scores);