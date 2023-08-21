// DAYS 1 & 2
// : Introduction to JavaScript
/*
JAVASCRIPT VARIBLES
In JavaScript, variables are like containers that hold
 different types of information. 
They allow us to store and manipulate data in our programs.
   they can be decleared using the `Let` and `const` variable

Variable Naming Rules:
Variable names can contain letters, digits, underscores, and dollar signs.
They must start with a letter, underscore, or dollar sign (not a digit).
Variable names are case-sensitive.
Avoid using reserved words like let, var, const, etc., as variable names.
   
let (Modern way):

Variables declared with let are block-scoped, meaning they are confined to the block they are declared in.
Example: let count = 3;
const (Constant):

Variables declared with const are also block-scoped, but their value cannot be changed after assignment.
Example: const pi = 3.14;
*/
let variable1 = "hello world";
const constant = 1;

/* 
JAVASCRIPT DATA TYPES
JavaScript supports various data types, which determine the 
kind of value a variable can hold. 
Here are some important data types:
'strings', 'numbers', booleans, 'arrays' 'object' 'undefined' 'null'
*/
/*
Strings:
Used to represent text or characters. 
They are enclosed in single or double quotes.
*/
let strings = "abcdefghi...";
const name = "john";

/*
Numbers:
Used to represent numeric values, 
like whole numbers or decimals.
*/
const numbers = 12345678;
let age = 10;

/*
Booleans:
Represent either true or false values, 
used in logical operations.
 */
let booleans = true; // or false
/*
Arrays:
Used to store a list of values (of any data type) 
in an ordered manner.
 */
let arrays = [
  "strings",
  1234,
  true,
  (objects = {
    name: "abdullahi",
    age: 20,
    isTrue: false,
    hobbies: ["coding", "reading"],
  }),
];

/*
Objects:
Used to group related data and their properties together.
*/
objects = {
  name: "abdullahi",
  age: 20,
  isTrue: false,
  hobbies: ["coding", "reading"],
};

/*
Null:
Represents the intentional absence of any value or object.
*/
let emptyValue = null;

/*
Undefined:
Represents a variable that has been declared but hasn't been assigned a value yet.
*/
let undefinedValue;

/* Javascript operators and Expressions
JavaScript, operators are symbols that perform operations on values.
Expressions are combinations of values, variables, and operators that produce a new value.
Arithmetic Operators:
*/
// Arithmetic operators are used to perform basic mathematical calculations

// Addition (+): Adds two values together.
let value1 = 3;
const value2 = 5;
let sumValue = value1 + value2;

// Subtraction (-): Subtracts the second value from the first.
let subtr = value2 - value1;

// Multiplication (*): Multiplies two values.

value1 * value2;
// Division (/): Divides the first value by the second.
let division = value2 / value1;

// Modulus (%): Returns the remainder of the division between two values.
let modules = value2 % value1;

// Assignment Operators:
// Assignment operators are used to assign values to variables.

// Assignment (=): Assigns the value on the right to the variable on the left.

// Add and Assign (+=): Adds the value on the right to the variable on the left and assigns the result.
value1 += 4;
// Subtract and Assign (-=): Subtracts the value on the right from the variable on the left and assigns the result.
value2 -= 2;
// Multiply and Assign (*=): Multiplies the variable on the left by the value on the right and assigns the result.
value2 *= 2;
// Divide and Assign (/=): Divides the variable on the left by the value on the right and assigns the result.
value2 /= 2;

// Comparison Operators:
// Comparison operators are used to compare values.

// Equal to (==): Checks if two values are equal.
let checkValue1 = value1 == value2; //returns true or false
// Not Equal to (!=): Checks if two values are not equal.
let checkValue2 = value2 !== 10; //returns true or false
// Strict Equal to (===): Checks if two values are equal and of the same data type.
let checkStrictness = value1 === value2; //returns true or false
// Strict Not Equal to (!==): Checks if two values are either not equal or not of the same data type.
let checkStrictness2 = value1 !== value2; //returns true or false
// Greater than (>): Checks if the left value is greater than the right value.
let compare = value1 > value2; //returns true or false
// Less than (<): Checks if the left value is less than the right value.
let compare2 = value1 < value2; //returns true or false
// Greater than or Equal to (>=): Checks if the left value is greater than or equal to the right value.
let compare3 = value1 >= value2; //returns true or false
// Less than or Equal to (<=): Checks if the left value is less than or equal to the right value.
let compare4 = value1 <= value2; //returns true or false

// Logical Operators:
// Logical operators are used to combine and manipulate boolean values.

// AND (&&): Returns true if both operands are true.
if (value1 === value2 && value2 == 3) {
  // return something
}

// OR (||): Returns true if at least one operand is true.
if (value2 === 3 || value2 < value1) {
  // return something
}
let isValid = (age >= 18 && hasID) || accompaniedByAdult;

// NOT (!): Returns the opposite boolean value of the operand.
if (value1 !== 3) {
  // return something
}

// Conditional (Ternary) Operator:
// The conditional operator is a concise way to write conditional statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse
value2 < 4 ? true : false;
// or

value1 === value2 ? "that true" : "that false";

// String Concatenation:
// it mean combining multiple string together using the plus (+) operator
// You can concatenate strings using the + operator.
let string1 = "Hello";
let string2 = "World";
const concatString = string1 + string2 + "!";
console.log(concatString);
/*
CONDITIONAL STATEMENTS
Conditional statements in JavaScript are used to make decisions in your code. 
They allow your program to execute different code blocks based on whether a specified 
condition is true or false. Conditional statements enable you to create interactive and responsive programs.
*/
/*
If Statement:
The if statement is the most basic type of conditional statement. 
It allows you to execute a code block only if a certain condition is met.
*/
let condition1, condition2;
if (condition1) {
  return "something"; //can be true or false.
}

/*
 If and Else Statement:
The if-else statement extends the if statement by providing an 
alternative code block to execute when the condition is false.
 */
if (condition1 === condition2) {
  return; //something
} else {
  return; //anotherThing
}

/*
Else-If Statement:
The else if statement allows you to check multiple conditions in sequence
 and execute the corresponding code block of the first true condition.
*/

if (condition1 <= condition2) {
  return; //something
} else if (!condition2 == 5) {
  return; //something
} else {
  return; //anotherTHing
}
/*
Ternary Operator:

The ternary operator is a concise way to write simple conditional statements. 
It returns one of two values based on a given condition.
*/
let condition = condition1 === 10 ? true : 0; //if condition1 is strictly equal-to 10 return 2 else return 0

/*
Switch Statement:

The switch statement allows you to execute different code blocks based on the value of an expression. 
It's often used when you have multiple cases to consider.
 */
let value3;
switch (expression) {
  case value1:
    return; //something
    break; // go to next line
  case value2:
    return; //something
    break; // go to next line
  case value3:
    return; //something
  default:
    return; //anotherThing
}

/*
Javascript Functions
JavaScript Functions: Reusable Code Blocks
Functions are a fundamental concept in JavaScript that allow you to 
encapsulate a block of code and reuse it whenever needed. 
They make your code modular, organized, and easier to maintain.
*/

/*

*/

/*
Function Declaration:
A function is declared using the function keyword, followed by a name, 
a list of parameters enclosed in parentheses, and a code block enclosed in curly braces.
*/
function declareFunc(parameter1, parameter2) {
  // note: we can have one or more parameters in a function
  // statements to run
  let sum = parameter1 + parameter2;
  return sum;
}

/*
Function Call
A function can be useful on when call on invoked
we call a function by using the function's name follow by it parameter in any.
A function can be call any many times as possible where necessary
*/
declareFunc(10, 20);
declareFunc("hello ", "World");

/*
Function Expression
Functions can also be assigned to variables, known as function expressions.
 */
const expressFunction = function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

/*
Return Statement:
Functions can return a value using the return statement. 
The returned value can be assigned to a variable or used directly.
*/

/*
Arrow Function
Arrow function is a short way of writing a function 
mostly when it is a short function or a line of code
*/
let arrowFunc = (parameter1, parameter2) => parameter1 / parameter2;
console.log(arrowFunc(10, 2));

/*
function parameters and argumenmt
Parameters: 
parameters are Variables defined in the function declaration to receive values.
Arguments: 
arguments are Values passed to the function when it's called in respect to parameters.
 */
function functionName(parameter1, parameter2) {
  return parameter1 + parameter2;
}
functionName("argument1", "argument2");
functionName(30, 10);

/*
default argument
default argument are value passed inside a function with a parameter 
which is used when no argument is used when calling a function
*/
function defaultParameter(name = "Guest") {
  return "Hello" + " " + name;
}
defaultParameter("John"); // calling function with argument
defaultParameter(); // calling a function without argument

/*
Anonymous Function
this are function with parameter and arguments
 */
function anonymousFunc() {
  return "i am anonymous";
}
anonymousFunc();

/*
FUNCTION SCOPES AND CLOSURES
JavaScript function scope and closures are essential concepts to understand when working with JavaScript. 
They are crucial for creating modular and maintainable code. Let's break down these concepts:
 */
/*
FUNCTION SCOPES
JavaScript has function-level scope, which means that variables declared 
inside a function are only accessible within that function. Here's an example:
*/
function myFunction() {
  var x = 10; // This variable x is only accessible inside myFunction.
  console.log(x);
}

myFunction(); // Outputs 10
console.log(x); // Error: x is not defined (outside of myFunction)

/*
FUNCTION CLOSURES
Closures are a powerful and somewhat advanced concept in JavaScript. 
They occur when a function "remembers" its lexical scope, even when 
it's executed outside of that scope.Closures are often used to create private variables and functions.
*/
function outer() {
  var x = 10;

  function inner() {
    console.log(x); // Inner function can still access the variable x from its outer function.
  }

  return inner;
}

var closureFn = outer();
closureFn(); // Outputs 10

function createCounter() {
  var count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

var counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Outputs 1
console.log(counter.count); // Undefined (count is private)

/*
JavaScript global scope and local scope
 */
/*
Global Scope:
Global scope refers to the outermost level of your JavaScript code. 
In the global scope, variables are declared outside of any function, 
making them accessible from anywhere in your code. Here's an example:
*/
var globalVar = 10; // This variable is in the global scope.

function myFunction() {
  console.log(globalVar); // You can access globalVar inside a function.
}

console.log(globalVar); // You can also access globalVar outside of any function.

/*
Local Scope:
Local scope, also known as function scope, refers to the innermost levels of your code, typically within functions. 
Variables declared inside a function are only accessible within that function; they do not exist outside of it. Here's an example:
*/
function myFunction() {
  var localVar = 5; // This variable is in the local scope of myFunction.
  console.log(localVar);
}

myFunction(); // Outputs 5
console.log(localVar); // Error: localVar is not defined (outside of myFunction)

/*
Block Scope
Block scope elements or variable are visible within the nearest curly brace
 */
function myFunction() {
  var localVar = 5; // This variable is in the local scope of myFunction.
  if (localVar) {
    let newVar = localVar;
    console.log(newVar);
  } else {
    console.log(newVar);
  }
  console.log(localVar); // Error: newVar is not defined (inside of block)
}
// in this case newVar will on be accessible inside the if block statement
