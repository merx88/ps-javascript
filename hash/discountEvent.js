function solution(want, number, discount) {
  let wantList = {}; //왜 let...?
  want.forEach((element, idx) => {
    wantList[element] = number[idx];
  });
  let i = 0;
  let answer = 0;
  while (i + 9 <= discount.length - 1) {
    let flag = true;
    let j = 0;
    const copyWantList = { ...wantList };
    for (i + j; i + j < i + 10; j++) {
      if (wantList[discount[i + j]] != undefined) {
        wantList[discount[i + j]] = wantList[discount[i + j]] - 1;
      }
    }
    Object.values(wantList).forEach((el) => {
      if (el > 0) flag = false;
    });
    if (flag) {
      answer += 1;
    }
    wantList = { ...copyWantList };

    i += 1;
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
//"leo"
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
