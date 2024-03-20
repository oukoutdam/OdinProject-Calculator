let var1, var2, operation;

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