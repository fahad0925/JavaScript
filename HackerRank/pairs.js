let k = 1;
let arr = [1, 2, 3, 4];

function pairs(k, arr) {
  // Write your code here
  let pairs = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === k) pairs++;
  }
  return pairs;
}
console.log(pairs(k, arr));
