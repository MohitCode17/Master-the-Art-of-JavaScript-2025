const countElement = document.querySelector(".count");
const addBtnElement = document.querySelector(".add_btn");
const minusBtnElement = document.querySelector(".minus_btn");

let count = 0;
let limit = 20;

const updateCounter = () => {
  if (count > limit) {
    count = limit;
  }

  if (count < 0) {
    count = 0;
  }

  countElement.textContent = count;
  document.body.style.backgroundColor = `rgb(${(count / limit) * 255}, 0, 0)`;
};

addBtnElement.addEventListener("click", () => {
  count++;
  updateCounter();
});

minusBtnElement.addEventListener("click", () => {
  count--;
  updateCounter();
});
