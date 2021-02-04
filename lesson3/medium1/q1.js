let str = "The Flintstones Rock!";

for (let i = 0; i < 10; i++) {
  console.log(str.padStart(i + str.length));
}