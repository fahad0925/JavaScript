let a = [1, 2, 3, 4, 10];

function minimumDistances(a) {
  // Write your code he
  let answer = [];
  //   for (let i = 0; i < a.length; i++) {
  for (let i = 0; i < a.length; i++) {
    let ab = a.filter((num) => a.indexOf(num) !== a.lastIndexOf(num));
    if (ab[i.length] === a[i.length]) return -1;
    let answer2 = 0;
    let answer1 = a.length - ab.length;
    if (ab.filter((num) => ab.indexOf(num) !== ab.lastIndexOf(num))) answer2++;
    let ans = answer1 + answer2;
    return ans;
  }
  return -1;
}
// }
console.log(minimumDistances(a));
