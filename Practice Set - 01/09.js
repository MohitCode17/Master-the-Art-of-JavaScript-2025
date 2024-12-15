function falsyCalculator() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const operation = prompt(
    "Enter the operation (add, subtract, multiply, divide):"
  ).toLowerCase();

  // Generate a random number to determine whether to perform incorrect operation (10% chance)
  const performIncorrect = Math.random() < 0.1;

  let result;

  if (performIncorrect) {
    // Perform incorrect operation
    switch (operation) {
      case "add":
        result = num1 - num2;
        break;
      case "subtract":
        result = num1 / num2;
        break;
      case "multiply":
        result = num1 + num2;
        break;
      case "divide":
        result = Math.pow(num1, num2);
        break;
      default:
        console.log("Invalid operation!");
        return;
    }
  } else {
    // Perform correct operation
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 !== 0) {
          result = num1 / num2;
          console.log("Correct operation performed: Division.");
        } else {
          console.log("Division by zero is not allowed.");
          return;
        }
        break;
      default:
        console.log("Invalid operation!");
        return;
    }
  }

  console.log(`The result is: ${result}`);
}

falsyCalculator();
