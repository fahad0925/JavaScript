let key = [3, 1];
let dri = [5, 2, 8];
let b = 10;

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let answer = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      // console.log(i, j);
      if (keyboards[i] + drives[j] <= b) answer.push(keyboards[i] + drives[j]);
    }
  }
  let highest = Math.max(...answer);
  if (highest > 0) return highest;
  else return -1;
  // return "-1";
}
console.log(getMoneySpent(key, dri, b));

//   console.log(first >= b);
