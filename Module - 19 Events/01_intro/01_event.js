// 👉 Introduction to browser events

// An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

// =======================================================================================================================

// 👉 Here’s a list of the most useful DOM events, just to take a look at:

// 1. Mouse Events

// - click - When the mouse click on the element.
// - mouseover/mouseout - When mouse cursor comes over / leaves an element.
// - mousedown/mouseup - When mouse button is pressed / released over an element.
// - mousemove - When the mouse is moved.

// 2. Keyboard Events

// - Keydown / Keyup - When a keyboard key is pressed and released.

// 3. Form Events

// - submit - When submits a form.
// - focus - When focuses on an input element.

// There are many other events. We’ll get into more details.

// =======================================================================================================================

// 👉 Event Handlers

// To react on events we can assign a handler – a function that runs in case of an event.

// Handlers are a way to run JavaScript code in case of user actions.

// There are several ways to assign a handler. Let’s see them, starting from the simplest one.

// 1. HTML-attribute

/*
A handler can be set in HTML with an attribute named on<event>.

For instance, to assign a click handler for to a button, we can use onclick, like here:

```<button onclick="alert('You are nice human being.')" >Surprise Me</button>

An HTML-attribute is not a convenient place to write a lot of code, so we’d better create a JavaScript function and call it there.

```<button onclick="sayHello()">Greet</button>

```function sayHello() {
        alert("Hello Viewers! Have a nice day.")
```}
*/

// 2. DOM properly

// We can assign a handler using a DOM property on<event>.

// For instance, btn.onclick:

/*
```<button id="btn">Greet</button>

```btn.onclick = function() {
        alert("Hello Viewers! Have a nice day.")
```}
*/

// 3. addEventListner

// The fundamental problem of the aforementioned ways to assign handlers is that we can’t assign multiple handlers to one event.

// Let’s say, one part of our code wants to highlight a button on click, and another one wants to show a message on the same click.

// We’d like to assign two event handlers for that. But a new DOM property will overwrite the existing one:

/*
```input.onclick = function() { alert(1); }

```input.onclick = function() { alert(2); } // replaces the previous handler
*/

// An alternative way of managing handlers using the special methods addEventListener and removeEventListener which aren’t bound by such constraint.

let btnEle = document.querySelector("#btn");

// btnEle.addEventListener("click", () => {
//   alert("Click ok to login");
// });

// btnEle.addEventListener("click", () => {
//   alert("Welcome back");
// });

// =======================================================================================================================

// 👉 Event Object

// When an event hanppens, the browser creates an event object, puts details into it and passes it as an argument to the handler.

btn.addEventListener("click", function (event) {
  // Event Object
  console.log(event);
  console.log(`${event.type} at ${event.currentTarget}`);
  console.log(`Coordinates: ${event.clientX} : ${event.clientY}`);
});

// 1. event.type : Event type, here it’s "click".

// 2. event.currentTarget : The currentTarget property refers to the element whose event listener triggered the event.

// 3. event.clientX / event.clientY : Window-relative coordinates of the cursor, for pointer events.
