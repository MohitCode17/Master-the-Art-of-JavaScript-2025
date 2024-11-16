// 👉 Logical Operators

// Logical operator is mostly used to make decisions based on conditions specified for the statements.

// =======================================================================================================================

// 👉 Logical AND Operator (&&)

// The logical AND (&&) operator for a set of boolean operands will be true if and only if all the operands are true.

const isUserLoggedIn = false;
const isUserHaveCreditCard = true;

if (isUserLoggedIn && isUserHaveCreditCard) {
  console.log("Allow to buy new course.");
} else if (!isUserLoggedIn) {
  console.log("You need to login to access courses.");
} else if (!isUserHaveCreditCard) {
  console.log("You need a credit card to purchase courses.");
}

// =======================================================================================================================

// 👉 Logical OR Operator (||)

// The logical OR (||) operator for a set of operands is true if and only if one or more of its operands is true.

const isLoggedInFromGoogle = false;
const isLoggedInFromGithub = false;

if (isLoggedInFromGoogle || isLoggedInFromGithub) {
  console.log("User logged is successfully.");
} else {
  console.log("You need to logged in from google or github.");
}

// =======================================================================================================================

// 👉 Ternary Operator

// The ternary operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

let isOver18 = true;

isOver18
  ? console.log("You allowed to drive a 🚗.")
  : console.log("Stay home and wait to over 18 😁.");

// =======================================================================================================================

// 👉 Nullish Coalescing Operator

// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, We can say that a value is “defined” when it’s neither null nor undefined.

// 👉 The result of a ?? b is:

// 1. If `a` is defined, then excute `a`.
// 2. If not then excute `b`.

// let userName;
let userName = "Mohit";

let result = `Logged in as: ${userName ?? "Anonymous user"}`;
console.log(result);
