let n = 10;
let ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

function sockMerchant(n, ar) {
  // Write your code here
  let count1 = 0;
  let count = ar.filter((num) => ar.indexOf(num) !== ar.lastIndexOf(num));
  for (let value in count) {
    count1 += Math.floor(count[value] / 2);
  }

  return count1;
}

console.log(sockMerchant(n, ar));
