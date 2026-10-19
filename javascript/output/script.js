// SECTION 1: CONSOLE OUTPUT
console.log("[console.log] Output displayed in the browser console");

// SECTION 2: HTML TEXT OUTPUT
document.getElementById("element-id-1").innerText = "[element-id-1] Text changed using innerText";

// SECTION 3: HTML ELEMENT OUTPUT
document.getElementById("element-id-2").innerHTML = "[element-id-2] Text containing <strong>HTML markup</strong>";

// SECTION 4: ALERT OUTPUT
alert("[alert] Output displayed in a browser dialog");

// SECTION 5: DOCUMENT OUTPUT
// Avoid calling document.write() after the page has loaded.
// It can replace the current document.