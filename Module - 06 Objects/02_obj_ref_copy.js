// 👉 Object References and Copying

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

// =======================================================================================================================

// 👉 Let's start with primitive

let message = "Hello!";
let copyMessage = message;

console.log(message);
console.log(copyMessage);

/*
+------------+       +----------------+
|  message   |       |  copyMessage   |
+------------+       +----------------+
|   "Hello!" |       |    "Hello!"    |
+------------+       +----------------+

- message and copyMessage are separate boxes (or memory locations).
- Each box holds the value "Hello!" independently, as primitive values are copied by value, not by reference.

- when we assign one variable to another, we get a separate copy of the value, not a reference.
- Changes to message won’t affect copyMessage and vice versa.
*/

copyMessage = `${message} Mohit`;
console.log(copyMessage); // Hello! Mohit
console.log(message); // Hello

// =======================================================================================================================

// 👉 Let's start with Objects

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

let user = {
  name: "John Doe",
};

/*
Here’s how it’s actually stored in memory:

   +-------+               +-----------------+
   | user  |-------------> |   { name:       |
   +-------+               |     "John Doe"  |
                           +-----------------+
*/

// The object is stored somewhere in memory (at the right of the diagram), while the user variable (at the left) has a “reference” to it.

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let admin = user;

/*
   +-------+               +-----------------+
   | user  |-------------> |   { name:       |
   +-------+               |     "John Doe"  |
                           +-----------------+
                               ^
                               |
   +------------+              |
   |   admin    |--------------+
   +------------+
*/

admin.name = "James Anderson";
console.log(admin); // {name: "James Anderson"}
console.log(user); // {name: "James Anderson"}

// =======================================================================================================================

// 👉 Comparison by reference

// Two objects are equal only if they are the same object.

// For instance, here a and b reference the same object, thus they are equal:

const a = {};
const b = a;
console.log(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):

const c = {};
const d = {};
console.log(c === d); // false
