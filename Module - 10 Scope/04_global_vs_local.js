// Example:-
const username = "Mohit";
let userAge = 26;
var a = 50;

function add() {
  const username = "Akash";
  const x = 5;
  const y = 8;
  console.log(x + y);
  console.log(username);
}

add();
console.log("Program Ended");

/*
When variable declared using `var` and function declaration are moved in window scope. Whereas variable declared using `let` and `const` has different scope called `script` scope.

We can access variables inside a window using:-
console.log(window.a) --> 50

But not with let and const


                            | Global Scope |
-----------------------------------   ------------------------------------ 
| Window Scope                    |   | Script Scope                     |
|---------------------------------|   |----------------------------------|
| a           : 50                |   | username      :  Mohit           |
| add         : [function: add]   |   | userage       :  26              |
|                                 |   |                                  |
|---------------------------------|   |----------------------------------|
| Invoke add()                    |-->| Execute add()                    |
|---------------------------------|   |----------------------------------|

add() will create a local scope.

        | Local Scope |
----------------------------------- 
| Local Scope                     |
|---------------------------------|
| this        : { }               |
| username    : Akash             |
| x           : 5                 |
| y           : 8                 |
|                                 | 
|---------------------------------|
| Invoke add()                    |
|---------------------------------|

When console.log(x + y) it will find `x` & `y` in their nearest scope which is local is this case. If `x` and `y` is present then it takes from local else if will find in their parent scope which is global.

Same with `username`, try to comment `username` inside a function and then see the output you will find that `Mohit`. As it takes from their parent.
*/
