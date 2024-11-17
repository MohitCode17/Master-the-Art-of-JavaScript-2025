// 👉 Scope Chain

// The scope chain in JavaScript is like a stack of transparent sheets, each representing a different scope. These sheets are stacked on top of each other, with the global scope at the bottom.

// When you reference a variable, JavaScript searches for it starting from the top sheet (the current local or block scope) and moves down through the sheets, looking in each scope until it finds the variable.

// This process of searching for variables through multiple scopes is known as the "scope chain."

var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); // Access innerVariable
    console.log(outerVariable); // Access outerVariable
    console.log(globalVariable); // Access globalVariable
  }

  innerFunction();
}

outerFunction();

// In this example, the innerFunction can access variables from its local scope (for example, innerVariable), the outer scope (for example, outerVariable), and the global scope (for example, globalVariable). JavaScript follows the scope chain to find these variables.

// =======================================================================================================================

// 👉 Understanding Lexical Scope

// The scope chain in JavaScript follows a principle known as lexical (or static) scoping.

// Lexical scoping means that the scope of a function is determined by where the function is declared, not where it's called.

// This concept is similar to how a book's pages are ordered and arranged in a specific sequence, with each page having access to the previous ones.

var a = "I'm global";

function firstFunction() {
  var a = "I'm in firstFunction";

  function secondFunction() {
    console.log(a); // Accesses a from firstFunction, not the global a
  }

  secondFunction();
}

firstFunction();

// In this example, even though secondFunction is called from within firstFunction, it still references the a variable from the scope where it was declared (lexical scope), which is the firstFunction.
