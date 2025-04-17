// function solution(n, weak, dist) {
//   var answer = 0;
//   let remainPointPairs = [];
//   dist.reverse().forEach((distEL) => {
//     let donePointPairsArr = [];
//     let maxDone = 0;
//     weak.forEach((point, index) => {
//       let toPoint;
//       let weakPoints;
//       if (point + distEL > n) {
//         toPoint = point + distEL - n;
//         weakPoints = weak.filter(
//           (el) => (0 < el && el <= toPoint) || (point <= el && el <= n)
//         );
//       } else {
//         toPoint = point + distEL;
//         weakPoints = weak.filter((el) => point <= el && el <= toPoint);
//       }

//       donePointPairsArr.push(weakPoints);

//       if (maxDone < weakPoints.length) {
//         maxDone = weakPoints.length;
//       }
//     });
//     console.log(maxDone);
//     donePointPairsArr = donePointPairsArr.filter((el) => el.length == maxDone);
//     donePointPairsArr.map((pair) => {
//       const remain = weak.filter((el) => {
//         return !pair.includes(el);
//       });
//       remainPointPairs.push(remain);
//     });
//     // remainPointPairs

//     console.log(remainPointPairs);
//   });

//   //   return answer;
// }

function permutation(arr, n) {
  if (n == 0) return [[]];
  const result = [];

  arr.forEach((fixed, index) => {
    const rest = [...arr];
    rest.splice(index, 1);

    const perms = permutation(rest, n - 1);

    const combine = perms.map((p) => [fixed, ...p]);

    result.push(...combine);
  });

  return result;
}

function solution(n, weak, dist) {
  const length = weak.length;
  for (let i = 0; i < length; i++) {
    weak.push(weak[i] + n);
  }

  let answer = Infinity;

  for (let start = 0; start < length; start++) {
    for (const friends of permutation(dist, dist.length)) {
      let cnt = 1;
      let pos = start;
      for (let j = 1; j < length; j++) {
        nextPos = start + j;
        const diff = weak[nextPos] - weak[pos];
        if (diff > friends[cnt - 1]) {
          pos = nextPos;
          cnt += 1;
          if (cnt > dist.length) break;
        }
      }
      if (cnt <= dist.length) {
        answer = Math.min(cnt, answer);
      }
    }
  }

  return answer == Infinity ? -1 : answer;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4])); //2;

// console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7])); //1;
