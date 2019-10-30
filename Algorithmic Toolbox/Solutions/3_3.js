const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let distance;
let range;
let n;
let arr;
let i = 0;

const carFueling = (range, arr, n) => {
  let counterOfFueling = 0;
  let currentPosition = 0;
  let lastPosition = 0;
  while (currentPosition <= n) {
    lastPosition = currentPosition;
    while (
      currentPosition <= n &&
      arr[currentPosition + 1] - arr[lastPosition] <= range
    ) {
      currentPosition += 1;
    }

    if (currentPosition === lastPosition) return -1;
    if (currentPosition <= n) {
      counterOfFueling += 1;
    }
  }
  return counterOfFueling;
};

const getInput = input => {
  if (i === 0) {
    distance = parseInt(input.toString().split(" ")[0], 10);
  }
  if (i === 1) {
    range = parseInt(input.toString().split(" ")[0], 10);
  }
  if (i === 2) {
    n = parseInt(input.toString().split(" ")[0], 10);
  }
  if (i === 3) {
    arr = input.split(" ").map(elem => parseInt(elem, 10));
    arr.unshift(0);
    arr.push(distance);
  }
  i += 1;
};

rl.on("line", input => {
  getInput(input);
  if (i === 4) {
    console.log(carFueling(range, arr, n));
    rl.close();
  }
});
