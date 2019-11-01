const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let lineNumbers = 0;
let a = [];
let b = [];
let c = [];
let n;
let m;
let l;

const longestCommonSubsequence = (str1, str2, str3, n, m, l) => {
  const matrix = Array(m + 1)
    .fill(null)
    .map(() =>
      Array(n + 1)
        .fill(null)
        .map(() => Array(l + 1).fill(null))
    );
  for (let i = 0; i <= n; i += 1) {
    matrix[0][i][0] = 0;
  }
  for (let j = 0; j <= m; j += 1) {
    matrix[j][0][0] = 0;
  }

  for (let k = 0; k <= l; k += 1) {
    matrix[0][0][l] = 0;
  }

  for (let j = 1; j <= m; j += 1) {
    for (let i = 1; i <= n; i += 1) {
      for (let k = 1; k <= l; k += 1) {
        matrix[j][i][k] =
          str1[i - 1] === str2[j - 1] && str2[j - 1] === str3[k - 1]
            ? (matrix[j][i][k] = matrix[j - 1][i - 1][k - 1] + 1)
            : Math.max(
                matrix[j - 1][i][k],
                matrix[j][i - 1][k],
                matrix[j][i][k - 1]
              );
      }
    }
  }
  return matrix[m][n][l];
};

const getInput = input => {
  if (lineNumbers === 0) {
    n = parseInt(input.toString(), 10);
  }
  if (lineNumbers === 1) {
    a = input
      .toString()
      .split(" ")
      .map(Number);
  }
  if (lineNumbers === 2) {
    m = parseInt(input.toString(), 10);
  }
  if (lineNumbers === 3) {
    b = input
      .toString()
      .split(" ")
      .map(Number);
  }
  if (lineNumbers === 4) {
    l = parseInt(input.toString(), 10);
  }
  if (lineNumbers === 5) {
    c = input
      .toString()
      .split(" ")
      .map(Number);
    rl.close();
  }
  lineNumbers += 1;
};

rl.on("line", input => {
  getInput(input);
  if (lineNumbers === 6) {
    console.log(longestCommonSubsequence(a, b, c, n, m, l));
  }
});
