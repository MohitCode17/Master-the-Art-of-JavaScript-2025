const age = Number(prompt("Enter your age!"));
const isHoliday = true;

if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log("Offer Discount!");
} else {
  console.log("No Discount Offered!");
}
