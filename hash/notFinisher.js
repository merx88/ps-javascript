// function solution(participant, completion) {
//   const finisher = participant.filter((el) => {
//     const res = !completion.includes(el);
//     if (!res) {
//       const idx = completion.indexOf(el);

//       completion.splice(idx, 1);
//     }
//     return res;
//   });

//   return finisher.join();
// }

function solution(participant, completion) {
  const checkList = {};
  participant.forEach((element) => {
    if (checkList[element] == undefined) {
      checkList[element] = -1;
    } else {
      checkList[element] = checkList[element] - 1;
    }
  });

  completion.forEach((element) => {
    checkList[element] = checkList[element] + 1;
  });
  console.log(checkList);
  return Object.keys(checkList).find((key) => checkList[key] < 0);
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
//"leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
//"vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
//"mislav"

console.log(
  solution(
    ["mislav", "stanko", "mislav", "ana", "mislav", "mislav"],
    ["stanko", "ana", "mislav", "mislav"]
  )
);
