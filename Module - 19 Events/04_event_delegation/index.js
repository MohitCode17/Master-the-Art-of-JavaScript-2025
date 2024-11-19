// 👉 Event Delegation

// Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where the event actually happened and handle it.

// 👉 Let's see an example

// To handle the click event of each menu item, you may add the corresponding click event handlers:

/*
let home = document.querySelector("#home");
home.addEventListener("click", (event) => {
  alert("Home menu item was clicked");
});

let dashboard = document.querySelector("#dashboard");
dashboard.addEventListener("click", (event) => {
  alert("Dashboard menu item was clicked");
});

let report = document.querySelector("#report");
report.addEventListener("click", (event) => {
  alert("Report menu item was clicked");
});
*/

// In JavaScript, if you have a large number of event handlers on a page, these event handlers will directly impact the performance because of the following reasons:

// 1. First, each event handler is a function which is also an object that takes up memory. The more objects in the memory, the slower the performance.

// 2. Second, it takes time to assign all the event handlers, which causes a delay in the interactivity of the page.

// 👉 To solve the issue, we can use event delegation

let menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
  let target = event.target;
  console.log(target);

  switch (target.id) {
    case "home":
      alert("Home menu item was clicked");
      break;
    case "dashboard":
      alert("Dashboard menu item was clicked");
      break;
    case "report":
      alert("Report menu item was clicked");
      break;
  }
});
