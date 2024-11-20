// 👉 What is JavaScript Loops ?

// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// 👉 JavaScript supports different kinds of loops

/*
1. for - loops through a block of code a number of times
2. for/in - loops through the properties of an object
3. for/of - loops through the values of an iterable object
4. while - loops through a block of code while a specified condition is true
5. do/while - also loops through a block of code while a specified condition is true
*/

// =======================================================================================================================

// 👉 The For Loop

// The for statement creates a loop with 3 optional expressions:

/*
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
*/

// 👉 Print 1 to 10 Number

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 👉 Loop inside a Loop

for (let i = 1; i <= 10; i++) {
  console.log(`Outer Iteration: ${i}`);

  for (let j = 10; j >= 1; j--) {
    console.log(`Inner Iteration: ${j}`);
  }
}

// The outer loop runs 10 times.
// For each iteration of the outer loop, the inner loop runs 10 times.
// As a result, there will be a total of 100 inner loop iterations (10 outer iterations × 10 inner iterations).

// 👉 Print Table from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(`Printing The Table of ${i}...`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("");
}
