// 👉 The forEach() Method

// The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

const nums = [1, 2, 3, 4, 5];

nums.forEach((num, index, arr) => {
  console.log(`${num} - ${index} - ${arr}`);
});

// Calculate the total salary spent to staff
const staffsDetails = [
  { name: "Mohit", age: 26, salary: 50000, currency: "INR" },
  { name: "Akash Singh", age: 32, salary: 58000, currency: "INR" },
  { name: "Rohan Pandey", age: 26, salary: 42500, currency: "INR" },
  { name: "Vinish", age: 27, salary: 32500, currency: "INR" },
];

let totalSalary = 0;

staffsDetails.forEach((item) => {
  totalSalary += item.salary;
});

console.log(totalSalary); // 183000

// Condition: Find only staff name whose salary is more than 40000.
staffsDetails.forEach((item) => {
  if (item.salary > 40000) {
    console.log(item);
  }
});

// Example:-

// Convert all the name of contries in uppercase and return
const countries = ["India", "Denmark", "Sweden", "Norway", "Iceland"];

countries.forEach((country) => country.toUpperCase());

console.log(countries); //  ['India', 'Denmark', 'Sweden', 'Norway', 'Iceland']
