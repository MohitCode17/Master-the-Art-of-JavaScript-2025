// 👉 for...of Loop

// for...of loop works only with iterable objects. In JavaScript, iterables are objects which can be looped over.

// String, Array, TypedArray, Map, and Set are all built-in iterables.

// Object in JavaScript is not iterable by default. So, for...of loop does not work on objects.

// 👉 for...of Loop on String
const str = "Hello World!";

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
}

// Using for...of
for (let char of str) {
  //   console.log(char);
}

// 👉 for...of Loop on Arrays
const heros = ["Iron men", "Batmen", "Supermen", "Thor", "Captain America"];

for (let hero of heros) {
  console.log(hero);
}
