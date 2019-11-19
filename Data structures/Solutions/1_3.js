const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const solveTask = (n, bufferSize, arrOfPackets) => {
  const queue = [];
  
  arrOfPackets.forEach(packet => {

  });
};

const networkPackets = () => {
  let numbersOfLine = 0;
  const arrOfPackets = [];
  let n = 0;
  let bufferSize = 0;

  const getInput = input => {
    if (numbersOfLine === 0) {
      bufferSize = Number(input.toString().split(" ")[0]);
      n = Number(input.toString().split(" ")[1]);
    }
    if (numbersOfLine >= 1 && numbersOfLine <= n) {
      arrOfPackets.push({
        start: Number(input.toString().split(" ")[0]),
        end: Number(input.toString().split(" ")[1])
      });
    }
    if (numbersOfLine === n) {
      rl.close();
      return solveTask(n, bufferSize, arrOfPackets);
    }
    numbersOfLine += 1;
  };

  rl.on("line", input => getInput(input));
};

networkPackets();
