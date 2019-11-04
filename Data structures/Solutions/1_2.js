const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let numbersOfLine = 0;
let n;
let parents = [];

const treeHeightUsingBfs = (root, nodes) => {
  const quee = [];
  let last;
  quee[0] = root;
  let counter = 1;
  while (quee.length !== 0) {
    const node = quee.shift();
    if (node === last) {
      counter += 1;
      last = undefined;
    }
    let i = 0;
    while (i < nodes[node].length) {
      quee.push(nodes[node][i]);
      i += 1;
    }
    if (!last) {
      last = quee[quee.length - 1];
    }
  }
  return counter;
};

const getArrOfNodes = parents => {
  const nodes = [];
  let root;
  parents.forEach((elem, index) => {
    nodes[index] = [];
    if (elem === -1) {
      root = index;
    }
  });

  parents.forEach((elem, index) => {
    if (elem !== -1) {
      nodes[elem].push(index);
    }
  });

  return [root, nodes];
};

rl.on("line", input => {
  if (numbersOfLine === 0) {
    n = Number(input.toString());
  }
  if (numbersOfLine === 1) {
    parents = input
      .toString()
      .split(" ")
      .map(Number);
    rl.close();
    const [root, nodes] = getArrOfNodes(parents);
    console.log(treeHeightUsingBfs(root, nodes));
  }
  numbersOfLine += 1;
});
