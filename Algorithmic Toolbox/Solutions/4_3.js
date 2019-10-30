const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let n = 0;
const arr = [];
let j = 0;

const quickSort = (n, arr) => {
  const pivot = Math.floor(Math.random() * n);
  if (n === 1) {
    return arr;
  }
  if (n === 0) return [];
  const left = arr.filter(elem => elem < arr[pivot]);
  const right = arr.filter(elem => elem > arr[pivot]);
  const middle = arr.filter(elem => elem === arr[pivot]);

  const leftSorted = quickSort(left.length, left);
  const rightSorted = quickSort(right.length, right);

  return [...leftSorted, ...middle, ...rightSorted];
};

rl.on("line", input => {
  if (j === 0) {
    n = Number(input.toString().split(" ")[0]);
    j += 1;
  } else if (j === 1) {
    const str = input.toString().split(" ");
    let i = 0;
    while (i < n) {
      arr.push(Number(str[i]));
      i += 1;
    }
    rl.close();
    console.log(quickSort(n, arr).join(" "));
  }
});
