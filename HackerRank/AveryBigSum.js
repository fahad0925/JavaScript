let range = [5, 1000000001, 1000000002, 1000000003];

function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((a, b) => a + b);
}
console.log(aVeryBigSum(range));
