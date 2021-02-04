/* Create a function that takes 2 arguments, an array and an object. The
array will contain 2 or more elements that, when combined with adjoining
spaces, will produce a person's name. The object will contain two keys, 
"title" and "occupation", and the appropriate values. Your function should
return a greeting that uses the person's full name, and mentions the person's
title. */

let name = ["John", "Q", "Doe"];
let job = { title: "Master", occupation: "Plumber" };

function greetings(arr, obj) {
  let joinedName = arr.join(' ');
  let fullTitle = job.title.concat(' ', job.occupation);
  console.log(`Hello, ${joinedName}! Nice to have a ${fullTitle} around.`);
}

greetings(name, job);

// Course solution:
/*
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${status["occupation"]} around.`;
}
*/
/*
It doesn't store any variables which kinda screws with the legibility. Otherwise
it's pretty much the same as what I did. */