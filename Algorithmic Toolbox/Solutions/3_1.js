// The goal in this problem is to find the minimum number of coins needed to change the input value (an integer) into coins with denominations 1, 5, and 10.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const getMinNumberOfCoins = n => {
  let value = n;
  let minNbrOfCoins = 0;
  const coins = [1, 5, 10];
  let i = 2;
  while (coins.length !== 0) {
    if (value < coins[i]) {
      coins.pop();
      i -= 1;
    } else {
      minNbrOfCoins += 1;
      value -= coins[i];
    }
  }
  return minNbrOfCoins;
};

rl.on("line", input => {
  let n = parseInt(input, 10);
  console.log(getMinNumberOfCoins(n));
  rl.close();
});
