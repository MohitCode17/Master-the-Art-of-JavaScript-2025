// 👉 SetTimeOut and SetInterval

// Sometime we want to delay the execution of certain code, or to repeat code at a specific interval.

// There are two native functions in the JavaScript library used to accomplish these tasks: setTimeout() and setInterval().

// =======================================================================================================================

// 1. setTimeout

// setTimeout is a function in JavaScript that allows you to execute a specified piece of code or function after a specified period of time (in milliseconds). It runs once after the delay, not repeatedly.

setTimeout(function () {
  console.log(`This is a callback function executed after 5 seconds.`);
}, 1000);

// The setTimeout function returns a unique ID that you can use later to cancel the timeout if needed.

// =======================================================================================================================

// 2. clearTimeout

// clearTimeout is a function that cancels a previously set timeout before it has a chance to execute. You need the ID returned by setTimeout to cancel it.

const timeoutId = setTimeout(function () {
  console.log(`This message will not be displayed.`);
}, 3000);

clearTimeout(timeoutId); // Cancels the timeout, so the message will not appear

// =======================================================================================================================

// 3. setInterval

// setInterval is similar to setTimeout, but instead of executing the code once, it keeps executing the specified function at regular intervals (in milliseconds) until it is stopped.

function displayMessage(productName, discount) {
  let advertiseMessage = `Limited-Time Offer! Grab ${productName} at ${discount}% off! Only for Today. Hurry, stock is running low!`;

  console.log(advertiseMessage);
}

let intervalId = setInterval(function () {
  displayMessage();
}, 1000);

// setInterval returns an interval ID which can be used to stop the interval later.

// =======================================================================================================================

// 4. clearInterval

// clearInterval stops a previously set interval, preventing it from executing any further. Like clearTimeout, you need the ID returned by setInterval to clear it.

clearInterval(intervalId);

// Example:-

let counter = 0;
let intervalId1 = setInterval(() => {
  counter += 1;
  console.log("Counter: " + counter);

  if (counter === 5) {
    // Stop after 5 iterations
    clearInterval(intervalId1);
  }
}, 1000);
