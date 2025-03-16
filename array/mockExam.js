function solution(answers) {
  const result = [0, 0, 0];
  const answer = [];

  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((el, idx) => {
    if (el == A[idx % A.length]) {
      result[0] += 1;
    }
    if (el == B[idx % B.length]) {
      result[1] += 1;
    }
    if (el == C[idx % C.length]) {
      result[2] += 1;
    }
  });

  const maxNum = Math.max(...result);

  result.forEach((el, idx) => {
    if (el == maxNum) answer.push(idx + 1);
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
