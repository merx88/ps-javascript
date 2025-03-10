function solution(record) {
  let simpleAnswer = [];
  let answer = [];
  const chatRoomList = {};
  record.forEach((element) => {
    const recordELArr = element.split(" ");
    switch (recordELArr[0]) {
      case "Enter":
        chatRoomList[recordELArr[1]] = recordELArr[2];
        simpleAnswer.push([recordELArr[1], 1]);
        break;

      case "Leave":
        simpleAnswer.push([recordELArr[1], 0]);
        break;

      case "Change":
        chatRoomList[recordELArr[1]] = recordELArr[2];
        break;
    }
  });
  simpleAnswer.forEach((element) => {
    if (element[1]) {
      answer.push(`${chatRoomList[element[0]]}님이 들어왔습니다.`);
    } else {
      answer.push(`${chatRoomList[element[0]]}님이 나갔습니다.`);
    }
  });

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
