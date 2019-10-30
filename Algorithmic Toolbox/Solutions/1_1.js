// sum of two digits

const readline = require("readline");

process.stdin.setEncoding("utf8");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const readLine = line => {
  if (line !== "\n") {
    const a = parseInt(line.toString().split(" ")[0], 10);
    const b = parseInt(line.toString().split(" ")[1], 10);
    console.log(a + b);
    process.exit();
  }
};

rl.on("line", readLine);
