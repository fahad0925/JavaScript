let key = [5, 2, 8];
let dri = [3, 1];
let b = 10;

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let answer = [];
  //   for (let i = 0; i < keyboards.length; i++) {
  if (keyboards[0] + drives[0] <= b) answer.push(keyboards[0] + drives[0]);
  if (keyboards[1] + drives[0] <= b) answer.push(keyboards[1] + drives[0]);
  if (keyboards[2] + drives[0] <= b) answer.push(keyboards[2] + drives[0]);
  if (keyboards[0] + drives[1] <= b) answer.push(keyboards[0] + drives[1]);
  if (keyboards[1] + drives[1] <= b) answer.push(keyboards[1] + drives[1]);
  if (keyboards[2] + drives[1] <= b) answer.push(keyboards[2] + drives[1]);
  if (keyboards[0] + drives[2] <= b) answer.push(keyboards[0] + drives[2]);
  if (keyboards[1] + drives[2] <= b) answer.push(keyboards[1] + drives[2]);
  if (keyboards[2] + drives[2] <= b) answer.push(keyboards[2] + drives[2]);

  let answer1 = Math.max(answer);
  console.log(answer1);
  //   if (keyboards[2] + drives[1] <= b) return keyboards[2] + drives[1];
  //   else return "-1";
  // console.log(keyboards[i] + drives[1]);
}
// }
console.log(getMoneySpent(key, dri, b));

//   console.log(first >= b);
