// 👉 Introduction to alert, prompt, confirm

// 1. alert: It shows a message and waits for the user to press “OK”.

alert("Hello");

// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

// =======================================================================================================================

// 2. prompt: It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

let result = prompt("Your age", 18);
console.log(result);

// =======================================================================================================================

// 3. confirm: The function confirm shows a modal window with a question and two buttons: OK and Cancel. The result is true if OK is pressed and false otherwise.

let isAbove18 = confirm("Are you above 18");
console.log(isAbove18);
