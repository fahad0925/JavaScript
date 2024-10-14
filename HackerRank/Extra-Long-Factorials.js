// function extraLongFactorials(n) {
//   // Write your code here
//   let answer = n;
//   for (let i = n - 1; i > 0; i--) {
//     answer = BigInt(answer) * BigInt(i);
//   }
//   let string = answer.toString();
//   console.log(string);

//   // return BigInt(answer);
// }

// extraLongFactorials(25);

let arr = [[1, 2, 3][(4, 5, 6)][(9, 8, 9)]];

function diagonalDifference(arr) {
  // Write your code here
  let a = 0;
  for (let i = 0; i <= arr.length; i++) {
    a += i;
  }
  let b = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    b += i;
  }
  return a, b;
}
console.log(diagonalDifference(arr));
