function extraLongFactorials(n) {
  // Write your code here
  let answer = n;
  for (let i = n - 1; i > 0; i--) {
    answer *= i;
  }
  return answer.tostring();
}
console.log(extraLongFactorials(45));
