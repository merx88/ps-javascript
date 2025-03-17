function solution(dirs) {
  const currentPoint = [0, 0];
  const allPath = [];
  for (n of dirs) {
    const prevPoint = [...currentPoint];
    switch (n) {
      case "U":
        if (currentPoint[1] > 4) break;
        currentPoint[1] += 1;
        break;
      case "D":
        if (currentPoint[1] < -4) break;
        currentPoint[1] -= 1;
        break;
      case "L":
        if (currentPoint[0] < -4) break;
        currentPoint[0] -= 1;
        break;
      case "R":
        if (currentPoint[0] > 4) break;
        currentPoint[0] += 1;
        break;

      default:
        break;
    }

    if (
      !allPath.includes(`${prevPoint}, ${currentPoint}`) &&
      !allPath.includes(`${currentPoint}, ${prevPoint}`) &&
      `${currentPoint}` != `${prevPoint}`
    ) {
      allPath.push(`${prevPoint}, ${currentPoint}`);
    }
  }
  return allPath.length;
}

console.log(solution("ULURRDLLU")); //7
console.log(solution("LULLLLLLU")); //7
console.log(solution("LR"));

//배열끼리는 절대 비교 불가!!!!!!!!!!!!!!!!! 배열끼리의 비교는 당연히 메모리끼리의 비교임 까먹지 말자
