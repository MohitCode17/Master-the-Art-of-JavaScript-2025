// 👉 The `map` Method

// The Map method in JavaScript is a higher-order function that iterates over each element of an array, allowing you to apply a specified function to each element. This function is commonly referred to as a callback function.

// The key feature of the Map method is that it creates a new array based on the results of applying this callback function to each element of the original array, without modifying the original array itself.

// Example:-

// Double each element of this array and return it in new array.
const numbers = [1, 2, 3, 4, 5];

// 1. Without Map
let newArr = [];

for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] * 2);
}

console.log(newArr); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

// 2. With Map
let doubledArr = numbers.map((num) => num * 2);

console.log(doubledArr); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5]

// Example:-

// Takes a user id from users object and stored in new array.
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

// 1. Without Map
const userId = [];

for (let user of users) {
  userId.push(user.id);
}

console.log(userId); // [1, 2, 3]

// 2. With Map
const userIdArr = users.map((user) => user.id);
console.log(userIdArr); // [1, 2, 3]
