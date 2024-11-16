// 👉 What is Switch Case Statement ?

// The switch statement is used to perform different actions based on different conditions.

/*
👉 This is how it works:

1. The switch expression is evaluated once.
2. The value of the expression is compared with the values of each case.
3. If there is a match, the associated block of code is executed.
4. If there is no match, the default code block is executed.
*/

// =======================================================================================================================

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Today is Sunday.";
    break;
  case 1:
    day = "Today is Monday.";
    break;
  case 2:
    day = "Today is Tuesday.";
    break;
  case 3:
    day = "Today is Wednesday.";
    break;
  case 4:
    day = "Today is Thrusday.";
    break;
  case 5:
    day = "Today is Friday.";
    break;
  case 6:
    day = "Today is Saturday.";
    break;
  default:
    day = "Wrong input day.";
}

console.log(day);
