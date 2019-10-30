const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const merge = (left, right) => {
  let numberOfInversion = left[1] + right[1];
  const resArr = [];

  left[0].forEach(leftElement => {
    right[0].forEach(rightElement => {
      if (leftElement > rightElement) {
        numberOfInversion += 1;
      }
    });
  });

  let i = 0;
  let j = 0;
  while (left[0][i] && right[0][j]) {
    if (left[0][i] <= right[0][j]) {
      resArr.push(left[0][i]);
      i += 1;
    } else {
      resArr.push(right[0][j]);
      j += 1;
    }
  }
  while (right[0][j]) {
    resArr.push(right[0][j]);
    j += 1;
  }
  while (left[0][i]) {
    resArr.push(left[0][i]);
    i += 1;
  }
  return [resArr, numberOfInversion];
};

const mergeSort = arr => {
  if (arr.length <= 1) {
    return [arr, 0];
  }
  const middlePoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middlePoint));
  const right = mergeSort(arr.slice(middlePoint));
  return merge(left, right);
};

let numberOfLines = 0;
let n;

rl.on("line", input => {
  numberOfLines += 1;
  if (numberOfLines === 1) {
    n = parseInt(input.toString(), 10);
  }
  if (numberOfLines === 2) {
    const arr = input
      .toString()
      .split(" ")
      .map(Number);
    rl.close();
    console.log(mergeSort(arr)[1]);
  }
});
