// function solution(n, build_frame) {
//   let result = [];

//   const hasStructure = (x, y, type) =>
//     result.some(([a, b, c]) => a === x && b === y && c === type);

//   for (const target of build_frame) {
//     const [x, y, type, isBuild] = target;

//     if (type) {
//       //1이면 보
//       if (isBuild) {
//         //0. 중복
//         if (hasStructure(x, y, type)) continue;
//         //1이면 설치
//         //가능 경우 나열
//         //1. 양쪽 끝에 기둥이 하나라도 있는경우
//         if (hasStructure(x, y - 1, 0) || hasStructure(x + 1, y - 1, 0)) {
//           result.push([x, y, type]);
//           continue;
//         }
//         //2. 두쪽끝 모두에 보가 있는 경우
//         if (hasStructure(x - 1, y, 1) && hasStructure(x + 1, y, 1)) {
//           result.push([x, y, type]);
//           continue;
//         }
//       } else {
//         //0이면 삭제
//         //1. 좌측 보를 지지하는 기둥 한개 우측보를 지지하는 기둥 한개만 있으면 해당 보는 삭제가능
//         if (hasStructure(x, y - 1, 0) || hasStructure(x - 1, y - 1, 0)) {
//           if (hasStructure(x + 1, y - 1, 0) || hasStructure(x + 2, y - 1, 0)) {
//             result = result.filter(
//               ([a, b, c]) => !(a === x && b === y && c === type)
//             );
//             continue;
//           }
//           continue;
//         }
//         //2. 보위에 기둥이 있는경우
//         //2-1.오른쪽 위에 있는 경우
//         if (hasStructure(x + 1, y, 0)) {
//           if (hasStructure(x + 1, y, 1) || hasStructure(x + 1, y - 1, 0)) {
//             result = result.filter(
//               ([a, b, c]) => !(a === x && b === y && c === type)
//             );
//           }
//         }
//         //2-2.왼쪽 위에 있는 경우
//         if (hasStructure(x - 1, y, 0)) {
//           if (hasStructure(x - 2, y, 1) || hasStructure(x - 1, y - 1, 0)) {
//             result = result.filter(
//               ([a, b, c]) => !(a === x && b === y && c === type)
//             );
//           }
//         }
//       }
//     } else {
//       //0이면 기둥
//       if (isBuild) {
//         //0. 중복
//         if (hasStructure(x, y, type)) continue;
//         //1이면 설치
//         //되는 경우 나열
//         //<설치는 조건만 맞추면 그냥 설치 가능하다 내생각엔>
//         // 1. 지면 위인 경우 설치 가능
//         if (x <= n && x >= 0) {
//           if (y == 0) {
//             result.push([x, y, type]);
//             continue;
//           }
//         }
//         // 2. 기둥 위인 경우 무조건 설치 가능 [x,y-1,0] 이 지금 까지 담은거에 있으면 아래 기둥이 있는거임

//         if (hasStructure(x, y - 1, 0)) {
//           result.push([x, y, type]);
//           continue;
//         }
//         //3. 보끝인 경우 [x-1,y,1], [x,y,1] 이게 있으면 설치 쌉가능

//         if (hasStructure(x - 1, y, 1) || hasStructure(x, y, 1)) {
//           result.push([x, y, type]);
//           continue;
//         }
//       } else {
//         //0이면 삭제
//         //1. 위의 보 상태를 확인

//         let isLeftSafe = false;
//         let isRightSafe = false;
//         let isLeftExsist = false;
//         let isRightExsist = false;
//         //1-1. 왼쪽 보 확인
//         if (hasStructure(x - 1, y + 1, 1)) {
//           //왼쪽 보가 기둥이 있으면 세이프
//           if (hasStructure(x - 1, y, 0)) {
//             isLeftSafe = true;
//           } else if (
//             // 왼쪽보 좌우에 보가 있으면 세이프
//             hasStructure(x - 2, y + 1, 1) &&
//             hasStructure(x, y + 1, 1)
//           ) {
//             isLeftSafe = true;
//           } else {
//             isLeftSafe = false;
//           }
//           isLeftExsist = true;
//         } else {
//           isLeftSafe = true;
//         }
//         //1-2. 오른쪽 보 확인
//         if (hasStructure(x, y + 1, 1)) {
//           if (hasStructure(x + 1, y, 0)) {
//             isRightSafe = true;
//           } else if (
//             // 오른쪽보 좌우에 보가 있으면 세이프
//             hasStructure(x - 1, y + 1, 1) &&
//             hasStructure(x + 1, y + 1, 1)
//           ) {
//             isRightSafe = true;
//           } else {
//             isRightSafe = false;
//           }
//           isRightExsist = true;
//         } else {
//           isRightSafe = true;
//         }
//         // 둘다 세이프 하면 즉 한쪽끝에 기둥이 있으면 ㄱㅊ거나 두보에 양쪽 보가 존재하면...

//         if (isRightSafe && isLeftSafe) {
//           //하지만 보가 둘다 없는 경우도 세이프한데 이건 위에 기둥만 있을 경우는 제거 못함

//           if (!isRightExsist && !isLeftExsist) {
//             if (hasStructure(x, y + 1, 0)) continue;
//           }
//           result = result.filter(
//             ([a, b, c]) => !(a === x && b === y && c === type)
//           );
//         }
//       }
//     }
//   }
//   //정렬
//   return result.sort((a, b) => {
//     if (a[0] !== b[0]) return a[0] - b[0];
//     if (a[1] !== b[1]) return a[1] - b[1];
//     return a[2] - b[2];
//   });
// }

// console.log(
//   solution(5, [
//     [1, 0, 0, 1],
//     [1, 1, 1, 1],
//     [2, 1, 0, 1],
//     [2, 2, 1, 1],
//     [5, 0, 0, 1],
//     [5, 1, 0, 1],
//     [4, 2, 1, 1],
//     [3, 2, 1, 1],
//   ])
// ); //2;

// console.log(
//   solution(5, [
//     [0, 0, 0, 1],
//     [2, 0, 0, 1],
//     [4, 0, 0, 1],
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [2, 1, 1, 1],
//     [3, 1, 1, 1],
//     [2, 0, 0, 0],
//     [1, 1, 1, 0],
//     [2, 2, 0, 1],
//   ])
// ); // [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]];

// 좌표
//0 : 기둥
//1 : 보
//0: 삭제
//1: 설치

// 바닥 보 x

//조건에 맞지 않는걸 무시하는게 중요한 문제

//보는 현재 좌표에서 x +1
//기둥은 현재 좌표에서 y+1

//첫번째 분기
// 기둥? 보?

//두번째 분기
//설치? 삭제?

// 뭘담을까
// 하나는 기둥과 보를 담고
// 하나는 끝점만 받으면?

//기둥 설치
//우선 x가 0이면 무조건 설치 가능-> 물론 겹치면 무시
// 끝점에 해당 좌표가 있다면 무조건 설치

//기둥 삭제
//해당 점의 끝에 뭐가 있는지 체크
//없다면 그냥 삭제
//있다면
//그게 보라면
//기둥 끝점에서 x좌쵸 -1한 보가 있는지 확인
// 기둥끝점에서 x +1 한 거에 기둥이 있는지 확인

//그게 기둥이라면?
//+1 -1한거에 보가 잇는지 확인

// 보 설치
//x가 0이면 무조건 설치 불가능
//기둥이 있다면 설치가능
//보라면 끝에 기둥이 있거나 보가 있어야함

//보삭제
//양쪽 끝이 아래 기둥이라면 ㄱㅊ
//다음 보와 이전보가 기둥에 연결 되어있지 않다면 무너짐

//죄표 벗어나면 없애야함

// 아마도 정석 풀이
//설치는 설치를 해놓고 전부 검사
//삭제는 삭제를 해놓고 전부 검사

//즉, 구조물이 주어진 설치조건에 부합하여 잘 붙어있는지 확인하는게 관건임
function solution(n, build_frame) {
  let result = [];

  function hasStructure(x, y, type) {
    return result.some(([a, b, c]) => a === x && b === y && c === type);
  }

  function isValid() {
    for (const [x, y, type] of result) {
      if (type) {
        //현재 결과로 집어넣은 보가 잘붙어있는지 확인;
        if (
          hasStructure(x, y - 1, 0) || //왼쪽 끝 기둥 확인
          hasStructure(x + 1, y - 1, 0) || //오른쪽 끝 기둥 확인
          (hasStructure(x - 1, y, 1) && hasStructure(x + 1, y, 1)) // 좌우 보 확인
        ) {
          continue;
        }
        return false;
      } else {
        if (
          y === 0 || //바닥에 있는지 확인
          hasStructure(x, y - 1, 0) || // 아래 기둥있는 지 확인
          hasStructure(x - 1, y, 1) || // 좌측 보가 지지하는지 확인
          hasStructure(x, y, 1) // 우측 보가 지지하는지 확인
        ) {
          continue;
        }
        return false;
      }
    }
    return true;
  }

  for (const [x, y, type, isBuild] of build_frame) {
    if (isBuild) {
      //설치
      result.push([x, y, type]);
      if (!isValid()) {
        result.pop();
      }
    } else {
      //삭제
      const index = result.findIndex(
        ([a, b, c]) => a === x && b === y && c === type
      );
      if (index > -1) {
        const temp = [...result];
        temp.splice(index, 1);
        const prev = result;
        result = temp;

        if (!isValid()) {
          result = prev;
        }
      }
    }
  }

  return result.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });
}

console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ])
); // [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]];
