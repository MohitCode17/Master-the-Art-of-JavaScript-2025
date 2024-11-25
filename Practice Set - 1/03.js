function countParameters(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }

  return count;
}

console.log(countParameters("a", "b", "c", "d"));
console.log(countParameters(1, 5, 7, 2, 10, 21));
