// 👉 Find Method

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

const ages = [24, 22, 25, 32, 35, 14, 18, 10];

const findAge = ages.find((age) => age > 20);
console.log(findAge); // 24

// filter return array with having all the value which satisfied the condition as follow, but find will return only first satisfied element in an array.
