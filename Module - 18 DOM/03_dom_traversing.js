// 👉 Traversing in DOM

// 1. Traverse from Parents to Child

const parentEle = document.querySelector(".parent");

// - Children: Return the collection of child elements in HTMLCollection object

const allChilds = parentEle.children;

for (let i = 0; i < allChilds.length; i++) {
  parentEle.children[i].style.background = "yellow";
  parentEle.children[i].style.margin = "10px";
  parentEle.children[i].style.padding = "10px";
}

// - FirstElementChild: Returns the first child that is an element, and null otherwise.

parentEle.firstElementChild.style.background = "blue";

// - LastElementChild: Returns the last child that is an element, and null otherwise.

parentEle.lastElementChild.style.background = "royalBlue";

// =======================================================================================================================

// 2. Traverse from Child to Parent

const childEle = document.querySelector(".day");

// - ParentElement: Returns the parent element.

childEle.parentElement.style.border = "5px solid red";
childEle.parentElement.style.margin = "10px";
childEle.parentElement.style.padding = "10px";

// =======================================================================================================================

// 3. Traverse to Siblings

// - NextElementSibling: Returns the first following sibling that is an element, and null otherwise.

childEle.nextElementSibling.innerHTML = "I am sibling element.";

// - PreviousElementSibling: Returns the first preceding sibling that is an element, and null otherwise.

console.log(childEle.previousElementSibling);

// =======================================================================================================================

// ChildNodes: childNodes returns nodes like Element nodes, text nodes, and comment nodes. Whitespace between elements are also text nodes.

console.log("NODES", parentEle.childNodes);
