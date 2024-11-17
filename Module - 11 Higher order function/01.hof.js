// 👉 Higher Order Functions

// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// Higher order function
function mainFunction(func) {
  console.log("Hello, I'm from higher order function.");
  func();
}

mainFunction(sayHello);

// Callback function
function sayHello() {
  console.log("Hello, I'm a callback function.");
}

// =======================================================================================================================

// 👉 How Higher Order functions work

// So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

/*
const radius = [1, 2, 3];

// function to calculate area of circle
const calculateArea = (radius) => {
  let output = [];

  // FORMULA: A = π * r^2
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

// Function to calculate diameter of circle
const calculateDiameter = (radius) => {
  let output = [];

  // FORMULA: D = 2 * R
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }

  return output;
};

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));

*/

// But have you noticed the problem with the above code? Aren't we writing almost the same function again and again with slightly different logic? Also, the functions we have written aren't reusable.

// So, let's see how we can write the same code using HOFs:

const radius = [1, 2, 3];

// Logic to calculate area
const area = function (radius) {
  return Math.PI * radius * radius;
};

// Logic to calculate diameter
const diameter = function (radius) {
  return 2 * radius;
};

// A reusable function to calculate area, diamter also called Higher order function.
const calculate = (radius, logic) => {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
