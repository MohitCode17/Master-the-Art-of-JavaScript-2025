// 👉 The DOM Tree

// The backbone of an HTML document is tags.

// According to the Document Object Model (DOM), every HTML tag is an object. Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

// All these objects are accessible using JavaScript, and we can use them to modify the page.

// For example, document.body is the object representing the <body> tag.

document.body.style.background = "green";

// =======================================================================================================================

// 👉 DOM Manipulation - Accessing Elements

// Element selector are used to access HTML elements inside JavaScript file.

// 1. getElementById(): Target a single element using id.

const title = document.getElementById("title");
console.log(title);

// 2. getElementByClassName(): Target a class name to access elements and returns an HTMLCollection object.

let paragraph = document.getElementsByClassName("paragraph");

console.log(paragraph);

// 3. getElementsByTagName(): Target a tag name as a string parameter and returns an HTMLCollection object.

const h1 = document.getElementsByTagName("h1");
console.log(h1);

// 4. querySelector(): Can be used to select HTML element by its tag name, id or class. If there're more than elements with same "class" querySelector selects only the first element.

paragraph = document.querySelector(".paragraph");
console.log(paragraph);

// 5. querySelectorAll(): Can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods.

paragraph = document.querySelectorAll(".paragraph");
console.log(paragraph);

// =======================================================================================================================

// 👉 DOM Manipulation - Text Manipulation

// 1. textContent: Used to add text to and HTML elements.

title.textContent = "Title changed using JavaScript";

// cannot add HTML element directly using textContent like below:-

// title.textContent = "<h1>Change Title Using JavaScript</h1>";

// 2. innerHTML: Used to add a text or HTML elements or elements as a child.

title.innerHTML = "<h1>Example of InnerHTML</h1>";

// 3. innerText: Used to add text content to HTML elements and cannot add element directly using innerText.

// title.innerText = "Change Title Using JavaScript";

// 🚀 Note: textContent gives you the element even if it's hidden using style but innerText will give you the only content which is display on document browser.

// =======================================================================================================================

// 👉 DOM Manipulation - Style Manipulation

title.style.background = "yellow";
title.style.padding = "10px";

// =======================================================================================================================

// 👉 DOM Manipulation - Add and Remove classes

title.classList.add("title_new");
title.classList.remove("title_new");

// =======================================================================================================================

// 👉 HTMLCollection vs NodeList

/*
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.
*/
