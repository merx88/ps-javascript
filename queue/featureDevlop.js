function solution(progresses, speeds) {
  const answer = [];
  const remains = progresses.map((progress) => {
    return 100 - progress;
  });

  const endDate = remains.map((remain, idx) => {
    return Math.ceil(remain / speeds[idx]);
  });

  let finishes = 0;
  let preTask = endDate[0];

  for (n of endDate) {
    if (preTask >= n) {
      finishes += 1;
    } else {
      answer.push(finishes);
      finishes = 1;
      preTask = n;
    }
  }
  answer.push(finishes);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2,1]

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1,3,2]
