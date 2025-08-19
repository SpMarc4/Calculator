function add(a,b) {
    return a + b
};

function subtract(a,b) {
    return a - b
};

function multiply(a,b) {
    return a * b
};

function divide(a,b) {
    return a / b
};

let firstNum = 0;
let secondNum = 0;
let operator = '+';

function operate (a,b, operator) {
    if (operator == '+') {
        add(a,b);
    }

    else if (operator == '-') {
        subtract(a,b);
    }

    else if (operator == '*') {
        multiply(a,b);
    }

    else if (operator == '/') {
        divide(a,b);
    }

    else {
        alert("Invalid Operator")
        return;
    }
};