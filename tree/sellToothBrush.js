// function solution(enroll, referral, seller, amount) {
//   const tree = [["-", null, 0]];

//   enroll.forEach((el, idx) => {
//     tree.push([el, referral[idx], 0]);
//   });

//   seller.forEach((el, idx) => {
//     let currentNode;
//     for (node of tree) {
//       if (el == node[0]) {
//         currentNode = node;
//         break;
//       }
//     }
//     let currentAmount = amount[idx] * 100;

//     while (true) {
//       if (Math.floor((currentAmount * 1) / 10) >= 1) {
//         currentNode[2] += currentAmount - Math.floor((currentAmount * 1) / 10);
//         currentAmount = Math.floor((currentAmount * 1) / 10);
//         for (node of tree) {
//           if (currentNode[1] == node[0]) {
//             currentNode = node;
//             break;
//           }
//         }
//       } else {
//         currentNode[2] += currentAmount;
//         break;
//       }
//       if (currentNode[1] == null) {
//         currentNode[2] += currentAmount;
//         break;
//       }
//     }
//   });
//   tree.shift();

//   return tree.map((el) => el[2]);
// }

function solution(enroll, referral, seller, amount) {
  const answer = {};
  const parent = {};

  enroll.forEach((element, idx) => {
    parent[element] = referral[idx];
  });

  seller.forEach((el, idx) => {
    let current = el;
    let currentPrice = amount[idx] * 100;
    while (true) {
      if (Math.floor((currentPrice * 1) / 10) >= 1) {
        if (answer[current] == undefined) {
          answer[current] = currentPrice - Math.floor((currentPrice * 1) / 10);
        } else {
          answer[current] += currentPrice - Math.floor((currentPrice * 1) / 10);
        }
      } else {
        if (answer[current] == undefined) {
          answer[current] = currentPrice;
        } else {
          answer[current] += currentPrice;
        }
        break;
      }

      current = parent[current];
      currentPrice = Math.floor((currentPrice * 1) / 10);
      if (current == "-") break;
    }
  });

  return enroll.map((el) => {
    return answer[el] ? answer[el] : 0;
  });
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
); //

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["sam", "emily", "jaimie", "edward"],
    [2, 3, 5, 4]
  )
); //
