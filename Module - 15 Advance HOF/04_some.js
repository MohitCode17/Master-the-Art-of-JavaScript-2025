// 👉 Some Method

// Determines whether the specified callback function returns true for any element of an array.

const names = ["Mohit", "Rohan", "Gupta", 10];

const allAreStrings = names.some((val) => typeof val === "string");
console.log(allAreStrings);

// As name suggest "some" is any of element is string, return true as result.
