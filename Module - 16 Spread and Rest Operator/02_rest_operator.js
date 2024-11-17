// 👉 The Rest Operator

// While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring. It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation.

// 👉 Before the Rest Operator

// Consider a scenario where we want to extract the first element from an array and collect the rest into a separate array.

const arr = [1, 2, 3, 4];
console.log("First Element:", arr[0]); // 1
console.log("Rest Element:", arr.slice(1)); // [2, 3, 4]

// 👉 After the Rest Operator

const arr1 = [1, 2, 3, 4, 5];
const [first, ...rest] = arr1;
console.log("First Element After Rest Operator:", first);
console.log("Rest Element After Rest Operator:", rest);

// =======================================================================================================================

// 👉 Rest Operator Use Cases

// Handling Variable-Length Function Arguments

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
