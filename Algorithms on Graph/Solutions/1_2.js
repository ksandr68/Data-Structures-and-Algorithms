const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Graph {
  constructor() {
    this.numberOfVerticles = 0;
    this.adjList = {};
  }

  addVertex(v) {
    this.adjList[v] = [];
    this.numberOfVerticles += 1;
  }

  addEdge(v, w) {
    this.adjList[v].push(w);
    this.adjList[w].push(v);
  }

  dfs() {
    const visited = {};
    let counter = 0;
    for (let i = 1; i <= this.numberOfVerticles; i += 1) {
      if (!visited[i]) {
        this.explore(i, visited);
        counter += 1;
      }
    }
    return counter;
  }

  explore(v, visited = {}) {
    visited[v] = true;
    this.adjList[v].forEach(w => {
      if (!visited[w]) {
        this.explore(w, visited);
      }
    });
  }
}

let numberOfLines = 0;
let n = 0;
let m;
const graph = [];
const start = 0;
const end = 0;

rl.on("line", input => {
  if (numberOfLines === 0) {
    n = Number(input.toString().split(" ")[0]);
    m = Number(input.toString().split(" ")[1]);
  }

  if (numberOfLines >= 1 && numberOfLines <= m) {
    graph.push([
      Number(input.toString().split(" ")[0]),
      Number(input.toString().split(" ")[1])
    ]);
  }

  if (numberOfLines === m) {
    rl.close();
  }
  numberOfLines += 1;
});

rl.on("close", () => {
  const g = new Graph();

  for (let i = 1; i <= n; i += 1) {
    g.addVertex(i);
  }

  graph.forEach(elem => {
    g.addEdge(elem[0], elem[1]);
  });

  console.log(g.dfs());
});
