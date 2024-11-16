// 👉 What is Array ?

// An array in JavaScript is a data structure used to store multiple values in a single variable. It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.

// =======================================================================================================================

// 👉 Declaration of Array

// Creating an empty array
let names = [];
console.log(names);

// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
console.log(courses);

// =======================================================================================================================

// 👉 Accessing Array Element

// 1. Accessing Element

// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

console.log(courses[0]); // HTML

// 2. Accessing Last Element

// We can access the last array element using [array.length – 1] index number.

console.log(courses[courses.length - 1]); // Course.length = 4, Since 0 based index so last index = 4 - 1 = 3.

// =======================================================================================================================

// 👉 Mutable Array Element

// Elements in an array can be modified by assigning a new value to their corresponding index.

courses[courses.length - 1] = "Nextjs";
console.log(courses);

// =======================================================================================================================

// 👉 Array Length

// We can get the length of the array using the array length property.

console.log(courses.length);

// Increase and Decrease the Array Length

let company = [
  "Uber",
  "Microsoft",
  "Google",
  "UrbanNest",
  "Amazon",
  "Flipkart",
];

// Increase the array length to 7
company.length = 8;
console.log("Array After Increase the Length: ", company);

// Decrease the array length to 2
company.length = 2;
console.log("Array After Decrease the Length: ", company);

// =======================================================================================================================

// 👉 Store element of any type

let mixArr = [
  "Apple",
  { name: "Mohit" },
  true,
  10,
  function () {
    console.log("Hello Mohit");
  },
];

mixArr[4](); // Hello Mohit
