const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function sumFunc(exp) {
  const splitExp = exp.split("+");
  return splitExp.reduce((acc, cur) => acc + Number(cur), 0);
}

function solution(expStr) {
  const splitedExp = expStr.split("-");
  let sum = 0;
  const firstExp = splitedExp.shift();
  if (firstExp.includes("+")) {
    sum = sumFunc(firstExp);
  } else {
    sum = Number(firstExp);
  }

  for (let currentExp of splitedExp) {
    if (currentExp.includes("+")) {
      sum -= sumFunc(currentExp);
    } else {
      sum -= Number(currentExp);
    }
  }

  return sum;
}

console.log(solution(input));

console.log(solution("10+20+30+40")); //"02468ACE11111111"
console.log(solution("20-50+40-20+40-20+20-30+30+30+10-20-20")); //"0111"
console.log(solution("55+50-40-20")); //"0111"
