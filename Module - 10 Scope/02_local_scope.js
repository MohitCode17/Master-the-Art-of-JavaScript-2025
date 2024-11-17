// 👉 Local Scope

// Local scope in JavaScript is like a private room within a building – it's an enclosed space where variables are only accessible from within that specific room.

// Variables in local scope are typically declared within functions, conditional statements, loops, or other code blocks.

// Variables in local scope are protected from interference or modification by code outside their scope, providing a level of isolation.

function myFunction() {
  var localVariable = "I'm local scope variable";
  console.log(localVariable);
}
myFunction();

// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
