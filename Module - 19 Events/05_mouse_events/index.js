const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (e) => {
  console.log(e.target); // <div id="myBox">Click Me 😃</div>

  e.target.style.background = "tomato";
  e.target.textContent = "OUCH! 🤕";
});

myBox.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "yellow";
  e.target.textContent = "Don't do it 😲";
});

myBox.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "lightgreen";
  e.target.textContent = "Click Me 😀";
});
