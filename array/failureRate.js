function solution(N, stages) {
  const answer = [];
  const failureRate = [];
  let restStagesLength = stages.length;
  for (let i = 0; i < N; i++) {
    const failedStages = stages.filter((el) => i + 1 == el);
    if (failedStages.length != 0) {
      failureRate.push(failedStages.length / restStagesLength);
    } else {
      failureRate.push(0);
    }
    restStagesLength = restStagesLength - failedStages.length;
  }
  for (let i = 0; i < N; i++) {
    const maxRateIdx = failureRate.indexOf(Math.max(...failureRate));
    answer.push(maxRateIdx + 1);
    failureRate[maxRateIdx] = -1;
  }

  return answer;
}

function solution_2(N, stages) {
  // 이렇게 하면 각 스테이지를 인덱스로 실패한 인원 수를 배열에 저장할수잇음
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stages] += 1;
  }
  // 실패율을 객체로 저장
  const fails = {};
  let total = stages.length;

  // 내가 푼것과 거의 같은 로직임
  for (let i = 1; i <= N; i++) {
    if (challenger[i] == 0) {
      fails[i] = 0;
      continue;
    }
    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  //키값 배열로 만들고 솔팅 그리고 스테이지만 뽑아서 반환
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}

console.log(solution_2(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]

console.log(solution(4, [4, 4, 4, 4, 4])); //[4,1,2,3]

// 0/0 주의!!!
// Object.entries -> 키값을 배열로 반환
