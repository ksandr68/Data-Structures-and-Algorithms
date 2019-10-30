const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let numberOfLines = 0;
let n;
let p;
let starts = [];
let ends = [];
let points = [];

function getCountOfLeftSegments(arr, val, start, end) {
  let mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    while (val === arr[mid + 1]) {
      mid += 1;
    }
    return mid + 1;
  }
  if (start > end) {
    return end + 1;
  }
  return val < arr[mid]
    ? getCountOfLeftSegments(arr, val, start, mid - 1)
    : getCountOfLeftSegments(arr, val, mid + 1, end);
}

function getCountOfRightSegments(arr, val, start, end) {
  let mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    while (val === arr[mid - 1]) {
      mid -= 1;
    }
    return mid;
  }
  if (start > end) {
    return end + 1;
  }
  return val < arr[mid]
    ? getCountOfRightSegments(arr, val, start, mid - 1)
    : getCountOfRightSegments(arr, val, mid + 1, end);
}

rl.on("line", input => {
  numberOfLines += 1;
  if (numberOfLines === 1) {
    n = parseInt(input.toString().split(" ")[0], 10);
    p = parseInt(input.toString().split(" ")[0], 10);
  } else if (numberOfLines <= 1 + n) {
    starts.push(parseInt(input.toString().split(" ")[0], 10));
    ends.push(parseInt(input.toString().split(" ")[1], 10));
  } else {
    points = input
      .toString()
      .split(" ")
      .map(Number);
    rl.close();
    starts = starts.sort((a, b) => a - b);
    ends = ends.sort((a, b) => a - b);
    let i = 0;
    while (i < points.length) {
      const l = getCountOfLeftSegments(starts, points[i], 0, starts.length - 1);
      const r =
        n - getCountOfRightSegments(ends, points[i], 0, ends.length - 1);
      const res = l + r - starts.length;
      if (i !== points.length - 1) process.stdout.write(`${res} `);
      else process.stdout.write(`${res}`);
      i += 1;
    }
  }
});
