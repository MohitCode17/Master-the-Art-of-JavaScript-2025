// 👉 What is Hoisting?

// Hoisting is a term used to explain the behaviour of variable declaration in your code. Variable declared or initialized with the `var` keyword will have their declaration `moved` up to the top of their containing `scope` during the compilation, which we refer to as hoisting.

// =======================================================================================================================

// 👉 Hoisting of variable `var`

console.log(foo); // undefined
var foo = "foo";
console.log(foo); // foo

// 👉 You can visualize the code as:

/*
var foo; // moved to top
console.log(foo); // undefined, when variable initiazed but not declared any value, its undefined.

foo = "foo"; // assign value to `foo`
console.log(foo); // foo
*/

// Let's understand by this using Execution context

/*
                    | Global Execution Context (GEC) |
-----------------------------------   ------------------------------------ 
| Memory Creation Phase           |   | Code Execution Phase             |
|---------------------------------|   |----------------------------------|
| foo         : undefined    <--------| console.log(foo) :  undefined    | Line-1 Executed
| foo         : foo          <--------|                                  | Line-2 Executed
|                +--------------------| console.log(foo) : foo           | Line-3 Executed
|---------------------------------|   |----------------------------------|
*/

// 👉 Hoisting of variable `let` & `const`

// Variable declated via `let`, `const` are hoisted as well. However, unlike `var` they are not initalized and accessing then before the declaration will result in a `ReferenceError`.

// The variable is in a `Temporal Dead Zone` from the start of the block untill the declaration is processed.

// 👉 Temporal Dead Zone: TDZ refers to the period in the execution of a JavaScript program where a variable exists but cannot be accessed.

console.log(y);
let y = "y";

// ReferenceError: Cannot access 'y' before initialization. See the error it does't say `y` is not defined, that mean JavaScript complier is familiar with `y`.

// =======================================================================================================================

// 👉 Hoisting of function expression

// Function expression are functions written in the form of variable declaration, Since they are also declared using `var`. Only the variable declaration is hoisted.

console.log(bar); // undefined
bar(); // `bar` is not a function

var bar = function () {
  console.log("Hello from bar");
};

// Let's understand by this using Execution context

/*
                    | Global Execution Context (GEC) |
-----------------------------------   ------------------------------------ 
| Memory Creation Phase           |   | Code Execution Phase             |
|---------------------------------|   |----------------------------------|
| bar         : undefined    <--------| console.log(bar) :  undefined    | Line-1 Executed
|                +--------------------| bar() : `bar` is not function    | Line-2 Executed
|---------------------------------|   |----------------------------------|
*/

// 👉 Hoisting of function declaration

console.log(baz); // [function: baz]
baz(); // Hello from baz

function baz() {
  console.log("Hello from baz");
}

// Let's understand by this using Execution context

/*
                    | Global Execution Context (GEC) |
-----------------------------------   ------------------------------------ 
| Memory Creation Phase           |   | Code Execution Phase             |
|---------------------------------|   |----------------------------------|
| baz         : [function: baz]   |   | console.log(baz) : [fun: baz]    | Line-1 Executed
|                                 |   | baz()  : Hello from baz          | Line-2 Executed
|---------------------------------|   |----------------------------------|
*/
