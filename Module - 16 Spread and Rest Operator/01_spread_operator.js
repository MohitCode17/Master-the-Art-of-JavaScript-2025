// 👉 The Spread Operator

// The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.

// Consider the following array:

const arr = [1, 2, 3];
console.log("Original array:", arr); // [1, 2, 3]

// 👉 Before the Spread Operator

// Traditionally, if we wanted to create a new array with existing elements appended to it, we'd resort to cumbersome approaches like this:

const newArr = [5, 6, arr[0], arr[1], arr[2]];
console.log("New array (before spread operator):", newArr); // [5, 6, 1, 2, 3]

// Using Loop

const arr1 = [5, 6];

for (let i = 0; i < arr.length; i++) {
  arr1.push(arr[i]);
}

console.log("Using Loop:", arr1); // [5, 6, 1, 2, 3]

// 👉 After the Spread Operator

// Enter the spread operator, offering a concise and intuitive alternative:

const existingArr = [5, 6, ...arr];
console.log(existingArr); // [5, 6, 1, 2, 3]

// =======================================================================================================================

// 👉 Combining Arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combo = [...nums1, ...nums2];

console.log(combo); // [1, 2, 3, 4, 5, 6]

// =======================================================================================================================

// 👉 Copying Arrays

// The spread operator offers a concise method for copying arrays, ensuring that modifications to the copied array do not affect the original.

const originalArr = [1, 2, 3];
const copy = [...originalArr];

copy.push(100);
console.log("Copy Array:", copy); // [1, 2, 3, 100]
console.log("Original Array:", originalArr); // [1, 2, 3]
