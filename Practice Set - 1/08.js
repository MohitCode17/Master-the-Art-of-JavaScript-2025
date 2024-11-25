const hours = new Date().getHours();

if (hours >= 6 && hours < 12) {
  console.log("Good Morning!");
} else if (hours >= 12 && hours < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good night!");
}
