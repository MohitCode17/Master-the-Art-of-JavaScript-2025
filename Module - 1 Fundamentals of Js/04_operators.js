// 👉 What are operators in JavaScript ?

// JavaScript operators are used to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments.
// It plays a crucial role in controlling the flow and processing of data within the language.

// =======================================================================================================================

// 👉 Arithemetic Operators

/*
Operator	    Description
----------------------------------------
+	            Addition
-	            Subtraction
*	            Multiplication
**	            Exponentiation/Power (ES2016)
/	            Division
%	            Modulus(Remainder)
*/

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(13 % 3);

// 👉 Operator precedence in Arithemetic

/*
If an expression has more than one operator, the execution order is defined by their precedence.

The multiplication in the expression 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition.

Parentheses override any precedence, so if we’re not satisfied with the default order, we can use them to change it. For example, write (1 + 2) * 2.

1. Solve () Brackets
2. ** Power Operators
3. * / % (From Left to Right)
4. + - (From Left to Right)
*/

console.log(1 + 2 * 2);
console.log((1 + 2) * 2);

console.log(50 * 2 + 4 * 3 - ((8 / 2) % 4));

// =======================================================================================================================

// 👉 String concatenation with (+) operator

// Usually, the plus operator + sums numbers. But, with string type, it merges them.

const str1 = "Hello";
const str2 = "Mohit";
console.log(str1 + " " + str2);

// If any of the operands is a string, then the other one is converted to a string too.

console.log("2" + 1); // 21
console.log(1 + "2"); // 12

console.log(4 + 4 + "2");
// Here, operators work one after another. The first + sums two numbers, so it returns 8, then the next + adds the string 2 to it, so it’s like 8 + '2' = '82'.

console.log("2" + 4 + 4);
// Here, the first operand is a string, the compiler treats the other two operands as strings too.

// =======================================================================================================================

// 👉 Chaining assignments

let a, b, c;
a = b = c = 10 + 10;

console.log(a);
console.log(b);
console.log(c);

// =======================================================================================================================

// 👉 Increment and Decrement Operator

// Increment ++ increases a variable by 1:

let counter = 10;
counter++; // works the same as counter = counter + 1

// Decrement -- decrease a variable by 1:

let sum = 10;
sum--; // works the same as counter = counter - 1

/*
The operators ++ and -- can be placed either before or after a variable.

 - When the operator goes after the variable, it is in “postfix form”: counter++.

 - The “prefix form” is when the operator goes before the variable: ++counter.

Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
*/

let preCount = 20;
let newPreCount = ++preCount; // the prefix form ++counter increments counter and returns the new value, 21.
console.log(newPreCount); // 21
console.log(preCount); // 21

let postCount = 20;
let newPostCount = postCount++; // the postfix form counter++ also increments counter but returns the old value (prior to increment).
console.log(newPostCount); // 21
console.log(postCount); // 20

// =======================================================================================================================

// 👉 Comparison Operators

/*
Comparison operators are used for compare expressions, number value and statements, return value will be a boolean value.

Operator	Description
<	        Less than
>	        Greater than
==	        Loose equality
===	        Strict equality(Check type also)
!=          Loose not equality
!==         Strict not equality(Check type also)
*/

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("5" === 5);

console.log(true == 1); // true, `true` is 1 in JavaScript
console.log(false == 0); // true, `false` is 0 is JavaScript

console.log(true === 1); // false, type different
console.log(false === 0); // false, type different
