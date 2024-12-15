const changeColorBtn = document.querySelector(".change_color_btn");
const hexColorSpanElement = document.querySelector(".current_color");

// RANDOM HEX COLOR GENERATOR
const randomHexGenerator = () => {
  let hexColor = "";
  let colorCode = "0123456789abcdef";

  for (let i = 1; i <= 6; i++) {
    let randomCode = Math.floor(Math.random() * colorCode.length);
    hexColor += colorCode[randomCode];
  }

  return `#${hexColor}`;
};

changeColorBtn.addEventListener("click", () => {
  const newColor = randomHexGenerator();
  hexColorSpanElement.innerHTML = newColor;

  document.body.style.backgroundColor = newColor;
});
