// 👉 Block Scope

// Block scope in JavaScript is like a series of nested boxes within a larger container, each with its own set of variables.

// Block scope is created within specific code blocks, such as conditional statements (if, else, switch) and loops (for, while).

// Variables declared in block scope are confined to that block, offering a high degree of isolation.

if (true) {
  let blockVariable = "I'm in block scope.";
  console.log(blockVariable);
}

// Accessing blockVariable here would result in an error

// =======================================================================================================================

// 👉 Differences between Block Scope and Local Scope

// Block scope is often confused with local scope, but there's a key distinction.

// In local scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements.

// Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.

function myFunction() {
  if (true) {
    var localVariable = "I'm in block scope";
    let blockVariable = "I'm also in block scope";
  }
  console.log(localVariable); // Accessible
  console.log(blockVariable); // Error: blockVariable is not defined
}

// In this example, localVariable is accessible within the function because it's in local scope. On the other hand, blockVariable is accessible only within the if block due to block scope.

// =======================================================================================================================

// 👉 How to Use Block Scope with let and const

// The introduction of the let and const keywords in JavaScript significantly enhanced block scope.

// These keywords allow you to declare variables with block scope, making it easier to control variable visibility and lifespan.

function exampleBlockScope() {
  if (true) {
    let blockVariable = "I'm block-scoped with 'let'";
    const constantBlockVar = "I'm block-scoped with 'const'";
  }
  console.log(blockVariable); // Error: blockVariable is not defined
  console.log(constantBlockVar); // Error: constantBlockVar is not defined
}
