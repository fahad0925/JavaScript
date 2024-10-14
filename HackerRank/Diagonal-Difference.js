let arr = [
  [1, 2, 3],
  [2, 5, 3],
  [3, 4, 2],
];

function diagonalDifference(arr) {
  // Write your code here
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
    // b += arr[i][arr.length - 1 - i];
    console.log(arr[i][arr.length - 1 - i]);
  }
  // let ans = Math.abs(a - b);
  // return ans;
}
console.log(diagonalDifference(arr));
