let not = 132;

function findDigits(n) {
  // Write your code here
  let answer = 0;
  let array = n.toString().split("");
  for (let i = 0; i < array.length; i++) {
    if (n % array[i] === 0) answer++;
  }
  return answer;
}
findDigits(not);
