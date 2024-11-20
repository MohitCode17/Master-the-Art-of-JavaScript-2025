// 👉 The While Loop

// Loops can execute a block of code as long as a specified condition is true.

// 👉 Print 1 to 10
let i = 1;

while (i <= 10) {
  // Until condition (i <= 10) true, Loop will be excuted
  console.log(i);

  // Increment condition
  i++;
}

// Print all even number 1 to 100.
let num = 1;

while (num <= 100) {
  if (num % 2 === 0) {
    console.log(`Even Number: ${num}`);
  }

  num++;
}
