let array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let none = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    if (arr[i] < 0) negative++;
    if (arr[i] === 0) none++;
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((none / arr.length).toFixed(6));
}

plusMinus(array);
