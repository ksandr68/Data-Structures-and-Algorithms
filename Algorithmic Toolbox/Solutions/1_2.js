// max pairwise product

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const max = arr => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] * arr[arr.length - 2];
};

const readLine = line => {
  const arr = line
    .toString()
    .split(" ")
    .map(Number);
  console.log(max(arr));
  process.exit();
};

process.stdin.setEncoding("utf8");
rl.once("line", () => {
  rl.on("line", readLine);
});
