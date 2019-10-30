const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let n = 0;
let j = 0;
let k = 0;
const a = [];
const b = [];

function binarySearch(arr, val, start, end) {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    return mid;
  }
  if (start >= end) {
    return -1;
  }
  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end);
}

const binarySearchForAllElements = (a, b, k, n) => {
  let i = 0;
  for (i = 0; i < k - 1; i += 1) {
    process.stdout.write(`${binarySearch(a, b[i], 0, n - 1)} `);
  }
  process.stdout.write(`${binarySearch(a, b[i], 0, n - 1)}`);
};

const getInput = input => {
  if (j === 0) {
    const str = input.toString().split(" ");
    n = Number(str[0]);
    let i = 1;
    while (i < n + 1) {
      a.push(Number(str[i]));
      i += 1;
    }
  }
  if (j === 1) {
    const str = input.toString().split(" ");
    k = Number(str[0]);
    let i = 1;
    while (i < k + 1) {
      b.push(Number(str[i]));
      i += 1;
    }
  }
  j += 1;
};

rl.on("line", input => {
  getInput(input);
  if (j === 2) {
    rl.close();
    binarySearchForAllElements(a, b, k, n);
  }
});
