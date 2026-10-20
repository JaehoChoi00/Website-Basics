# Conditions

[:arrow_left: Return to Hub](../README.md)

> This is a full rundown of the files:
>
> * [content.html](/javascript/conditions/content.html)
> * [exposed.html](/javascript/conditions/exposed.html)
> * [script.js](/javascript/conditions/script.js)
> <br>

## Sections:

> * [`If Statements`](#if-statements)
> * [`Ternary Operator`](#ternary-operator)
> * [`Switch Cases`](#switch-cases)
> * [`Logical Operators`](#logical-operators)
> * [`Connecting JavaScript with HTML`](#connecting-javascript-with-html)

---

### [If Statements](#sections)

#### if -> else if -> else

**Syntax: JavaScript**

```javascript
if (condition) {
    // Executed when condition is true
}
else if (anotherCondition) {
    // Executed when the first condition is false
    // and anotherCondition is true
}
else {
    // Executed when all preceding conditions are false
}
```

**Initial Values**

```javascript
let currentNumber = 0;
let targetNumber = 1;
```

**Syntax: HTML**

```html
<p id = "currentNumber">[currentNumber] Initial number</p>
<p id = "targetNumber">[targetNumber] Target number</p>
```

**Output**

```text
Initial number: 0
Target number: 1
```

**Example 1: If / Else If / Else**

**Syntax: JavaScript**

```javascript
if (currentNumber === targetNumber)
    "Target achieved";
else if (currentNumber > targetNumber)
    "Current number overshot target.";
else {
    currentNumber += 1;
    "Target missed, adding 1.";
}
```

**Syntax: HTML**

```html
<p id = "element-id-1">[element-id-1] First conditional result</p>
```

**Output**

```text
[element-id-1] Target missed, adding 1. Current Number: 1
```

---

#### Conditional With Multiple Statements

**Syntax: JavaScript**

```javascript
if (currentNumber === targetNumber) {
    currentNumber += 1;
    "Target achieved. Stepping up once more.";
}
else if (currentNumber > targetNumber)
    "Current number overshot target.";
else
    "Under target number";
```

**Syntax: HTML**

```html
<p id = "element-id-2">[element-id-2] Second conditional result</p>
```

**Output**

```text
[element-id-2] Target achieved. Stepping up once more. Current Number: 2
```

---

#### Re-evaluating The Updated Value

**Syntax: JavaScript**

```javascript
if (currentNumber === targetNumber)
    "Target achieved";
else if (currentNumber > targetNumber)
    "Current number overshot target.";
else
    "Under target number";
```

**Syntax: HTML**

```html
<p id = "element-id-3">[element-id-3] Third conditional result</p>
```

**Output**

```text
[element-id-3] Current number overshot target.
```

**Console Results**

```text
Initial number:  0
Target number:  1
Target missed, added 1. Current Number: 1
Target achieved. Stepping up once more... 2
Current number overshot target.
```

> [!NOTE]
> These strings are evaluated as expressions but are not displayed in the HTML.

---

### [Ternary Operator](#sections)

**Syntax: JavaScript**

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Initial Values**

```javascript
let someNumber = 1;
let someString = "1";
```

**Syntax: HTML**

```html
<p id = "someNumber">[someNumber] Some number</p>
<p id = "someString">[someString] Some string</p>
```

**Output**

```text
[someNumber] Some number: 1
[someString] Some string: 1
```

**Strict Type Comparison**

```javascript
let typeComparisonResult = (someNumber === someString)
        ? "Types are perfectly identical!"
        : "Data types do not match.";
```

```html
<p id = "element-id-4">[element-id-4] Ternary result</p>
```

**Output**

```text
[element-id-4] Data types do not match.
```

---

### [Switch Cases](#sections)

**Syntax: JavaScript**

```javascript
switch (expression) {
    case value1:
        // Executed when expression matches value1
        break;

    case value2:
        // Executed when expression matches value2
        break;

    default:
        // Executed when no case matches
}
```

**Initial Values**

```javascript
let startingNumber = 0;
let endNumber = 5;
let addBuffer;
```

```html
<p id = "startNumber">[startNumber] Starting number</p>
<p id = "endNumber">[endNumber] End number</p>
```

**Output**

```text
[startNumber] Starting number: 0
[endNumber] End number: 5
```

**Example: Selecting A Value**

```javascript
switch (endNumber) {
    case 1:
        addBuffer = 1;
        break;
    case 2:
        addBuffer = 2;
        break;
    case 3:
        addBuffer = 3;
        break;
    case 4:
        addBuffer = 4;
        break;
    case 5:
        addBuffer = 5;
        break;
    case 6:
        addBuffer = 6;
        break;
    default:
        addBuffer = 0;
}
```

```html
<p id = "element-id-5">[element-id-5] Selected value</p>
```

**Output**

```text
[element-id-5] Selected value: 5
```

**Updating The Starting Number**

```javascript
startingNumber += addBuffer;
```

```html
<p id = "element-id-6">[element-id-6] Resulting number</p>
```

**Output**

```text
[element-id-6] Resulting number: 5
```

---

### [Logical Operators](#sections)

**Initial Values**

```javascript
let bitA = 0;
let bitB = null;
```

```html
<p id = "display-bitA">[display-bitA] Bit A initial state</p>
<p id = "display-bitB">[display-bitB] Bit B initial state</p>
```

**Output**

```text
[display-bitA] Bit A Current Line State: 0
[display-bitB] Bit B Current Line State: null
```

**Checking For Missing Values**

```javascript
if (bitA === null || bitB === null || bitA === undefined || bitB === undefined) {
    bitA = bitA ?? 0;
    bitB = bitB ?? 0;
}
```

```html
<p id = "bitNull">[bitNull] Missing-value check</p>
<p id = "reAssigned">[reAssigned] Reassignment status</p>
<p id = "display-bitA-2">[display-bitA-2] Bit A reassigned state</p>
<p id = "display-bitB-2">[display-bitB-2] Bit B reassigned state</p>
```

**Output**

```text
[bitNull] One or both bits are missing
[reAssigned] Reassigned:
[display-bitA-2] Bit A Current Line State: 0
[display-bitB-2] Bit B Current Line State: 0
```

**Logical Gate Expressions**

#### `NAND`

```javascript
let nandOutput = (bitA == 1 && bitB == 1) ? 0 : 1;
```

```html
<p id = "display-nand">[display-nand] NAND output</p>
```

**Output**

```text
[display-nand] Gate Execution [A NAND B] = 1
```

---

#### `NOT`

```javascript
let notOutput = (bitA == 1 && bitA == 1) ? 0 : 1;
```

```html
<p id = "display-not">[display-not] NOT output</p>
```

**Output**

```text
[display-not] Gate Execution [NOT A] = 1
```

---

#### `AND`

```javascript
let andOutput = (nandOutput == 1 && nandOutput == 1) ? 0 : 1;
```

```html
<p id = "display-and">[display-and] AND output</p>
```

**Output**

```text
[display-and] Gate Execution [A AND B] = 0
```

---

#### `OR`

```javascript
let orOutput =
    (
        ((bitA == 1 && bitA == 1) ? 0 : 1) == 1
        &&
        ((bitB == 1 && bitB == 1) ? 0 : 1) == 1
    )
    ? 0 : 1;
```

```html
<p id = "display-or">[display-or] OR output</p>
```

**Output**

```text
[display-or] Gate Execution [A OR B] = 0
```

---

#### `XOR`

```javascript
let xorOutput =
    (
        ((((bitA == 1 && bitA == 1) ? 0 : 1) == 1 && bitB == 1) ? 0 : 1) == 1
        &&
        ((bitA == 1 && ((bitB == 1 && bitB == 1) ? 0 : 1) == 1) ? 0 : 1) == 1
    )
    ? 0 : 1;
```

```html
<p id = "display-xor">[display-xor] XOR output</p>
```

**Output**

```text
[display-xor] Gate Execution [A XOR B] = 0
```

---

### [Connecting JavaScript with HTML](#sections)

#### Selecting An HTML Element

**Syntax: JavaScript**

```javascript
document.getElementById("element-id-1");
```

**Output**

```text
Returns the HTML element whose id is "element-id-1".
```

---

#### Changing An Element's Content

**Syntax: JavaScript**

```javascript
document.getElementById("element-id-1").innerHTML = "New content";
```

**Output**

```html
<p id = "element-id-1">New content</p>
```

---

#### Connecting An External JavaScript File

**Syntax: HTML**

```html
<script src = "./script.js" ></script>
```

**Output**

```text
The browser loads and executes the external script.js file.
```

---

[:arrow_up: Return to Top](#conditions)