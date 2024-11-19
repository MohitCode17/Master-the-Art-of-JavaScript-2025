// 👉 Edit and Remove Elements

const addListItem = (item) => {
  const listEle = document.createElement("li");
  listEle.appendChild(document.createTextNode(item));

  document.querySelector(".language").appendChild(listEle);
};

addListItem("Nodejs");
addListItem("Python");

// 👉 Edit An Element

// 1. ReplaceWith: Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

const secondListItem = document.querySelector("li:nth-child(2)");
const editItem = document.createElement("li");
editItem.textContent = "Ruby";
secondListItem.replaceWith(editItem);

// 👉 Remove Element
 
const lastEle = document.querySelector("li:last-child");
lastEle.remove();
