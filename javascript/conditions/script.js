let checkDocument = typeof document !== "undefined";

console.log("___________________________________")

let currentNumber = 0;
let targetNumber = 1;
console.log("Initial number: ", currentNumber);
console.log("Target number: ", targetNumber);

// IF, ELSE IF, ELSE STATEMENTS
if (currentNumber === targetNumber) console.log("Target achieved");
else if (currentNumber > targetNumber) console.log("Current number overshot target.");
else {
    currentNumber += 1;
    console.log("Target missed, added 1. Current Number:", currentNumber);
}

if (currentNumber === targetNumber) {
    currentNumber += 1;
    console.log("Target achieved. Stepping up once more...", currentNumber);
} 
else if (currentNumber > targetNumber) console.log("Current number overshot target.");
else console.log("Under target number");

if (currentNumber === targetNumber) console.log("Target achieved");
else if (currentNumber > targetNumber) console.log("Current number overshot target.");
else console.log("Under target number");

console.log("___________________________________")

// CONNECTING WITH HTML
if (checkDocument) {

    currentNumber = 0;
    targetNumber = 1;
    document.getElementById("currentNumber").innerHTML = ("Initial number: " + currentNumber);
    document.getElementById("targetNumber").innerHTML = ("Target number: " + targetNumber);

    if (currentNumber === targetNumber) document.getElementById("element-id-1").innerHTML = "Target achieved";
    else if (currentNumber > targetNumber) document.getElementById("element-id-1").innerHTML = "Current number overshot target."
    else {
        currentNumber += 1;
        document.getElementById("element-id-1").innerHTML = ("Target missed, adding 1. Current Number: " + currentNumber);
    }

    if (currentNumber === targetNumber) {
        currentNumber += 1;
        document.getElementById("element-id-2").innerHTML = ("Target achieved. Stepping up once more. Current Number: " + currentNumber);
    } 
    else if (currentNumber > targetNumber) document.getElementById("element-id-2").innerHTML = ("Current number overshot target.");
    else document.getElementById("element-id-2").innerHTML = ("Under target number");

    if (currentNumber === targetNumber) document.getElementById("element-id-3").innerHTML = ("Target achieved");
    else if (currentNumber > targetNumber) document.getElementById("element-id-3").innerHTML = ("Current number overshot target.");
    else document.getElementById("element-id-3").innerHTML = ("Under target number");
}

// TERNARY OPERATOR

let someNumber = 1;
let someString = "1";
console.log("some number:", someNumber);
console.log("some string:", someString);

let typeComparisonResult = (someNumber === someString) ? "Types are perfectly identical!" : "Data types do not match.";
console.log(typeComparisonResult)

console.log("___________________________________")

// CONNECTING WITH HTML
if (checkDocument) {
    document.getElementById("someNumber").innerHTML = ("Some number: " + someNumber);
    document.getElementById("someString").innerHTML = ("Some string: " + someString);

    typeComparisonResult = (someNumber === someString) ? 
    document.getElementById("element-id-4").innerHTML = ("Types are perfectly identical!") : 
    document.getElementById("element-id-4").innerHTML = ("Data types do not match.");
}

// SWITCH CASES
let startingNumber = 0;
let endNumber = 5;
let addBuffer;

console.log("Starting Number:", startingNumber);
console.log("End Number:", endNumber);

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

console.log("Adding", addBuffer, "to starting Number", startingNumber);
startingNumber += addBuffer;

console.log("Resulting Number:", startingNumber);

console.log("___________________________________")

// CONNECTING WITH HTML

startingNumber = 0;
endNumber = 5;
addBuffer;

if (checkDocument) {
    document.getElementById("startNumber").innerHTML = ("Starting Number: " + startingNumber);
    document.getElementById("endNumber").innerHTML = ("End Number: " + endNumber);

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

    document.getElementById("element-id-5").innerHTML = ("Adding " + addBuffer + " to starting Number " + startingNumber);
    startingNumber += addBuffer;
    document.getElementById("element-id-6").innerHTML = ("Resulting Number: " + startingNumber);

}

// LOGICAL OPERATORS

let bitA = 0;
let bitB = null;
console.log("Bit A:", bitA);
console.log("Bit B:", bitB);

if (bitA === null || bitB === null || bitA === undefined || bitB === undefined) {
    console.error("One or both bits are missing");
    bitA = bitA ?? 0;
    bitB = bitB ?? 0;
    console.error("Reassigned:");
    console.log("Bit A:", bitA);
    console.log("Bit B:", bitB);
} 

let nandOutput = (bitA == 1 && bitB == 1) ? 0 : 1;
console.log("A NAND B =", nandOutput);

let notOutput = (bitA == 1 && bitA == 1) ? 0 : 1;
console.log("NOT A =", notOutput);

let andOutput = (nandOutput == 1 && nandOutput == 1) ? 0 : 1;
console.log("A AND B =", andOutput);

let orOutput = (((bitA == 1 && bitA == 1) ? 0 : 1) == 1 && ((bitB == 1 && bitB == 1) ? 0 : 1) == 1) ? 0 : 1;
console.log("A OR B =", orOutput);

let xorOutput = (((((bitA == 1 && bitA == 1) ? 0 : 1) == 1 && bitB == 1) ? 0 : 1) == 1 && ((bitA == 1 && ((bitB == 1 && bitB == 1) ? 0 : 1) == 1) ? 0 : 1) == 1) ? 0 : 1;
console.log("A XOR B =", xorOutput);

console.log("___________________________________")

// CONNECTING WITH HTML

if (checkDocument) {
    let bitA = 0;
    let bitB = null;
    document.getElementById("display-bitA").innerHTML = "Bit A Current Line State: " + bitA;
    document.getElementById("display-bitB").innerHTML = "Bit B Current Line State: " + bitB;

    if (bitA === null || bitB === null || bitA === undefined || bitB === undefined) {
        //The Nullish Coalescing Operator (??)
        document.getElementById("bitNull").innerHTML = ("One or both bits are missing");
        bitA = bitA ?? 0;
        bitB = bitB ?? 0;
        document.getElementById("reAssigned").innerHTML = ("Reassigned:");
        document.getElementById("display-bitA-2").innerHTML = "Bit A Current Line State: " + bitA;
        document.getElementById("display-bitB-2").innerHTML = "Bit B Current Line State: " + bitB;
    } 

    document.getElementById("display-nand").innerHTML = "Gate Execution [A NAND B] = " + nandOutput;
    document.getElementById("display-not").innerHTML = "Gate Execution [NOT A] = " + notOutput;
    document.getElementById("display-and").innerHTML = "Gate Execution [A AND B] = " + andOutput;
    document.getElementById("display-or").innerHTML = "Gate Execution [A OR B] = " + orOutput;
    document.getElementById("display-xor").innerHTML = "Gate Execution [A XOR B] = " + xorOutput;
}