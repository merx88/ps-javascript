function solution(board, moves) {
  const basket = [];
  let result = 0;
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] === 0) continue;
      if (basket.length === 0) {
        basket.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
      if (board[i][move - 1] != basket[basket.length - 1]) {
        basket.push(board[i][move - 1]);
        board[i][move - 1] = 0;
      } else {
        basket.pop();
        result += 2;
        board[i][move - 1] = 0;
      }
      break;
    }
  });
  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); //4

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0],
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// ); //4

console.log(
  solution(
    [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
    ],
    [1, 1, 1, 1, 1, 2, 1, 4]
  )
); //4
