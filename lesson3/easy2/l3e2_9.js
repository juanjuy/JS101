let title = "Flintstone Family Members";

let titleLen = title.length;

const WIDTH = 40;

let whitespace = Math.floor((WIDTH - titleLen) / 2);

title = title.padStart(titleLen + whitespace, ' ');
title = title.padEnd(WIDTH, ' ');

console.log(title);
console.log(title.length);