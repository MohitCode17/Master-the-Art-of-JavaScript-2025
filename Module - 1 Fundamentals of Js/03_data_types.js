// 👉 What is Data Type ?

// Data type refers to the type of data that a JavaScript variable can hold.

// Data types can be divided into two categories: primitive and non-primitive(reference) types.

// =======================================================================================================================

// 👉 Primitive data types

// 1. Number: Represent both integer and floting point numbers.

let age = 26;
let price = 99.99;

// 2. String: Represent sequences of characters, Can be enclosed with single or double quotes.

let name = "Mohit";
let greeting = "Hello, World !";

// 3. Boolean: Represent logical entities and can have two values: true and false.

let isActive = false;
let isOver18 = true;

// 4. Undefined: A variable that has been declared but not assigned a value.

let user;
console.log(user); // undefined

// 5. Null: Represent the intentional absence of any object value.

let user1 = null;

// 6. Symbol: A unique and immutable value.

let sym1 = Symbol();

// 7. BigInt: Used for representing very large integer number.

let bigNumber = BigInt(9007199254740991);

// =======================================================================================================================

// 👉 Non-primitives(Reference) data types

// 1. Object: Used to store collections of data and more complex entities. Object are created using `{ }` braces.

const car = {
  company: "Mahindra and Mahindra",
  modal: "Thar Roxx",
  price: "20 lacs",
};

// 2. Array: Used to store ordered collections of data. Array are created using `[ ]` braces.

const shoppingList = ["Watch", "Perfume", "Shoes"];

// 3. Functions: Funtions are `objects`. A block of code that performs a specific task.

function addToCart() {
  console.log("Product added to cart.");
}

// =======================================================================================================================

// 👉 Determining data types

// `typeof` operator can be used to determine the data types of a value.

console.log(typeof 26); // number
console.log(typeof "Mohit"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol()); // symbol
console.log(typeof BigInt(123)); // bigint
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// =======================================================================================================================

// 😕 Pitfalls

// 👉 Type coercion

// JavaScript ofter performs type coercion, converting values from one type to another, which can lead to unexpected results, or sometime we explicitly perform type coercion to get expected results.

let result = "5" + 2;
let difference = "5" - 2;
console.log(result); // "52"
console.log(difference); // 3

// Case1: Since string can be concatenated with the `+` operators, the number is converted into string result "52" as string.
// Case2: String cannot work with the minus operator `-`, but two numbered can be minused, so the string converted into number result 3 as number.

// 👉 Explicit Type coercion

// For example, `alert` and input box automatically converts any value to string. Suppose we recived age of user to make some calculation, we got unexpected result. To make it work we can explicit type coercion.

let studentAge = "20"; // suppose getting value from input.
console.log(Number(studentAge));
