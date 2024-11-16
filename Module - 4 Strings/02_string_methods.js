// 👉 List of String Methods

// 1. Concat(): Joins two or more string

let firstName = "Mohit";
let lastName = "Gupta";
console.log(firstName.concat(" ", lastName));

// =======================================================================================================================

// 2. trim(): Removes the leading and trailing white space.

let demoString = "          Rohan       ";
console.log(demoString.trim());

// =======================================================================================================================

// 3. indexOf(): Returns the position of the first occurrence of a substring.

const city = "New Delhi";
console.log(city.indexOf("e")); // 1

// =======================================================================================================================

// 4. lastIndexOf(): Returns the last occurrence of a substring in the string.

console.log(city.lastIndexOf("e")); // 5

// =======================================================================================================================

// 5. search(): Search a substring of string and return the first position of the match, if not return -1

const greet = "Welcome user ! Have a good day";
console.log(greet.search("user")); // 8
console.log(greet.search("users")); // -1

// =======================================================================================================================

// 6. split(): Split a string into substrings using the specified separator and return them as an array.

const countries = "India, America, Russia, Canada";
console.log(countries.split(","));

// =======================================================================================================================

// 7. slice(): Return a substring of the string based on start and end index

console.log(greet.slice(0, 5)); // Welco -> Start index (Included), End index (Excuded).
console.log(greet.slice(-3)); // Slice last 3 characters of string --> day

// =======================================================================================================================

// 8. toUpperCase(): Converts all the alphabetic characters in a string to uppercase.

console.log(greet.toUpperCase());

// =======================================================================================================================

// 9. toLowerCase(): Converts all the alphabetic characters in a string to lowercase.

console.log(greet.toLowerCase());

// =======================================================================================================================

// 10. includes(): Takes substring and return boolean if substring exist

const technologies = "HTML, CSS, JavaScript, React, Node, Express";

console.log(technologies.includes("React")); // true
console.log(technologies.includes("Typescript")); // false

// =======================================================================================================================

// 11. charAt(): Takes index and it returns the value at that index

console.log(technologies.charAt(3)); // L

// =======================================================================================================================

// 12. startsWith(): Takes substring and return boolean if string starts with specified substring

console.log(technologies.startsWith("HTML")); // true
console.log(greet.startsWith("CSS")); // false

// =======================================================================================================================

// 13. endsWith(): Takes substring and return boolean if string ends with specified substring

console.log(technologies.endsWith("HTML")); // false
console.log(technologies.endsWith("Express")); // true

// =======================================================================================================================

// 14. replace(): Replace a specified value to another value

console.log(technologies.replace("React", "Next.js"));
