let a = [2, 6];
let b = [24, 36];

function getTotalX(a, b) {
  // Write your code here
  let value1 = 0;
  for (let i = a[0]; i <= b[b.length - 1]; i++) {
    if (
      a.every((madni) => i % madni === 0) &&
      b.every((value) => value % i === 0)
    )
      value1++;
  }
  return value1;
}
console.log(getTotalX(a, b));
