// 👉 Date & Time in JavaScript

// Date is built-in JavaScript object is used to work with dates and times. It allows suitable methods to get the current date and time.

// =======================================================================================================================

// 👉 Create a Date objects
const date = new Date();
console.log(date); // Wed Nov 06 2024 19:10:06 GMT+0530 (India Standard Time)

// 👉 Date as a string value.
console.log(date.toDateString()); // Wed Nov 06 202
console.log(date.toLocaleDateString()); // 11/6/2024
console.log(date.toLocaleString()); // 11/6/2024, 7:12:44 PM

// 👉 Get Full Year
console.log(date.getFullYear()); // 2024

// 👉 Get Month
console.log(date.getMonth() + 1); // 11 --> Nov

// Month starts from January which index in JavaScript is 0 and ends on December which index is 11. To get desired result add `1`.

// 👉 Get Date
console.log(date.getDate()); // 6

// 👉 Get Day
console.log(date.getDay()); // 3
// Sunday = 0, Saturaday = 6

// 👉 Get Hours
console.log(date.getHours()); // 19

// 👉 Get Minutes
console.log(date.getMinutes()); // 19

// 👉 Get Seconds
console.log(date.getSeconds()); // 58

// =======================================================================================================================

// 👉 Getting Time Stamp

// This method give time in milliseconds starting from January 1, 1970. It is also known as Unix time. We can get the unix time in two ways.

console.log(Date.now());
