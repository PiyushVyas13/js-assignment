// Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.

function max(a, b) {
  return a > b ? a : b;
}
let a = 5,
  b = 2;
console.log(
  "The max value from " + a + " and " + b + " is " + max(a, b)
);

// Write a program to accept a number from user input and print whether the number is even or odd.
a = prompt("Enter a no.");
if (a % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// Write a program consisting of two files main.js and math.js. The math.js file should contain basic mathematics functions like add, substract, multiply, divide. In the main.js file make use of those functions and print the results by passing appropriate input values.
const { add, subtract, multiply, divide } = require("./math");
const num1 = 10;
const num2 = 5;
console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2));

// Write a program to calculate sum of all even numbers from 1 to 100 using while loop.
let num = 1;
let sum = 0;
while (num <= 100) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}
console.log("Sum of even numbers from 1 to 100:", sum);

// Write a program to print 8's table using ** operator.
for (let i = 1; i <= 10; i++) {
  console.log(`8 * ${i} = ${8 * i}`);
}

// Write a program to create two arrays, concatenate them and print out the resulting array.

a = [9, 3, 1, 5, 3, 4];
b = [2, 6, 4, 7, 2, 1];
console.log(a + "," + b);

// Write a program to create an array of 5 cities e.g. "Nagpur","Bhopal","Delhi","Udaipur" and accept user input into a variable and print the array index if input value exists in array else print "Not Found".

const cities = ["Mumbai", "Chennai", "Delhi", "Jaipur", "Kochi"];
const userInput = prompt("Enter a city name: ");
const index = cities.indexOf(userInput);
if (index !== -1) {
  console.log(`Index of ${userInput} in the array: ${index}`);
} else {
  console.log("Not Found");
}

// Write a program to create an array of 8 integers and use map function to square each element and print the results.

const arr = [2, 7, 3, 1, 6, 8, 2, 5];
const sq_a = arr.map((i) => i * i);
console.log(sq_a);

// Write a program to create an array of 10 string, create a function that returns longest string from the array

const strings = [
  "ererg",
  "rhwetwd",
  "hldkgne",
  "gdhlkern",
  "ogwhdego",
  "eigh0hkoa",
  "gsdigjsodjgos",
  "poghasoi",
  "gnsj",
  "dgjopdryj"
];
let long = "";
for (const str of strings) {
  if (str.length > long.length) {
    long = str;
  }
}
console.log("Longest string:", long);

// Write a program that creates two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.

const arr1 = [4, 5, 6, 8, 5, 3, 5, 2];
const arr2 = [3, 4, 6, 7, 2, 3, 5, 2];
console.log(arr1.filter((num) => arr2.includes(num)));

// Write a program that creates an array of numbers and returns a new array that contains only the unique numbers using reduce function.
const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 1, 8, 9, 5, 10];
function getUniqueNumbers(arr) {
  return arr.reduce((unique, current) => {
    if (!unique.includes(current)) {
      unique.push(current);
    }
    return unique;
  }, []);
}
const uniqueNumbers = getUniqueNumbers(numbers);
console.log("Unique numbers:", uniqueNumbers);



// Using spread operator, write a program to create a new object that will look exactly like the one given in the output

const originalObject = {
    name: 'John',
    branch: "CSE",
    rollNo: 23
}
const newObject = { ...originalObject };
console.log(newObject);