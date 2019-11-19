const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const heapify = (arr, i, arrOfPermutations) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let smallest = i;
  if (left < arr.length && arr[left] < arr[smallest]) {
    smallest = left;
  }
  if (right < arr.length && arr[right] < arr[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    arrOfPermutations.push({ from: i, to: smallest });
    return heapify(arr, smallest, arrOfPermutations);
  }
  return arr;
};

const buildHeap = (n, arr) => {
  let i = Math.floor(n / 2);
  let heapArr = arr;
  const arrOfPermutations = [];

  while (i >= 0) {
    heapArr = heapify(heapArr, i, arrOfPermutations);
    i -= 1;
  }
  console.log(arrOfPermutations.length);
  arrOfPermutations.forEach(elem => console.log(`${elem.from} ${elem.to}`));
};

const task = () => {
  let numbersOfLine = 0;
  let arr = [];
  let n = 0;

  const getInput = input => {
    if (numbersOfLine === 0) {
      n = Number(input.toString());
    }
    if (numbersOfLine === 1) {
      arr = input
        .toString()
        .split(" ")
        .map(Number);
      rl.close();
      buildHeap(n, arr);
    }
    numbersOfLine += 1;
  };

  rl.on("line", input => getInput(input));
};

task();
