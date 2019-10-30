// last digit of the sum of the fibonacci numbers

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const lastDigitOfTheSumOfFibonacciNumbers = n => {
  const period = [0, 1];
  let i = 2;
  while (i <= n + 2) {
    period.push((period[i - 2] + period[i - 1]) % 10);
    if (period[i] === 1 && period[i - 1] === 0) {
      return period[(n + 2) % (i - 1)] === 0
        ? 9
        : period[(n + 2) % (i - 1)] - 1;
    }
    i += 1;
  }
  return period[n + 2] - 1;
};

rl.on("line", input => {
  let nbrs = input.toString().split(" ");
  const n = parseInt(nbrs[0], 10);
  console.log(lastDigitOfTheSumOfFibonacciNumbers(n));
  rl.close();
});
