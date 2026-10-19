// SECTION 1: VARIABLES

// let: declares a variable that can be reassigned.
let number = 64;
console.log("Initial value:", number);

number = 128;
console.log("After reassignment:", number);

// const: declares a variable that cannot be reassigned.
const pi = 3.14159;

const settings = { volume: 50 };

settings.volume = 75; // Allowed

// settings = {}; // TypeError: reassignment is not allowed

console.log("Object property after modification:", settings.volume);

document.getElementById("variables").innerText = `let number = ${number}; const pi = ${pi};`;

// var: older variable declaration syntax.
var oldVariable = "Declared using var";

console.log("let:", number);
console.log("const:", pi);
console.log("var:", oldVariable);

// SECTION 2: DATA TYPES

// 1. Number (integers and decimals)
let integer = 256;
let decimal = 3.14;

// 2. String (textual data)
let string = "This is a string";

// 3. Boolean (true or false)
let boolean = true;

// 4. Undefined (declared without an assigned value)
let unassigned;

// 5. Null (intentional absence of a value)
let myNull = null;

// 6. BigInt (large integers)
let bigInt = 9007199254740993n;

// 7. Symbol (unique primitive value)
let symbol = Symbol("uniqueKey");

// 8. Object (a collection of properties)
let object = {
    storedString: "Stored String",
    storedBoolean: true,
    storedNumber: 128
};

console.log("\n--- Data Types ---");
console.log("Value:", integer,    "| Type:", typeof integer);
console.log("Value:", decimal,    "| Type:", typeof decimal);
console.log("Value:", string,     "| Type:", typeof string);
console.log("Value:", boolean,    "| Type:", typeof boolean);
console.log("Value:", unassigned, "| Type:", typeof unassigned);
console.log("Value:", myNull,     "| Type:", typeof myNull);
console.log("Value:", bigInt,     "| Type:", typeof bigInt);
console.log("Value:", symbol,     "| Type:", typeof symbol);
console.log("Value:", object,     "| Type:", typeof object);

let array = [10, 20, 30];

console.log("Array:", array);
console.log("Type:", typeof array);       // "object"
console.log("Is array:", Array.isArray(array)); // true

document.getElementById("data-types").innerText =
`Number: ${integer}
String: ${string}
Boolean: ${boolean}
Undefined: ${unassigned}
Null: ${myNull}
BigInt: ${bigInt}
Symbol: ${symbol.description}
Object: ${JSON.stringify(object)}
Array: ${array}
Is array: ${Array.isArray(array)}`;

console.log("typeof null returns:", typeof myNull);

// Note: typeof null returns "object" due to a historical quirk.

// SECTION 3: STATEMENTS

// A statement is an instruction executed by JavaScript.
let firstNumber = 10;
let secondNumber = 20;

console.log("\n--- Statements ---");
console.log(firstNumber);
console.log(secondNumber);

// Multiple statements can form a sequence of instructions.
let sum = firstNumber + secondNumber;
console.log(`${firstNumber} + ${secondNumber} =`, sum);

document.getElementById("expressions").innerText =`The expression ${firstNumber} + ${secondNumber} evaluates to ${sum}.`;

// SECTION 4: OPERATORS

let a = 10;
let b = 3;

console.log("\n--- Arithmetic Operators ---");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);

console.log("\n--- Comparison Operators ---");
console.log("Equal value and type:", 5 === 5);
console.log("Different values:", 5 !== 3);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);

console.log("\n--- Logical Operators ---");
console.log("AND:", true && false);
console.log("OR:", true || false);
console.log("NOT:", !true);

console.log("Loose equality:", 5 == "5");   // true
console.log("Strict equality:", 5 === "5"); // false

// SECTION 5: EXPRESSIONS

// An expression produces a value.
let expression1 = 42 + 8;
let expression2 = a > b;
let expression3 = "Hello" + " " + "World";

console.log("\n--- Expressions ---");
console.log("Arithmetic expression:", expression1);
console.log("Comparison expression:", expression2);
console.log("String expression:", expression3);

// SECTION 6: CASE SENSITIVITY

// JavaScript treats differently capitalized names as distinct.
let myVariable = "Lowercase m";
let MyVariable = "Uppercase M";

console.log("\n--- Case Sensitivity ---");
console.log("myVariable:", myVariable);
console.log("MyVariable:", MyVariable);

document.getElementById("case-sensitivity").innerText = `myVariable: ${myVariable}\nMyVariable: ${MyVariable}`;

// SECTION 7: COMMENTS

// This is a single-line comment.

/*
    This is a multiline comment.
    JavaScript ignores both types of comments
    when executing the program.
*/

console.log("\nComments are not executed as JavaScript instructions.");

// SECTION 8: STRINGS AND TEMPLATE LITERALS

let name = "JavaScript";
let version = 2026;

// Template literals use backticks and ${} to insert expressions.
let message = `Learning ${name} in ${version}`;

console.log("\n--- Template Literals ---");
console.log(message);

// SECTION 9: BASIC TYPE CONVERSION

let numericText = "123";

console.log("\n--- Type Conversion ---");
console.log("Original:", numericText, "| Type:", typeof numericText);

let convertedNumber = Number(numericText);

console.log("Converted:", convertedNumber, "| Type:", typeof convertedNumber);
console.log("Invalid conversion:", Number("hello")); // NaN

document.getElementById("type-conversion").innerText = `Original: ${numericText} (${typeof numericText})\nConverted: ${convertedNumber} (${typeof convertedNumber})`;
