let array = [1, 2, 3];

function simpleArraySum(ar) {
  // Write your code here
  let output = 0;
  for (let value of ar) output += value;
  return output;
}

console.log(simpleArraySum(array));
