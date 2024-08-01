// let name = 'mosh';
// console.log(name);

// let interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let selectedColors = ['red', 'blue'];
// selectedColors[2]= 1;
// console.log(selectedColors.length)

// function greet(name, lastname){
//  console.log('hello ' + name  + ' ' + lastname)
//  }

//  greet('fahad', 'hussain');

//  console.log(1 === 1)
//  console.log(2*2)

//  let points =110;
//  let type = points > 100 ? 'gold' : 'silver'

//  console.log(type)

//  let highincone = true;
//  let goodcreditscore = true;
//  let eligibleforloan = (highincone || goodcreditscore);
//  console.log('eligible', eligibleforloan)

// let a = "5";
// let b = 5;

// if (a === b) console.log("yes", "strict equality checker");
// else console.log("no", "strict equality checker");

// if (a == b) console.log("yes", "equality checker");
// else console.log("no", "equality checker");

// let usercolor = "blue";
// let defaultcolor = undefined;
// let currentcolor = usercolor && defaultcolor;

// console.log(currentcolor);

//  if else .

// let number = 25;

// if number divided by 3 is equal to 1 print "THREE"
// if number divided by 5 is equal to 1 print "FIVE"
// print "not divisible"

// if (number / 3 === 1) console.log("THREE");
// else if (number / 3 === 5) console.log("five");
// else console.log("not divisible");

// let role = "guest";

// if (role === "guest") console.log("guest user");
// else if (role === "moderate") console.log("moderate user");
// else console.log("undefined");

// for (let i = 1; i < 10; i++) console.log(i);

// let object = {
//   name: "fahad",
//   class: "XI",
//   fees: 10000,
//   address: "Askari 1",
//   hobby: "exercise",
// };

// for (let property in object) {
//   console.log(property, ":", object[property]);
// // }
// let a = 5;
// let b = 2;

// function max(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// console.log(max(a, b));

// let height = 10;
// let width = 12;

// function landscape(heigth, width) {
//   if (height > width) return height;
//   else return width;
// }
// console.log(landscape(height, width));

// showNumber(limit);

// let limit = 20;

// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// let aflatoon = [null, 1, 0];
// console.log(countTruthy(aflatoon));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (!value) count++;
//   return count;

// }

// const movie = {
//   name: "asimmuneer",
//   director: "fahadmuneer",
//   year: 2020,
// };

// showproperty(movie);

// function showproperty(Obj) {
//   for (let key in Obj) {
//     if (typeof Obj[key] === "string") console.log(key, Obj[key]);
//   }
// }

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

//   return sum;
// }

// asimmuneer(9);

// function asimmuneer(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }

// const circle = {
//   name: asim,
//   age: 16,
//   adress: "xyz",
//   school: xyz,
//   draw: function () {
//     console.log(draw);
//   },
// };

// circle.draw();

// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// let hour = 13;

// if (hour >= 6 && hour <= 12) {
//   console.log("good morning");
// } else if (hour >= 12 && hour <= ) {
//   console.log("good afternoon");
// } else console.log("good evening");

// let role = "moderator";

// if (role === "guest") console.log("guest user");
// else if (role === "moderator") console.log("moderator user");
// else console.log("default user");

// switch (role) {
//   case "guest":
//     console.log("guest user");
//     break;

//   case "moderator":
//     console.log("moderator user");
//     break;

//   default:
//     console.log("unknown user");
// }

// let number = max(1, 2);
// console.log(number);

// function max(number1, number2) {
//   if (number1 > number2) return number1;
//   else return number2;
// }

// let number = island(4, 5);
// let length = 10;
// let width = 12;

// function island(length, width) {
//   if (width > length) return true;
//   else return false;
// }
// console.log(island(4, 5));

// const output = fizzbuzz(1);
// console.log(output);

// function fizzbuzz(input) {
//   if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
//   if (input % 3 === 0) return "fizz";
//   else if (input % 5 === 0) return "buzz";
//   return input;
// }

// let lol = checkes(75);
// console.log(lol);

// function checkes(speed) {
//   if (speed < 70) return "ok";
//   if (speed - 70) return "point: 1";
//   if (speed === 80) return "point: 2";
//   if (speed > 100) return "license suspended";
// }

// shownumber(10);

// function shownumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// const array = [1, 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// const movie = {
//   title: "a",
//   releaseyear: 2000,
//   director: "b",
// };

// showproperties(movie);

// function showproperties(obj) {
//   for (let key in obj)
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
// }

// console.log(sum(15));

// function sum(limit) {
//   let sum = 0;

//   for (i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0);
//   sum += i;

//   return sum;
// }

// let marks = [20, 30, 40];

// function total(array) {
//   let total = array[0];
//   for (let i = 1; i < array.length; i++) {
//     total += array[i];
//   }
//   console.log(total);
// }

// total(marks);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) {
//       pattern += "*";
//     }
//     console.log(pattern);
//   }
// }

// showStars(4)

// function circle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log(draw);
//     },
//   };
// }

// let circle1 = circle(4);
// console.log(circle1);

// let circle3 = circle(5);
// console.log(circle3);

// let circle6 = circle(9);
// console.log(circle6);

// let circle8 = circle(4);
// console.log(circle8);

// let circle11 = circle(5);
// console.log(circle11);

// let circle34 = circle(9);
// console.log(circle34);

// let number = 10;

// function increase(number) {
//   number++;
//   return number;
// }

// console.log(increase(number));

// const address = {
//   street: 9,
//   city: "karachi",
//   zipcode: 101,
// };

// function showAddress(adress) {
//   for (let key in adress) console.log(key, address[key]);
// }

// showAddress(address);

// let address = new Address("a", "b");

// console.log(address);

// function creataddress(city, zipcode) {
//   return {
//     city,
//     zipcode,
//   };
// }

// function Address(zipcode, city) {
//   this.zipcode = zipcode;
//   this.city = city;
// }

// let Address1 = new Address("a", "b");
// let Address2 = new Address("a", "b");

// function Address(street, city) {
//   this.street === street, this.city === city;
// }

// function areEqual(Address1, Address2) {
//   return Address1.street === Address2.street && Address1.city === Address2.city;
// }

// console.log(areEqual(Address1, Address2));

// let post = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 10,
//   comments: [{ body: "a", author: "b" }],
//   isLive: true,
// };

// console.log(post);

// let array = [
//   { label: "$", tooltip: "inexpensive", minperperson: 0, maxperperson: 10 },
//   { label: "$", tooltip: "inexpensive", minperperson: 0, maxperperson: 10 },
//   { label: "$", tooltip: "inexpensive", minperperson: 0, maxperperson: 10 },
// ];

// console.log(array);

// const jsCourse = courses.find(function (course) {
//   return course.name === "js";
// });

// console.log(jsCourse);

// const htmlCourse = courses.find(function (course) {
//   return course.name === "html";
// });

// console.log(htmlCourse);

// const cssCourse = courses.find(function (course) {
//   return course.name === "css";
// });

// console.log(cssCourse);

// const courses = [
//   { id: 1, name: "html" },
//   { id: 2, name: "css" },
//   { id: 3, name: "js" },
// ];

// const dabbucourse = courses.find((courses) => courses.id === 2);
// console.log(dabbucourse);

// const reactcourse = courses.find(function (course) {
//   return course.id === 3;
// });

// console.log(reactcourse);

// let array1 = [58, 68, 78, 88, 98];
// let sliced = array1.slice(1, 3);
// console.log("array1", array1);
// console.log("array1 sliced", sliced);

// console.log("===========================================");

// let array2 = [58, 68, 78, 88, 98];
// let spliced = array2.splice(1, 2);
// console.log("array2", array2);
// console.log("array2 spliced", spliced);

// let kuch = [1, 2, 3];

// let opop = kuch.splice(3);
// console.log(opop);

// const course = [
//   {
//     id: "a",
//     name: "b",
//   },

//   {
//     id: "d",
//     name: "c",
//   },
// ];

// const co = course.find((co) => (course.name = "a"));

// console.log(co);

// let number = [1, 2, 3, 4];

// const joined = number.join("-");
// console.log(joined);

// let courses = [
//   { id: 1, name: "node.js" },
//   { id: 2, name: "Javascript" },
// ];

// let changes = courses.sort(function (a, b) {
//   let nameA = a.name.toLowerCase();
//   let nameB = b.name.toLowerCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(changes);

// const exer12 = [1, 2, 3, -1];

// const atleast = exer12.some(function (value) {
//   return value >= 0;
// });

// console.log(atleast);

// const exer12 = [1, 2, 3, -1];

// const atleast = exer12
//   .filter((value) => value >= 0)
//   .map((value) => ({ values: value }));

// console.log(atleast);

// const exer12 = [1, 2, 3, -1];

// const sum = exer12.reduce(
//   (faha, fahas) => faha + fahas);

// console.log(sum);

// const number = arrayFromRange(-100, -10);

// console.log(number);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++);
//   output.push(i);
//   return output;
// }

// const number = arrayFromRange(10, 6);

// console.log(number);

// function arrayFromRange(max, min) {
//   const output = [];
//   for (let i = max; i >= min; i--) output.push(i);
//   return output;
// }

// evenOddNumber(10, 15);

// function evenOddNumber(num) {
//   if (num % 2 === 0) console.log(num, "even");
//   else console.log(num, "odd");
// }

// evenOdd(1, 10000);

// function evenOdd(min, max) {
//   let even = [];
//   let odd = [];
//   for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) even.push(i);
//     else odd.push(i);
//   }

//   console.log("even", even);
//   console.log("odd", odd);
// }

// const number = [1, 2, 3, 4];

// function includes(array, searchElement) {
//   for (let key of number) if (key === searchElement) return true;
//   return false;
// }

// console.log(includes(number, 2));

// const numbers = [1, 2, 3, 4, 5];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array)
//     if (!excluded.includes(element)) output.push(element);
//   return output;
// }

// let array = [1, 2, 3, 4];
// let x = array[1];

// console.log(x);

// let numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, -2);

// function move(array, index, offset) {
//   let position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.error("invalid offset. ");
//     return;
//   }

//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// console.log(output);

// const numbers = [1, 2, 3, 4,];
// const count = countOccurance(numbers, 1);

// console.log(count);

// function countOccurance(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count++;
//   return count;
// }

// let odd = showNumber(10);
// console.log(odd);

// function showNumber(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (limit % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// min = 10;
// max = 20;
// console.log(minmax(min, max));

// function minmax(min, max) {
//   if (min > max) return min;
//   else return max;
// }

// let output = fizzbuzz(15);

// console.log(output);

// function fizzbuzz(input) {
//   if (input % 3 === 0 && input % 5 === 0) return "fizzbuzz";
//   if (input % 3 === 0) return "fizz";
//   if (input % 5 === 0) return "buzz";
// }

// checkspeed(72);

// function checkspeed(limit) {
//   let normalspeed = 74;
//   if (limit <= normalspeed) console.log("Ok");
//   else {
//     let points = Math.floor((limit - normalspeed) / 5);

//     if (points >= 12) console.log("license suspanded");
//     else console.log("points", points);
//   }
// }

// shownumber(100);

// function shownumber(limit) {
//   for (let i = 0; i <= limit; i++)
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
// }

// let array = [1, 2, 3, 4, null, 0, undefined];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// let movie = {
//   name: "a",
//   age: 15,
//   office: "2",
// };

// showproperties(movie);

// function showproperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// let marks = [80, 30];

// console.log(calculated(marks));

// function calculated(marks) {
//   let sum = 0;
//   for (let mark of marks) sum += mark;
//   let average = sum / marks.length;

//   if (average < 60) return "F";
//   if (average < 70) return "E";
//   if (average < 75) return "D";
//   if (average < 80) return "C";
//   if (average < 85) return "B";
//   if (average < 90) return "A";
// }

// showstar(10);

// function showstar(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "* ";
//     console.log(pattern);
//   }
// }

// function dabbu(asim) {}

// let dabbu = function (asim) {};

// let dabbu = (asim) => {};

// function createcircle(number) {
//   return {
//     name: number,
//     uemr: "againdabbu",
//   };
// }

// let circle1 = createcircle(1000000000000000000002 );
// console.log(circle1);

// function sum() {
//   let totle = 0;
//   for (let value of arguments) totle += value;
//   return totle;
// }

// console.log(sum(1, 2, 34, 4));

function sum(discount, ...args) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 10, 20, 30));
