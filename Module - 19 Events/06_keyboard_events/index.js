const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(`Keyboard event is: ${e.type} & Pressed key is: ${e.key}`);
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e);
//   console.log(`Keyboard event is: ${e.type} & Pressed key is: ${e.key}`);
// });

let moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (e) => {
  if (e.key.startsWith("Arrow")) {
    e.preventDefault();

    switch (e.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
