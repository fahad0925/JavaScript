let arr = [5, 7, 1, 4, 4, 2];

function findMedian(arr) {
  // Write your code here
  let asi = arr.sort((a, b) => a - b);
  let asim = asi.length / 2 - 1;
  let muneer = Math.ceil(asim);
  let pak = arr[muneer];

  console.log(pak);
}

findMedian(arr);
