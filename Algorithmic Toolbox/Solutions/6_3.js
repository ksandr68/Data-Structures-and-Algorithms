const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const evalExpr = (a, b, op) => {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
};

const minAndMax = (i, j, minMatrix, maxMatrix, op) => {
  let a, b, c, d;
  let tmpMin;
  let tmpMax;
  for (let k = i; k < j; k += 1) {
    a = evalExpr(maxMatrix[i][k], minMatrix[k + 1][j], op[k]);
    b = evalExpr(minMatrix[i][k], minMatrix[k + 1][j], op[k]);
    c = evalExpr(maxMatrix[i][k], maxMatrix[k + 1][j], op[k]);
    d = evalExpr(minMatrix[i][k], maxMatrix[k + 1][j], op[k]);
    if (k === i) {
      [tmpMin, tmpMax] = [Math.min(a, b, c, d), Math.max(a, b, c, d)];
    } else
      [tmpMin, tmpMax] = [
        Math.min(a, b, c, d, tmpMin),
        Math.max(a, b, c, d, tmpMax)
      ];
  }
  return [tmpMin, tmpMax];
};

const placeParentheses = (arrOfOperations, arrOfDigits) => {
  const minMatrix = Array(arrOfDigits.length)
    .fill(null)
    .map(() => Array(arrOfDigits.length).fill(null));
  const maxMatrix = Array(arrOfDigits.length)
    .fill(null)
    .map(() => Array(arrOfDigits.length).fill(null));

  for (let i = 0; i < arrOfDigits.length; i += 1) {
    minMatrix[i][i] = arrOfDigits[i];
    maxMatrix[i][i] = arrOfDigits[i];
  }

  for (let s = 0; s < arrOfDigits.length; s += 1) {
    for (let i = 0; i < arrOfDigits.length - s - 1; i += 1) {
      const j = i + 1 + s;
      [minMatrix[i][j], maxMatrix[i][j]] = minAndMax(
        i,
        j,
        minMatrix,
        maxMatrix,
        arrOfOperations
      );
    }
  }
  return maxMatrix[0][arrOfDigits.length - 1];
};

rl.on("line", input => {
  const str = input.toString().split("");
  rl.close();
  const arrOfDigits = [];
  const arrOfOperations = [];
  str.forEach((elem, index) => {
    if (index % 2 === 1) {
      arrOfOperations.push(elem);
    } else {
      arrOfDigits.push(Number(elem));
    }
  });
  console.log(placeParentheses(arrOfOperations, arrOfDigits));
});
