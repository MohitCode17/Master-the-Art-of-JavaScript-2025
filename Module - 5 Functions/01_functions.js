// 👉 What is functions ?

// A function is a reusable block of code or programming statements designed to perform a certain task. Function makes code clean, easy to read, easy to reuse and easy to test.

// 👉 Types of Functions in JavaScript

/*
JavaScript supports several types of functions, each serving unique purposes. Here are the main types:

1. Function Declaration
2. Function Expression
3. Arrow Function
4. Anonymous Function
5. Immediately Invoked Function Expression (IIFE)
6. Constructor Function
7. Generator Function
*/

// =======================================================================================================================

// 👉 Function Declaration

// A function declaration defines a named function.

function greet() {
  console.log("Good Morning !");
}

greet();

// =======================================================================================================================

// 👉 Parameter and Arguments in function

// Parameter: A variable in the function definition that acts as a placeholder for values.

// Argument: The actual value passed to the function when it is called.

function sum(a, b) {
  console.log(a + b);
}

sum(10, 12);

// =======================================================================================================================

// 👉 Return Statement

// The return statement in JavaScript is used to stop the execution of a function and return a specified value to the caller.

function sayHello(name) {
  return `Hello ${name}!`;
}

console.log(sayHello("Mohit"));

// =======================================================================================================================

// 👉 Default Parameter

function loggedInUser(username = "Anonymous user") {
  return `${username} is just logged in.`;
}

console.log(loggedInUser()); // Anonymous user is just logged in.
console.log(loggedInUser("Mohit")); // Mohit is just logged in.

// =======================================================================================================================

// 👉 Function Expression

// A function expression defines a function as part of a larger expression (such as a variable assignment).

const add = function (a, b) {
  return a + b;
};

console.log(add(14, 10));

// =======================================================================================================================

// 👉 Arrow Function

// Introduced in ES6, arrow functions are a shorter syntax for writing functions.

const multiply = (x, y) => x * y;

console.log(multiply(10, 10));

// =======================================================================================================================

// 👉 Anonymous Function

// An anonymous function is a function without a name. It’s often used as a callback or when a function is assigned directly to a variable.

/*
function() {
    // function body...
}
*/

// =======================================================================================================================

// 👉 Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that runs as soon as it is defined. It’s wrapped in parentheses to make it an expression, followed by another set of parentheses to execute it immediately.

(function () {
  console.log("This is an IIFE function!");
})();
