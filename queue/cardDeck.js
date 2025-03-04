function solution(cards1, cards2, goal) {
  let answer = "Yes";

  goal.forEach((el) => {
    if (cards1[0] == el) {
      cards1.shift();
    } else if (cards2[0] == el) {
      cards2.shift();
    } else {
      answer = "No";
    }
  });

  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //[2,1]

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //[1,3,2]
