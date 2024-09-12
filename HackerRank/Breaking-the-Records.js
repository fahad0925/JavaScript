let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function breakingRecords(scores) {
  // Write your code here
  let answer = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > scores[i]) answer++;
  }
  console.log(answer);
}
breakingRecords(scores);
