// 👉 Understand the Callback Queue and Event Loop

// The callback queue and event loop are two features in Javascript which allow asynchronous codes to be executed at a later time.

// 👉 A little about Javascript

// Javascript is a single-threaded language, which means that only one thing can happen at a time. This language can also be seen in two ways - synchronous and asynchronous.

// - In synchronous Javascript, codes are executed sequentially, i.e, line by line. If line 23 doesn't finish execution, line 24 will never be executed.
// - While in asychronous, it is not necessarily sequential. A line of code can be ignored (or postponed) to be executed later.

// In asynchronous Javascript, you must have come across the following features: promise, async/await and setTimeout.

// 👉 Example of Synchronous code:-
console.log(10);

function myFunc() {
  console.log("Hello world!");
}

console.log(20);

myFunc();

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Code ended here...");

// This code runs line by line in a synchronous manner. Since there are no asynchronous operations (like setTimeout, fetch, or event listeners), JavaScript will execute each line one after the other in the order they appear, directly in the call stack.

// 👉 Example of asynchronous code:-

let name = "John";

setTimeout(() => {
  console.log(name);
}, 1000);

console.log(33);

// If you look at this codes in the synchronous way, what we expect is: declare name variable, wait 1 seconds (1000ms) and log the name variable in the console, then log 33.

// But NO! That's not what happens.

// If you tried the above, you'd observe that 33 was logged first and after 1 second thereabout, the name variable was logged.

// Examine the following code:

let name1 = "John";

setTimeout(() => {
  console.log(name1);
}, 0);

console.log(33);

// The time has been shorten to 0 seconds. But if you tried it, you'd observe that 33 was logged again before name 😕.

// =======================================================================================================================

//👉 The truth in Javascript

// Javascript on the web isn't entirely Javascript. Javascript is greatly supported by the browser. Some features you see in Javascript isn't an actual Javascript feature. An example is setTimeout, promise and so on.

// setTimeout isn't a Javascript feature. It's a label for the timer feature in a browser. When Javascript comes accross this keyword, it hands over the codes to the browser.

// "Hey browser, you know this isn't my thing. So I'll need you to activate this timer, and when you're done, I'll execute the codes in it since that's what I'm good at."

// And the browser goes, "What are friends for? 😇"

// This is exactly what happened when setTimeout took a duration argument of 0 seconds. Although 0 seconds is not much, but JS couldn't handle it. So it gave the browser to handle the timer. Immediately after giving the browser, it continues to run the other codes.

// =======================================================================================================================

// 👉 The Callback Queue

// When the browser is done with the timer, it doesn't transfer the codes to be executed back to Javascript immediately. When the browser is done, it stores the codes in a callback queue. As the name implies, it is a queue containing some functions or codes which would be called back at a later time.

// The Callback queue waits until the call stack is empty. Afterwards, the codes in it are executed in First In, First Out (FIFO) order. As more functions or codes are added to the callback queue, they stay at the back and wait for the ones in the front to leave the queue first.

// How does the callback queue know when the stack is empty?

// =======================================================================================================================

// 👉 The Event Loop

// This is a feature in JS which continuously checks if the main stack is empty. And when it is empty, it checks the Callback Queue. If there are codes in the queue to be executed, they are transferred one by one to the call stack. After the code is executed, it leaves the stack and the next one in the queue comes up until the queue is empty.
