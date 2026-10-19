# Output

[:arrow_left: Return to Hub](../README.md)

> This is a full rundown of the files:
>
> * [content.html](/javascript/output/content.html)
> * [exposed.html](/javascript/output/exposed.html)
> * [script.js](/javascript/output/script.js)
> <br>

## Sections:

> * [`Console Output`](#console-output)
> * [`Text Output Using innerText`](#text-output-using-innertext)
> * [`HTML Output Using innerHTML`](#html-output-using-innerhtml)
> * [`Browser Dialog Output`](#browser-dialog-output)
> * [`External JavaScript File`](#external-javascript-file)
> * [`Document Output Using document.write()`](#document-output-using-documentwrite)

---

### [Console Output](#console-output)

**_Syntax: JavaScript_**

```javascript
console.log("Hello World!");
```

Output appears in the browser developer console rather than directly on the webpage.

---

### [Text Output Using innerText](#text-output-using-innertext)

**_Syntax: JavaScript_**

```javascript
document.getElementById("element-id-1").innerText =
    "Text changed using innerText";
```

`innerText` changes the visible text content of an existing HTML element.

---

### [HTML Output Using innerHTML](#html-output-using-innerhtml)

**_Syntax: JavaScript_**

```javascript
document.getElementById("element-id-2").innerHTML =
    "Text containing <strong>HTML markup</strong>";
```

`innerHTML` parses the supplied string as HTML, allowing markup such as `<strong>` to create formatted content. Avoid inserting untrusted input this way, as it can introduce cross-site scripting vulnerabilities.

---

### [Browser Dialog Output](#browser-dialog-output)

**_Syntax: JavaScript_**

```javascript
alert("Hello World!");
```

A browser dialog can display a message to the user. In your demonstration, the `alert()` function is triggered by clicking a button.

---

### [External JavaScript File](#external-javascript-file)

**_Syntax: HTML_**

```html
<script src="./script.js"></script>
```

An external JavaScript file allows the JavaScript implementation to be kept separate from the HTML document.

**_Syntax: JavaScript — Inside script.js_**

```javascript
console.log("[console.log] Output displayed in the browser console");

// HTML text output
document.getElementById("element-id-1").innerText =
    "[element-id-1] Text changed using innerText";

// HTML element output
document.getElementById("element-id-2").innerHTML =
    "[element-id-2] Text containing <strong>HTML markup</strong>";

// Browser dialog output
alert("[alert] Output displayed in a browser dialog");
```

---

### [Document Output Using document.write()](#document-output-using-documentwrite)

**_Syntax: JavaScript_**

```javascript
document.write("Hello World!");
```

`document.write()` can write directly into the document while it is being parsed. Calling it after the page has loaded may replace the entire document, so it is generally avoided in modern webpage development.

---

[:arrow_up: Return to Top](#output)