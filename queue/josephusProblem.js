function solution(n, k) {
  let tableMembers = new Array(n).fill(0).map((el, idx) => {
    return el + idx + 1;
  });
  while (tableMembers.length > 1) {
    let popedValues;
    if (tableMembers.length < k) {
      popedValues = tableMembers.splice(0, k % tableMembers.length);
    } else {
      popedValues = tableMembers.splice(0, k - 1);
    }

    tableMembers.shift();

    tableMembers = [...tableMembers, ...popedValues];
  }
  return tableMembers.join();
}

console.log(solution(5, 2));

console.log(solution(10, 6));
