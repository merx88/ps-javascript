function preorder(nodes, n, preordered) {
  preordered.push(nodes[n]);
  if (nodes[n * 2]) {
    preorder(nodes, n * 2, preordered);
    if (nodes[n * 2 + 1]) {
      preorder(nodes, n * 2 + 1, preordered);
    }
  } else if (nodes[n * 2 + 1]) {
    preorder(nodes, n * 2 + 1, preordered);
  }
}

//GPT가짜준건데 좋은듯 너무 꼬아 생각한듯
//나는 if 문으로 노드가 있는지 없는지 판단 했지만 그럴필요가 없넹
//재귀로 푸는건 같은데 들어가서 그냥 노드있지 확인하고 없으면 바로 끝내면됨
// function preorder(nodes, n, preordered) {
//   // 노드가 존재하지 않으면 종료
//   if (!nodes[n]) return;

//   // 현재 노드 방문 (root)
//   preordered.push(nodes[n]);

//   // 왼쪽 서브트리 순회
//   preorder(nodes, n * 2, preordered);

//   // 오른쪽 서브트리 순회
//   preorder(nodes, n * 2 + 1, preordered);
// }

// 책풀이도 괜찮네
//결극 같이 재귀이긴하지만
// idx로 해당 노드가 있는지 판단
// idx를 기준으로 하니까 +1 헤애힘

function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = inorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }
}

function inorder(nodes, n, inordered) {
  if (!nodes[n]) return;

  inorder(nodes, n * 2, inordered);

  inordered.push(n);

  inorder(nodes, n * 2 + 1, inordered);
}

function postorder(nodes, n, postordered) {
  if (!nodes[n]) return;

  postorder(nodes, n * 2, postordered);

  postorder(nodes, n * 2 + 1, postordered);

  postordered.push(n);
}

function solution(nodes) {
  const answer = [];
  const preordered = [];
  const inordered = [];
  const postordered = [];

  nodes.unshift(0);

  answer.push(preorder(nodes, 1, preordered));
  answer.push(inorder(nodes, 1, inordered));
  answer.push(postorder(nodes, 1, postordered));

  return postordered;
}

console.log(
  solution([1, 2, 3, 4, 5, 6, 7]) //["1 2 4 5 3 6 7","4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]
);

console.log(
  solution([1, 4, 8, 3, 5, 7, 2, 6]) //["1 2 4 5 3 6 7","4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]
);
