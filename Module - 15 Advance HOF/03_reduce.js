// 👉 Reduce Method in JavaScript

// The reduce() method got its name from the functionality it provides, which is to iterate and “reduce” an array's values into one value.

// The easiest way to understand how the reduce() method works is through an example, so let’s see an easy one first.

const items = [
  { name: "Apple", price: 1 },
  { name: "Orange", price: 2 },
  { name: "Mango", price: 3 },
];

// you are tasked to get the sum of the price property and get the total price.
let total = 0;

items.forEach((item) => {
  total += item.price;
});

console.log(total);

// The code above works, but since we’re looking to get a single value from the array, the reduce() method would be more suited for the task.

// The reduce() method works in a similar manner to the forEach() method, with the added ability to collect the result of each iteration as a single value.

const totalPrice = items.reduce((accumulator, item) => {
  return (accumulator += item.price);
}, 0);

console.log(totalPrice);
