function hashFunc(chars, string) {
  const stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = chars.indexOf(stringArr[i]);
  }

  let num = 0;
  let power = 1;
  for (let i = 0; i < stringArr.length; i++) {
    num = (num + stringArr[i] * power) % 1000000007;
    power = (power * 31) % 1000000007;
  }

  return num;
}

function solution(stringList, queryList) {
  const hashTable = {};
  const chars = [];
  for (let i = 97; i <= 122; i++) {
    chars.push(String.fromCharCode(i));
  }
  stringList.forEach((string) => {
    hashFunc(chars, string);
    hashTable[hashFunc(chars, string)] = string;
  });

  const answer = queryList.map(
    (query) => hashTable[hashFunc(chars, query)] == query
  );

  return answer;
}

console.log(
  solution(
    ["apple", "banana", "cherry"],
    ["cherry", "mellon", "ornage", "apple"]
  )
); //True false false true

// 재밌는 사실 원래는 아래와 같이 해시를 만들었다.

// const num = stringArr.reduce((acc, cur, idx) => {
//   const p = 31 ** idx; // 이 부분이 O(idx) 시간이 걸립니다
//   return acc + cur * p;
// }, 0);

// 근데 문제는 이건 31을 몇번 곱하냐가 들어가기에 31*31*31... 요런식으로 곱해진다.
// 근데 위와같이 바꾸면 이전에곱해둔 제곱수 * 31이 되기에 좀더 시간 복잡도를 줄일 수있다.

// 근데 아직도 왜 해시함수를 상수로 끝낼수있는지 모르겠다.
// 충돌이 없다고 한거니 흠흠... 아무리 길어봤자 1000000007 이라는 범위내에서 처리 되기 때문일까? -> 아마도 그런거 같다 ㅋㅋ
