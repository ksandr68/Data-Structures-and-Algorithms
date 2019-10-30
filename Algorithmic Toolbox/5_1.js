const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const moneyChange = n => {
  if (n === 0) return 0;
  const arr = [0];
  const coins = [1, 3, 4];
  for (let i = 1; i <= n; i += 1) {
    let minCountOfCoins = 1001;
    for (let j = 0; j < coins.length; j += 1) {
      let countOfCoins;
      if (i >= coins[j]) {
        if (arr[i - coins[j]] === undefined) {
          countOfCoins = moneyChange(i - coins[j]) + 1;
        } else {
          countOfCoins = arr[i - coins[j]] + 1;
        }
      }
      if (countOfCoins < minCountOfCoins) {
        minCountOfCoins = countOfCoins;
      }
    }
    arr[i] = minCountOfCoins;
  }
  return arr[n];
};

rl.on("line", input => {
  const n = Number(input.toString());
  console.log(moneyChange(n));
  rl.close();
});
