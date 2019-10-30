const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let n;
let a = [];
let b = [];
let i = 0;

const maxProfit = (n, a, b) => {
  let profit = 0;
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  for (let i = 0; i < n; i += 1) {
    profit += a[i] * b[i];
  }
  return Number(profit);
};

rl.on("line", input => {
  if (i === 0) {
    n = parseInt(input.toString().split(" ")[0], 10);
  }
  if (i === 1) {
    let j = 0;
    while (j < n) {
      a.push(Number(input.toString().split(" ")[j], 10));
      j += 1;
    }
  }
  if (i === 2) {
    let j = 0;
    while (j < n) {
      b.push(Number(input.toString().split(" ")[j], 10));
      j += 1;
    }
    console.log(maxProfit(n, a, b));
    rl.close();
  }
  i += 1;
});
