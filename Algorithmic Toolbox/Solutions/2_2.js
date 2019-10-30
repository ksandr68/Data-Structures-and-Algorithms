// fibonacci last number

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const fibLastNbr = nbr => {
  if (nbr === 0) return 0;
  const arr = [1, 1];
  let i = 2;
  while (i < nbr) {
    arr.push((arr[i - 2] + arr[i - 1]) % 10);
    i += 1;
  }
  return arr[i - 1];
};

rl.on("line", input => {
  const nbr = parseInt(input.toString(), 10);
  console.log(fibLastNbr(nbr));
  rl.close();
});
