// last digit of the sum of squares of fibonacci numbers

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const lastDigitOfTheSumOfSquaresOfFibonacciNumbers = n => {
  const period = [0, 1];
  let i = 2;
  while (i <= n + 2) {
    period.push((period[i - 2] + period[i - 1]) % 10);
    if (period[i] === 1 && period[i - 1] === 0) {
      return (period[(n + 1) % (i - 1)] * period[n % (i - 1)]) % 10;
    }
    i += 1;
  }
  return (period[n + 1] * period[n]) % 10;
};

rl.on("line", input => {
  const nbrs = input.toString().split(" ");
  const n = parseInt(nbrs[0], 10);
  console.log(lastDigitOfTheSumOfSquaresOfFibonacciNumbers(n));
  rl.close();
});
