function solution(arr, target) {
  let answer = false;
  const obj = {};
  for (n of arr) {
    if (target - n != n) {
      obj[target - n] = n;
    }
  }
  for (n of arr) {
    if (obj[n]) answer = true;
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 8], 6)); //True

console.log(solution([2, 3, 5, 9], 10)); //false
