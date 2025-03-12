function solution(genres, plays) {
  let answer = [];

  const genresPlays = {};

  const totalPlays = {};

  genres.forEach((genre, idx) => {
    if (genresPlays[genre] != undefined) {
      genresPlays[genre].push([plays[idx], idx]);
    } else {
      genresPlays[genre] = [];
      genresPlays[genre].push([plays[idx], idx]);
    }
  });

  Object.keys(genresPlays).forEach((genre) => {
    genresPlays[genre].sort((a, b) => b[0] - a[0]);
  });

  genres.forEach((genre, idx) => {
    if (totalPlays[genre] != undefined) {
      totalPlays[genre] += plays[idx];
    } else {
      totalPlays[genre] = plays[idx];
    }
  }); //n

  const sortedGeneres = Object.keys(totalPlays)
    .map((genre) => {
      return [genre, totalPlays[genre]];
    })
    .sort((a, b) => b[1] - a[1]);

  sortedGeneres.forEach((genre) => {
    const target = genresPlays[genre[0]];
    answer.push(target[0][1]);
    if (target[1]) {
      answer.push(target[1][1]);
    }
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  ) //[4,1,3,0]
);
