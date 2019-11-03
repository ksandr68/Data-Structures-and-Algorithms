const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let numbersOfLine = 0;
let weight = 0;
let n = 0;
let arrOfBars = [];

const knapstackWithoutRepetition = (weight, arr) => {
  const matrix = Array(arr.length + 1)
    .fill(null)
    .map(() => Array(weight + 1).fill(null));

  for (let j = 0; j <= arr.length; j += 1) {
    matrix[j][0] = 0;
  }

  for (let i = 0; i <= weight; i += 1) {
    matrix[0][i] = 0;
  }

  for (let j = 1; j <= arr.length; j += 1) {
    for (let i = 1; i <= weight; i += 1) {
      let val = matrix[j - 1][i];
      if (arr[j - 1] <= i) {
        val = Math.max(val, matrix[j - 1][i - arr[j - 1]] + arr[j - 1]);
      }
      matrix[j][i] = val;
    }
  }
  return matrix[arr.length][weight];
};

rl.on("line", input => {
  if (numbersOfLine === 0) {
    weight = Number(input.toString().split(" ")[0]);
    n = Number(input.toString().split(" ")[1]);
  } else if (numbersOfLine === 1) {
    arrOfBars = input
      .toString()
      .split(" ")
      .map(Number);
    rl.close();
    console.log(knapstackWithoutRepetition(weight, arrOfBars));
  }
  numbersOfLine += 1;
});
