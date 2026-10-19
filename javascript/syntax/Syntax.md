# JavaScript Syntax Rules

[:arrow_left: Return to Hub](../README.md)

> This is a full rundown of the files:
>
> * [content.html](/javascript/syntax/content.html)
> * [exposed.html](/javascript/syntax/exposed.html)
> * [script.js](/javascript/syntax/script.js)
> <br>

## Sections:

> * [`Variables`](#variables)
> * [`Data Types`](#data-types)
> * [`Statements and Expressions`](#statements-and-expressions)
> * [`Operators`](#operators)
> * [`Case Sensitivity`](#case-sensitivity)
> * [`Comments`](#comments)
> * [`Strings and Template Literals`](#strings-and-template-literals)
> * [`Type Conversion`](#type-conversion)

---

### [Variables](#variables)

**_Syntax: JavaScript_**

```javascript
// let: can be reassigned.
let number = 64;
number = 128;

// const: cannot be reassigned.
const pi = 3.14159;

// Object properties can still be modified.
const settings = { volume: 50 };
settings.volume = 75;

// var: older declaration syntax.
var oldVariable = "Declared using var";
```

---

### [Data Types](#data-types)

**_Syntax: JavaScript_**

```javascript
let integer = 256;
let decimal = 3.14;
let string = "This is a string";
let boolean = true;
let unassigned;
let myNull = null;
let bigInt = 9007199254740993n;
let symbol = Symbol("uniqueKey");

let object = {
    storedString: "Stored String",
    storedBoolean: true,
    storedNumber: 128
};

let array = [10, 20, 30];
```

**_Inspecting Types: JavaScript_**

```javascript
console.log(typeof integer);       // "number"
console.log(typeof string);        // "string"
console.log(typeof boolean);       // "boolean"
console.log(typeof unassigned);    // "undefined"
console.log(typeof myNull);        // "object"
console.log(typeof bigInt);         // "bigint"
console.log(typeof symbol);        // "symbol"
console.log(typeof object);        // "object"
console.log(typeof array);         // "object"

console.log(Array.isArray(array)); // true
```

---

### [Statements and Expressions](#statements-and-expressions)

**_Syntax: JavaScript_**

```javascript
let firstNumber = 10;
let secondNumber = 20;

let sum = firstNumber + secondNumber;
```

---

### [Operators](#operators)

**_Syntax: JavaScript_**

```javascript
let a = 10;
let b = 3;

// Arithmetic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Comparison
console.log(5 === 5);
console.log(5 !== 3);
console.log(a > b);
console.log(a < b);

// Logical
console.log(true && false);
console.log(true || false);
console.log(!true);

// Loose and strict equality
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

### [Case Sensitivity](#case-sensitivity)

**_Syntax: JavaScript_**

```javascript
let myVariable = "Lowercase m";
let MyVariable = "Uppercase M";

console.log(myVariable);
console.log(MyVariable);
```

---

### [Comments](#comments)

**_Syntax: JavaScript_**

```javascript
// Single-line comment

/*
    Multiline comment
    spanning several lines
*/
```

---

### [Strings and Template Literals](#strings-and-template-literals)

**_Syntax: JavaScript_**

```javascript
let name = "JavaScript";
let version = 2026;

let message = `Learning ${name} in ${version}`;

console.log(message);
```

---

### [Type Conversion](#type-conversion)

**_Syntax: JavaScript_**

```javascript
let numericText = "123";
let convertedNumber = Number(numericText);

console.log(typeof numericText);     // "string"
console.log(typeof convertedNumber); // "number"

console.log(Number("hello")); // NaN
```

---

[:arrow_up: Return to Top](#output)