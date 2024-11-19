// 👉 Web Storage in JavaScript

// JavaScript provides two key storage mechanisms for web applications: Local Storage and Session Storage. Both are part of the Web Storage API and allow you to store key-value pairs in the user's browser.

// 👉 Local Storage

// What is Local Storage?

// 1. Data Persistence: Stores data with no expiration time.
// 2. Scope: Accessible across the entire origin (domain).
// 3. Use Case: Persist user preferences, theme settings, or data you want to retain even after the browser is closed.

// 👉 Session Storage

// What is Session Storage?

// 1. Data Persistence: Stores data for the duration of the page session. Once the tab or browser is closed, the data is cleared.
// 2. Scope: Only accessible within the tab or browser session.
// 3. Use Case: Temporary data, like user inputs or states that are relevant only while the page is open.

// 👉 Common Features

// 1. Size Limit: Approximately 5MB per origin (varies slightly by browser).
// 2. Data Format: Stores data as strings. You need to serialize/deserialize for non-string data (e.g., objects).

// =======================================================================================================================
// =======================================================================================================================
// 👉 Local Storage & Session Storage API Methods

// 1. setItem(key, value)
//  - Stores a key-value pair.
//  - Both key and value must be strings.

// Local Storage
localStorage.setItem("username", "JohnDoe");

// Session Storage
sessionStorage.setItem("sessionID", "12345");

// =======================================================================================================================

// 2. getItem(key)
//  - Retrieves the value associated with the key.
//  - Returns null if the key does not exist.

// Local Storage
const username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Session Storage
const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID); // Output: 12345

// =======================================================================================================================

// 3. removeItem(key)
//  - Removes a key-value pair by key.

// Local Storage
localStorage.removeItem("username");

// Session Storage
sessionStorage.removeItem("sessionID");

// =======================================================================================================================

// 4. clear()
//  - Clears all data from storage.

// Local Storage
localStorage.clear();

// Session Storage
sessionStorage.clear();

// =======================================================================================================================

// 5. length
//  - Returns the number of stored items.

// Local Storage
console.log(localStorage.length);

// Session Storage
console.log(sessionStorage.length);

// =======================================================================================================================

// 6. key(index)
//  - Returns the key at the specified index.

// Local Storage
const firstKey = localStorage.key(0);
console.log(firstKey);

// Session Storage
const firstSessionKey = sessionStorage.key(0);
console.log(firstSessionKey);

// =======================================================================================================================

// 👉 Storing Non-String Data

// Local and session storage only accept string values. Use JSON.stringify and JSON.parse to handle non-string data like arrays or objects.

// Storing an Object
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving an Object
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: John
