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
