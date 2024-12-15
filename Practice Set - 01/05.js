function factorial(num) {
  if (num === 1) {
    return num;
  }

  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
}
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
