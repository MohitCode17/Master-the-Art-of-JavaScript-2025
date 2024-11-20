// 👉 Maths in JavaScript

// Math is a built-in object that provide mathematical functions and constants. You can use the Math object to perform a variety of mathematical operations, such as: calculations, rounding numbers, and generating random numbers.

// 👉 Fixed Decimal Points
const price = 99.9788;
console.log(price.toFixed(2)); // 99.98

// 👉 Precice Value
console.log(price.toPrecision(4)); // 99.98

// 👉 Convert in Local String
const lakhs = 100000;
console.log(lakhs.toLocaleString());

// =======================================================================================================================

// 👉 Print Pi Value
console.log(Math.PI);

// 👉 Rouding To Closest Number
console.log(Math.round(99.99)); // 100

// 👉 Rounding To Down
console.log(Math.floor(99.99)); // 99

// 👉 Rounding To Up
console.log(Math.ceil(99.99)); // 100

// 👉 Find Minimum & Maximum
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20

// 👉 Random Number
console.log(Math.random()); // Between 0(Included) to 1(Excluded)
