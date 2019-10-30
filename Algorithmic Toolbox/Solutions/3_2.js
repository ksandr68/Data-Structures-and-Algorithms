// algorithm for the fractional knapsack problem.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let i = 0;
let n;
let capacity;
const arr = [];

const solveFractionKnapstackProblem = (n, capacity, arr) => {
  const bestChoice = arr.sort(
    (a, b) => a.value / a.weight - b.value / b.weight
  );
  let len = n - 1;
  let sum = 0;
  while (bestChoice.length !== 0) {
    if (bestChoice[len].weight < capacity) {
      sum += bestChoice[len].value;
      capacity -= bestChoice[len].weight;
      len -= 1;
      bestChoice.pop();
    } else {
      sum += (bestChoice[len].value * capacity) / bestChoice[len].weight;
      capacity = 0;
      return sum.toFixed(4);
    }
  }
  return sum.toFixed(4);
};

const getInput = input => {
  if (!n && !capacity) {
    n = parseInt(input.toString().split(" ")[0], 10);
    capacity = parseInt(input.toString().split(" ")[1], 10);
  } else if (i < n) {
    arr.push({
      value: parseInt(input.toString().split(" ")[0], 10),
      weight: parseInt(input.toString().split(" ")[1], 10)
    });
    i += 1;
  }
};

rl.on("line", input => {
  getInput(input);
  if (i === n) {
    console.log(solveFractionKnapstackProblem(n, capacity, arr));
    rl.close();
  }
});
