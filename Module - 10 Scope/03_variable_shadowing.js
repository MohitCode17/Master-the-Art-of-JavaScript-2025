// 👉 The Concept of Variable Shadowing

// Variable shadowing occurs when you declare a variable with the same name inside a local scope, effectively "hiding" the variable with the same name in a higher scope.

var message = "Global message";

function showMessage() {
  var message = "Local message"; // This "shadows" the global variable
  console.log(message); // Local message
}

showMessage();
console.log(message); // Global message
