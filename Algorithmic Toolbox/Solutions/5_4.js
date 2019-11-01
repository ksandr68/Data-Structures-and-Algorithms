const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let lineNumbers = 0;
let a = [];
let b = [];
let n;
let m;

const longestCommonSubsequence = (str1, str2, n, m) => {
  let matrix = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(null));
  for (let i = 0; i <= n; i += 1) {
    matrix[0][i] = 0;
  }
  for (let j = 0; j <= m; j += 1) {
    matrix[j][0] = 0;
  }

  for (let j = 1; j <= m; j += 1) {
    for (let i = 1; i <= n; i += 1) {
      matrix[j][i] =
        str1[i - 1] !== str2[j - 1]
          ? Math.max(matrix[j - 1][i], matrix[j][i - 1])
          : (matrix[j][i] = matrix[j - 1][i - 1] + 1);
    }
  }
  return matrix[m][n];
};

rl.on("line", input => {
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
    rl.close();
    console.log(longestCommonSubsequence(a, b, n, m));
  }
  lineNumbers += 1;
});
