// 👉 What is Destructuring ?

// Destructuring in JavaScript is a syntax feature that allows you to extract values from arrays or properties from objects and assign them to variables in a concise, readable way.

// =======================================================================================================================

// 👉 Array Destructuring

// Array destructuring lets you unpack values from an array into distinct variables based on their positions.

const fruits = ["Apple", "Banana", "Mango"];
const [first, second, third] = fruits;

console.log(first); // Apple
console.log(second); // Banana

// 👉 Skip Elements

// We can skip element in the array by leaving the position empty.

const colors = ["Red", "Green", "Blue"];
const [, , thirdColor] = colors;

console.log(thirdColor); // Blue

// 👉 Default Value

const numbers = [4];
const [a, b = 5] = numbers;

console.log(a); // 4
console.log(b); // 5

// =======================================================================================================================

// 👉 Object Destructuring

// Object destructuring allows you to unpack properties from an object into variables based on matching property names.

const person = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = person;

console.log(city); // New York

// 👉 Rename Variables

// We can rename variables while destructuring by using the : syntax.

const user = { id: 101, username: "john_doe" };
const { id: userid, username } = user;

console.log(userid); // 101

// 👉 Default Value

const car = { make: "Toyota" };
const { make, model = "Unknown" } = car;

console.log(make); // Toyota
console.log(model); // Unknown

// =======================================================================================================================

// 👉 Function Parameter Destructuring

// Destructuring can be used directly in function parameters, which is particularly useful for handling objects with multiple properties.

function printUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const user1 = { name: "Mohit", age: 26 };
printUser(user1);
