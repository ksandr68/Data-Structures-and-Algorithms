/* eslint-disable max-classes-per-file */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.length = 1;
    } else {
      const node = new Node(value);

      node.next = this.head;
      this.head = node;
      this.length += 1;
    }
  }

  isFind(value) {
    if (!this.head) return false;

    let curr = this.head;
    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }

    return false;
  }

  getValues() {
    if (!this.head) {
      return "";
    }

    const res = [];
    let curr = this.head;
    while (curr) {
      res.push(curr.value);
      curr = curr.next;
    }
    return res.join(" ");
  }

  delete(value) {
    if (this.length === 0) return null;

    if (this.head.value === value) {
      const node = this.head;
      this.head = this.head.next;
      this.length -= 1;

      return node;
    }

    let curr = this.head.next;
    let prev = this.head;

    while (curr.value !== value) {
      curr = curr.next;
      prev = prev.next;
    }

    if (curr === null) {
      return null;
    }

    const node = curr;
    prev.next = curr.next;
    this.length -= 1;
    return node;
  }
}

class HashTable {
  constructor(bucketCount, multiplier, prime) {
    this.bucketCount = bucketCount;
    this.multiplier = multiplier;
    this.prime = prime;
    this.elements = Array.from(
      { length: this.bucketCount },
      () => new LinkedList()
    );
  }

  hashFunction(str) {
    let hash = 0;
    let len = str.length - 1;

    while (len >= 0) {
      hash = (hash * this.multiplier + str[len].charCodeAt(0)) % this.prime;
      len -= 1;
    }
    return hash % this.bucketCount;
  }

  add(str) {  
    const list = this.elements[this.hashFunction(str)];
    if (!list.isFind(str)) list.insert(str);
  }

  del(str) {
    const list = this.elements[this.hashFunction(str)];
    if (list.isFind(str)) list.delete(str);
  }

  find(str) {
    const list = this.elements[this.hashFunction(str)];
    if (list.isFind(str)) return "yes";

    return "no";
  }

  check(i) {
    const list = this.elements[+i];

    return list.getValues();
  }
}

process.stdin.setEncoding("utf8");

function processQueries(bucketCount, queries) {
  const hashTable = new HashTable(bucketCount, 263, 1000000007);
  const result = [];

  queries.forEach(query => {
    const [type, arg] = query.split(" ");
    const res = hashTable[type](arg);

    if (typeof res !== "undefined") {
      result.push(res);
    }
  });

  return result;
}

rl.once("line", line => {
  const bucketCount = Number(line);

  rl.once("line", input => {
    const n = Number(input);
    const queries = [];
    let count = 0;

    rl.on("line", inp => {
      queries.push(inp.toString());
      count += 1;

      if (count >= n) {
        const result = processQueries(bucketCount, queries);
        result.forEach(elem => console.log(elem));

        process.exit();
      }
    });
  });
});

module.exports = processQueries;
