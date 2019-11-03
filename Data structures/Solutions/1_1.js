// sum of two digits

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

const checkBrackets = str => {
  const stack = [];
  const bracketsOpenConfig = ["[", "{", "("];
  const bracketsCloseConfig = ["]", "}", ")"];

  let i = 0;

  while (i < str.length) {
    const character = str[i];
    if (bracketsOpenConfig.includes(character)) {
      stack.push({ value: character, position: i });
    }
    if (bracketsCloseConfig.includes(character)) {
      if (stack.length === 0) {
        return i + 1;
      }
      const top = stack.pop();
      if (
        (character === "]" && top.value !== "[") ||
        (character === ")" && top.value !== "(") ||
        (character === "}" && top.value !== "{")
      ) {
        return i + 1;
      }
    }
    i += 1;
  }
  return stack.length === 0 ? "Success" : stack[0].position + 1;
};

rl.on("line", input => {
  const str = input.toString();
  rl.close();
  console.log(checkBrackets(str));
});
