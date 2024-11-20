// 👉 What is String in JavaScript ?

// A JavaScript string stores a series of characters like "John Doe". A string can be any text inside double or single quotes.

const carName = "Mahindra Thar Roxx";

// =======================================================================================================================

// 👉 String Indexes

// String indexes are zero-based. The first character is in position 0, the second in 1, and so on.

console.log(carName[0]); // M

// =======================================================================================================================

/*
👉 Escaping Sequence

In JavaScript and other programming languages "\" followed by some characters is an escape sequence.

\n: new line
\t: Tab, means spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

console.log("My favorite programming languare is JavaScript.\nWhat's your ?");

// =======================================================================================================================

// 👉 String Immutibility

// String is immutable, cannot mutate once created.

let country = "iNdia";
country[1] = "n";
console.log(country);
