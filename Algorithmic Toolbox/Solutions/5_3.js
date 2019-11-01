const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const levenshteinDistance = (a, b) => {
  const distanceMatrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }
  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }
  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1, // insertion
        distanceMatrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return distanceMatrix[b.length][a.length];
};

let numbersOfStrings = 0;
let firstString;
let secondString;

rl.on("line", input => {
  numbersOfStrings += 1;

  if (numbersOfStrings === 1) {
    firstString = String(input);
  }
  if (numbersOfStrings === 2) {
    secondString = String(input);
    rl.close();
    console.log(levenshteinDistance(firstString, secondString));
  }
});
