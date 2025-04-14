const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const cost = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, cost) {
  const currentCost = [0, 0, 0];
  cost.forEach((currentHouseCost, index) => {
    if (index == 0) {
      currentCost[0] = currentHouseCost[0];
      currentCost[1] = currentHouseCost[1];
      currentCost[2] = currentHouseCost[2];
    } else {
      const [red, green, blue] = currentCost;
      //레드에 더하기
      if (green + currentHouseCost[0] > blue + currentHouseCost[0]) {
        currentCost[0] = blue + currentHouseCost[0];
      } else {
        currentCost[0] = green + currentHouseCost[0];
      }
      //그린에 더하기
      if (red + currentHouseCost[1] > blue + currentHouseCost[1]) {
        currentCost[1] = blue + currentHouseCost[1];
      } else {
        currentCost[1] = red + currentHouseCost[1];
      }
      //블루에 더하기
      if (green + currentHouseCost[2] > red + currentHouseCost[2]) {
        currentCost[2] = red + currentHouseCost[2];
      } else {
        currentCost[2] = green + currentHouseCost[2];
      }
    }
  });
  return currentCost.sort((a, b) => a - b)[0];
}

console.log(solution(n, cost));

// console.log(
//   solution(6, [
//     [30, 19, 5],
//     [64, 77, 64],
//     [15, 19, 97],
//     [4, 71, 57],
//     [90, 86, 84],
//     [93, 32, 91],
//   ])
// );

// console.log(
//   solution(8, [
//     [71, 39, 44],
//     [32, 83, 55],
//     [51, 37, 63],
//     [89, 29, 100],
//     [83, 58, 11],
//     [65, 13, 15],
//     [47, 25, 29],
//     [60, 66, 19],
//   ])
// );
