const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

class DisjointSet {
  constructor() {
    this.tables = [];
    this.maxSize = 0;
  }

  makeSet(i, rows) {
    this.tables[i] = {
      parent: i,
      rank: 0,
      rows
    };

    if (rows > this.maxSize) {
      this.maxSize = rows;
    }
  }

  find(i) {
    const arr = [];
    let index = i;

    while (index !== this.tables[index].parent) {
      index = this.tables[this.tables[index].parent].parent;
      arr.push(index);
    }

    arr.forEach(elem => {
      this.tables[elem].parent = i;
    });

    return i;
  }

  union(i, j) {
    if (i === j) return;

    const iId = this.find(i);
    const jId = this.find(j);

    if (iId === jId) return;

    if (this.tables[iId].rank === this.tables[jId].rank) {
      this.tables[iId].rank += 1;
    }

    this.tables[jId].parent = iId;
    this.tables[iId].rows += this.tables[jId].rows;
    this.tables[jId].rows = 0;

    if (this.tables[iId].rows > this.maxSize) {
      this.maxSize = this.tables[iId].rows;
    }
  }
}

const maxSize = (rows, actions) => {
  const newDisjointSet = new DisjointSet();
  rows.forEach((tableRows, i) => {
    newDisjointSet.makeSet(i, tableRows);
  });

  actions.forEach(action => {
    newDisjointSet.union(action.to, action.from);
    console.log(newDisjointSet.maxSize);
  });
};

rl.once("line", input => {
  const n = Number(input.toString().split(" ")[0]);
  const m = Number(input.toString().split(" ")[1]);

  rl.once("line", line => {
    let numberOfLines = 0;
    const actions = [];
    const rows = line
      .toString()
      .split(" ")
      .map(Number);

    rl.on("line", lines => {
      numberOfLines += 1;
      actions.push({
        to: Number(lines.toString().split(" ")[0]) - 1,
        from: Number(lines.toString().split(" ")[1] - 1)
      });
      if (numberOfLines >= m) {
        rl.close();
        maxSize(rows, actions);
      }
    });
  });
});
