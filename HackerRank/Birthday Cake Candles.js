let array = [4, 4, 1, 2];

function birthdayCakeCandles(candles) {
  // Write your code here

  let count = 0;
  let max = Math.max(...candles);
  for (let i = 0; i < candles.length; i++) {
    if (max === candles[i]) count++;
  }
  return count;
}

console.log(birthdayCakeCandles(array));
