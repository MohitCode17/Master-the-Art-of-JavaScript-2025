// 👉 Browser environment, specs

// The JavaScript language was initially created for web browsers. Since then, it has evolved into a language with many uses and platforms.

// A platform may be a browser, or a web-server or another host, or even a “smart” coffee machine if it can run JavaScript. Each of these provides platform-specific functionality. The JavaScript specification calls that a host environment.

// A host environment provides its own objects and functions in addition to the language core.

// =======================================================================================================================

// 👉 There’s a “root” object called window. It has two roles:

// 1. First, it is a global object for JavaScript code.
// 2. Second, it represents the “browser window” and provides methods to control it.

/*
function sayHi() {
  alert("Hello");
}
// global functions are methods of the global object:
window.sayHi();
*/

// And we can use it as a browser window, to show the window height:

/*
alert(window.innerHeight); // inner window height
*/

// =======================================================================================================================

// 👉 DOM (Document Object Model)

// The Document Object Model, or DOM for short, represents all page content as objects that can be modified.

// The document object is the main “entry point” to the page. We can change or create anything on the page using it.

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => (document.body.style.background = ""), 1000);

// =======================================================================================================================

// 👉 BOM (Browser Object Model)

// The Browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

// Here’s how we can use the location object:

alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}

// The functions alert/confirm/prompt are also a part of the BOM: they are not directly related to the document, but represent pure browser methods for communicating with the user.