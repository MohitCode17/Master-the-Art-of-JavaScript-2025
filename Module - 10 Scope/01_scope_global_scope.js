// 👉 What is Scope?

// Scope refers to the context or environment in which variables are declared and can be accessed. JavaScript offers various types of scope, with the three primary ones being `global`, `function`, and `block` scope.

// =======================================================================================================================

// 👉 Global scope

// Variables declared in global scope are typically defined outside of any functions or code of block. Can be accessed anywhere in the program.

var globalVariable = "I am a global variable";

function myFunction() {
  console.log(globalVariable); // I am a global variable
}

myFunction();
console.log(globalVariable); // I am a global variable

if (true) {
  console.log(globalVariable); // I am a global variable
}

// 👉 Potential Issues with Global Scope

// Since global variables are accessible from anywhere, they are susceptible to unintended changes and conflicts.

// For instance, if multiple parts of your code modify the same global variable, it can lead to unexpected behaviors and bugs that are hard to track down.

// Moreover, global variables can make your code less modular and organized. If everything is in the town square, it becomes challenging to manage and isolate different aspects of your program.
