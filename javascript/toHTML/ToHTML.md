# To HTML

[:arrow_left: Return to ](/README.md)

> This is a full rundown of the files: 
> 
> * [index.html](/javascript/toHTML/index.html)
> * [script.js](/javascript/toHTML/script.js)
> <br>

## Sections:

> * [`HTML Document Structure`](#html-document-structure)
> * [`HTML Elements and IDs`](#html-elements-and-ids)
> * [`Inline JavaScript`](#inline-javascript)
> * [`Embedded JavaScript`](#embedded-javascript)
> * [`Accessing HTML Elements`](#accessing-html-elements)

---

### [HTML Document Structure](#sections)

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Enter your title here</title>
</head>
<body>
    <!-- HTML content and JavaScript -->
</body>
</html>
```

---

### [HTML Elements and IDs](#sections)

***Syntax: HTML***

```HTML
<p id = "element-id-1"> [element-id-1] First paragraph with id</p>
<p id = "element-id-2"> [element-id-2] Second paragraph with id</p>
<p id = "element-id-3"> [element-id-3] Third paragraph with id</p>
```

---

### [Inline JavaScript](#sections)

***Syntax: HTML***

```HTML
<body onload="document.getElementById('element-id-2').innerHTML = '[element-id-2] Paragraph text changed using inline method';">

```

---

### [Embedded JavaScript](#sections)

***Syntax: HTML***

```HTML
<script>
    document.getElementById("element-id-1").innerHTML = "[element-id-1] Hello World!";
</script>
```

---

### [Accessing HTML Elements](#sections)

***Syntax: Javascript***

```javascript
document.getElementById("element-id-3").innerHTML = "[element-id-3] Paragraph text changed from script.js file";

```

---

[:arrow_up: Return to Top](#to-html)