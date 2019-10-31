const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const getArrOfMinWaysToGetNumber = n => {
  const arrOfMinWaysToGetNumber = [0, 0, 1, 1, 2, 3];
  for (let i = 6; i <= n; i += 1) {
    let countOfWays = 0;
    let minCountOfWays = arrOfMinWaysToGetNumber[i - 1] + 1;
    if (i % 2 === 0) {
      countOfWays = arrOfMinWaysToGetNumber[i / 2] + 1;
      if (countOfWays < minCountOfWays) minCountOfWays = countOfWays;
    }
    if (i % 3 === 0) {
      countOfWays = arrOfMinWaysToGetNumber[i / 3] + 1;
      if (countOfWays < minCountOfWays) minCountOfWays = countOfWays;
    }
    arrOfMinWaysToGetNumber.push(minCountOfWays);
  }
  return arrOfMinWaysToGetNumber;
};

const getSequence = (n, arrOfMinWaysToGetNumber) => {
  const sequence = [n];
  let elem = n;
  while (elem !== 1) {
    let a;
    let b;
    const c = arrOfMinWaysToGetNumber[elem - 1];
    let resElem = elem - 1;
    if (elem % 2 === 0) {
      a = arrOfMinWaysToGetNumber[elem / 2];
      if (a < c) {
        resElem = elem / 2;
      }
    }
    if (elem % 3 === 0) {
      b = arrOfMinWaysToGetNumber[elem / 3];
      if (b < c) {
        resElem = elem / 3;
      }
    }
    sequence.push(resElem);
    elem = resElem;
  }
  return sequence.reverse().join(" ");
};

rl.on("line", input => {
  const n = Number(input.toString());
  rl.close();
  const arr = getArrOfMinWaysToGetNumber(n);
  console.log(arr[n]);
  console.log(getSequence(n, arr));
});
