// 👉 JavaScript Array Methods

// JavaScript array methods are built-in functions that allow efficient manipulation and traversal of arrays. They provide essential functionalities like adding, removing, and transforming elements, as well as searching, sorting, and iterating through array elements, enhancing code readability and productivity.

// =======================================================================================================================

// 👉 Adding An Element

// 1. push(): Adding new elements such as some numbers and some string values to the end of the array. And Return the new length of array.

let fruitsList = ["Orange", "Banana"];
fruitsList.push("Grapes");
console.log(fruitsList);

// 2. unshift(): The unshift() method is used to add elements to the front of an Array. And Return the new length of array.

fruitsList.unshift("Cherry");
console.log(fruitsList);

// =======================================================================================================================

// 👉 Removing An Element

// 1. pop(): Remove an element from the end of the array. And returned the removing element.

const courses = ["HTML", "CSS", "Tailwind", "JavaScript", "React"];
courses.pop();
console.log(courses);

// 2. shift(): The shift() method is used to remove elements from the beginning of an array. And returned the removing element.

courses.shift();
console.log(courses);

// 3. splice(): The splice() method removes or replaces the element from the array. And returned the removed element.

const studentName = ["Mohit", "Rohan", "Akash", "Ritik"];
studentName.splice(2, 1, "Random User");
// 1. First Parameter take index, at where to start.
// 2. Second Parameter take count, how many element to remove.
// 3. Third Parameter take value, what to add in place.
console.log(studentName);

// =======================================================================================================================

// 👉 Array Concatenation

// concat(): Combine two or more arrays. It returns new array containing joined arrays elements.

const frontendCourses = ["HTML", "CSS", "JavaScript", "React"];
const backendCourses = ["Node.js", "Expess.js"];

const fullStackCourses = frontendCourses.concat(backendCourses);
console.log(fullStackCourses);

// =======================================================================================================================

// 👉 Conversion of an Array to String

// toString(): To converts an array to a string.

const str = frontendCourses.toString();
console.log(str);

// =======================================================================================================================

// 👉 Recognizing a JavaScript Array

// 1. Array.isArray()

console.log(Array.isArray(frontendCourses)); // true

// 2. instanceof

console.log(frontendCourses instanceof Array); // true

// =======================================================================================================================

// 👉 slice(): Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Slice array:", arr.slice(2, 7)); // End Position is Excluded
console.log("New Slice array:", arr.slice(-4));

// =======================================================================================================================

// 👉 join(): This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

const actionHeros = ["Iron men", "Spider men", "Captain America", "Thor"];

console.log("Join Action Heros:", actionHeros.join(" | "));

// =======================================================================================================================

// 👉 includes(): Determines whether an array includes a certain element.

console.log(actionHeros.includes("Spider men")); // true

// =======================================================================================================================

// 👉 reverse(): Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

console.log("Reverse action heros array:", actionHeros.reverse());
