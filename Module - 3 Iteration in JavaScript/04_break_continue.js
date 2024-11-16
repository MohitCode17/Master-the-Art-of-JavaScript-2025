// 👉 Break and Continue

// The `break` statement "jumps out" of a loop.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// The `continue` statement "jumps over" one iteration in the loop.

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
