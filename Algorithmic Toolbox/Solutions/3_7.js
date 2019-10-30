const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let n;
const arr = [];
let i = 0;
let j = 0;

const isGreaterOrEqual = (digit, maxDigit) => {
  const str1 = digit + maxDigit;
  const str2 = maxDigit + digit;
  return Number(str1) > Number(str2);
};

const largestNumber = (n, arr) => {
  const digitsInLargestOrder = [];
  let max;
  let maxIndex = -1;
  let i = 0;
  while (i < n) {
    max = 0;
    maxIndex = -1;
    for (let j = 0; j < arr.length; j++) {
      if (isGreaterOrEqual(String(arr[j]), String(max))) {
        max = arr[j];
        maxIndex = j;
      }
    }
    digitsInLargestOrder.push(max);
    arr.splice(maxIndex, 1);
    i += 1;
  }
  console.log(digitsInLargestOrder.join(""));
};

rl.on("line", input => {
  if (i === 0) {
    n = parseInt(input.toString().split(" ")[0], 10);
    i += 1;
  } else if (i === 1) {
    while (j < n) {
      arr.push(Number(input.toString().split(" ")[j], 10));
      j += 1;
    }
    rl.close();
    largestNumber(n, arr);
  }
});
