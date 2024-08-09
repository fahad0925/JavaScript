let array = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let none = 0;
  // Write your code here
  for (let number of array) if (number > 0) positive++;
  if ((number = 0)) none++;
  if (number < 0) negative++;
  console.log(positive, negative, none);
}
plusMinus(array);
