let arr = [4, 5, 3, 7, 2];
function quickSort(arr) {
  // Write your code here
  let lesser = [];
  let equal = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) greater.push(arr[i]);
    else if (arr[i] === arr[0]) equal.push(arr[i]);
    else lesser.push(arr[i]);
  }
  let answer = [...lesser, ...equal, ...greater];
  return answer;
}
console.log(quickSort(arr));
