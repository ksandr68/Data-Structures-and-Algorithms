

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const arr = [];
let k = 0;
let j = 0;
let n = 0;
const res = [];

const collectingSignatures = (n, arr) => {
  arr.sort((a, b) => a[1] - b[1]);
  let finish = arr[0][1];
  res.push(finish);
  let i = 1;
  while (i < n) {
    if (finish < arr[i][0] || finish > arr[i][1]) {
      finish = arr[i][1];
      res.push(finish);
    }
    i += 1;
  }
  console.log(res.length);
  console.log(res.join(" "));
};

rl.on("line", input => {
  if (k === 0) {
    n = parseInt(input.toString().split(" ")[0], 10);
    k += 1;
  } else if (k === 1) {
    if (j < n) {
      arr.push([
        Number(input.toString().split(" ")[0], 10),
        Number(input.toString().split(" ")[1], 10)
      ]);
      j += 1;
    }
    if (j === n) {
      rl.close();
      return collectingSignatures(n, arr);
    }
  }
});
