// gcd

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

rl.on("line", input => {
  let nbrs = input.toString().split(" ");
  const a = parseInt(nbrs[0], 10);
  const b = parseInt(nbrs[1], 10);
  console.log(gcd(a, b));
  rl.close();
});
