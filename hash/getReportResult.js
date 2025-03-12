function solution(id_list, report, k) {
  let answer = [];
  const reportCountList = {};
  const result = {};
  const parsedReport = [...new Set(report)];

  parsedReport.forEach((el) => {
    const splitedReport = el.split(" ");
    if (reportCountList[splitedReport[1]] != undefined) {
      reportCountList[splitedReport[1]]++;
    } else {
      reportCountList[splitedReport[1]] = 1;
    }
  });

  const bannedUser = [];
  Object.keys(reportCountList).forEach((el) => {
    if (reportCountList[el] >= k) bannedUser.push(el);
  });

  parsedReport.forEach((el) => {
    const splitedReport = el.split(" ");
    if (result[splitedReport[0]] == undefined) {
      result[splitedReport[0]] = 0;
    }
    if (bannedUser.includes(splitedReport[1])) {
      result[splitedReport[0]]++;
    }
  });

  id_list.forEach((el) => {
    if (result[el] == undefined) {
      answer.push(0);
    } else {
      answer.push(result[el]);
    }
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  ) //[2,1,1,0]
);
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); //[0,0]
