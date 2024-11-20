// 👉 What is Objects in JavaScript ?

// An object is a collection of related data and functions, known as properties and methods, respectively. Properties are “key: value” pairs that store data, while methods are functions associated with the object that can manipulate its properties.

// =======================================================================================================================

// 👉 Creating an Object

const employeeInfo = {
  name: "Ritvik Pandey",
  age: 29,
  id: "EP014515",
  designation: "IT Manager",
  email: "r.pandey4515@gmail.com",
  address: "Ashok vihar, New Delhi",
  "joining year": 2021, // multiword property name must be quoted
};

// =======================================================================================================================

// 👉 Accessing value

console.log(employeeInfo.id);
console.log(employeeInfo["joining year"]);

// =======================================================================================================================

// 👉 Update Value
employeeInfo.address = "Dilshad Garder, Delhi";
console.log(employeeInfo);

// =======================================================================================================================

// 👉 Add Methods in Object

employeeInfo.getDetails = function () {
  console.log(
    `Employee Details:\nId: ${this.id}\nName: ${this.name}\nDesignation: ${this.designation}`
  );
};
console.log(employeeInfo);
employeeInfo.getDetails();

// `This` keyword referes to an object itselft, where it called. We'll learn more about `This` keyword as this is important topic.

// =======================================================================================================================

// 👉 Delete Value from Object

delete employeeInfo["joining year"];
console.log(employeeInfo);

// =======================================================================================================================

// 👉 Prevent to Modifing an Objects

Object.freeze(employeeInfo);
employeeInfo.age = 30; // Won't change the existing properties.

// =======================================================================================================================

// 👉 The "for...in" loop

// To walk over all keys of an object, there exists a special form of the loop: for..in.

const user = {
  id: 1,
  name: "John",
  age: 30,
  isAdmin: true,
};

for (keys in user) {
  console.log("Key in Object:", keys);
  console.log("Value of Key:", user[keys]);
}
