function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

function solution(n, t, m, p) {
  var answer = "";
  const maxRound = t * m;
  const totalNumsArr = ["0"];
  let currTagetNum = 1;
  while (totalNumsArr.length <= maxRound) {
    const currNumArr = currTagetNum.toString(n).split("");
    while (currNumArr.length) {
      totalNumsArr.push(currNumArr.shift());
    }
    currTagetNum++;
  }

  for (let i = 0; i < t; i++) {
    let curr = totalNumsArr[m * i + p - 1];
    if (isAlphabet(curr)) {
      curr = curr.toUpperCase();
    }
    answer += curr;
  }
  return answer;
}
//t개를 구할려면 t번 돌아야한다는 소리
//그러면 참가하는 사람의 수(m) * t가 되어야함 -> 그러면 while 문으로 조건 만족할떄 까지 배열을 채우자 이게 베스트일듯
// 1,2,3,4...쭉쭉 가면서 n진수 구하고 잘라서 넣고 다넣으면 또다시 n진수 로 바꿔서 넣고
//이중에서 p의 순서 대로 뽑으면 됨 -> n * (0...t-1) +1 인덱스만 뽑기

console.log(solution(2, 4, 2, 1)); //"0111"
console.log(solution(16, 16, 2, 1)); //"02468ACE11111111"
// console.log(solution(16, 16, 2, 2)); //"13579BDF01234567"

//toString 으로 쉽게 N진수 구할수있음
