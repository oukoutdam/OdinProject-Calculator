let var1 = null, var2 = null, operation = null;
const numberDisplay = document.querySelector("#display");
let justCalculated = false;

// calculator operations
function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function mul(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

function operate(){
    if (operation === null){
        return null;
    }

    switch (operation){
        case "+":
            return add(var1, var2);
        case "-":
            return sub(var1, var2);
        case "*":
            return mul(var1, var2);
        case "/":
            return div(var1, var2);
    }

    return null;
}

// number buttons
const numButtons = document.querySelectorAll(".btn-num");
for(let btn of numButtons){
    btn.addEventListener("click", () =>{
        if ( justCalculated === false){
            numberDisplay.textContent = numberDisplay.textContent + btn.textContent;
        } else {
            numberDisplay.textContent = "";
            numberDisplay.textContent = numberDisplay.textContent + btn.textContent;
            justCalculated = false;
        }
    });
}

// clear button
const clearButton = document.querySelector("#btn-c");
clearButton.addEventListener("click", () => {
    // prevent deletion of result
    if (!justCalculated){ 
        numberDisplay.textContent = "";
    }
})

// backspace button
const bsButton = document.querySelector("#btn-bs");
bsButton.addEventListener("click", () => {
    if (!justCalculated){
        numberDisplay.textContent = numberDisplay.textContent.slice(0, -1);
    }
})

// operations buttons
/*
    flow of operations
    1. user enters numbers <- need to check whether numbers exist
    2. user presses an operation
    2.1 check whether var1 is null
    2.2a copy value into var1
    2.3a save current operation symbol
    2.4a clear display
    2.2b check whether var2 is null <- actually var2 is usually expected to be null, so not needed
    2.3b copy value into var2
    2.4b run operation and place into var1, set var2 to null
    set numberDisplay to var1
    2.5b save current operation symbol

    2nd iteration
    user presses button, result shows up, then they press a number, display resets and show newly number, they press button again, new result shows up, user presses number, display resets and show newly pressed number
*/
const opButtons = document.querySelectorAll(".btn-op");
for(let opbtn of opButtons){
    opbtn.addEventListener("click", () => {
        if (var1 === null && numberDisplay.textContent !== ""){
            var1 = parseFloat(numberDisplay.textContent);
            numberDisplay.textContent = "";

            operation = opbtn.textContent;
        } else {
            if (numberDisplay.textContent !== "" && justCalculated === false){
                grabAndExecute();
                operation = opbtn.textContent;
            } else {
                operation = opbtn.textContent;
            }

            justCalculated = true;
        }
    });
}

// equal button : operate()
const eqButton = document.querySelector("#btn-eq");
eqButton.addEventListener("click", () =>{
    if ( (var1 !== null) && (numberDisplay.textContent !== "")){
        grabAndExecute();
        justCalculated = true;
    }
});
function grabAndExecute(){
        var2 = parseFloat(numberDisplay.textContent);
        if ( var2 === 0 && operation === "/"){
            numberDisplay.textContent = "Nope, You Can't Do That.";
            for(let btn of document.querySelectorAll("button")){
                btn.disabled = true;
            }
            return;
        }
        var1 = operate(var1, var2);
        numberDisplay.textContent = Math.round(var1 * 1e12) / 1e12;

        var2 = null;
}

// All Clear Button
const acButton = document.querySelector("#btn-ac");
acButton.addEventListener("click", () =>{
    var1 = null;
    var2 = null;
    operation = null;
    justCalculated = false;
    numberDisplay.textContent = "";
});

// dot button
const dotButton = document.querySelector("#btn-dot");
dotButton.addEventListener("click", () =>{
    if (!numberDisplay.textContent.includes(".") && !justCalculated ){
        if (numberDisplay.textContent === ""){
            numberDisplay.textContent = "0.";
        } else {
            numberDisplay.textContent = numberDisplay.textContent + ".";
        }
    }
});
