// function solution(lst, searchList) {
//   const binaryTree = new Array(100).fill(0);
//   const answer = [];
//   lst.forEach((element, idx) => {
//     if (idx == 0) return (binaryTree[0] = element);
//     let currentPosition = 0;
//     let flag = true;
//     while (flag) {
//       if (binaryTree[currentPosition] < element) {
//         currentPosition = currentPosition * 2 + 2;
//       } else {
//         currentPosition = currentPosition * 2 + 1;
//       }
//       if (binaryTree[currentPosition] == 0) {
//         binaryTree[currentPosition] = element;
//         flag = false;
//       }
//     }
//   });

//   searchList.forEach((element, idx) => {
//     let currentPosition = 0;
//     let flag = true;
//     while (flag) {
//       if (binaryTree[currentPosition] == element) {
//         flag = false;
//         answer.push(true);
//         break;
//       }
//       if (binaryTree[currentPosition] < element) {
//         currentPosition = currentPosition * 2 + 2;
//       } else {
//         currentPosition = currentPosition * 2 + 1;
//       }
//       if (binaryTree[currentPosition] == 0) {
//         flag = false;
//         answer.push(false);
//       }
//     }
//   });
//   return answer;
// }

// 내풀이는 배열을 통한 풀이 로직은 같으나 불필요한 데이터를 사용하는 문제가 있음

// 링크드 리스트로 풀어보자

class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (true) {
      if (curr == null) return false;
      if (curr.val == key) return true;

      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }
}

function solution(lst, searchList) {
  const bst = new BST();

  for (key of lst) {
    bst.insert(key);
  }

  const result = [];

  for (el of searchList) {
    result.push(bst.search(el));
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 3, 6, 8, 10]));
