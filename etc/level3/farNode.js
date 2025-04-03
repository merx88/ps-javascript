function solution(n, edge) {
  const list = new Array(n + 1).fill([]);
  const length = new Array(n + 1).fill(0);
  const queue = [];

  //인접행렬리스트 만들기
  for (let k of edge) {
    list[k[0]] = [...list[k[0]], k[1]];
    list[k[1]] = [...list[k[1]], k[0]];
  }

  queue.push([1, 0]);
  list[1].push(0);
  while (queue.length != 0) {
    const targetNode = queue.shift();
    const closeNodes = list[targetNode[0]];

    if (Array.isArray(closeNodes)) {
      for (j of closeNodes) {
        if (list[j] != undefined && list[j][list[j].length - 1] != 0) {
          if (j != 0) {
            queue.push([j, targetNode[1] + 1]);
            list[j].push(0);
            length[j] = targetNode[1] + 1;
          }
        }
      }
    }
  }
  const max = Math.max(...length);
  let answer = 0;
  length.forEach((el) => {
    if (max == el) answer += 1;
  });

  return answer;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); //3;
