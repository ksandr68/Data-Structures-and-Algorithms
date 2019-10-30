const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let n = 0;
const arr = [];
let j = 0;

const majorityElement = (n, arr) => {
  if (n === 1) {
    return arr[0];
  }
  const middle = Math.floor(n / 2);

  const a = majorityElement(Math.floor(n / 2), arr.slice(0, middle));
  const b = majorityElement(n - Math.floor(n / 2), arr.slice(middle));
  if (a !== -1) {
    let i = 0;
    let count = 0;
    while (i < n) {
      if (arr[i] === a) {
        count += 1;
      }
      if (count > n / 2) return a;
      i += 1;
    }
  }
  if (b !== -1) {
    let i = 0;
    let count = 0;
    while (i < n) {
      if (arr[i] === b) {
        count += 1;
      }
      if (count > n / 2) return b;
      i += 1;
    }
  }

  return -1;
};

rl.on("line", input => {
  if (j === 0) {
    n = Number(input.toString().split(" ")[0]);
    j += 1;
  } else if (j === 1) {
    const str = input.toString().split(" ");
    let i = 0;
    while (i < n) {
      arr.push(str[i]);
      i += 1;
    }
    rl.close();
    console.log(majorityElement(n, arr) !== -1 ? 1 : 0);
  }
});
