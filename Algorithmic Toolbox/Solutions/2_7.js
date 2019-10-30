// partial sum of Fibonacci numbers from m to n

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const partialSumOfFibonacci = (m, n) => {
  let fibOfNplus2;
  let fibofMplus1;

  const period = [0, 1];
  let i = 2;
  while (i <= n + 2) {
    period.push((period[i - 2] + period[i - 1]) % 10);
    if (period[i] === 1 && period[i - 1] === 0) {
      fibOfNplus2 = period[(n + 2) % (i - 1)];
      fibofMplus1 = period[(m + 1) % (i - 1)];
      return fibOfNplus2 >= fibofMplus1
        ? fibOfNplus2 - fibofMplus1
        : fibOfNplus2 + 10 - fibofMplus1;
    }
    i += 1;
  }
  fibofMplus1 = period[m + 1];
  fibOfNplus2 = period[n + 2];
  return fibOfNplus2 >= fibofMplus1
    ? fibOfNplus2 - fibofMplus1
    : fibOfNplus2 + 10 - fibofMplus1;
};

rl.on("line", input => {
  const nbrs = input.toString().split(" ");
  const m = parseInt(nbrs[0], 10);
  const n = parseInt(nbrs[1], 10);
  console.log(partialSumOfFibonacci(m, n));
  rl.close();
});
