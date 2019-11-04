const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let numbersOfLine = 0;
let operations = [];
let n = 0;

class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  maximum() {
    return this.data[this.length - 1].max;
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
    this.data.pop();
    this.length -= 1;
  }
}

const useStack = operations => {
  let stack = new Stack();
  operations.forEach(operation => {
    if (operation.includes("push")) {
      stack.push(Number(operation.split(" ")[1]));
    }
    if (operation.includes("pop")) {
      stack.pop();
    }
    if (operation.includes("max")) {
      console.log(stack.maximum());
    }
  });
};

rl.on("line", input => {
  if (numbersOfLine === 0) {
    n = Number(input.toString());
  } else {
    operations.push(input.toString());
  }
  if (numbersOfLine === n) {
    rl.close();
    // console.log(operations);
    useStack(operations);
  }
  numbersOfLine += 1;
});
