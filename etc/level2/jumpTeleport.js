function solution(n) {
  let ans = 0;

  while (n != 1) {
    if (n % 2) {
      n -= 1;
      ans += 1;
      n = n / 2;
    } else {
      n = n / 2;
    }
  }

  return ans + 1;
}

console.log(solution(5)); //2;

console.log(solution(6)); //2

console.log(solution(5000)); //5
