// 👉 Event Capturing

// There’s another phase of event processing called “capturing”. It is rarely used in real code, but sometimes can be useful.

// The standard DOM Events describes 3 phases of event propagation:

// 1. Capturing phase – the event goes down to the element.
// 2. Target phase – the event reached the target element.
// 3. Bubbling phase – the event bubbles up from the element.

// There are two possible values of the capture option:

// 1. If it’s false (default), then the handler is set on the bubbling phase.
// 2. If it’s true, then the handler is set on the capturing phase.

// Let's start with an example.

for (let ele of document.querySelectorAll("*")) {
  ele.addEventListener(
    "click",
    function (event) {
      console.log(`Capturing: ${ele.tagName}`);
    },
    true
  );

  ele.addEventListener("click", function () {
    console.log(`Bubbling: ${ele.tagName}`);
  });
}
