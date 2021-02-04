function log() {
  console.log("Shouldn't I be displayed first?");
}
setTimeout(log, 5000);
console.log("Shouldn't I be displayed second?");