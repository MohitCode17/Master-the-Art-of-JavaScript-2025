# JavaScript Questions Set - 1

---

## Q.1 Calculate the Number of Trips

Write a function to calculate the number of trips a driver has to make to transport 12 passengers.

**Instructions:**

1. The driver can only take a specified number of passengers at a time.
2. Suppose the driver can take only `3` passengers at a time. To transport `12` passengers in total, the driver would need to make `4` trips.
3. Return the number of trips required to transport all the passengers.

```javascript
function numberOfTrips(passenger) {}

passenger(1);
passenger(2);
passenger(4);
passenger(3);
```

---

## Q.2 Check if a Number is Odd or Even

Write a function to check if a number is odd or even.

**Instructions:**

1. If the number is even, return `Even`, if the number is odd, return `Odd`.

```javascript
function checkOddOrEven(num) {}

checkOddOrEven(13);
checkOddOrEven(22);
checkOddOrEven(31);
checkOddOrEven(4);
```

---

## Q.3 Count Number of Parameters Passed

Write a function to count the number of parameters passed to it.

**Instructions:**

1. Return the number of parameters passed.

**Example:**

- **Input:** 6, 23, 10, 0, 8
- **Result:** 5

```javascript
function countParameters(...args) {}

countParameters("a", "b", "c", "d");
countParameters(1, 5, 7, 2, 10, 21);
```

---

## Q.4 Reverse a String

Write a function that takes a string as a parameter and returns it in reverse order.

**Example:**

- **Input:** Hello world
- **Result:** dlrow olleh

```javascript
function reverse(str) {}

reverse("I love javascript");
reverse("Welcome to India");
reverse("12345");
```

---

## Q.5 Calculate Factorial of a Number

Write a function that calculates the factorial of a given number.

**Example:**

- **Input:** 5!
- **Result:** 120

```javascript
function factorial(num) {}

factorial(4);
factorial(5);
```

---

## Q.6 Determine Amusement Park Discount Eligibility

Imagine an amusement park that has a discount for children (6 years and younger) or seniors (65 years and older).

**Instructions:**

1. Create a variable `age` and save a person's age in it.
2. Create an `if` statement to check if the person qualifies for a discount. If they do, display `Offer Discount` in the console. Otherwise, display `No Discount Offered`.
3. Assume the discount is only available if it is not a holiday. Create a variable `const isHoliday = true`.
4. Update the code so that to receive a discount, people must meet the age requirement and it must not be a holiday.

---

## Q.7 Generate and Guess Random Number (Heads or Tails)

Generate a random number and save it in a variable.

**Instructions:**

1. Create an `if` statement to check:
   - If the number is less than 0.5, display `heads` in the console.
   - Otherwise, display `tails` in the console.
2. Save the result (`heads` or `tails`) in a `result` variable.
3. Assume you're trying to guess the result. Create a variable `guess` and save your guess (`heads` or `tails`).
4. If your guess matches the result, display `You win!`; otherwise, display `You lose!`.

---

## Q.8 Display Greeting Based on Time of Day

Create a variable `hour` and save the current hour of the day (in 24-hour format) as a number between 0 and 23.

**Instructions:**

1. If the hour is between 6 and 12, display `Good morning!`
2. If the hour is between 12 and 18, display `Good afternoon!`
3. If the hour is greater than 18, display `Good night!`

---

## Q.9 Create a Falsy Calculator

Create a falsy calculator using JavaScript.

**Instructions:**

1. It takes two numbers as input from the user.
2. It performs incorrect operations as follows:
   - If `add`, it performs `subtract`.
   - If `multiply`, it performs `add`.
   - If `subtract`, it performs `divide`.
   - If `divide`, it performs `exponential`.
3. It performs the incorrect operation 10% of the time. _(Hint: Use a random number to determine this)_

---
