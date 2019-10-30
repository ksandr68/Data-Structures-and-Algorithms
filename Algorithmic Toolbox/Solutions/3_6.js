const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const sumOfKPairwiseDistinctPositiveIntegers = n => {
  const copyOfN = n;
  rl.close();
  let i = 1;
  let sum = 0;
  const arr = [];
  while (n >= 0) {
    if (n - i >= 0) {
      arr.push(i);
      sum += i;
      n -= i;
    } else {
      arr[arr.length - 1] += copyOfN - sum;
      console.log(arr.length);
      console.log(arr.join(" "));
      return 0;
    }
    i += 1;
  }
};

rl.on("line", input => {
  const n = parseInt(input.toString().split(" ")[0], 10);
  return sumOfKPairwiseDistinctPositiveIntegers(n);
});
