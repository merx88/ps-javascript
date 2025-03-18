// function solution(prices) {
//   let answer = new Array(prices.length).fill(0);

//   let stack = [];

//   for (let i = 0; i < prices.length; i++) {
//     if (i === 0) {
//       stack.push([i, prices[i]]);
//     } else if (i === prices.length - 1) {
//       stack.push([i, prices[i]]);
//       break;
//     } else {
//       if (stack[stack.length - 1][1] <= prices[i]) {
//         stack.push([i, prices[i]]);
//       } else {
//         while (stack[stack.length - 1][1] > prices[i]) {
//           stack.pop();
//           if (stack.length == 0) {
//             break;
//           }
//         } //왜...? -> 흠 역시 스택 비었을 때 처리네 썅! -> 뭔가 뭔가 잘못알았누
//         stack.push([i, prices[i]]);
//       }
//     }

//     const indexArr = stack.map((el) => el[0]);
//     for (let j = 0; j < answer.length; j++) {
//       if (indexArr.includes(j)) {
//         answer[j] += 1;
//       }
//     }
//   }

//   return answer;
// }

// function solution(prices) {
//   // let answer = new Array(prices.length).fill(0);
//   let history = [];
//   let arrangeHistory = {};
//   let labelStack = [];
//   let priceStack = [];

//   for (let i = 0; i < prices.length; i++) {
//     const label = i + 1;
//     const current = prices[i];
//     if (priceStack.length == 0) {
//       priceStack.push(current);
//       labelStack.push(label);
//     } else if (i == prices.length - 1) {
//       break;
//     } else {
//       let top = priceStack[priceStack.length - 1];
//       if (current >= top) {
//         priceStack.push(current);
//         labelStack.push(label);
//       } else {
//         while (top > current && priceStack.length != 0) {
//           priceStack.pop();
//           labelStack.pop();
//           if (priceStack.length != 0) {
//             top = priceStack[priceStack.length - 1];
//           }
//         }
//         priceStack.push(current);
//         labelStack.push(label);
//       }
//     }
//     history = [...history, ...labelStack];
//   }

//   history.forEach((el) => {
//     if (arrangeHistory[el] == undefined) {
//       arrangeHistory[el] = 1;
//     } else {
//       arrangeHistory[el] += 1;
//     }
//   });

//   return [...Object.values(arrangeHistory), 0];
// }

// 넌 전혀 스택을 하지않아...

//왜 인덱스가 초고 큰 초에서 작은 초를 빼면 유지한 시간이 된다는걸 알지 못하지...장삣삐...부족하다

// function solution(prices) {
//   const answer = new Array(prices.length).fill(0);
//   const stack = [];
//   for (let i = 0; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     const second = i;
//     const prevPrice = prices[i - 1];
//     if (i == 0) {
//       stack.push(second);
//     } else if (prevPrice <= currentPrice) {
//       stack.push(second);
//     } else {
//       while (prices[stack[stack.length - 1]] > currentPrice) {
//         const popValue = stack.pop();
//         answer[popValue] = second - popValue;
//       }
//       stack.push(second);
//     }
//   }

//   stack.forEach((el) => {
//     answer[el] = prices.length - 1 - el;
//   });

//   return answer;
// }

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [0];
  //while은 if 문의 기능도 하기에 이렇게 줄여쓸수있다.
  for (let i = 1; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }

  stack.forEach((el) => {
    answer[el] = prices.length - 1 - el;
  });

  return answer;
}

//이중 배열 [순서, 가격]

console.log(solution([1, 2, 3, 2, 3])); // 4,3,1,1,0
//[1]
//[1,2]
//[1,2,3]
//[1,2,2]
//[1,2,2,3]
console.log(solution([4, 3, 5, 2, 3])); // 1,2,1,1,0
//[4]
//[3]
//[3,5]
//[2]
//[2,3]
console.log(solution([1, 1, 1, 1, 1])); // 5,3,2,1,1

//효율성에 문제가 있는데...
//모르겠는데...야팔
//아니 결국 pop을 해야하는거 아닌가 아예 로직을 잘못이해했나
//흠 아예 다시 생각해보자
//딴거 풀고 나서 다시생각... 2/13
