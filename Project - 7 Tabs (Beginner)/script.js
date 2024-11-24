const tabsElement = document.querySelector(".tabs");
const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");

tabsElement.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    // Remove selected from other buttons
    buttons.forEach((button) => {
      button.classList.remove("live");
    });

    e.target.classList.add("live");

    // Hide other articles
    contents.forEach((content) => {
      content.classList.remove("live");
    });

    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
