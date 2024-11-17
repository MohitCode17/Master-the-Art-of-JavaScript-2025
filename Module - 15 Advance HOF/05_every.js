// 👉 Every Method

// Determines whether all the members of an array satisfy the specified test.

const names = ["Mohit", "Rohan", "Gupta", 10];

const allAreStrings = names.every((val) => typeof val === "string");
console.log(allAreStrings);

// As name suggest "every" is any of element is not string, return false as result.
