const spanElement = document.querySelector("span");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
  let username = prompt("Enter your name.");
  spanElement.innerText = username;
});
