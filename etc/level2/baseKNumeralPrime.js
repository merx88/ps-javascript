function isPrime(num) {
  //2 미만이면 소수 아님 ex 0,1
  if (num < 2) return false;
  // 나머지가 0이 되면 나눠지는 수가 있는 거라서 소수안됨
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let temp = n;
  let baseKNumArr = [];

  while (temp) {
    baseKNumArr.unshift(temp % k);
    temp = Math.floor(temp / k);
  }
  console.log(baseKNumArr);
  let currNumArr = [];

  baseKNumArr.forEach((el, index) => {
    if (el) {
      currNumArr.push(el);
    } else {
      const currNum = Number(currNumArr.join(""));
      if (isPrime(currNum)) {
        answer += 1;
      }
      currNumArr = [];
    }
  });

  //마지막에 남은것도 체크
  if (isPrime(Number(currNumArr.join("")))) {
    answer += 1;
  }
  return answer;
}

// console.log(solution(437674, 3));

console.log(solution(110011, 10));

//우선 10진법을 원하는 진법으로 바꾸기
//우선 특정한 자료구조에 쌓는다.
//0을 만나면 지금까지 쌓은게 소수인지 확인하고 ans+1을 한다.
//0 다음이 0이 아닌 숫자면 다시 쌓기 시작한다.
//ㄴ 0이 만약 없고 다음에도 없다면 지금까지 쌓은게 소수인지 확인하고 ans+1을 한다.

//(!num % i) 해당 식과 (num % i === 0) 해당식은 같은 식이 아니다 ㅅㅂ 이렇게 해석된다 (!num) % i
