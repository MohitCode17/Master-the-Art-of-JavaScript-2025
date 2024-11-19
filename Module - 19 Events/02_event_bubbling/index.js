// 👉 Event Bubbling

// Let's start with an example.

// This handler is assigned to <div>, but also runs if you click any nested tag like <h1> or <span>:

/*
```<div onclick="alert('The handler!')">
  ```<h1>If you click on <span>SPAN</span>, the handler on ```<code>DIV</code> runs.</h1>
```</div>

Isn’t it a bit strange? Why does the handler on <div> run if the actual click was on <span>?
*/

// =======================================================================================================================

// 👉 Bubbling

// The bubbling principle is simple.

// When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

// Let’s say we have 3 nested elements FORM > DIV > P with a handler on each of them:

/*
<form onclick="alert('Clicking to form')">Form
    <div onclick="alert('Clicking to div')">Div
        <p onclick="alert('Clicking to p')">Paragraph</p>
    </div>
</form>

A click on the inner <p> first runs onclick:

1. On that <p>.
2. Then on the outer <div>.
3. Then on the outer <form>.
4. And so on upwards till the document object.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
*/

// 👉 Stop Propagation

// A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

// But any handler may decide that the event has been fully processed and stop the bubbling.

/*
<form onclick="alert('Clicking to form')">Form
    <div onclick="alert('Clicking to div')">Div
        <p onclick="event.stopPropagation()">Paragraph</p>
    </div>
</form>
*/

// ⚠️ Don’t stop bubbling without a need!
