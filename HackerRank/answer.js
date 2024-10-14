// let arr = [1, 2, 3, 4, 5];

// function miniMaxSum(arr) {
//   // Write your code here
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let total = arr.reduce((a, b) => a + b);
//   let minAns = total - max;
//   let maxAns = total - min;
//   console.log(minAns, maxAns);

//   //   for (let i = 0; i < arr.length; i++) {
//   //   }
// }
// miniMaxSum(arr);

function sum(width, height) {
  if (width > height) return "true";
  else return "false";
}
console.log(sum(400, 200));
