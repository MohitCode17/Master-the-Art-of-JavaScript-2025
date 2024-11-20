// 👉 Cloning and Merging of an Object

// How many times did you try to clone an object in Javascript and the output wasn’t exactly what you expected? In this article, we will explain the basic concepts behind cloning to ensure that you always use the right option.

// So, copying an object variable creates one more reference to the same object.

// This is the one posible way to clone an object:
let user = {
  name: "John Doe",
  age: 43,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

// Now clone is fully independent object with same content
clone.name = "Peter";
console.log(user.name); // still "John Doe"

// But there are another posible way to approch this.

// =======================================================================================================================

// 👉 Shallow Copy vs Deep copy

// There are two ways to clone an object in Javascript:

// 1. Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
// 2. Deep copy: means that all levels of the object are copied. This is a true copy of the object.

// =======================================================================================================================
// 👉 Shallow copy

// A shallow copy can be achieved using the spread operator (…) or using Object.assign():

// 👉 Object.assign

// Object.assign(dest, ...sources);

// 1. The first argument `dest` is the target object.
// 2. Further arguments is the list of source object.

let person = { name: "John" };

// copies all properties from permissions1 and permissions2 into user
let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(person, permission1, permission2);
console.log(person); // {name: 'John', canView: true, canEdit: true}

// If the copied property name already exists, it gets overwritten:
Object.assign(person, { name: "Peter" });
console.log(person);

// We also can use Object.assign to perform simple object cloning

let person1 = Object.assign({}, person);
console.log("Person 1:", person1); // {name: 'Peter', canView: true, canEdit: true}

// 👉 Shallow Copy using Spread Operator

let product = {
  id: 10,
  name: "Titan Watch",
  made: "India",
};

let product2 = { ...product };
product2.name = "Raymond Shirt";
console.log(product);
console.log(product2);

// =======================================================================================================================

// 👉 Deep Copy

// A deep copy can be achieved using JSON.parse() + JSON.stringify()

// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

let user1 = {
  name: "James Anderson",
  sizes: {
    height: 187,
    wight: 85,
  },
};

// Now it’s not enough to copy clone1.sizes = user1.sizes, because user1.sizes is an object, and will be copied by reference, so clone1 and user1 will share the same sizes:

let clone1 = Object.assign({}, user1);
console.log(clone1.sizes === user1.sizes); // true, share same reference

clone1.sizes.wight = 90;
console.log(user1.sizes.wight); // 90, change the property in orginal array, because of references.

// 👉 JSON.parse + JSON.stringify:

const deepCopy = JSON.parse(JSON.stringify(user1));
deepCopy.sizes.wight = 200;
console.log("Deepcopy:", deepCopy); // weight = 200
console.log("User 1:", user1); // weight = 85

// 👉 Deep clone using structuredClone

// The call structuredClone(object) clones the object with all nested properties.

let clone2 = structuredClone(user1);
console.log("Clone 2:", clone2);
console.log(clone2.sizes === user1.sizes); // false

clone2.sizes.height = 170;

console.log(user1); // still 187, changing in clone2 won't affect in user1.

// Limitations:-

// 1. Not universally supported: Available in most modern browsers and environments, but older environments might not support it.
// 2. No functions: structuredClone cannot clone functions, so any methods or function properties within the object will be lost.
