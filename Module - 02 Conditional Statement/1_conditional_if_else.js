// 👉 What is Conditional Statements ?

// Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

// =======================================================================================================================

// 👉 If Statement

// The `if` statement only runs if the condition enclosed in parentheses () is `truthy`.

let year = prompt(
  "In which year was ECMAScript-2015 specification published?",
  ""
);

if (year == 2015) alert("You are right!");

// =======================================================================================================================

// 👉 Else Statement

// You can extend an if statement with an else statement, which adds another block to run when the if conditional doesn’t pass.

if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?");
}

// =======================================================================================================================

// 👉 Else If Statement

// You can also extend an if statement with an else if statement, which adds another conditional with its own block.

if (year < 2015) {
  alert("Too early...");
} else if (year > 2015) {
  alert("Too late");
} else {
  alert("Exactly!");
}
