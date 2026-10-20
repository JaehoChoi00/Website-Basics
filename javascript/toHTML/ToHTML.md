# Conditions

[:arrow_left: Return to Hub](../README.md)

> This is a full rundown of the files:
>
> * [content.html](/javascript/if/content.html)
> * [exposed.html](/javascript/if/exposed.html)
> * [script.js](/javascript/if/script.js)
> <br>

## Sections:

> * [`If Statements`](#if-statements)
> * [`Ternary Operator`](#ternary-operator)
> * [`Switch Statements`](#switch-statements)
> * [`Logical Operators`](#logical-operators)
> * [`Connecting JavaScript with HTML`](#connecting-javascript-with-html)
> * [`End of Exposed Syntax`](#end-of-exposed-syntax)

---

### [If Statements](#if-statements)

> * [`if`](#if)
> * [`if -> else`](#ifelse)
> * [`if -> else if -> else`](#if---else-if---else)

#### [`if`](#if-statements)

**Syntax: JavaScript**

```javascript
if (condition) {
    // Code executes when condition is true
}
```

---

#### [`if else`](#if-statements)

**Syntax: JavaScript**

```javascript
if (condition) {
    // Code executes when condition is true
} else {
    // Code executes when condition is false
}
```

---

#### [`if -> else if -> else`](#if-statements)

**Syntax: JavaScript**

```javascript
if (condition1) {
    // Code executes when condition1 is true
} else if (condition2) {
    // Code executes when condition1 is false and condition2 is true
} else {
    // Code executes when all preceding conditions are false
}
```

---

#### [`Nested If Statements`](#if-statements)

**Syntax: JavaScript**

```javascript
if (condition1) {
    if (condition2) {
        // Code executes when both conditions are true
    }
}
```

---

### [Ternary Operator](#ternary-operator)

**Syntax: JavaScript**

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

---

### [Switch Statements](#switch-statements)

**Syntax: JavaScript**

```javascript
switch (expression) {
    case value1:
        // Code executes when expression matches value1
        break;

    case value2:
        // Code executes when expression matches value2
        break;

    default:
        // Code executes when no case matches
}
```

---

### [Logical Operators](#logical-operators)

#### [`AND (&&)`](#and)

**Syntax: JavaScript**

```javascript
condition1 && condition2;
```

---

#### [`OR (||)`](#or)

**Syntax: JavaScript**

```javascript
condition1 || condition2;
```

---

#### [`NOT (!)`](#not)

**Syntax: JavaScript**

```javascript
!condition;
```

---

### [Connecting JavaScript with HTML](#connecting-javascript-with-html)

#### [`Accessing HTML Elements`](#accessing-html-elements)

**Syntax: JavaScript**

```javascript
document.getElementById("element-id").innerHTML = "Updated text";
```

---

#### [`Changing HTML Based on a Condition`](#changing-html-based-on-a-condition)

**Syntax: HTML**

```html
<p id="condition-output">Initial paragraph text</p>
```

**Syntax: JavaScript**

```javascript
const output = document.getElementById("condition-output");

if (condition) {
    output.innerHTML = "Condition is true";
} else {
    output.innerHTML = "Condition is false";
}
```

---

### [End of Exposed Syntax](#end-of-exposed-syntax)

This concludes the exposed syntax for JavaScript conditions. The examples above cover the core ways to control program flow using conditions, select between alternatives, combine logical expressions, and update HTML elements based on a result.

---

[:arrow_up: Return to Top](#conditions)