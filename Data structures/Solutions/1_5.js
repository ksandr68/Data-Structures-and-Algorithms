/* eslint-disable max-classes-per-file */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  maximum() {
    if (this.length > 0) return this.data[this.length - 1].max;
    return 0;
  }

  push(value) {
    if (this.data.length === 0) {
      this.data.push({ value, max: value });
    } else if (this.data[this.length - 1].max < value) {
      this.data.push({ value, max: value });
    } else {
      this.data.push({ value, max: this.data[this.length - 1].max });
    }
    this.length += 1;
  }

  pop() {
    this.length -= 1;
    return this.data.pop();
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) this.stack2.push(this.stack1.pop().value);
      return this.stack2.pop();
    }
    return this.stack2.pop();
  }

  maximum() {
    if (this.stack2.length === 0) {
      return this.stack1.maximum();
    }
    return Math.max(this.stack2.maximum(), this.stack1.maximum());
  }
}

let numbersOfLine = 0;
let n;
let m;
let arr;

const getMaximum = (arr, n, m) => {
  const queue = new Queue();
  let i;
  for (i = 0; i < m; i += 1) {
    queue.enqueue(arr[i]);
  }
  if (i !== 0) process.stdout.write(`${queue.maximum()} `);
  while (i < n) {
    queue.dequeue();
    queue.enqueue(arr[i]);
    if (i === n - 1) {
      process.stdout.write(`${queue.maximum()}`);
    } else {
      process.stdout.write(`${queue.maximum()} `);
    }
    i += 1;
  }
};

rl.on("line", input => {
  if (numbersOfLine === 0) {
    n = Number(input.toString());
  }
  if (numbersOfLine === 1) {
    arr = input
      .toString()
      .split(" ")
      .map(Number);
  }
  if (numbersOfLine === 2) {
    m = Number(input.toString());
    rl.close();
    getMaximum(arr, n, m);
  }

  numbersOfLine += 1;
});
