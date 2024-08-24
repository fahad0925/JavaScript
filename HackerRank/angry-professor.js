let k = [5, 3];
let arrivaltime = [1, -1, 0, 1, 1];

function angryProfessor(k, a) {
  // Write your code here
  let ontime = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) ontime++;
    if (ontime >= k[i]) return "NO";
  }
  return "YES";
}
console.log(angryProfessor(k, arrivaltime));

// if (a[i] > 0) late++;
//   let late = 0;
