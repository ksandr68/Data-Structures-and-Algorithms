// eslint-disable-next-line max-classes-per-file
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

function write(res = []) {
  const maxLength = 10000;

  for (let i = 0; i < res.length; i += maxLength) {
    process.stdout.write(res.slice(i, i + maxLength));
  }
  process.stdout.write("\n");
}

class Node {
  constructor(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.nodes = [];
  }

  insert(key, left, right) {
    const node = new Node(key, left, right);

    if (this.root === null) {
      this.root = node;
    }

    this.nodes.push(node);
  }

  inOrderTraversal() {
    const arr = [];
    const callStack = [];
    let curr = this.root;

    while (true) {
      while (curr) {
        callStack.push(curr);
        curr = this.nodes[curr.left];
      }

      if (callStack.length === 0) break;

      const lastNode = callStack.pop();
      arr.push(lastNode.key);
      curr = this.nodes[lastNode.right];
    }

    return arr;
  }

  preOrderTraversal() {
    const arr = [];
    const callStack = [];
    const curr = this.root;

    if (!curr) return null;
    callStack.push(curr);
    while (callStack.length > 0) {
      const node = callStack.pop();
      arr.push(node.key);

      if (this.nodes[node.right]) callStack.push(this.nodes[node.right]);

      if (this.nodes[node.left]) callStack.push(this.nodes[node.left]);
    }

    return arr;
  }

  postOrderTraversal() {
    // https://www.geeksforgeeks.org/iterative-postorder-traversal/

    const secondStack = [];
    const firstStack = [];
    firstStack.push(this.root);

    while (firstStack.length > 0) {
      const current = firstStack.pop();
      secondStack.push(current.key);

      if (this.nodes[current.left]) firstStack.push(this.nodes[current.left]);
      if (this.nodes[current.right]) firstStack.push(this.nodes[current.right]);
    }
    return secondStack.reverse();
  }
}

process.stdin.setEncoding("utf8");

rl.once("line", input => {
  const n = Number(input);
  const vertices = [];
  let count = 0;

  rl.on("line", line => {
    vertices.push(
      line
        .toString()
        .split(" ")
        .map(Number)
    );
    count += 1;

    if (count >= n) {
      const tree = new BinaryTree();

      vertices.forEach(vertex => {
        const [key, left, right] = vertex;
        tree.insert(key, left, right);
      });

      write(tree.inOrderTraversal().join(" "));
      write(tree.preOrderTraversal().join(" "));
      write(tree.postOrderTraversal().join(" "));

      process.exit();
    }
  });
});

module.exports = BinaryTree;
