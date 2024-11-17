// 👉 Sort Method

// The sort() method can be used to sort elements of an array in ascending order based on Unicode character code values by default.

// Example
let numArray = [3, 4, 1, 7, 2];

let sortedArray = numArray.sort();
console.log(sortedArray); // [1, 2, 3, 4, 7]

// It is also important for you to know that when you apply the sort() method to an array, it will change the position of the elements in the original array. This means you do not need to assign a new variable to the sorted array:

numArray.sort();
console.log(numArray); // [1, 2, 3, 4, 7]

// =======================================================================================================================

// 👉 How To Sort Numbers Accurately in JavaScript

// The sort() method of JavaScript compares the elements of the array by converting them into strings and then comparing their Unicode code points.

// This can lead to unexpected results when sorting arrays of numbers, as seen in the example where 10, 5, and 80 are sorted as 10, 5, 80 instead of 5, 10, 80.

let numArr = [10, 5, 80].sort();
console.log(numArr); // Output: [10, 5, 80]

// To solve this shortcoming, you can provide a comparison function that defines the desired sorting order.

// For sorting an array of numbers, the comparison function should subtract the second number from the first number.

// This will result in a negative number if the first number is smaller than the second number, a positive number if the first number is larger than the second number, and 0 if the two numbers are equal.

console.log(numArr.sort((a, b) => a - b));

/*
Detailed Walkthrough:-

Here’s how the sorting algorithm works, step-by-step, using (a, b) => a - b:

1. First Comparison:

 - Elements: 10 and 5
 - Calculation: a - b gives 10 - 5 = 5 (a positive value).
 - Decision: Since the result is positive, a (10) is considered greater than b (5), so 5 should come before 10.
 - Array after Step 1: [5, 10, 80]

2. Second Comparison:

 - Elements: 10 and 80
 - Calculation: a - b gives 10 - 80 = -70 (a negative value).
 - Decision: Since the result is negative, a (10) is considered less than b (80), so 10 should stay before 80.
 - Array remains the same: [5, 10, 80]

3. Final Array: [5, 10, 80]
*/

// =======================================================================================================================

// You can also sort your array elements in descending order by subtracting the first number from the second number:

console.log(numArr.sort((a, b) => b - a)); // [80, 10, 5]

/*
When using (b - a) in the comparison function, the array will be sorted in descending order (from largest to smallest). This happens because:

 - If b - a is positive (i.e., b > a), b is considered greater than a, so b should come before a.
 - If b - a is negative (i.e., b < a), a is considered greater than b, so a should come before b.
 - If b - a is zero (i.e., a === b), their order remains unchanged.
*/
