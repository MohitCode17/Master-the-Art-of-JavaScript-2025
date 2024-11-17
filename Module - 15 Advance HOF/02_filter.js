// 👉 The `filter` Method

// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// Example

// Filter student name whose score are more than or equal to 80 and store in new array.
const scores = [
  { name: "Mohit", score: 95 },
  { name: "Rohan", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Deeptika", score: 50 },
  { name: "Rhena", score: 85 },
  { name: "John", score: 100 },
];

// 1. Without Filter
let filterScore = [];

for (let score of scores) {
  if (score.score >= 80) {
    filterScore.push(score);
  }
}
console.log(filterScore);

// 2. With Filter
let filterScoreAbove80 = scores.filter((score) => score.score >= 80);

console.log(filterScoreAbove80);

// 3. Why not map
let filterScoreAbove80Map = scores.map((score) => score.score >= 80);
console.log(filterScoreAbove80Map); // [true, true, true, false, true, true]

// Map methods return an array with true & false value in it. Basically Map methods return `true` which matches the condition & `false` which not.

// Example

// filter books by `genre` should be `fiction` and `edition` should be after `2005`. And stored in new array.
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filterBooks = books.filter(
  (book) => book.genre === "Fiction" && book.edition > 2005
);

console.log(filterBooks); // [{ title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 }];
