const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

class PhoneBook {
  constructor() {
    this.phoneBook = {};
  }

  add(number, name) {
    this.phoneBook[number] = name;
  }

  find(number) {
    return this.phoneBook[number] !== undefined
      ? this.phoneBook[number]
      : "not found";
  }

  delete(number) {
    if (this.phoneBook[number] !== undefined) {
      delete this.phoneBook[number];
    }
  }
}

const processQueries = arr => {
  const phoneBook = new PhoneBook();
  const output = [];

  arr.forEach(elem => {
    const query = elem.split(" ");
    const action = query[0];

    switch (action) {
      case "add": {
        const number = query[1];
        const name = query[2];
        phoneBook.add(number, name);
        break;
      }

      case "del": {
        const number = query[1];
        phoneBook.delete(number);
        break;
      }

      case "find": {
        const number = query[1];
        output.push(phoneBook.find(number));
        break;
      }

      default:
        break;
    }
  });

  return output;
};

rl.once("line", input => {
  const n = Number(input);
  const quieries = [];
  let numberOfLines = 0;

  rl.on("line", line => {
    quieries.push(line.toString());
    numberOfLines += 1;

    if (numberOfLines >= n) {
      rl.close();
      const res = processQueries(quieries);
      console.log(res.join("\n"));
    }
  });
});

module.exports = processQueries;
