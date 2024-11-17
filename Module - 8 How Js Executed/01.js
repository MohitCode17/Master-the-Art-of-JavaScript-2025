// 👉 What is Execution Context?

// When the JavaScript engine scans a script file, it makes an environment called the Execution Context that handles the entire transformation and execution of the code.

// During the context runtime, the parser parses the source code and allocates memory for the variables and functions. The source code is generated and gets executed.

// There are two types of execution contexts: `global` and `function`. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

// =======================================================================================================================

// 👉 Phase of the JavaScript Execution Context

// There are two phases of JavaScript execution context:

// 1. Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions.

// 2. Execution phase: In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.

// =======================================================================================================================

// 👉 Let's take a simple example:-

sayHello();

var username = "Mohit";
var age = 26;

function sayHello() {
  console.log("Hello World!");
}

/*
                    | Global Execution Context (GEC) |
-----------------------------------   ------------------------------------ 
| Memory Creation Phase           |   | Code Execution Phase             |
|---------------------------------|   |----------------------------------|
| sayHello    : <function>        |   | sayHello      :  <function>      |
| username    : undefined         |   | username      :   Mohit          |
| age         : undefined         |   | age           :   26             |
|                                 |   |                                  |  
|---------------------------------|   |----------------------------------|
| Invoke sayHello()               |-->| Execute sayHello()               |
|---------------------------------|   |----------------------------------|

When function `sayHello` is executed, it create a function(local) execution context.

                    | Local Execution Context (sayHello) |
-------------------------------------------    --------------------------------------
| Memory Creation Phase                    |   | Code Execution Phase               |
|------------------------------------------|   |------------------------------------|
| No variables or parameters               |   | console.log("Hello");              | ----------> Outputs "Hello" to console
|------------------------------------------|   |------------------------------------|


Call stack is a mechanism to to keep track of its place in script that calls multiple function. Call stack maintains the order of execution context.

                    ---------Call Stack----------

                    -----------------------------
                    | Local Execution Context   | -----> Once the local execution context is executed, it will be pop out from callstack
                    -----------------------------
                    -----------------------------
                    | Global Execution Context  | -----> Once the Global execution context is executed, it will be pop out from callstack.
                    -----------------------------

*/
