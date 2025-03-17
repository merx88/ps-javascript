function solution(arr1, arr2) {
  let answer = [];

  arr1.forEach((row1) => {
    const resRow = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let sum = 0;
      row1.forEach((row1El, idx) => {
        sum += row1El * arr2[idx][i];
      });
      resRow.push(sum);
    }
    answer.push(resRow);
  });

  return answer;
}
console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);

console.log(
  solution(
    [
      [1, 2],
      [2, 1],
    ],

    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
    ]
  )
); // [[5, 5, 5, 5], [4, 4, 4, 4]]

//행렬의 곱 -> 생각 매트릭스1의 row1과 매트릭스2의 col1 각 원소 다 곱해서 더해서 레이저쏜곳의 첫번쨰 성분이 됨

// 놓친건 그거임 그 매트릭스2의 col 1~4 모두 해야하는데 왜 row를 기준으로 햇는지 모르겠음 일단 빡대가리라 그런듯
