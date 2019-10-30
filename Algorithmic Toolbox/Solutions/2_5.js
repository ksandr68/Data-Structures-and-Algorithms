// Fn mod m

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const remainderOfDivisionFibonacciNumberByM = (n, m) => {
  const period = [0, 1];
  let i = 2;
  while (i < m * 6) {
    period.push((period[i - 2] + period[i - 1]) % m);
    if (period[i] === 1 && period[i - 1] === 0) {
      return period[n % (i - 1)];
    }
    i += 1;
  }
};

rl.on("line", input => {
  const nbrs = input.toString().split(" ");
  const n = parseInt(nbrs[0], 10);
  const m = parseInt(nbrs[1], 10);
  console.log(remainderOfDivisionFibonacciNumberByM(n, m));
  rl.close();
});
