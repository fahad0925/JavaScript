let numbers = [73, 87, 38, 44, 49, 52, 51];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 37) continue;
    else if ((grades[i] + 2) % 5 === 0) grades[i] += 2;
    else if ((grades[i] + 1) % 5 === 0) grades[i] += 1;
  }
  return grades;
}

console.log(gradingStudents(numbers));

// gradingStudents(numbers);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }
//
// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }
