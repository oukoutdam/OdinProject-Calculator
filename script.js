let var1, var2, operation;
const numberDisplay = document.querySelector("#display");



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
            break;
        case "-":
            return sub(var1, var2);
            break;
        case "*":
            return mul(var1, var2);
            break;
        case "/":
            return divide(var1, var2);
            break;
    }

    return null;
}

// number buttons
const numButtons = document.querySelectorAll(".btn-num");
for(let btn of numButtons){
    btn.addEventListener("click", () =>{
        numberDisplay.textContent = numberDisplay.textContent + btn.textContent;
    })
}

// clear button
const clearButton = document.querySelector("#btn-c");
clearButton.addEventListener("click", () => {
    numberDisplay.textContent = "";
})

