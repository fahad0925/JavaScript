let a = [100000000, 23, 4];

function insertionSort(ar) {
  for (let i = 1; i < ar.length; i++) {
    let ar;
    let value = ar[i];
    let j = i - 1;
    while (j > 0 && ar[j] > value) {
      ar[j + 1] = ar[j];
      j = j - 1;
    }
    ar[j + 1] = value;
  }
  console.log(ar);
}

//get input for ar
insertionSort(a);
